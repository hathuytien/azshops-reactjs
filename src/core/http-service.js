import axios from "axios";

export const httpService = {
  get,
  post

};

const api = axios.create();
api.defaults.baseURL = "https://azshops.herokuapp.com";

async function get(path, params, cacheConfig = false) {
  
  let opts = {
    method: "GET",
    params,
    // headers: {
    //   ...axios.defaults.headers.common,
    //   ...axios.defaults.headers[method],
    //   ...headers
    // }
  };

  return handleResponse(api.request(path, opts));
}

async function post(path, params) {
  let opts = {
    method: "POST",
    params,
    // headers: {
    //   ...axios.defaults.headers.common,
    //   ...axios.defaults.headers[method],
    //   ...headers
    // }
  };
  return handleResponse(api.request(path, opts));
}

async function handleResponse (resolve) {
  try {
    const { data } = await Promise.resolve(resolve);
    return {
      success: true,
      data:    data.data
    };
  } catch (error) {
    if ((error)) {
      const { status = 500 } = error.response || {};
      if (status === 401) {
        window.location.reload();
      }
      return { status, success: false, message: 'APP.SERVER_ERROR' };
    }
  }
  return { success: false, message: 'APP.SERVER_ERROR' };
}
