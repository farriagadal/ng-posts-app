import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface Post {
  id: number;
  name: string;
  description: string;
}

export interface PostState extends EntityState<Post> {
  filter: string;
}

export const postAdapter = createEntityAdapter<Post>({
  selectId: (post) => post.id,
});

export const initialState: PostState = postAdapter.getInitialState({
  filter: '',
});
