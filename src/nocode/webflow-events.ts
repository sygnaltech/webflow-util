
/*
 * webflow-events 
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
import { VERSION } from '../version';
import { Sa5EventsTriggerClick } from '../webflow-core/events/triggers/click';
import { Sa5EventsActionClick } from '../webflow-core/events/actions/click';
import { Sa5EventsActionAlert } from '../webflow-core/events/actions/alert';
import { Sa5EventsTriggerScrollIntoView } from '../webflow-core/events/triggers/scroll-into-view';
import { Sa5EventsActionClass } from '../webflow-core/events/actions/class';
import { Sa5EventsTriggerTimer } from '../webflow-core/events/triggers/timer';

const init = () => { 

    let core: Sa5Core = Sa5Core.startup();


    // Initialize debugging
    let debug = new Sa5Debug("sa5-events");
    debug.debug (`Initializing v${VERSION}`);

    // Prepare click trigger & action 
    (new Sa5EventsTriggerClick(core, debug)).init();  
    (new Sa5EventsActionClick(core, debug)).init(); 

    // Prepare alert action
    (new Sa5EventsActionAlert(core, debug)).init(); 

    // Prepare Scroll-into-view trigger 
    (new Sa5EventsTriggerScrollIntoView(core, debug)).init(); 

    // Prepare Class adder action 
    (new Sa5EventsActionClass(core, debug)).init(); 

    // Prepare timer trigger  
    (new Sa5EventsTriggerTimer(core, debug)).init(); 


    // const elems = document.querySelectorAll<HTMLElement>('[sa-trigger-click]');
    // elems.forEach((elem: HTMLElement) => {
    //     const eventName = elem.getAttribute('sa-trigger-click');
    //     if (eventName) {
    //         elem.addEventListener('click', () => {
    //             core.events.executeEvent(eventName);
    //         });
    //     }
    // });

    // // Prepare click actions 
    // const actionElems = document.querySelectorAll<HTMLElement>('[sa-action-click]');
    // actionElems.forEach((elem: HTMLElement) => {
    //     const eventName = elem.getAttribute('sa-action-click');
    //     if (eventName) {
    //         // Register the event action to trigger a click on the element
    //         core.events.addEventHandler(eventName, () => { 
    //             elem.click();
    //         });
    //     }
    // });

}

// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}