import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsHeaderComponent } from './components/posts-header/posts-header.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsDetailsComponent } from './components/posts-details/posts-details.component';

import { PostService } from './services/post.service';

@NgModule({
	declarations: [
		AppComponent,
		PostsHeaderComponent,
		PostsListComponent,
		PostsDetailsComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [PostService],
	bootstrap: [AppComponent]
})
export class AppModule { }
