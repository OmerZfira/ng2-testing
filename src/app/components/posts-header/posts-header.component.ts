import { Component, Input, OnChanges } from '@angular/core';

@Component({
	selector: 'app-posts-header',
	templateUrl: './posts-header.component.html',
	styleUrls: ['./posts-header.component.scss']
})
export class PostsHeaderComponent implements OnChanges {

	postsPercent:number = 0;

	@Input() postsTotal: number;
	@Input() postsRead: number;

	constructor() { }

	ngOnChanges(): void {
		this.postsPercent = (this.postsRead) ? Math.floor( this.postsRead / this.postsTotal * 100 ) : 0;
	}

}
