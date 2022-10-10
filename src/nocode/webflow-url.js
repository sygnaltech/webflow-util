
/*
 * webflow-url
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu-query-param] attributes.
 */


import { WfuQuery, WfuRelativeLinkFixup, WfuTargetLinks } from '../modules/webflow-url.js';

$(function () {

    console.debug("running WFU-URL");

    // Apply query key/values in-page
    // To tagged elements
    const wfuQuery = new WfuQuery();
    wfuQuery.processAll();

    // Fixup relative links from the CMS
    // HACK: 
    const wfuRelativeLinkFixup = new WfuRelativeLinkFixup();
    wfuRelativeLinkFixup.processAll();

    // Target external links to _blank
    const wfuTargetLinks = new WfuTargetLinks();
    wfuTargetLinks.processAll();

});

