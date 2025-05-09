
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
import { Sa5EventsTriggerScriptBase } from "./triggerScriptBase";




export class Sa5EventsTriggerTimer extends Sa5EventsTriggerScriptBase {

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);
        
    }

    init() {
        
        // Prepare click actions 
        const actionElems = document.querySelectorAll<HTMLScriptElement>('script[handler="trigger.timer"]');
        actionElems.forEach((elem: HTMLElement) => {

            const eventName = this.getEventName(elem); 
 
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

                setTimeout(() => {

                    this.debugTrigger("🕑 timer", eventName, "(first)"); 
                    this.core.events.executeEvent(eventName);

                    // If timerRepeat exists, set up a repeating timer
                    if (timerRepeat) {
                        setInterval(() => { 

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
