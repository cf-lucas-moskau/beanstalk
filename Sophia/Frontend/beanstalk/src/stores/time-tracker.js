// stores.js
import {get, writable} from 'svelte/store';


export const pageTracking = writable([]);

export function trackPageTime(route, timeSpent) {
    pageTracking.update((pages) => {
        const existingPage = pages.find((page) => page.route === route);

        if (existingPage) {
            existingPage.time += timeSpent;
        } else {
            const newPage = { route: route, time: timeSpent };
            pages.push(newPage);
        }

        return pages;
    });
}