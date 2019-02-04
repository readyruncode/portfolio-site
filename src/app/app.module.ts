import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './components/app/app.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ConsoleComponent } from './components/console/console.component';
import { HeaderComponent } from './components/header/header.component';
import { BioComponent } from './components/pages/bio/bio.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'bio', component: BioComponent },
	{ path: 'projects', component: ProjectsComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		ConsoleComponent,
		HeaderComponent,
		BioComponent,
		HomeComponent,
		ProjectCardComponent,
		ProjectsComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // Debugging purposes only
		),
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
