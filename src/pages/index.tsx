
// import Head from 'next/head';
// import { GetStaticProps } from 'next';

// import AutodeskForgeApp from '../components/autodesk-forge-react/AutodeskForgeApp'

// import {
//     getAutodeskForgeToken 
// } from '../services/autodesk-forge-services/autodesk-forge-tokens/getAutodeskForgeToken';

// import config from '../../config';
// import styles from './home.modules.scss';


// type Token = {
//   access_token: string;
//   token_type: string;
//   expires_in: string;
// }

// type HomeProps = { 
//   // episodes: Array<Token> // sama as bellow
//   token: Token[];
// }


// const Home = ({ token }: HomeProps) => {
const Home = () => {

  return (
    <div>Home</div>

    // <div>
    //   <Head>
    //     <link 
    //       rel="stylesheet" 
    //       href="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.min.css" 
    //       type="text/css" 
    //     />
    //     <script 
    //       type="text/javascript" 
    //       src="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.min.js" 
    //     />
    //   </Head>

    //   <AutodeskForgeApp />


    //   {/* <Viewer 
    //         // getToken={() => getAutodeskForgeToken(body)}
    //         getToken={token}
    //         docUrn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXZmcXBhemxrdDFtMTBwYnFkY2h0cGt6cGVpcXRrd3ctaW10L2ltdF8wMF8wMS5ydnQ"
    //   /> */}
    // </div>
  );
}

export default Home;


 