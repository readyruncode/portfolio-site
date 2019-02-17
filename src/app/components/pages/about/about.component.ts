import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	public age: number;
	public location: string;
	public accumulatedXP: number;

	constructor() {
		this.age = this._calculateAge();
		this.location = 'near Norrköping, Sweden';
		this.accumulatedXP = 4;
	}

	ngOnInit() {
	}

	private _calculateAge() {
		const birthday = new Date('1981-05-26');
		const ageDiffMs = Date.now() - birthday.getTime();
		const ageDate = new Date(ageDiffMs);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
}
