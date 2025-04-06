
/*
 * SA5 Url | Query Passthrough
 * Carries querystring info to other pages
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Url Utilities
 */

import { Sa5Core } from '../webflow-core'
import { Sa5Debug } from '../webflow-core/debug';

// CONFIG:
// Ignore certain links?

export interface QueryPassthroughConfig {
    ignorePatterns: (string | RegExp)[];
    overwriteExisting: boolean; // Overwrite existing params?
    internalOnly: boolean; // Only affect internal links
}

export class Sa5QueryPassthrough {

    debug: Sa5Debug;

    config: QueryPassthroughConfig; // Optional config

    constructor(config: Partial<QueryPassthroughConfig> = {}) {

        this.config = {
            // Other params to ignore? user accounts login, redir params, etc.
            // https://www.test.org/pub?b42d817d_page=2
            ignorePatterns: config.ignorePatterns ?? [
                /_page$/, // Ignore pagination params
            ],
            overwriteExisting: config.overwriteExisting ?? false,
            internalOnly: config.internalOnly ?? true,
        }

        // Initialize debugging
        this.debug = new Sa5Debug("sa5-url-querypassthrough");
//        this.debug.enabled = true; 
        this.debug.debug ("Initializing");

        this.debug.debug ("Config:", this.config);

    }

    // Process elements with the custom attr wfu-query-param
    init() {

        document.addEventListener('click', (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const anchor = target.closest('a');

            this.debug.debug("Link clicked", anchor)

            // No link found
            if(!anchor)
                return; // ignore

            // Ignore links with no href 
            if(!anchor.hasAttribute("href")) {
                this.debug.debug("Link ignored - no href", anchor)
                return; // ignore
            }

            // Ignore mailto: and tel: links 
            if(anchor.href.startsWith("mailto:")) {
                this.debug.debug("Link ignored - mailto:", anchor)
                return; // ignore
            }
                
            if(anchor.href.startsWith("tel:")) {
                this.debug.debug("Link ignored - tel:", anchor)
                return; // ignore 
            }

            // Ignore explicitly ignored links 
            if(anchor.getAttribute("wfu-url-passthrough") == "ignore") {
                this.debug.debug("Link click ignored (explicit ignore setting).")
                return;
            }

            const currentPageParams = new URLSearchParams(window.location.search);

            const currentPageHash = window.location.hash; 

            // Get the parameters of the anchor URL
            const anchorParams = new URLSearchParams(anchor.search);

            // Parse the URL and query string
            const anchorUrl = new URL(anchor.href);

            // Hash handling 
            // If this page
            if(anchorUrl.hash) {
                
                if (anchorUrl.pathname == window.location.pathname) { 
                    this.debug.debug("Link click ignored (hash, same page).")
                    return;
                }

            }

// event.preventDefault();
// return;

            // Check if the URL is relative or if the hostname matches the current hostname
            if(this.config.internalOnly) {
                
                this.debug.debug("checking internalOnly"); 

                const isRelativeOrSameHost = !anchorUrl.host || anchorUrl.host === window.location.host;

                if(!isRelativeOrSameHost) {

                    this.debug.debug("Found external link, skipping"); 
                    
                    return;
                }
            }

            // Process link click ourselves
            // Suppress default handling 
            event.preventDefault();

            this.debug.debug("Overriding default link handling.")

            // Object to hold the new parameters
//                let newParams: { [key: string]: string } = {};

            // Get existing link params 
            let newParams: URLSearchParams = new URLSearchParams(anchorUrl.searchParams);

            this.debug.debug(newParams)

            /**
             * Identify the query param keys we want to preserve
             */

            // Iterate over page parameters
            for (const [key, value] of currentPageParams) {

                // Ignore specific keys
                if (this.shouldIgnoreKey(key))
                    continue; 

                // Optionally overwrite anchor params 
                if (anchorParams.has(key) && !this.config.overwriteExisting)
                    continue; 
                    
                newParams.set(key, value);

            }

            // Construct the new URL with the modified query string
//            let newUrl = anchorUrl.origin + anchorUrl.pathname;

            let newUrl: URL = new URL(anchorUrl);

            if(newParams.size > 0) {
                this.debug.debug("Appending querystring params to passthrough"); 

                // Iterate through newParams and set them on the new URL's searchParams
                newParams.forEach((value, key) => {
                    newUrl.searchParams.set(key, value); // Overwrite existing parameters by the same name
                });
//                newUrl +=  '?' + newParams.toString();
            }

            // if (anchorUrl.hash) { 
            //     this.debug.debug("Appending hash"); 
            //     newUrl += '#' + anchorUrl.hash; 
            // }

            // Navigate to the new URL
            this.debug.debug("Final URL for navigation", newUrl.href); 

            // Depending on the target, 
            // Open in a new tab, or in the same window 
            if(anchor.target) 
                window.open(newUrl.href, anchor.target);
            else
                window.location.href = newUrl.href;

        });

    }

    shouldIgnoreKey(key: string): boolean {

        for (const pattern of this.config.ignorePatterns) {
            if (typeof pattern === 'string') {
                if (pattern === key) {
                    return true;
                }
            } else if (pattern instanceof RegExp) {
                if (pattern.test(key)) {
                    return true;
                }
            }
        }

        return false;
    }

}
