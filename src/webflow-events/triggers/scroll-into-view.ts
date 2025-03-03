
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Scripts Utilities
 */

import { Sa5Attribute } from "../../globals";
import { booleanValue } from "../../utils";
import { Sa5Core } from "../../webflow-core";
import { Sa5Debug } from "../../webflow-core/debug";
import { Sa5EventsTriggerBase } from "../../webflow-core/triggers/triggerBase";




export class Sa5EventsTriggerScrollIntoView  extends Sa5EventsTriggerBase {

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);
        
    }

    init() {

        // Prepare click triggers 
        const elems = document.querySelectorAll<HTMLElement>('[sa-trigger-scrollintoview]');

        const observerOptions = {
            root: null, // Observe in the viewport
            rootMargin: "0px",
            threshold: 0.5 // Trigger when at least 50% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const elem = entry.target as HTMLElement;
                    const eventName = elem.getAttribute('sa-trigger-scrollintoview');
                    
                    if (eventName) {
                        this.debug.debug("Trigger: scroll into view", elem); 
                        this.core.events.executeEvent(eventName); 
                        
                        // Stop observing after triggering once
                        observer.unobserve(elem);
                    }
                }
            });
        }, observerOptions);

        elems.forEach(elem => observer.observe(elem));




    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
