import axios from 'axios';

export const getForgeTokenApi = axios.create({
    baseURL: 'https://developer.api.autodesk.com/modelderivative/v2/designdata/',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data: {
      client_id: 'AVFqPAZlkt1M10pbqDcHtpKzpEiQtKww',
      client_secret: 'GnbbM1RU0pOG2kqc',
      grant_type: 'client_credentials',
      scope: 'code:all data:write data:read bucket:create bucket:delete bucket:read'
    }
})