export const initializeAutodeskForgeViewer = async (autodeskForgeToken, urn) => {
  console.log(`initializeAutodeskForgeViewer: ${JSON.stringify(autodeskForgeToken)}`)

  const viewerOptions = {
      env: 'AutodeskProduction',
      accessToken: autodeskForgeToken.access_token,
      api: 'derivativeV2'
  };

  var viewerContainer = document.getElementById('viewerContainer')
  var viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerContainer, {})

  Autodesk.Viewing.Initializer(viewerOptions, () => {
      viewer.start();
      Autodesk.Viewing.Document.load(`urn:${urn}`, (doc) =>{
          var defaultModel = doc.getRoot().getDefaultGeometry();
          viewer.loadDocumentNode(doc, defaultModel);
      })
    })
}