
/*
 * SA5 Url | Query Passthrough
 * Carries querystring info to other pages
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Url Utilities
 */

import { Sa5Core } from '../webflow-core'

// CONFIG:
// Overwrite existing params?
// Ignore certain links?
// Ignore pagination params? 
// Other params to ignore? user accounts login, redir params, etc.


export class WfuQueryPassthrough {

//    config; // Optional config

    constructor() {

//        this.config = config;

    }

    // Process elements with the custom attr wfu-query-param
    init() {

        document.addEventListener('click', (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const anchor = target.closest('a');

            if (anchor) {
                event.preventDefault();
                
                // Parse the URL and query string
                const url = new URL(anchor.href);
                const params = new URLSearchParams(url.search);

                // Object to hold the new parameters
                let newParams: { [key: string]: string } = {};

                /**
                 * Identify the query param keys we want to preserve
                 */

                // Iterate over existing parameters
//                params.forEach((value, key) => {
                for (const [key, value] of params) {

                    // Ignore parameters ending in "_page" (pagination)
                    if (!key.endsWith('_page')) 
                        continue;

                    // Ignore redir Webflow params (user accounts)
                    // TODO: 

                    // Add this one
                    newParams[key] = value;
                }

                // Add or override other parameters as needed
                // Example: newParams['newParam'] = 'newValue';

                // Clear existing parameters and set the new ones
//                Array.from(params.keys()).forEach(key => params.delete(key));
                params.forEach((_, key) => params.delete(key));
                // Object.entries(newParams).forEach(([key, value]) => {
                //     params.set(key, value);
                // });
                for (let key in newParams) {
                    if (newParams.hasOwnProperty(key)) {
                        params.set(key, newParams[key]);
                    }
                }

                // Construct the new URL with the modified query string
                const newUrl = url.origin + url.pathname + '?' + params.toString();

                // Navigate to the new URL
                console.log('Navigating to:', newUrl);
                window.location.href = newUrl;
            }
        });

    }

}
