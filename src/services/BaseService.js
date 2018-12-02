import Axios from 'axios';
import env from '../config';


export class BaseService {

  static axeioConfig() {
    return Axios.create({
      baseURL: env.BASE_URL,
      crossDomain: true,
    });
  }

  static post() {

  }

  static get(endpoint, params) {
    return new Promise((resolve, reject) => {
      //   const axios = this.axeioConfig();
      Axios.get(`${env.BASE_URL}${endpoint}`, {
        crossDomain: true,
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
