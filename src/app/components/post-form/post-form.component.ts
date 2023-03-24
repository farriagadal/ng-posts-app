import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/Post';
import { addPost } from '../../store/post/post.actions';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  newPost: Partial<Post> = {
    name: '',
    description: '',
  };

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.newPost.name && this.newPost.description) {
      const post: any = { ...this.newPost, id: Date.now() };
      this.store.dispatch(addPost({ post }));
      this.newPost = { name: '', description: '' };
    }
  }
}
