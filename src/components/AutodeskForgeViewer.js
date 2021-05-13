import { useEffect, useState } from 'react';

import { getAutodeskForgeToken } from './getAutodeskForgeToken';
import { initializeAutodeskForgeViewer } from './initializeAutodeskForgeViewer';

//Functional COmponent Cannot be ASYNC! oTHERWISE, MAKE THE ASYNC AT THE GETsTAICpROPS
export const AutodeskForgeViewer = (props) => {
  const [autodeskForgeToken, setAutodeskForgeToken] = useState({})

  const clientId=props.clientId
  const clientSecret=props.clientSecret
  const grantType=props.grantType
  const scope=props.scope
  const urn=props.urn

  console.log(`AutodeskForgeViewerProps: ${props}`)

  const handleAutodeskForgeToken = async (clientId, clientSecret, grantType, scope) => {
    const token = await getAutodeskForgeToken(clientId, clientSecret, grantType, scope);
    setAutodeskForgeToken(token);
    return autodeskForgeToken;
  }
 
  useEffect(() => {
    const autodeskForgeToken = handleAutodeskForgeToken(clientId, clientSecret, grantType, scope);
  }, [])


  useEffect(() => {
    initializeAutodeskForgeViewer(autodeskForgeToken, urn);
  }, [autodeskForgeToken])


  return (
      <div>
          <div id='viewerContainer'></div>
      </div>
  )
}