import axios from 'axios';
import { ENV } from './STORAGE_KEY';

const API_URL = ENV.API_REACT_APP;

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (res) => res,
  async (error) => {
    // response error handle
    if (error.response) {
      console.error('error.response', error.response.data);
      return Promise.reject({
        message: error.response?.data.message,
        status: error.response?.status,
        code: error.response?.data.code,
      });
    }

    //request error handle
    if (error.request) {
      console.error('error.request', error.request);
      return Promise.reject({ message: error.request?.responseText });
    }

    console.error('error', error.message);

    return Promise.reject(error);
  },
);

export default instance;

