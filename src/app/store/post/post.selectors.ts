import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { PostState, postAdapter } from './post.state';

const getPostState = (state: AppState) => state.post;

const { selectAll } = postAdapter.getSelectors();

export const selectPosts = createSelector(
  getPostState,
  (state: PostState) => selectAll(state)
);

export const selectFilteredPosts = createSelector(
  selectPosts,
  getPostState,
  (posts, state) => {
    const filter = state.filter.toLowerCase();
    return posts.filter((post) =>
      post.name.toLowerCase().includes(filter)
    );
  }
);

export const selectFilter = createSelector(
  getPostState,
  (state: PostState) => state.filter
);
