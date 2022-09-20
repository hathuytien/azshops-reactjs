import axios from "axios";
import { messageBox, TYPE } from "./message-box";

export const httpService = {
  get,
  post

};

const api = axios.create();
api.defaults.baseURL = "https://azshops.herokuapp.com";
//api.defaults.baseURL = "http://localhost:8080";

async function get(path, params, cacheConfig = false) {

  let opts = {
    method: "GET",
    params,
    headers: {
      //   ...axios.defaults.headers.common,
      //   ...axios.defaults.headers[method],
      //   ...headers
      'LogHeaderToken': 'REACT_WEB'
    }
  };

  return handleResponse(api.request(path, opts));
}

async function post(path, params) {
  let opts = {
    method: "POST",
    data: params,
    headers: {
      'Content-Type': 'application/json',
      'LogHeaderToken': 'REACT_WEB'
    }
  };
  return handleResponse(api.request(path, opts));
}

async function handleResponse(resolve) {
  try {
    const { data } = await Promise.resolve(resolve);
    if (data.errorCd === 'ERR_SYS_000') {
      messageBox.show('ERR_SYS_000', 'API server: lỗi xử lý!', TYPE.ALERT);
      return {}
    }

    let rs = {
      success: true
    }

    Object.assign(rs, data);
    return rs;
  } catch (error) {
    if ((error)) {
      const { status = 500, data } = error.response || {};
      switch (status) {
        case 400:
          messageBox.show('ERR_SYS_100', 'System: lỗi trong quá trình gọi API!', TYPE.ALERT);
          console.log("Error: ", data);
          break;
        case 401:
          window.location.reload();
          break;
        default:
          messageBox.show('ERR_SYS_100', 'System: lỗi trong quá trình gọi API!', TYPE.ALERT);
          console.log("Error: ", data);
      }
      return { status, success: false, message: 'APP.SERVER_ERROR' };
    }
  }
  return { success: false, message: 'APP.SERVER_ERROR' };
}
