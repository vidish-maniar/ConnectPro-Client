import api from './api';

// store our JWT in LS and set axios headers if we do have a token

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['x-auth-token'] = token;
  } else {
     api.defaults.headers.common['x-auth-token'] = "";
  }
};

export default setAuthToken;
