
/*
 * webflow-modal
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

//import { WfuQuery, WfuRelativeLinkFixup, WfuTargetLinks } from '../webflow-url';
import { Sa5Core } from '../webflow-core'; 
import { Sa5Debug } from '../webflow-core/debug';

import { Sa5Attribute } from '../globals';

import { Sa5Dismiss } from '../webflow-modal/dismiss'; 
import { VERSION } from '../version';
import { Sa5ModalController } from '../webflow-modal/modal-controller';

const init = () => { 

    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-modal");
    debug.debug (`Initializing v${VERSION}`);

    // Handle modals
    const controller: Sa5ModalController = new Sa5ModalController();
    controller.init(); 

    // Dismiss any elements that are cookie-suppressed
    document.querySelectorAll(
        Sa5Attribute.getBracketed(Sa5Attribute.ATTR_DISMISS) 
    ).forEach((element) => {

        const dismissElem = element as HTMLElement;

        let modal: Sa5Dismiss = new Sa5Dismiss(dismissElem);
        modal.init(); 

    });

}

// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}