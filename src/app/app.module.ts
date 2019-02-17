import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ConsoleComponent } from './components/console/console.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/pages/contact/contact.component';

// const appRoutes: Routes = [
// 	{ path: '', component: HomeComponent },
// 	{ path: 'about', component: AboutComponent },
// 	{ path: 'bio', component: BioComponent },
// 	{ path: 'projects', component: ProjectsComponent },
// ];

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		ConsoleComponent,
		ContactComponent,
		HeaderComponent,
		HomeComponent,
		ProjectCardComponent,
		PortfolioComponent,
		MenuComponent
	],
	imports: [
		BrowserModule,
		// RouterModule.forRoot(
		// 	appRoutes,
		// 	{ enableTracing: true } // Debugging purposes only
		// ),
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
