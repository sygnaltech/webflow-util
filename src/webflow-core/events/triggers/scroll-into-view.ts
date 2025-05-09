
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Scripts Utilities
 */

import { Sa5Attribute } from "../../../globals";
import { booleanValue } from "../../../utils";
import { Sa5Core } from "../../../webflow-core";
import { Sa5Debug } from "../../debug";
import { Sa5EventsTriggerBase } from "./triggerBase";




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
                    const eventName = this.getEventName(elem, 'sa-trigger-scrollintoview'); 
                    
                    if (eventName) { 
                        this.debugTrigger("↘ scroll into view", eventName); 
//                        this.debug.debug("Trigger: scroll into view", elem); 
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
