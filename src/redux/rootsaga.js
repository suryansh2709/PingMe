import {all} from 'redux-saga/effects';
import {watcherFunction} from './sagas/userDataSaga';

export default function* rootSaga() {
  yield all([watcherFunction()]);
}
