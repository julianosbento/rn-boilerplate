/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright boilerplate
 * @version 1.0.0
 *
 */
import { combineReducers } from 'redux';

import error from './Error';
import example from './Example';

export default combineReducers({
  error,
  example,
});

