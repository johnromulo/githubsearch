import Axios from 'axios';
import env from '../config';

export class BaseService {

  static get(endpoint, params) {
    return new Promise((resolve, reject) => {
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

}
