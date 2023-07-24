
/*
 * webflow-url
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Url Utilities
 */


import { Sa5Core } from './webflow-core'

/*
 * Query-processing functions.
 * Adds querystring data to specific tagged elements.
 */
export class WfuQuery {

//    config; // Optional config

    constructor() {

//        this.config = config;

    }

    processLink(linkElem) {

        const urlParams = new URLSearchParams(window.location.search);

        // Skip if no href
        if (linkElem.attr("href") == null)
            return;

        // Disassemble url 
        var hrefParts = linkElem.attr("href").split("?");
        var hrefBase = hrefParts[0];
        var hrefQuery = hrefParts[1];

        const newParams = new URLSearchParams(hrefQuery);

        // Handle suppressed elements
        if (linkElem.attr("wfu-query-param") == '-') {

            // Skip, do nothing
            //        console.log(`Processing - / ${linkElem.attr("href")}`);

            // Handle all-params elements 
            // https://stackoverflow.com/questions/1318076/jquery-hasattr-checking-to-see-if-there-is-an-attribute-on-an-element
        } else if (linkElem.attr("wfu-query-param") == '*' || linkElem.attr("wfu-query-param") == undefined || linkElem.attr("wfu-query-param") == false) {

            //        console.log(`Processing * / ${linkElem.attr("href")} / ${hrefBase} / ${hrefQuery}`);

            //        linkElem.text(`${linkElem.text()} - WILDCARD`);

            // Merge querystrings
            // overrwrites any conflicting params with new ones
            for (let p of urlParams) {
                newParams.set(p[0], urlParams.get(p[0]));
            };

            // Replaces whole querystring, preserving nothing
            var newHref = hrefBase + '?' + newParams.toString();

            // Update link href
            linkElem.attr("href", newHref);

            // Handle specific-params 
        } else {

            //        console.log(`Process MULTI / ${linkElem.attr("href")} / ${hrefBase} / ${hrefQuery}`);

            // Duplicate params risk 
            // https://stackoverflow.com/a/60828146 

            // Iterate through params and append
            // e.g. [wfu-query-param]="foo,bar,bat"
            var overrideParams = linkElem.attr("wfu-query-param").split(",");

            for (let p of overrideParams) {
                if (urlParams.get(p) != null)
                    newParams.set(p, urlParams.get(p));
            };

            var newHref = hrefBase + '?' + newParams.toString();

            // Update link href
            linkElem.attr("href", newHref);
        }

    }

    // Process elements with the custom attr wfu-query-param
    processAll() {

        const urlParams: URLSearchParams = new URLSearchParams(window.location.search);

        // Skip if there is no querystring
        if (Array.from(urlParams).length == 0)
            return;

        const that = this;

        // Loop all processable elements
        // - All <a> elements
        // - Any element tagged with [wfu-query-param]=?
        // TODO: ignore elems tagged [wfu-query-param]=- or eleme within a DIV tagged as such? 

        // Get all elements with 'wfu-query-param' attribute and all 'a' elements
        let elements = Array.from(document.querySelectorAll('*[wfu-query-param], a'));
        
        elements.forEach((element) => {
            let wfuQueryParam = element.getAttribute('wfu-query-param');
        
            if (element.tagName.toLowerCase() === 'input' && wfuQueryParam) {
                // For INPUT elements, set the value param
                (element as HTMLInputElement).value = urlParams.get(wfuQueryParam) || '';
            } else if (element.tagName.toLowerCase() === 'a') {
                // FORMS
                // IFRAMES 
                this.processLink(element);
            } else if (wfuQueryParam) {
                // For anything else, set the inner text
                element.textContent = urlParams.get(wfuQueryParam) || '';
            }
        });

    }

}

/*
 * Link-processing functions.
 * Fixues up //self/ relative links for CMS.
 */

export class WfuRelativeLinkFixup {

//    config; // Optional config

    // TODO: Support alternatives 

    constructor() {

//        this.config = config;

    }

    // Process elements with the custom attr wfu-query-param
    processAll() {

        // Case insensitive jQuery attribute selector
        // https://stackoverflow.com/a/38923109

        // Get all 'a' elements with 'href' attribute containing '//self/'
        let elements = Array.from(
            document.querySelectorAll("a[href*='//self/' i], a[href$='//self' i]"));

        elements.forEach((element) => {
            // Get the href attribute
            let href = element.getAttribute('href');

            if (href) {
                // Create a new URL object
                const url = new URL(href);

                // Set the href attribute to the pathname of the URL
                element.setAttribute('href', url.pathname);
            }
        });

    }

}



/*
 * Link-processing functions.
 * Fixues up //self/ relative links for CMS.
 */

export class WfuTargetLinks {

//    config; // Optional config

    // TODO: Allow forcing target override 

    constructor() {

//        this.config = config;

    }

    // Process elements with the custom attr wfu-query-param
    processAll() {

        // Get all 'a' elements with 'href' attribute starting with 'http://' or 'https://' and without 'target' attribute
        let elements = Array.from(
            document.querySelectorAll("a[href^='http://']:not([target]), a[href^='https://']:not([target])"));

        elements.forEach((element) => {
            // Get the href attribute
            let href = element.getAttribute('href');

            if (href) {
                console.debug(`retargeting ${href}.`);

                // Set the target attribute to '_blank'
                element.setAttribute('target', '_blank');
            }
        });

    }

}



// Register
Sa5Core.startup(WfuQuery);
// window["sa5"] = window["sa5"] || []; // {};
// window["sa5"]["Sa5Format"] = WebflowFormat;

