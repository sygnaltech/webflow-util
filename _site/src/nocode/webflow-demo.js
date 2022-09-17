
/*
 * webflow-demo
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { updateHrefToWebflowPreviewLink } from '../modules/webflow-demo.js';

$(function () {

    console.log("running.");

    $("a[wfu-demo-link]").each(function () {
        console.log("parsing.");
        updateHrefToWebflowPreviewLink($(this));

    });

});

