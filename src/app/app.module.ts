import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ConsoleComponent } from './components/console/console.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { ContactComponent } from './components/pages/contact/contact.component';

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		ConsoleComponent,
		ContactComponent,
		HeaderComponent,
		HomeComponent,
		ProjectCardComponent,
		PortfolioComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
