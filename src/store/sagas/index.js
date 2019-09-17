/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright boilerplate
 * @version 1.0.0
 *
 */
import { all, takeLatest } from 'redux-saga/effects';
import { Types as ExampleTypes } from '../ducks/Example';

import { getExample } from './Example';

export default function* rootSaga() {
  yield all([
    takeLatest(ExampleTypes.GET_REQUEST, getExample),
  ]);
}

