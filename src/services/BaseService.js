import Axios from 'axios';
//import { env } from '../config';


export class BaseService {

  static post() {

  }

  static get(endpoint, params) {
    return new Promise((resolve, reject) => {
      Axios.get(`https://api.github.com/${endpoint}`, {
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
