import axios from 'axios';


export const getAutodeskForgeToken = async (client_id, client_secret, grant_type, scope) => {

  const body = `client_id=${client_id}&client_secret=${client_secret}&grant_type=${grant_type}&scope=${scope}`;

  const { data } = await axios.request({
    url: '/authentication/v1/authenticate',
    method: 'post', // default
    baseURL: 'https://developer.api.autodesk.com/',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data: body    
  })
    
  return data;
}