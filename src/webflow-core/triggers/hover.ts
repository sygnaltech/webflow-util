
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
import { Sa5Debug } from "../debug";
import { Sa5EventsTriggerBase } from "./triggerBase";




export class Sa5EventsTriggerHover extends Sa5EventsTriggerBase {

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);
        
    }

    init() {

        // Prepare click triggers 
        const elems = document.querySelectorAll<HTMLElement>('[sa-trigger-mouseenter],[sa-trigger-mouseleave]');
        elems.forEach((elem: HTMLElement) => {

            if(elem.hasAttribute('sa-trigger-mouseenter')) { 

                const eventName = this.getEventName(elem, 'sa-trigger-mouseenter'); 
                if (eventName) {
                    elem.addEventListener('mouseenter', () => {
                        this.debugTrigger("↗ mouseenter", eventName); 
                        this.core.events.executeEvent(eventName);
                    });
                } 

            }             

            // Handle hover-out event
            if (elem.hasAttribute('sa-trigger-mouseleave')) { 

                const eventNameOut = this.getEventName(elem, 'sa-trigger-mouseleave'); 
                if (eventNameOut) {
                    elem.addEventListener('mouseleave', () => {
                        this.debugTrigger("↘ mouseleave", eventNameOut);
                        this.core.events.executeEvent(eventNameOut);
                    });
                }

            }

        });

    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
