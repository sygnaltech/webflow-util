
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




export class Sa5EventsTriggerExitIntent extends Sa5EventsTriggerScriptBase {

    private exitTriggered: boolean = false; 
    private eventNames: string[] = []; // Array to store event names

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);
        
    }

    init() {
        // Attach exit intent detection
        this.setupExitIntentListener();

        // Prepare click actions 
        const actionElems = document.querySelectorAll<HTMLScriptElement>('script[handler="trigger.exit-intent"]');
        actionElems.forEach((elem: HTMLElement) => {

            const eventName = this.getEventName(elem); 
 
            if (eventName) {
                // Store the event name in the array
                this.eventNames.push(eventName);

                try {
                    // Parse the JSON content inside the script tag
                    const jsonData = JSON.parse(elem.textContent.trim());

//                    this.core.events.executeEvent(eventName);

                } catch (error) {
                    console.error("Invalid JSON in script tag:", elem, error);
                }

            }

        });

    }

    private setupExitIntentListener() {
        document.addEventListener("mouseleave", this.onMouseLeave.bind(this));
        document.addEventListener("visibilitychange", this.onVisibilityChange.bind(this));
    }

    private onMouseLeave(event: MouseEvent) {
        if (event.clientY <= 0) {
            this.triggerExitIntent("mouse-exit");
        }
    }

    private onVisibilityChange() {
        if (document.hidden) {
            this.triggerExitIntent("tab-switch");
        }
    }

    private triggerExitIntent(source: string) {
        if (this.exitTriggered) return; // Prevent multiple triggers
        this.exitTriggered = true;

        this.debugTrigger(`🚪 Exit intent detected via: ${source}`, source);

        this.eventNames.forEach(eventName => {
            console.log(`Processing event: ${eventName}`);
            // Perform your custom action here
            this.core.events.executeEvent(eventName);
        });

//        const eventName = "exit-intent"; // Can be customized dynamically
    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
