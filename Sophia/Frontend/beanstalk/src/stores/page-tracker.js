// stores.js
import {writable} from 'svelte/store';


export const pageTracking = writable([]);

export function trackPage(route, timeSpent, clicks) {
    pageTracking.update((pages) => {
        const existingPage = pages.find((page) => page.route === route);

        if (existingPage) {
            existingPage.time += timeSpent;
            existingPage.clicks += clicks;
        } else {
            const newPage = { route: route, time: timeSpent, clicks: clicks };
            pages.push(newPage);
        }

        return pages;
    });
}

