
/*
 * webflow-url
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu-query-param] attributes.
 */


import { processTaggedElements, processLinks } from '../modules/webflow-url.js';

$(function () {

    console.log("running WFU-URL");

    processTaggedElements();
    processLinks();

});

