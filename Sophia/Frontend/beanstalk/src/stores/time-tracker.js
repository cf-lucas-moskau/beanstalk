// stores.js
import {get, writable} from 'svelte/store';

function getParams () {
    const url = window.location.href;
    const startTime = new Date();
    return {url, startTime}
}
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

//To simplify and shorten the call from each component.
export const trackerParams = getParams();
