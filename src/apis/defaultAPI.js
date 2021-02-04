import axios from "axios";
import * as https from "https";
import { merge } from 'lodash';

const instance = axios.create({
  baseURL: process.env.API_ENTRYPOINT_TYPOAI || '/api',
  httpsAgent: new https.Agent({
    rejectUnauthorized: process.env.NODE_ENV !== 'development'
  }),
  headers: {
    common: {
      Accept: 'application/ld+json'
    },
    put: {
      Accept: 'application/ld+json',
      'Content-Type': 'application/ld+json'
    },
    post: {
      Accept: 'application/ld+json',
      'Content-Type': 'application/ld+json'
    },
    patch: {
      Accept: 'application/ld+json',
      'Content-Type': 'application/merge-patch+json'
    }
  }
});

instance.interceptors.request.use((config) => {
    /* Check for JWT */
    const token = localStorage.getItem('token');
    if(token){
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    /* Merge config values. Issue in axios create [METHOD][HEADERS]. */
    if(config.method){
      const headers = merge({}, config.headers.common, config.headers[ config.method ]);
      return merge({}, config, { headers });
    }
    return config;
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // You can handle error here and trigger warning message without get in the code inside
    return Promise.resolve({
      data: error,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
      isMock: true
    });
  }
);

export default instance;
