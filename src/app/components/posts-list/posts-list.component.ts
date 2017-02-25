import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-posts-list',
	templateUrl: './posts-list.component.html',
	styleUrls: ['./posts-list.component.scss']
})

export class PostsListComponent implements OnInit {

	@Input() posts: any;
	@Input() selectedPost: any;
	@Output() onSelect = new EventEmitter<any>();

	constructor() { }

	selectPost(post: any) {
		this.onSelect.emit(post);
	}

	ngOnInit() {
	}

}
