
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




export class Sa5EventsTriggerClick extends Sa5EventsTriggerBase {

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);
        
    }

    init() {

        // Prepare click triggers 
        const elems = document.querySelectorAll<HTMLElement>('[sa-trigger-click]');
        elems.forEach((elem: HTMLElement) => {

            const eventName = this.getEventName(elem, 'sa-trigger-click'); 
            if (eventName) {
                elem.addEventListener('click', () => {

                    this.debugTrigger("↗ click", eventName); 

                    this.core.events.executeEvent(eventName);
                });
            }
        });

    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
