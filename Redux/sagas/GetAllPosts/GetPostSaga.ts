import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { IPost } from '../../../models/IPost';
import {
  fetchPostsFailure,
  fetchPostsSuccess,
} from '../../actions/postsActions/postActions';
import { postTypes } from '../../Actiontypes/postsActionTypes';

const getPosts = () => {
  console.log('getPost 2');
  return axios.get<IPost[]>('https://jsonplaceholder.typicode.com/todos');
};

function* fetchPostsSaga(): any {
  try {
    const response = yield call(getPosts);
    yield put(
      fetchPostsSuccess({
        posts: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostsFailure({
        error: e.message,
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
