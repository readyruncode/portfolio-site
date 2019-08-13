import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectLink } from 'src/app/models/project-link.model';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

	public projects: Project[];

	constructor() { }

	ngOnInit() {
		this.projects = [
			new Project(
				'Ashes Wheels',
				'iOS app that facilitates the custom wheels order process from Ashes Wheels.',
				'I designed, built and distributed the app while keeping an agile dialogue with the client. It was really just a quick side project to help my friend out with his company, but I also wanted to finally have an app deployed in my own name on the App Store.',
				['Swift', 'Adobe XD'],
				'ashes_wheels_screenshot.png',
				[new ProjectLink('Ashes Wheels', 'https://itunes.apple.com/se/app/ashes-wheels/id1448109460?mt=8')],
				[new ProjectLink('Ashes Wheels', 'http://asheswheels.com')]
			),
			new Project(
				'LinPark / SkePark / RegPark',
				'Suite of iOS apps for parking in the cities of Linköping and Skellefteå, Sweden.',
				'Sole iOS developer. Over the course of my 3 years at Knowit I added localization and multiple app targets for branded versions of the app, and more.',
				['Objective-C', 'Swift', 'MapKit', 'Localization', 'CocoaPods'],
				'parking.png',
				[new ProjectLink('LinPark', 'https://apps.apple.com/se/app/linpark/id583934690'),
				new ProjectLink('SkePark', 'https://apps.apple.com/se/app/skepark/id1148092945'),
				new ProjectLink('RegPark', 'https://apps.apple.com/se/app/regpark/id1272181315')],
				[new ProjectLink('Knowit', 'https://www.knowit.se'),
				new ProjectLink('LinPark', 'http://linpark.se'),
				new ProjectLink('SkePark', 'https://www.skelleftea.se/skepark')]
			),
			new Project(
				'iFiske',
				'iOS app for simplifying purchases of fishing permits for Swedish fishing.',
				'Together with a few fellow students I built the first version of one of Sweden\'s today most used fishing apps. Other than building the initial version of the map view I created a dynamically populated virtual fishing permit which I was particularly proud of at the time.',
				['Objective-C', 'MapKit', 'JSON'],
				'ifiske.png',
				[new ProjectLink('iFiske', 'https://apps.apple.com/se/app/ifiske/id727821650')],
				[new ProjectLink('iFiske', 'https://www.ifiske.se'), new ProjectLink('JigHead', 'http://www.jighead.se')]
			)
		];
	}
}

// 2019 - Portfolio site. My designated spot on the Internet for showing off my work.
// 		I designed, built and deployed the site.
// 		Adobe XD, Angular, HTML, SCSS, TypeScript, GitHub Pages

// 2019 - Ashes Wheels. Facilitates the process of completing orders for custom wheels from the company Ashes Wheels.
// 		I designed and built this app for a friend's company. It was mostly just for fun and to help him out a little, but also to finally have an app deployed under my own name on the App Store.
// 		Swift

// 2014 - LinPark/SkePark/RegPark. iOS apps for parking in the cities of Linköping and Skellefteå, Sweden.
// 		Sole iOS developer. Over the course of my 3 years at Knowit I added localization and multiple app targets for branded versions of the app, and more. 
// 		Objective-C, Swift, MapKit, Localization, CocoaPods

// 2014 - GreatRate. iOS app for measuring customer satisfaction.
// 		Sole iOS developer. As part of my thesis project I added an offline feature to the app.
// 		Objective-C, Core Data

// 2013 - iBodyJournal. iOS app for physiotherapist entrepreneurs. Unfortunately the client has since removed the app from App Store.
// 		I acted as sole iOS developer and built the entire app all the way from sketch to finished app. Helped publishing it on client's App Store account.
// 		Objective-C, Core Data

// 2012 - iFiske. iOS app for simplifying purchases of fishing permits for Swedish fishing. 
// 		Together with a few fellow students I built the first version of one of Sweden's today most used fishing apps. 
// 		Other than building the initial version of the map view I created a dynamically populated virtual fishing permit which I was particularly proud of at the time.
// 		Objective-C, MapKit, JSON


