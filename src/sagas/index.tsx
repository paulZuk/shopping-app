import { all } from 'redux-saga/effects';

function* hello() {
    console.log('Hello Sagas!');
}

export default function* rootSaga() {
    yield all([
        hello()
    ]);
  }