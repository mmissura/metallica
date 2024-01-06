import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rioplastic-es-api-production.up.railway.app',
});
