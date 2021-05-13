import axios from 'axios';

// export const getAutodeskForgeToken = async (clientId, clientSecret, grantType, scope) => {
export const getAutodeskForgeToken = async (clientId, clientSecret, grantType, scope) => {

  const body = `client_id=${clientId}&client_secret=${clientSecret}&grant_type=${grantType}&scope=${scope}`;

  const { data } = await axios.request({
    url: '/authentication/v1/authenticate',
    method: 'post',
    baseURL: 'https://developer.api.autodesk.com/',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data: body
  })
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
    
  return data;
}