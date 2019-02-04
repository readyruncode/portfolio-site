import { Component, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

	@ViewChild('stickyHeader') menuElement: ElementRef;

	public isSticky = false;
	elementPosition: any;

	// public currentContent = '';

	ngAfterViewInit() {
		this.elementPosition = this.menuElement.nativeElement.offsetTop;
		console.log('elementPosition', this.elementPosition);
	}

	@HostListener('window:scroll', ['$event'])
	handleScroll() {
		const windowScroll = window.pageYOffset;
		if (windowScroll >= this.elementPosition) {
			this.isSticky = true;
		} else {
			this.isSticky = false;
		}
	}
}
