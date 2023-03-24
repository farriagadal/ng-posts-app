import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      name: 'Post 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
      id: 2,
      name: 'Post 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
      id: 3,
      name: 'Post 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
  ];

  constructor() {}

  getPosts(): Post[] {
    return this.posts;
  }
}
