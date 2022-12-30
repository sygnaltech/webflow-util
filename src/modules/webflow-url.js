
/*
 * webflow-url
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Url Utilities
 */

//import { csvToObjects } from './webflow-data-csv.js';
//import { prepareCollectionListDataSource } from '../datasources/webflow-collectionlist-data.js';
//import { loadGoogleSheetFromSpec } from '../datasources/google-sheet-data.js';
//import { HtmlBuilder } from './webflow-html-builder.js';

/*
 * Query-processing functions.
 * Adds querystring data to specific tagged elements.
 */

export class WfuQuery {

    config; // Optional config

    constructor(config) {

        this.config = config;

    }

    processLink = function (linkElem) {

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
    processAll = function () {

        const urlParams = new URLSearchParams(window.location.search);

        // Skip if there is no querystring
        if (Array.from(urlParams).length == 0)
            return;

        const that = this;

        // Loop all processable elements
        // - All <a> elements
        // - Any element tagged with [wfu-query-param]=?
        // TODO: ignore elems tagged [wfu-query-param]=- or eleme within a DIV tagged as such? 
        $("*[wfu-query-param], a").each(function () {

            if ($(this).is('input')) {

                // For INPUT elements, set the value param
                $(this).attr(
                    'value',
                    urlParams.get($(this).attr("wfu-query-param"))
                );

            } else if ($(this).is('a')) {

                // FORMS
                // IFRAMES 

                that.processLink($(this));

            } else {

                // For anything else, set the inner text
                $(this).text(
                    urlParams.get($(this).attr("wfu-query-param"))
                );

            }

        });

    }

}



/*
 * Link-processing functions.
 * Fixues up //self/ relative links for CMS.
 */

export class WfuRelativeLinkFixup {

    config; // Optional config

    // TODO: Support alternatives 

    constructor(config) {

        this.config = config;

    }

    // Process elements with the custom attr wfu-query-param
    processAll = function () {

        // Case insensitive jQuery attribute selector
        // https://stackoverflow.com/a/38923109

        $("a[href*='//self/' i],a[href$='//self' i]").each(function () {

            // https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname
            const url = new URL($(this).attr("href"));
            $(this).attr("href", url.pathname);

        });

    }

}



/*
 * Link-processing functions.
 * Fixues up //self/ relative links for CMS.
 */

export class WfuTargetLinks {

    config; // Optional config

    // TODO: Allow forcing target override 

    constructor(config) {

        this.config = config;

    }

    // Process elements with the custom attr wfu-query-param
    processAll = function () {

        // Find all fully qualified
        $("a[href^='http://']:not([target]),a[href^='https://']:not([target])").each(function () {

            console.debug(`retargeting ${$(this).attr("href")}.`);

            $(this).attr("target", "_blank");

        });

    }

}

