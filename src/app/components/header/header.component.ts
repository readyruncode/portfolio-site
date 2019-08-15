import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	@Input() isSticky = false;
	@Output() menuToggle: EventEmitter<any> = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	public onClickHamburger() {
		this.menuToggle.emit();
	}
}
