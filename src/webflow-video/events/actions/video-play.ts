
/*
 * webflow-modal 
 * Open Modal Action  
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Scripts Utilities
 */

import { Sa5Attribute } from "../../../globals";
import { booleanValue } from "../../../utils";
import { Sa5Core } from "../../../webflow-core";
import { Sa5Debug } from "../../../webflow-core/debug";
import { Sa5EventsActionBase } from "../../../webflow-core/events/actions/actionBase";
import { Sa5VideoController } from "../../video-controller";




export class Sa5EventsActionVideoPlay extends Sa5EventsActionBase {

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);

    }

    init() {
        
        // Prepare actions 
        const actionElems = document.querySelectorAll<HTMLElement>('[sa-action-video-play]');
        actionElems.forEach((elem: HTMLElement) => {

            const eventName = this.getEventName(elem, 'sa-action-modal-play');
            const videoName = elem.getAttribute('wfu-video'); 
            
            if (eventName) {

                // Register the event action
                this.core.events.addEventHandler(eventName, () => { 

                    this.debugTrigger("🕑 play video", eventName); 

                    const videoController: Sa5VideoController = this.core.controllers["videos"]; 
//                    videoController.display(videoName); 

                });

            }
        });

    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
