import { fork, all } from 'redux-saga/effects';

import AuthSaga from '../services/Auth/AuthSaga';

export default function* rootSaga() {
  yield all([
    fork(AuthSaga)
  ]);
}