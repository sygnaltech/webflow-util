
/*
 * webflow-ix
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

//import { WfuQuery, WfuRelativeLinkFixup, WfuTargetLinks } from '../webflow-url';
import { Sa5Core } from '../webflow-core'; 
import { Sa5Debug } from '../webflow-core/debug';

import { Sa5Attribute } from '../globals';
import { VERSION } from '../version';

const init = () => { 

    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-ix");
    debug.debug (`Initializing v${VERSION}`);


    // Prepare triggers
    // All <a> elements with href starting with ##
    const links = document.querySelectorAll('a[href^="##"]');
    links.forEach((link: HTMLAnchorElement) => {

        // Extract the value after ##
        const value = link.getAttribute('href')?.substring(2);

        // Set the extracted value to the custom attribute [wfu-ix-trigger]
        if (value) {
            link.setAttribute(Sa5Attribute.ATTR_IX_TRIGGER, value);
        }

        // Reset link
        link.setAttribute('href', '#');

    });

    // Wire up triggers
    // Select all elements with the custom attribute [wfu-ix-trigger]
    const triggerElements = document.querySelectorAll(`[${Sa5Attribute.ATTR_IX_TRIGGER}]`);
    debug.debug(`setting up ${triggerElements.length} triggers.`); 
    triggerElements.forEach((elem: HTMLElement) => {
        elem.addEventListener('click', (event) => {
            // Prevent default action (if it's a link or another clickable element)
            event.preventDefault();

            debug.debug("trigger clicked", elem.getAttribute(Sa5Attribute.ATTR_IX_TRIGGER));

            // Get the wfu-ix-trigger attribute value
            const triggerId = elem.getAttribute(Sa5Attribute.ATTR_IX_TRIGGER);

            if (triggerId) {
                // Find the element with the matching [wfu-ix-id] value
                const targetElem = document.querySelector(`[${Sa5Attribute.ATTR_IX_ID}="${triggerId}"]`);

                // If the target element is found, simulate a click on it
                if (targetElem) {
                    (targetElem as HTMLElement).click();
                }
            }
        });
    });

}

// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}