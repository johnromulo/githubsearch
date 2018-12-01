import Axios from 'axios';
import env from '../config';


export class BaseService {

  static axeioConfig() {
    return Axios.create({
      baseURL: env.base_url,
      crossDomain: true,
    });
  }

  static post() {

  }

  static get(endpoint, params) {
    return new Promise((resolve, reject) => {
      const axios = this.axeioConfig();
      axios.get(endpoint, {
        params: params
      })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static put() {

  }

  static delete() {

  }
}
