
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




export class Sa5EventsActionAlert extends Sa5EventsActionBase {

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);

    }

    init() {

//console.log("init Sa5EventsActionClick")

        // Prepare click actions 
        const actionElems = document.querySelectorAll<HTMLScriptElement>('script[handler="action.alert"]');
        actionElems.forEach((elem: HTMLElement) => {

            const eventName = elem.getAttribute("event"); 

            try {
                // Parse the JSON content inside the script tag
                const jsonData = JSON.parse(elem.textContent.trim());
          
                // Check if the message field exists and show an alert
                if (!jsonData.message) {
                    console.error("No alert message defined:", elem);
                    return; 
                }

                // Register the event action to trigger a click on the element
                this.core.events.addEventHandler(eventName, () => { 

//                    this.debug.debug("Action: alert", elem); 
                    this.debugTrigger("🕑 alert", eventName); 

                    alert(jsonData.message); 
                });

              } catch (error) {
                console.error("Invalid JSON in script tag:", elem, error);
              }

        });

    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
