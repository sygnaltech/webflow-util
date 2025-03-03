
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
import { Sa5Debug } from "../../webflow-core/debug";
import { Sa5EventsActionBase } from "../../webflow-core/actions/actionBase";




export class Sa5EventsActionClass extends Sa5EventsActionBase {

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);

    }

    init() {

        //console.log("init Sa5EventsActionClick")
        
        // Prepare click actions 
        const actionElems = document.querySelectorAll<HTMLElement>('[sa-action-class-add],[sa-action-class-remove],[sa-action-class-toggle]');
        actionElems.forEach((elem: HTMLElement) => {

            const className = elem.getAttribute('sa-action-class-data'); 

            if(elem.hasAttribute('sa-action-class-add')) { 

                const eventName = elem.getAttribute('sa-action-class-add');
                if (eventName) {
                    // Register the event action to trigger a click on the element
                    this.core.events.addEventHandler(eventName, () => { 
    
//                        this.debug.debug("Action: add class", elem); 
                        this.debugTrigger("🕑 add class", eventName); 

                        elem.classList.add(className); 
                    });
                }
    
            } 
            
            if(elem.hasAttribute('sa-action-class-remove')) { 

                const eventName = elem.getAttribute('sa-action-class-remove');
                if (eventName) {
                    // Register the event action to trigger a click on the element
                    this.core.events.addEventHandler(eventName, () => { 
    
//                        this.debug.debug("Action: remove class", elem); 
                        this.debugTrigger("🕑 remove class", eventName); 

                        elem.classList.remove(className); 
                    });
                }

            } 
            
            if(elem.hasAttribute('sa-action-class-toggle')) {

                const eventName = elem.getAttribute('sa-action-class-toggle');
                if (eventName) {
                    // Register the event action to trigger a click on the element
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
