
/*
 * webflow-url
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { Sa5Core } from '../webflow-core'; 
import { Sa5Debug } from '../webflow-core/debug';

import { WfuQuery } from '../webflow-url/query';
import { WfuRelativeLinkFixup } from '../webflow-url/relativeLinkFixup';
import { WfuTargetLinks } from '../webflow-url/targetLinks';

const init = () => { 

    new Sa5Core().init();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-url");
    debug.debug ("Initializing");

    // Process querystring params into tagged elements
    // TODO: configure A link behavior
    new WfuQuery().init();

    // Fixup relative links from the CMS
    // HACK: 
    let elements = Array.from(
        document.querySelectorAll("[wfu-relative-links]"));

    elements.forEach((element: HTMLAnchorElement) => {
        new WfuRelativeLinkFixup(element).init();
    });

    // Target external links to _blank
    // BUGGED: designer change on how links work ?? 
//    new WfuTargetLinks().init();

}
  
document.addEventListener("DOMContentLoaded", init)