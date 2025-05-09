
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
import { Sa5EventsActionBase } from "./actionBase";




export class Sa5EventsActionScrollIntoView  extends Sa5EventsActionBase {

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);
        
    }

    init() {

        // Prepare click actions 
        const actionElems = document.querySelectorAll<HTMLElement>('[sa-action-scrollintoview]');
        actionElems.forEach((elem: HTMLElement) => {

            const eventName = this.getEventName(elem, 'sa-action-scrollintoview'); 
            if (eventName) { 

                const behavior = (elem.getAttribute("sa-action-scrollintoview:behavior") || "smooth") as ScrollBehavior;
                const block = (elem.getAttribute("sa-action-scrollintoview:block") || "center") as ScrollLogicalPosition;
                const inline = (elem.getAttribute("sa-action-scrollintoview:inline") || "nearest") as ScrollLogicalPosition;
                
                // Register the event action
                this.core.events.addEventHandler(eventName, () => { 

                     this.debugTrigger("🕑 scroll into view", eventName); 

                     elem.scrollIntoView({
                        behavior: behavior, // Smooth scroll animation
                        block: block,    // Aligns it to the center of the view
                        inline: inline   // Ensures it is visible horizontally if scrollable
                    });
                    
                });
            }

        });

    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
