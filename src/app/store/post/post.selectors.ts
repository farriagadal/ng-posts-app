import { createSelector } from '@ngrx/store';
import { PostState, postAdapter } from './post.state';

export const getPostState = (state: { post: PostState }) => state.post;

const { selectAll } = postAdapter.getSelectors();

export const selectPosts = createSelector(
  getPostState,
  (state: PostState) => selectAll(state)
);

export const selectFilteredPosts: any = createSelector(
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
