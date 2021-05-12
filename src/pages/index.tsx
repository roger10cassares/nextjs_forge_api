
import Head from 'next/head';
import { AutodeskForgeViewer } from "../components/AutodeskForgeViewer";

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

      <AutodeskForgeViewer />
    </div>
  );
}

export default Home;