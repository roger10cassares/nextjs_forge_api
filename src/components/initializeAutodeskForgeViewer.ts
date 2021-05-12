import { getAutodeskForgeToken } from './getAutodeskForgeToken';
import config from '../../config';


export const initializeAutodeskForgeViewer = async (urn) => {

const autodeskForgeToken  = await getAutodeskForgeToken(
                                      config.credentials.client_id, 
                                      config.credentials.client_secret,
                                      'client_credentials',
                                      'data:read'
                                  );  

  // console.log(`D A T A  : ${JSON.stringify(autodeskForgeToken)}`)


// const token = data.access_token;

// const viewerOptions = {
//     env: 'AutodeskProduction',
//     accessToken: token,
//     api: 'derivativeV2',
// };
// var viewerContainer = document.getElementById('viewerContainer')
// var viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerContainer, {})

// Autodesk.Viewing.Initializer(viewerOptions, () => {
//     viewer.start();
//     Autodesk.Viewing.Document.load(`urn:${urn}`, (doc) =>{
//         var defaultModel = doc.getRoot().getDefaultGeometry();
//         viewer.loadDocumentNode(doc, defaultModel);
//     })
//   })
}