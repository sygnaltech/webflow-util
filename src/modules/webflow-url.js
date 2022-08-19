
/*
 * webflow-url
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Url Utilities
 */

// Process elements with the custom attr wfu-query-param
export var processTaggedElements = function () {

    const urlParams = new URLSearchParams(window.location.search);

    console.log("ready!");
    console.log(`${document.location.search.length} params found.`);
    console.log(`${document.location.search} = query.`);

    if (document.location.search.length) {

        // loop all wfu-query-param="editors" elems 
        $("*[wfu-query-param]").each(function () {

            console.log(`found wfu-query-param element ${this}, ${$(this).attr("wfu-query-param")}`);

            if ($(this).is('input')) {

                // For INPUT parts, set the value param
                $(this).attr(
                    'value',
                    urlParams.get($(this).attr("wfu-query-param"))
                );

                console.log(`set VALUE to ${urlParams.get($(this).attr("wfu-query-param"))}`);

            } else if (!$(this).is('a')) {

                // For anything else, set the inner text
                $(this).text(
                    urlParams.get($(this).attr("wfu-query-param"))
                );

                console.log(`set INNER TEXT to ${urlParams.get($(this).attr("wfu-query-param"))}`);

            }

        });

    }

}

// Process elements with the custom attr wfu-query-param
export var processLinks = function () {

    const urlParams = new URLSearchParams(window.location.search);

    console.log("ready!");
    console.log(`${document.location.search.length} params found.`);
    console.log(`${document.location.search} = query.`);

    if (document.location.search.length) {

        // Loop through all links
        $("a").each(function () {

            if ($(this).attr("wfu-query-param") != '-') {

                //get href
                var hrefParts = $(this).attr("href").split("?");
                var hrefBase = hrefParts[0];
                var hrefQuery = hrefParts[1]; // currently discarded

                // Crude - replaces whole querystring, preserving nothing
                // should merge
                var newHref = hrefBase + document.location.search;

                // Update link href
                $(this).attr("href", newHref);
            }
        });

    }

}
