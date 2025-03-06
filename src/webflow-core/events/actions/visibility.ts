
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




export class Sa5EventsActionVisibility extends Sa5EventsActionBase {

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);

    }

    init() {

        // Prepare click actions 
        const actionElems = document.querySelectorAll<HTMLElement>('[sa-action-display-show],[sa-action-display-hide],[sa-action-display-toggle]');
        actionElems.forEach((elem: HTMLElement) => {

            const displayMode: string = elem.getAttribute('sa-attribute-display:mode') || 'block'; 

//            const className = elem.getAttribute('sa-action-display-show'); 

            if(elem.hasAttribute('sa-action-display-show')) { 

                const eventName = this.getEventName(elem, 'sa-action-display-show'); 
                if (eventName) {
                    // Register the event action
                    this.core.events.addEventHandler(eventName, () => { 
    
                        this.debugTrigger("🕑 visibility - show element", eventName); 

                        elem.style.display = displayMode;  
                    });
                }
    
            } 
            
            if(elem.hasAttribute('sa-action-display-hide')) { 

                const eventName = this.getEventName(elem, 'sa-action-display-hide'); 
                if (eventName) {

                    // Register the event action
                    this.core.events.addEventHandler(eventName, () => { 
    
                        this.debugTrigger("🕑 visibility - hide element", eventName); 

                        elem.style.display = "none";  
                    });

                }

            } 
            
            if(elem.hasAttribute('sa-action-display-toggle')) {

                const eventName = this.getEventName(elem, 'sa-action-display-toggle'); 
                if (eventName) {

                    // Register the event action
                    this.core.events.addEventHandler(eventName, () => { 
    
                        this.debugTrigger("🕑 visibility - toggle element", eventName); 

                        elem.style.display = elem.style.display === "none" ? displayMode : "none";

                    }); 
                    
                }

            }

        });

    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
