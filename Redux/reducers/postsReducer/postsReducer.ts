import { postTypes } from '../../Actiontypes/postsActionTypes';
import { PostsActions, PostsState } from '../../types/types';

const initialState: PostsState = {
  pending: false,
  posts: [],
  error: null,
};

export default (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      console.log('FETCH_POST_REQUEST reducers');

      return {
        ...state,
        pending: true,
      };
    case postTypes.FETCH_POST_SUCCESS:
      console.log('FETCH_POST_SUCCESS reducers');
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        error: null,
      };
    case postTypes.FETCH_POST_FAILURE:
      console.log('FETCH_POST_FAIL reducers');
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
