import axios from 'axios';

export const forgeApi = axios.create({
    baseURL: 'https://developer.api.autodesk.com/modelderivative/v2/designdata/',
});