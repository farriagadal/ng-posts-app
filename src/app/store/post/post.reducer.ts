import { createReducer, on } from '@ngrx/store';
import { postAdapter, initialState } from './post.state';
import * as PostActions from './post.actions';

export const postReducer = createReducer(
  initialState,
  on(PostActions.setPosts, (state: any, { posts }: any) => {
    return postAdapter.setAll(posts, state);
  }),
  on(PostActions.addPost, (state: any, { post }: any) => {
    return postAdapter.addOne(post, state);
  }),
  on(PostActions.deletePost, (state: any, { postId }: any) => {
    return postAdapter.removeOne(postId, state);
  }),
  on(PostActions.setFilter, (state: any, { filter }: any) => {
    return { ...state, filter };
  })
);
