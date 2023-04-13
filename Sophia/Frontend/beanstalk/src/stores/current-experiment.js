import { writable } from 'svelte/store';

function createCurrentExperiment() {
	const { subscribe, set, update } = writable("")

	return {
		// @ts-ignore
        subscribe: subscribe,
		// @ts-ignore
		changeValue: function (value) {
            // put your logic here
      
            // call update method to make the store reactive when the value get changed
            update((oldValue) => value)
          },
	};
}

export const currentExperiment = createCurrentExperiment();