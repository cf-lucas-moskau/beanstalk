import { error } from '@sveltejs/kit';
import { experiments, projects } from '../../../data';

// @ts-ignore
export function load({ params }) {
	const experiment = experiments.find((experiment) => experiment.id === params.id);

	if (!experiment) throw error(404);

	return {
		experiment: experiment,
		projects: projects.filter((project) => experiment.projects.includes(project.id))
	};
}
