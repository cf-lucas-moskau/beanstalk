import { error } from '@sveltejs/kit';
import { experiments, pitches } from '../../../../data';

// @ts-ignore
export function load({ params }) {
    console.log("params", params);
	const pitch = pitches.find((pitch) => pitch.id === params.pitchId);

	if (!pitch) throw error(404);

	return {
		pitch: pitch,
		experiments: experiments,
		params: params
	};
}
