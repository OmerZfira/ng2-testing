import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-posts-details',
	templateUrl: './posts-details.component.html',
	styleUrls: ['./posts-details.component.scss']
})
export class PostsDetailsComponent implements OnInit {

	@Input() selectedPost: any;
	constructor() { }

	ngOnInit() {
	}

}
