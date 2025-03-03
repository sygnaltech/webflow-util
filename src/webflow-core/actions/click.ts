
/*
 * webflow-trigger 
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
import { Sa5EventsActionBase } from "./actionBase";




export class Sa5EventsActionClick extends Sa5EventsActionBase {

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);

    }

    init() {

        // Prepare click actions 
        const actionElems = document.querySelectorAll<HTMLElement>('[sa-action-click]');
        actionElems.forEach((elem: HTMLElement) => {

            const eventName = this.getEventName(elem, 'sa-action-click'); 

            if (eventName) {
                // Register the event action to trigger a click on the element
                this.core.events.addEventHandler(eventName, () => { 

                    this.debugTrigger("🕑 click", eventName); 

                    elem.click();
                });
            }
        });

    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
