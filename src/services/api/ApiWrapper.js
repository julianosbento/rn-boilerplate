/* eslint-disable no-magic-numbers, no-undef */
/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright RN-Boilerplate
 * @version 1.0.0
 *
 */
import axios from 'axios';

import RouterMap from './RouterMap';
/**
 * @desc class to wrapper a instance of axios and be used in saga call function
 */
class ApiWrapper {
  static TIMEOUT = 60000;

  constructor(authorization = null) {
    this.authorization = authorization

    this.call = axios.create({
      baseURL: RouterMap.BASE_URL,
      headers: { Authorization: `JWT ${this.authorization}` },
      timeout: ApiWrapper.TIMEOUT
    });
  }
}

export default ApiWrapper;
