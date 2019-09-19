/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright RN-Boilerplate
 * @version 1.0.0
 *
 */
import { call, put } from 'redux-saga/effects';
import { ApiWrapper } from '../../services/api';

import { ExampleActions } from '../ducks/Example';
import { ErrorActions } from '../ducks/Error';
import RouterMap from '../../services/api/RouterMap';

export function* getExample() {
  try {
    const api = new ApiWrapper();
    const response = yield call(api.call.get, RouterMap.SUBSCRIPTIONS);
    yield put(ExampleActions.getExampleSuccess(response.data));
  } catch (error) {
    yield put(ErrorActions.setError('Não foi possível carregar dados'));
  }
}
