import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	public projects: Project[];

	constructor() { }

	ngOnInit() {
		this.projects = [
			new Project('Personal home page', 'My own little corner of the web where I take the opportunity to show off personal projects of mine. On desktop, navigation is handled by a home made terminal. Although I admit it is not really user friendly, I thought it would be fun to make it so that the user needs to get familiar with the commands to be able to navigate the site. Angular solution hosted on GitHub Pages.', 'bildUrl'),
			new Project('Ashes Wheels', 'Very basic iOS application for generating an e-mail draft of wheel measurements to be used when ordering custom wheels from Ashes Wheels.', 'bildUrl'),
			new Project('iBodyJournal', 'iOS application for helping massage entrepreneurs manage clients and schedule appointments. My favorite feature was the ability to mark specific points of interest of the body for each client\'s appointment. Unfortunately, my client has since chosen to remove the app from the App Store. :(', 'bildUrl')
		];
	}
}
