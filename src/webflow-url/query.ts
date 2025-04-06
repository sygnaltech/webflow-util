
/*
 * query
 * Adds querystring data to specific tagged elements.
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Url Utilities
 */

import { Sa5Core } from '../webflow-core'



export class WfuQuery {

//    config; // Optional config

    constructor() {

//        this.config = config;

    }

    // Process elements with the custom attr wfu-query-param
    init() {

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
        let elements = Array.from(
            document.querySelectorAll('*[wfu-query-param], a'));
        
        elements.forEach((element) => {
            let wfuQueryParam = element.getAttribute('wfu-query-param');
        
            if (element.tagName.toLowerCase() === 'input' && wfuQueryParam) {
                // For INPUT elements, set the value param
                (element as HTMLInputElement).value = urlParams.get(wfuQueryParam) || '';
            } else if (element.tagName.toLowerCase() === 'a') {
                // FORMS
                // IFRAMES 

                // DISABLED: temporarily 
//                this.processLink(element as HTMLLinkElement);
            } else if (wfuQueryParam) {
                // For anything else, set the inner text
                element.textContent = urlParams.get(wfuQueryParam) || '';
            }
        });

    }

    processLink(linkElem: HTMLLinkElement) {

        const urlParams = new URLSearchParams(window.location.search);

        // Skip if no href
        if (linkElem.getAttribute("href") == null)
            return;

        // Disassemble url 
        var hrefParts = linkElem.getAttribute("href").split("?");
        var hrefBase = hrefParts[0];
        var hrefQuery = hrefParts[1];

        const newParams = new URLSearchParams(hrefQuery);

        // Handle suppressed elements
        if (linkElem.getAttribute("wfu-query-param") == '-') {

            // Skip, do nothing
            //        console.log(`Processing - / ${linkElem.attr("href")}`);

            // Handle all-params elements 
            // https://stackoverflow.com/questions/1318076/jquery-hasattr-checking-to-see-if-there-is-an-attribute-on-an-element
        } else if (linkElem.getAttribute("wfu-query-param") == '*' || linkElem.getAttribute("wfu-query-param") == undefined || linkElem.hasAttribute("wfu-query-param") == false) {

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
            linkElem.setAttribute("href", newHref);

            // Handle specific-params 
        } else {

            //        console.log(`Process MULTI / ${linkElem.attr("href")} / ${hrefBase} / ${hrefQuery}`);

            // Duplicate params risk 
            // https://stackoverflow.com/a/60828146 

            // Iterate through params and append
            // e.g. [wfu-query-param]="foo,bar,bat"
            var overrideParams = linkElem.getAttribute("wfu-query-param").split(",");

            for (let p of overrideParams) {
                if (urlParams.get(p) != null)
                    newParams.set(p, urlParams.get(p));
            };

            var newHref = hrefBase + '?' + newParams.toString();

            // Update link href
            linkElem.setAttribute("href", newHref);
        }

    }

}
