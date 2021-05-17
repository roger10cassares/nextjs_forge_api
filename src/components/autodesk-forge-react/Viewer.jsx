
import React, { useEffect, useRef } from "react";

export default function Viewer(props)  {

  const viewerRef = useRef(null);
  const viewerDomRef = useRef(null);

  function onModelLoaded(event) {
    const viewer = viewerRef.current;

    const av = Autodesk.Viewing;
    viewer.removeEventListener(av.GEOMETRY_LOADED_EVENT, onModelLoaded);

    if (props.onModelLoaded) {
      props.onModelLoaded(viewer, event);
    }
  }

  function initializeViewer() {

    let viewerOptions = props.viewerOptions;

    var options = Object.assign({}, viewerOptions, {
      env: props.env,
      api: props.api || "derivativeV2", // for models uploaded to EMEA change this option to 'derivativeV2_EU'
      getAccessToken: async function (onTokenReady) {
      // RC-EDIT 
      // Change props.getToken from {Function} to {Object}
      let token = await props.getToken
      // var timeInSeconds = 3600; // Use value provided by Forge Authentication (OAuth) API
      onTokenReady(token.access_token, token.expires_in);
      console.log(`token.access_token: ${JSON.stringify(token.access_token)}`)
      console.log(`token.expires_in: ${JSON.stringify(token.expires_in)}`)
      },

    });

          console.log(`options: ${JSON.stringify(options)}`)

    Autodesk.Viewing.Initializer(options, async function () {

      const extensionsToLoad = props.extensions;

      const extensionsWithConfig = [];
      const extensionsWithoutConfig = [];
      
      for (let key in extensionsToLoad) {
        const config = extensionsToLoad[key];
        if (Object.keys(config).length === 0) {
            extensionsWithoutConfig.push(key);
        } else {
            extensionsWithConfig.push(key);
        }
      }

      const viewer = new Autodesk.Viewing.GuiViewer3D(viewerDomRef.current, {
        extensions: extensionsWithoutConfig,
        disabledExtensions: props.disabledExtensions || {},
      });

      extensionsWithConfig.forEach((ext) => {
        viewer.loadExtension(ext, extensionsToLoad[ext])
      })

      viewerRef.current = viewer;

      // const startedCode = viewer.start(undefined, undefined, undefined, undefined, options);
      const startedCode = viewer.start();
      if (startedCode > 0) {
        console.error("Failed to create a Viewer: WebGL not supported.");
        return;
      }

      const av = Autodesk.Viewing;
      viewer.addEventListener(av.GEOMETRY_LOADED_EVENT, onModelLoaded, { once: true });
      loadModel(viewer, props.docUrn);

      if (props.onViewerInitialized) {
        props.onViewerInitialized(viewer);
      }
    });
  }


  function loadModel(viewer, documentId) {
    function onDocumentLoadSuccess(viewerDocument) {
      // viewerDocument is an instance of Autodesk.Viewing.Document
      const bubbleNode = viewerDocument.getRoot();
      let defaultModel;

      if (props.phaseName) {
        defaultModel = bubbleNode.getMasterView(props.phaseName);
      } else if (props.guid) {
        defaultModel = bubbleNode.findByGuid(props.guid);
      } else if (props.viewableID) {
        const results = bubbleNode.search({ viewableID: props.viewableID });
        if (results && results.length) {
          defaultModel = results[0];
        }
    }
      else if (props.geomIndex) {
        const geoms = bubbleNode.search({ 'type': 'geometry' })
        if (geoms.length) {
          if (props.geomIndex < 0 || props.geomIndex >= geoms.length) {
            console.warn("GeometryIndex Error: Invalid geometry index.")
          }
          const index = Math.min(Math.max(props.geomIndex, 0), geoms.length - 1) // Ensure index is valid.
          defaultModel = geoms[index];
        }
      }

      if (!defaultModel) defaultModel = bubbleNode.getDefaultGeometry(true);

      const skipHiddenFragments = props.skipHiddenFragments || false;
      viewer.loadDocumentNode(viewerDocument, defaultModel, {
        keepCurrentModels: true,
        skipHiddenFragments: skipHiddenFragments,
      });

      // modify the preference settings, since ghosting is causing heavy z-fighting with the room geometry
      // it would be good we turn it off
      viewer.prefs.set("ghosting", false);
    }

    function onDocumentLoadFailure() {
      console.error("Failed fetching Forge manifest");
    }

    if (documentId) {
      Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
    } else {
      props.eventBus.dispatchEvent({ type: "VIEWER_READY", data: { viewer } });
    }
  }

  useEffect(() => {
    initializeViewer();

    return function cleanUp() {
      if (viewerRef.current) {
          viewerRef.current.finish();
      }
    };
  }, []);

  return (
    <>
      <div id="forgeViewer" ref={viewerDomRef}></div>
    </>
  );
}

Viewer.displayName = "Viewer";
