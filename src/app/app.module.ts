import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { FilterComponent } from './components/filter/filter.component';
import { PostService } from './services/post.service';
import { postReducer } from './store/post/post.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostFormComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ post: postReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
