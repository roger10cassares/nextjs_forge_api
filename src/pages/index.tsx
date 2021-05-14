
import { useState, useEffect } from 'react';
import Head from 'next/head';

import Viewer from '../components/autodesk-forge-react/components/Viewer.jsx'

import { 
    getAutodeskForgeToken 
} from '../services/autodesk-forge-services/autodesk-forge-tokens/getAutodeskForgeToken';

import config from '../../config';
import styles from './home.modules.scss';


const Home: React.FC = () => {
  const [autodeskForgeToken, setAutodeskForgeToken] = useState('')

  const clientId="AVFqPAZlkt1M10pbqDcHtpKzpEiQtKww"
  const clientSecret="GnbbM1RU0pOG2kqc"
  const grantType="client_credentials"
  const scope="data:read"      
  const body = `client_id=${clientId}&client_secret=${clientSecret}&grant_type=${grantType}&scope=${scope}`;

  const handleAutodeskForgeToken = async (body) => {
    const token = await getAutodeskForgeToken(body);
    setAutodeskForgeToken(token);
    return autodeskForgeToken;
  }
 
  useEffect(() => {
    // const autodeskForgeToken = handleAutodeskForgeToken(clientId, clientSecret, grantType, scope);
    const autodeskForgeToken = handleAutodeskForgeToken(body);
  }, [])


  return (
    <div>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.min.css" 
          type="text/css" 
        />
        <script 
          type="text/javascript" 
          src="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.min.js" 
        />
      </Head>

      <Viewer 
            getToken={() => getAutodeskForgeToken(body)}
            docUrn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXZmcXBhemxrdDFtMTBwYnFkY2h0cGt6cGVpcXRrd3ctaW10L2ltdF8wMF8wMS5ydnQ"
      />
    </div>
  );
}

export default Home;