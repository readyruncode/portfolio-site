import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	@Input() isSticky = false;

	constructor() { }

	ngOnInit() {
	}

	public onClickHamburger() {
		console.log('Clicked menu!');
	}
}
