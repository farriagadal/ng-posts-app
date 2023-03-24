import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { deletePost } from '../../store/post/post.actions';
import { selectFilteredPosts } from '../../store/post/post.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private store: Store) {
    this.posts$ = this.store.select(selectFilteredPosts);
  }

  ngOnInit(): void {
  }

  onDeletePost(postId: number): void {
    this.store.dispatch(deletePost({ postId }));
  }
}