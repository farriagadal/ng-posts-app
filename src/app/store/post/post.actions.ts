import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/Post';

export const loadPosts = createAction('[Post] Load Posts');

export const setPosts = createAction(
  '[Post] Set Posts',
  props<{ posts: Post[] }>()
);

export const addPost = createAction(
  '[Post] Add Post',
  props<{ post: Post }>()
);

export const deletePost = createAction(
  '[Post] Delete Post',
  props<{ postId: number }>()
);

export const setFilter = createAction(
  '[Post] Set Filter',
  props<{ filter: string }>()
);
