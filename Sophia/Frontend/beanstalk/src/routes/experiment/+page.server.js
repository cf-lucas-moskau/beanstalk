import { error } from '@sveltejs/kit';
import { experiments } from '../../data';

// @ts-ignore
export function load({ params }) {

	return {
		experiments
	};
}
