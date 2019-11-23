import { put, takeLatest, all } from 'redux-saga/effects';

import { auth } from "./AuthActions";
//import Api from '../../common/Api/Api';

function* login(data) {  
  //const response = yield Api.get('/institution')
  console.log(data);
  
  if(true){
    yield put(auth.loginResponse('asdasd'))
  } else {
    const err = new TypeError('ERROR_LOGIN')
    yield put(auth.loginResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(auth.login, login)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}