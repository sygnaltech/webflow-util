
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




export class Sa5EventsTriggerTimer extends Sa5EventsTriggerBase {

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);
        
    }

    init() {

        //console.log("init Sa5EventsActionClick")
        
        // Prepare click actions 
        const actionElems = document.querySelectorAll<HTMLScriptElement>('script[handler="trigger.timer"]');
        actionElems.forEach((elem: HTMLElement) => {

            const eventName = elem.getAttribute("event"); 
 
            try {
                // Parse the JSON content inside the script tag
                const jsonData = JSON.parse(elem.textContent.trim());
        
                // Check if the timer field exists
                if (!jsonData.timer) {
                    console.error("No timer defined:", elem);
                    return; 
                } 

                const timerDuration = jsonData.timer * 1000; // Convert to milliseconds
                const timerRepeat = jsonData.timerRepeat ? jsonData.timerRepeat * 1000 : null;

//                this.debugTrigger("timer", eventName); 

                setTimeout(() => {

//                    this.debug.debug("Trigger: timer (first)"); 
                    this.debugTrigger("🕑 timer", eventName, "(first)"); 
                    this.core.events.executeEvent(eventName);

                    // If timerRepeat exists, set up a repeating timer
                    if (timerRepeat) {
                        setInterval(() => { 

//                            this.debug.debug("Trigger: timer (additional)"); 
                            this.debugTrigger("🕑 timer", eventName, "(additional)"); 
                            this.core.events.executeEvent(eventName);

                        }, timerRepeat);
                    }
                }, timerDuration); 

            } catch (error) {
                console.error("Invalid JSON in script tag:", elem, error);
            }

        });

    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
