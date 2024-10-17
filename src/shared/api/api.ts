import axios from 'axios';
import { LOCAL_STORAGE_USER_KEY } from '../const/localstorage';

export const api = axios.create({
  baseURL: 'http://localhost:8000/',
});

api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization =
      localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '';
  }

  return config;
});
