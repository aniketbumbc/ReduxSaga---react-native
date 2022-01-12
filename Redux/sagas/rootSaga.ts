import { all, fork } from 'redux-saga/effects';
import postsSaga from './GetAllPosts/GetPostSaga';

export function* rootSaga() {
  yield all([fork(postsSaga)]);
}
