import { writable } from 'svelte/store';

function createInvestment() {
	const { subscribe, update } = writable(500);

	return {
		subscribe,
		// @ts-ignore
		reduce: update,
	};
}

export const investment = createInvestment();