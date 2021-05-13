
import Head from 'next/head';
import { AutodeskForgeViewer } from "../components/AutodeskForgeViewer";

import { initializeAutodeskForgeViewer } from '../components/initializeAutodeskForgeViewer';

import config from '../../config';
import styles from './home.modules.scss';


const Home: React.FC = () => {
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

      <AutodeskForgeViewer
        // clientId={config.credentials.client_id}
        // clientSecret={config.credentials.client_secret}
        clientId="AVFqPAZlkt1M10pbqDcHtpKzpEiQtKww"
        clientSecret="GnbbM1RU0pOG2kqc"
        grantType="client_credentials"
        scope="data:read"
        urn="YWRzay5vYmplY3RzOm9zLm9iamVjdDphdmZxcGF6bGt0MW0xMHBicWRjaHRwa3pwZWlxdGt3dy1pbXQvaW10XzAwXzAxLnJ2dA"
      />
    </div>
  );
}

export default Home;