

import { GetStaticProps } from 'next';
import { getForgeTokenApi } from '../services/api';


import ForgeSDK from 'forge-apis';

import styles from './home.modules.scss';


var FORGE_CLIENT_ID = 'AVFqPAZlkt1M10pbqDcHtpKzpEiQtKww' , FORGE_CLIENT_SECRET = 'GnbbM1RU0pOG2kqc';

// Initialize the 2-legged OAuth2 client, set specific scopes and optionally set the `autoRefresh` parameter to true
// if you want the token to auto refresh
var autoRefresh = true; // or false

var oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, [
    'data:read',
    'data:write'
], autoRefresh);

oAuth2TwoLegged.authenticate().then(function(credentials){
    // The `credentials` object contains an access_token that is being used to call the endpoints.
    // In addition, this object is applied globally on the oAuth2TwoLegged client that you should use when calling secure endpoints.
console.log("A U T H E N T I C A T E D !")

}, function(err){
    console.error(err);
});


let cache = new Map();
async function getToken(scopes) {
    const key = scopes.join('+');
    if (cache.has(key) && cache.get(key).expires_at > Date.now()) {
        return cache.get(key);
    }
    const client = getClient(scopes);
    let credentials = await client.authenticate();
    credentials.expires_at = Date.now() + credentials.expires_in * 1000;
    cache.set(key, credentials);

    console.log(`C R E D E N T I A L S : ${credentials}`)
    return credentials;
}


const Home: React.FC = ({cache}) => {
  return (
    <div>
        <h1>Home{cache}</h1>
    </div>
  );
}

export default Home;



