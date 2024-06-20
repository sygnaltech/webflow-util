
/*
 * webflow-modal
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

//import { WfuQuery, WfuRelativeLinkFixup, WfuTargetLinks } from '../webflow-url';
import { Sa5Core } from '../webflow-core'; 
import { Sa5Debug } from '../webflow-core/debug';

import { Sa5Attribute } from '../globals';

import { Sa5Modal } from '../webflow-modal'; 
import { VERSION } from '../version';

const init = () => { 

    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-modal");
    debug.debug (`Initializing ${VERSION}`);


    // Remove any elements that are cookie-suppressed
    document.querySelectorAll(
        Sa5Attribute.getBracketed(Sa5Attribute.ATTR_MODAL) // "[wfu-modal]"
        ).forEach((element) => {

        const modalElem = element as HTMLElement;

        let modal: Sa5Modal = new Sa5Modal(modalElem);
        modal.init(); 

    });

}

// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}