import { writable } from 'svelte/store';

function createInvestment() {
	const { subscribe, update } = writable(500);

	return {
		subscribe,
		// @ts-ignore
		reduce: update,
	};
}

function createInvestments() {
	const { subscribe, update, set } = writable([{pitchId: "Test", amount: 500}]);

	return {
		subscribe,
		update,
		set,
	};
}

export const investment = createInvestment();
export const investments = createInvestments();