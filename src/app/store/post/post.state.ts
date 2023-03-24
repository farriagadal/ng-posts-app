import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Post } from 'src/app/models/post';

export interface PostState extends EntityState<Post> {
  filter: string;
}

export const postAdapter = createEntityAdapter<Post>({
  selectId: (post) => post.id,
});

export const initialState: PostState = postAdapter.getInitialState({
  filter: '',
});
