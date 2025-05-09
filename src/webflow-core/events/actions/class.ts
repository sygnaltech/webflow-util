
/*
 * webflow-trigger 
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




export class Sa5EventsActionClass extends Sa5EventsActionBase {

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);

    }

    init() {

        // Prepare click actions 
        const actionElems = document.querySelectorAll<HTMLElement>('[sa-action-class-add],[sa-action-class-remove],[sa-action-class-toggle]');
        actionElems.forEach((elem: HTMLElement) => {

            const className = elem.getAttribute('sa-action-class-data'); 

            if(elem.hasAttribute('sa-action-class-add')) { 

                const eventName = this.getEventName(elem, 'sa-action-class-add'); 
                if (eventName) {
                    // Register the event action
                    this.core.events.addEventHandler(eventName, () => { 
    
                        this.debugTrigger("🕑 add class", eventName); 

                        elem.classList.add(className); 
                    });
                }
    
            } 
            
            if(elem.hasAttribute('sa-action-class-remove')) { 

                const eventName = this.getEventName(elem, 'sa-action-class-remove'); 
                if (eventName) {

                    // Register the event action
                    this.core.events.addEventHandler(eventName, () => { 
    
                        this.debugTrigger("🕑 remove class", eventName); 

                        elem.classList.remove(className); 
                    });

                }

            } 
            
            if(elem.hasAttribute('sa-action-class-toggle')) {

                const eventName = this.getEventName(elem, 'sa-action-class-toggle'); 
                if (eventName) {

                    // Register the event action
                    this.core.events.addEventHandler(eventName, () => { 
    
                        this.debug.debug("Action: toggle class", elem); 

                        if(elem.classList.contains(className))
                            elem.classList.remove(className); 
                        else
                            elem.classList.add(className); 
                    }); 
                    
                }

            }

        });

    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
