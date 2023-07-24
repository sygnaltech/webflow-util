
/*
 * webflow-utils
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WfuQuery, WfuRelativeLinkFixup, WfuTargetLinks } from '../webflow-url';
import { Sa5Core } from '../webflow-core'; 
import { Sa5Debug } from '../webflow-core/debug';

const init = () => { 

    new Sa5Core().init();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-url");
    debug.debug ("Initializing");

    const wfuQuery = new WfuQuery();
    wfuQuery.processAll();

    // Fixup relative links from the CMS
    // HACK: 
    const wfuRelativeLinkFixup = new WfuRelativeLinkFixup();
    wfuRelativeLinkFixup.processAll();

    // Target external links to _blank
    const wfuTargetLinks = new WfuTargetLinks();
    wfuTargetLinks.processAll();

}
  
document.addEventListener("DOMContentLoaded", init)