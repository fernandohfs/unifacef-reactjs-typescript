import axios from 'axios';

import { loadingOn, loadingOff } from '../components/loading';

axios.interceptors.request.use(async (config) => {
  loadingOn();
  return config;
}, (error) => {
  return Promise.reject(error);
});


axios.interceptors.response.use(async (config) => {
  loadingOff();
  return config;
}, (error) => {
  return Promise.reject(error);
});