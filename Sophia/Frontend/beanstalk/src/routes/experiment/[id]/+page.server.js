import { error } from '@sveltejs/kit';
import { experiments, pitches } from '../../../data';

// @ts-ignore
export function load({ params }) {
	console.log("params", params);
	const experiment = experiments.find((experiment) => experiment.id === params.id);

	if (!experiment) throw error(404);

	return {
		experiment: experiment,
		pitches: pitches.filter((pitch) => experiment.pitches.includes(pitch.id))
	};
}
