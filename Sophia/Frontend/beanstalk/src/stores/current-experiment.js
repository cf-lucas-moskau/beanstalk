import { writable } from 'svelte/store';

function createShuffle() {
	const { subscribe, set} = writable([]);

	return {
		subscribe: subscribe,
		shuffle: set,
	};
}

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

function createConsentForStudy() {
	const { subscribe, update, set } = writable(false)

	return {
		// @ts-ignore
        subscribe: subscribe,
		// @ts-ignore
		changeValue: update,
		set,
	};
}

function createConsentForData() {
	const { subscribe, update, set } = writable(false)

	return {
		// @ts-ignore
        subscribe: subscribe,
		// @ts-ignore
		changeValue: update,
		set,
	};
}
function truncateText(text, words) {
	const wordArray = text.split(' ');
	if (wordArray.length > words) {
	  return wordArray.slice(0, words).join(' ') + '...';
	}
	return text;
  }
  

export const currentExperiment = createCurrentExperiment();
export const consentForStudy = createConsentForStudy();
export const consentForData = createConsentForData();

export const shuffledList = createShuffle();
