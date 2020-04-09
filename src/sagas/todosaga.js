import {  takeEvery} from "redux-saga/effects";

function todoSagaLog(action) {
  try {
    console.log("TODO")
  } catch (e) {
    console.log("ERROR! Bip! Bip!")
  }
}

function* todoSaga() {


  yield takeEvery("TODO", todoSagaLog);
}

export default todoSaga;
