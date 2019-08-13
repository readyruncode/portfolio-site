import { ProjectLink } from 'src/app/models/project-link.model';

export class Project {

	constructor(
		public title: string,
		public description: string,
		public role: string,
		public techniques: string[],
		public screenshotUrl: string,
		public appStoreBadges: ProjectLink[],
		public links: ProjectLink[]) {
	}
}
