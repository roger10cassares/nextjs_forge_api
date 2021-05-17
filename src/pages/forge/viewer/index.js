// Firstly, here shall only accept a Forge Viewer.tsx App
// After, this page can receive every type of Forge App

import { GetStaticProps } from 'next';
import Viewer from "../../../components/autodesk-forge-react/Viewer"

 import {
    getAutodeskForgeToken 
} from '../../../services/autodesk-forge-services/autodesk-forge-tokens/getAutodeskForgeToken';

import styles from "./viewer.module.scss";


const AutodeskForgeViewer = (props) => {
  return (
  <div>
    <Viewer 
      getToken={props.token}
      docUrn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXZmcXBhemxrdDFtMTBwYnFkY2h0cGt6cGVpcXRrd3ctaW10L2ltdF8wMF8wMS5ydnQ"
    />
  </div>
  );
}

export default AutodeskForgeViewer



export const getStaticProps = async () => { //ctx -> context

  const clientId="AVFqPAZlkt1M10pbqDcHtpKzpEiQtKww"
  const clientSecret="GnbbM1RU0pOG2kqc"
  const grantType="client_credentials"
  const scope="data:read"      
  const body = `client_id=${clientId}&client_secret=${clientSecret}&grant_type=${grantType}&scope=${scope}`;

  const token = await getAutodeskForgeToken(body);


  console.log(` STATIC TOKEN PROPS: : ${JSON.stringify(token)}`)


  return {
    props: {
      token
    },
    revalidate: 30 , //each 60 minutes, a new api call will be fetchedwhen a new person access the page! 3 times a day.
  }
}