import axios from 'axios';


export const getEpisodes = async () => {

  const { data } = await axios.request({
    url: 'episodes',
    method: 'get', // default
    baseURL: 'http://localhost:3334/',
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })
    
  return data;
}