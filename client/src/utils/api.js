// import axios from "axios";
import store from "../store";
import { LOGOUT } from "../actions/types";

// const api = axios.create({
//   baseURL: "/api",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + localStorage.getItem("token"),
//   },
// });
// /**
//  intercept any error responses from the api
//  and check if the token is no longer valid.
//  ie. Token has expired or user is no longer
//  authenticated.
//  logout the user if the token has expired
// **/

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response.status === 401) {
//       store.dispatch({ type: LOGOUT });
//     }
//     return Promise.reject(err);
//   }
// );

// export default api;

import axios from "axios";
class Storage {
  static getItem(key) {
    return localStorage.getItem(key);
  }
  static setItem(key, value) {
    return localStorage.setItem(key, value);
  }
  static removeItem(key) {
    return localStorage.removeItem(key);
  }
}
class Request {
  constructor(config = {}) {
    this.prefix = config.prefix || "/api";
    this.req = axios.create({});
  }
  request = (url, method, data) => {
    const urlPath = this.prefix + url;
    const token = Storage.getItem("token");
    // TODO: check expiry
    if (token) {
      this.req.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    let prom;
    if (data) {
      prom = this.req[method](urlPath, data);
    } else {
      prom = this.req[method](urlPath);
    }
    return new Promise((res, rej) => {
      prom
        .then((resp) => {
          res(resp);
        })
        .catch((err) => {
          rej(err.response);
        });
    });
  };
  get = (url) => {
    return this.request(url, "get");
  };
  put = (url, data) => {
    return this.request(url, "put", data);
  };
  patch = (url, data) => {
    return this.request(url, "patch", data);
  };
  post = (url, data) => {
    return this.request(url, "post", data);
  };
  delete = (url) => {
    return this.request(url, "delete");
  };
}
export class AuthService {
  static login = (email, password) => {
    const userToLogin = {
      email: email,
      password: password,
    };
    return api.post("/auth", userToLogin).then((resp) => {
      Storage.setItem("token", resp.data.token);
      return resp;
    });
  };
  static signup = (user) => {
    return api.post("/users", user).then((resp) => {
      Storage.setItem("token", resp.data.token);
      return resp;
    });
  };
  static logout = () => {
    return new Promise((res, rej) => {
      Storage.removeItem("token");
      res(true);
    });
  };
  static checkToken(token) {}
  static isAuthenticated = () => !!Storage.getItem("token");
}
const api = new Request();
api.login = AuthService.login;
api.signup = AuthService.signup;
api.logout = AuthService.logout;

api.req.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
