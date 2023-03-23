import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostService } from './services/post.service';
import { loadPosts, setPosts } from './store/post/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store, private postService: PostService) {}

  ngOnInit(): void {
    this.loadInitialPosts();
  }

  private loadInitialPosts(): void {
    const posts = this.postService.getPosts();
    this.store.dispatch(loadPosts());
    this.store.dispatch(setPosts({ posts }));
  }
}
