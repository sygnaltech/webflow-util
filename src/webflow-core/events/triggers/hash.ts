
/*
 * webflow-core
 * Hash Trigger
 *  
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 */

import { Sa5Attribute } from "../../../globals";
import { booleanValue } from "../../../utils";
import { Sa5Core } from "../../../webflow-core";
import { Sa5Debug } from "../../debug";
import { Sa5EventsTriggerBase } from "./triggerBase";
import { Sa5EventsTriggerScriptBase } from "./triggerScriptBase";


    // Default configuration
    const defaultConfig = {
        "@context": "https://attr.sygnal.com",
        "@version": "0.1",
        "hash": null,
        "triggerOnLoad": false,
        "triggerOnChange": false,
        "triggerTimes": 1
    };

export class Sa5EventsTriggerHash  extends Sa5EventsTriggerScriptBase { 

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);
        
    }

    init() {
        
        // Prepare click actions 
        const actionElems = document.querySelectorAll<HTMLScriptElement>('script[handler="trigger.hash"]');
        actionElems.forEach((elem: HTMLElement) => {

            const eventName = this.getEventName(elem); 
 
            try {
                // Parse the JSON content inside the script tag
                const jsonData = JSON.parse(elem.textContent.trim());
        

                // Merge the defaults with the parsed JSON
                const config = this.mergeConfig(defaultConfig, jsonData);

                // Coerce "yes"/"no" to boolean
                config.triggerOnLoad = this.coerceBoolean(config.triggerOnLoad);
                config.triggerOnChange = this.coerceBoolean(config.triggerOnChange);

                // Check for required fields
                if (!config.hash) {
                    console.error("⚠️ No hash defined:", elem);
                    return;
                }


                this.debugTrigger("🕑 hash", eventName, "(first)"); 
                this.core.events.executeEvent(eventName);


            } catch (error) {
                console.error("Invalid JSON in script tag:", elem, error);
            }

        });

    }

}


// Export class to SA5 API 
// Sa5Core.startup(Sa5Button);
