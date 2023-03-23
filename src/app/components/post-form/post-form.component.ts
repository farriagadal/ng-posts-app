import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../../store/post/post.state';
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
      this.store.dispatch(addPost({ post: { ...this.newPost, id: Date.now() } }));
      this.newPost = { name: '', description: '' };
    }
  }
}
