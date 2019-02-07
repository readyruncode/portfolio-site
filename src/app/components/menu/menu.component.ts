import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	@Input() isToggled: boolean;
	@Output() menuToggle: EventEmitter<any> = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	/**
	 * Tell app component (which holds this component) to toggle this menu
	 */
	public closeMenu() {
		this.menuToggle.emit();
	}
}
