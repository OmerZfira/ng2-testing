import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private baseUrl = 'https://jsonplaceholder.typicode.com';
	private posts = [];
	private handleError = {};

	constructor(private http: Http) { }

	getPosts(): Promise<any> {
		return this.http.get(`${this.baseUrl}/posts`, this.headers)
			.toPromise()
			.then(result => {
				this.posts = result.json();
				return this.posts.slice(0, 10)
			})
			.catch(error => {
				this.handleError = error;
				return this.handleError
			})
	}

	getNextPosts(index: number): any {
		return (index <= this.posts.length - 10) ? this.posts.slice(index, index + 10) : [];
	}
}
