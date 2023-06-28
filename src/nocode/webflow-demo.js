
/*
 * webflow-demo
 * DEPRECATED and replaced with TypeScript verion 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { updateHrefToWebflowPreviewLink } from '../modules/webflow-demo.js';

$(function () {

    $("a[wfu-demo-link]").each(function () {

        updateHrefToWebflowPreviewLink($(this));

    });

});

