import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

enum Commands {
	Clear = 'clear',
	Help = 'help',
	Info = 'info',
	Run = 'run'
}

enum Keywords {
	About = 'about',
	Bio = 'bio',
	Home = 'home',
	Projects = 'projects'
}

enum Status {
	Error = 'ERROR!',
	Init = 'INITIALIZING...',
	Ready = 'READY.',
	Running = 'RUNNING COMMAND...'
}

@Component({
	selector: 'app-console',
	templateUrl: './console.component.html',
	styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

	public input = '';
	public output = '';
	public consoleVersion = '0.0.1';
	public status = '';

	constructor(private router: Router) { }

	ngOnInit() {
		this.setStatus(Status.Init, 1500);
	}

	private setStatus(status: string, interval: number) {
		this.status = status;
		setTimeout(() => {
			this.status = Status.Ready;
		}, interval);
	}

	private resetInputString() {
		this.input = '';
	}

	private previousCommandString(command): string {
		return '<span class="previous-command">\'' + command + '\'</span><br>';
	}

	private displayCurrentContentWithHistory(outputString) {
		this.output = outputString + '<br>' + this.output;
	}

	private buildHelp(command) {
		let outputString = this.previousCommandString(command);
		outputString += '<br>' +
		'COMMANDS<br>' +
		'-- clear<br>' +
		'-- help<br>' +
		'-- info<br>' +
		'-- run<br><br>' +
		'KEYWORDS<br>' +
		'-- about<br>' +
		'-- bio<br>' +
		'-- home<br>' +
		'-- projects<br><br>' +
		'To learn more about each command or keyword, type \'info [command]\'.<br>';
		this.displayCurrentContentWithHistory(outputString);
	}

	private buildInvalid(command) {
		console.log('input', this.input);
		this.setStatus(Status.Error, 500);
		let outputString = this.previousCommandString(command);
		outputString += 'Command not found.<br>Enter \'help\' to see all available commands and keywords.<br>';
		this.displayCurrentContentWithHistory(outputString);
	}

	private parseInput(inputArgs: string[]) {
		const firstArgument = inputArgs[0];
		if (firstArgument === Commands.Run) {
			this.handleRun(inputArgs);
		} else if (firstArgument === Commands.Clear) {
			this.output = '';
		} else if (firstArgument === Commands.Help) {
			this.buildHelp(firstArgument);
		} else if (firstArgument === Commands.Info) {
			this.handleInfo(inputArgs);
		} else {
			this.buildInvalid(firstArgument);
		}
	}

	private handleInfo(inputArgs: string[]) {
		const keyword = inputArgs[1];
		if (keyword === Keywords.About) {
			this.infoAbout();
		} else if (keyword === Keywords.Bio) {
			this.infoBio();
		} else if (keyword === Commands.Clear) {
			this.infoClear();
		} else if (keyword === Commands.Help) {
			this.infoHelp();
		} else if (keyword === Commands.Info) {
			this.infoInfo();
		} else if (keyword === Keywords.Home) {
			this.infoHome();
		} else if (keyword === Keywords.Projects) {
			this.infoProjects();
		} else if (keyword === Commands.Run) {
			this.infoRun();
		} else if (keyword === undefined) {
			this.setStatus(Status.Error, 500);
			let outputString = this.previousCommandString(inputArgs[0]);
			outputString += 'Invalid or missing keyword.<br>The \'info\' command needs to be accompanied by a valid keyword to work.<br>Type \'help\' to see all available commands and keywords.<br>';
			this.displayCurrentContentWithHistory(outputString);
		} else {
			this.setStatus(Status.Error, 500);
			let outputString = this.previousCommandString(inputArgs[0] + ' ' + inputArgs[1]);
			outputString += 'Invalid or missing keyword.<br>The \'info\' command needs to be accompanied by a valid keyword to work.<br>Type \'help\' to see all available commands and keywords.<br>';
			this.displayCurrentContentWithHistory(outputString);
		}
	}

	private infoAbout() {
		let outputString = this.previousCommandString(Commands.Info + ' ' + Keywords.About);
		outputString += '<b>NAME</b> about<br>' +
		'<b>TYPE</b> Keyword<br>' +
		'<b>DESCRIPTION</b><br>' +
		'Use the <b>about</b> keyword together with the \'run\' command to display more detailed information about this site.<br>';
		this.displayCurrentContentWithHistory(outputString);
	}

	private infoBio() {
		let outputString = this.previousCommandString(Commands.Info + ' ' + Keywords.Bio);
		outputString += '<b>NAME</b> bio<br>' +
		'<b>TYPE</b> Keyword<br>' +
		'<b>DESCRIPTION</b><br>' +
		'Use the <b>bio</b> keyword together with the \'run\' command to find out more about the creator of this site.<br>';
		this.displayCurrentContentWithHistory(outputString);
	}

	private infoClear() {
		let outputString = this.previousCommandString(Commands.Info + ' ' + Commands.Clear);
		outputString += '<b>NAME</b> clear<br>' +
		'<b>TYPE</b> Command<br>' +
		'<b>DESCRIPTION</b><br>' +
		'Use the <b>clear</b> command to remove all previous output in this console.<br>';
		this.displayCurrentContentWithHistory(outputString);
	}

	private infoHelp() {
		let outputString = this.previousCommandString(Commands.Info + ' ' + Commands.Help);
		outputString += '<b>NAME</b> help<br>' +
		'<b>TYPE</b> Command<br>' +
		'<b>DESCRIPTION</b><br>' +
		'Use the <b>help</b> command to display a list of all commands and keywords available in this console.<br>';
		this.displayCurrentContentWithHistory(outputString);
	}

	private infoHome() {
		let outputString = this.previousCommandString(Commands.Info + ' ' + Keywords.Home);
		outputString += '<b>NAME</b> home<br>' +
		'<b>TYPE</b> Keyword<br>' +
		'<b>DESCRIPTION</b><br>' +
		'Use the <b>home</b> keyword together with the \'run\' command to display the main view of this site.<br>';
		this.displayCurrentContentWithHistory(outputString);
	}

	private infoInfo() {
		let outputString = this.previousCommandString(Commands.Info + ' ' + Commands.Info);
		outputString += '<b>NAME</b> info<br>' +
		'<b>TYPE</b> Command<br>' +
		'<b>DESCRIPTION</b><br>' +
		'Use the <b>info</b> command to display information about any command or keyword available in this console.<br>';
		this.displayCurrentContentWithHistory(outputString);
	}

	private infoProjects() {
		let outputString = this.previousCommandString(Commands.Info + ' ' + Keywords.Projects);
		outputString += '<b>NAME</b> projects<br>' +
		'<b>TYPE</b> Keyword<br>' +
		'<b>DESCRIPTION</b><br>' +
		'Use the <b>projects</b> keyword together with the \'run\' command to display information about the site\'s creator\'s all - if any - finished projects.<br>';
		this.displayCurrentContentWithHistory(outputString);
	}

	private infoRun() {
		let outputString = this.previousCommandString(Commands.Info + ' ' + Commands.Run);
		outputString += '<b>NAME</b> run<br>' +
		'<b>TYPE</b> Command<br>' +
		'<b>DESCRIPTION</b><br>' +
		'Use the <b>run</b> command together with any valid keyword to navigate your way through this site.<br>';
		this.displayCurrentContentWithHistory(outputString);
	}

	private handleRun(inputArgs: string[]) {
		const keyword = inputArgs[1];
		if (keyword === Keywords.About) {
			this.runAbout();
			this.runCommandOutput(keyword);
		} else if (keyword === Keywords.Bio) {
			this.runBio();
			this.runCommandOutput(keyword);
		} else if (keyword === Keywords.Home) {
			this.runHome();
			this.runCommandOutput(keyword);
		} else if (keyword === Keywords.Projects) {
			this.runProjects();
			this.runCommandOutput(keyword);
		} else if (keyword === undefined) {
			this.setStatus(Status.Error, 500);
			let outputString = this.previousCommandString(inputArgs[0]);
			outputString += 'Invalid or missing keyword.<br>The \'run\' command needs to be accompanied by a valid keyword to work.<br>Type \'help\' to see all available commands and keywords.<br>';
			this.displayCurrentContentWithHistory(outputString);
		} else {
			this.setStatus(Status.Error, 500);
			let outputString = this.previousCommandString(inputArgs[0] + ' ' + inputArgs[1]);
			outputString += 'Invalid or missing keyword.<br>The \'run\' command needs to be accompanied by a valid keyword to work.<br>Type \'help\' to see all available commands and keywords.<br>';
			this.displayCurrentContentWithHistory(outputString);
		}
	}

	private runAbout() {
		setTimeout(() => {
			this.router.navigate(['/about']);
		}, 500);
	}

	private runBio() {
		setTimeout(() => {
			this.router.navigate(['/bio']);
		}, 500);
	}

	private runHome() {
		setTimeout(() => {
			this.router.navigate(['']);
		}, 500);
	}

	private runProjects() {
		setTimeout(() => {
			this.router.navigate(['/projects']);
		}, 500);
	}

	private runCommandOutput(keyword: string) {
		this.setStatus(Status.Running, 500);
		let outputString = this.previousCommandString(Commands.Run + ' ' + keyword);
		outputString += 'Displaying ' + keyword.toUpperCase() + ' content...<br>';
		this.displayCurrentContentWithHistory(outputString);
	}

	public onEnter(input: string) {
		this.resetInputString();
		if (this.status === Status.Init) {
			return;
		}
		const args = input.split(' ');
		this.parseInput(args);
	}
}
