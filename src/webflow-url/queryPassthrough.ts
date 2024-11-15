
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
        this.debug.debug ("Initializing");

        this.debug.debug ("Config:", this.config);

    }

    // Process elements with the custom attr wfu-query-param
    init() {

        document.addEventListener('click', (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const anchor = target.closest('a');

            // No link found
            if(!anchor)
                return; // ignore

            // Ignore links with no href 
            if(!anchor.hasAttribute("href"))
                return; // ignore

            // Ignore mailto: and tel: links 
            if(anchor.href.startsWith("mailto:"))
                return; // ignore
            if(anchor.href.startsWith("tel:"))
                return; // ignore 

            const currentPageParams = new URLSearchParams(window.location.search);

            // Get the parameters of the anchor URL
            const anchorParams = new URLSearchParams(anchor.search);

            // Parse the URL and query string
            const anchorUrl = new URL(anchor.href);

            // Check if the URL is relative or if the hostname matches the current hostname
            if(this.config.internalOnly) {
                
                this.debug.debug("checking internalOnly"); 

                const isRelativeOrSameHost = !anchorUrl.host || anchorUrl.host === window.location.host;

                if(!isRelativeOrSameHost) {

                    this.debug.debug("Found external link, skipping"); 
                    
                    return;
                }
            }

            // Process link click 

            event.preventDefault();

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
            let newUrl = anchorUrl.origin + anchorUrl.pathname;

            if(newParams.size > 0)
                newUrl +=  '?' + newParams.toString();

            // Navigate to the new URL
            window.location.href = newUrl;

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
