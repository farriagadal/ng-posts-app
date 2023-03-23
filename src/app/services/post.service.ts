import { Injectable } from '@angular/core';
import { Post } from '../store/post/post.state';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      name: 'Post 1',
      description: 'Este es el primer post de ejemplo.',
    },
    {
      id: 2,
      name: 'Post 2',
      description: 'Este es el segundo post de ejemplo.',
    },
    {
      id: 3,
      name: 'Post 3',
      description: 'Este es el tercer post de ejemplo.',
    },
  ];

  constructor() {}

  getPosts(): Post[] {
    return this.posts;
  }
}
