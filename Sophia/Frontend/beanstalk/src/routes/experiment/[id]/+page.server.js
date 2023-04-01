import { error } from '@sveltejs/kit';
import { experiments } from '../../../data';

// @ts-ignore
export function load({ params }) {
	const experiment = experiments.find((experiment) => experiment.id === params.id);

	if (!experiment) throw error(404);

	return {
		experiment
	};
}
