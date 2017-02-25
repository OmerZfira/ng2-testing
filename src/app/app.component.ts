import { Component, OnInit } from '@angular/core';

import { PostService } from './services/post.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
	title: string = 'Due diligence posts';
	currPosts: any = [];
	postsRead: number = 0;
	selectedPost: any = {};

	constructor(private postService: PostService) { }

	ngOnInit(): void {
		this.postService.getPosts()
			.then((res) => this.currPosts = res)
	}

	checkBottom(event: any): void {
		let el = event.target;
		if (el.offsetHeight + el.scrollTop >= el.scrollHeight) {
			let newPosts = this.postService.getNextPosts(this.currPosts.length);
			this.currPosts.push(...newPosts);
		}
	}

	selectPost(post: any): void {
		if (!post.isRead) {
			post.isRead = true;
			this.postsRead++;
		}
		this.selectedPost = post;
	}
}
