
/*
 * webflow-modal 
 * Open Modal Action  
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
import { Sa5ModalController } from "../modal-controller";




export class Sa5EventsActionModalOpen extends Sa5EventsActionBase {

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);

    }

    init() {
        
        // Prepare click actions 
        const actionElems = document.querySelectorAll<HTMLElement>('[sa-action-modal-open]');
        actionElems.forEach((elem: HTMLElement) => {
            const eventName = elem.getAttribute('sa-action-modal-open');
            const modalName = elem.getAttribute('wfu-modal'); 
            if (eventName) {
                // Register the event action to trigger a click on the element
                this.core.events.addEventHandler(eventName, () => { 

//                    this.debug.debug("Action: open modal", elem); 
                    this.debugTrigger("🕑 open modal", eventName); 

                    const modalController: Sa5ModalController = this.core.controllers["modals"]; 
                    modalController.display(modalName); 

//                    elem.click();
                });
            }
        });

    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
