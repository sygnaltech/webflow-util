
/*
 * webflow-form
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

// import {  } from '../modules/webflow-form';
import { Sa5Attribute } from '../globals';
import { VERSION } from '../version';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';

import { Sa5Form } from '../webflow-form';
import { Sa5FormSelect } from '../webflow-form/form-select';
import { WfuFormHandler } from '../webflow-form/handler/form-handler'; 
import { WfuFormHandlerFactory } from '../webflow-form/handler/form-handler-factory'; 
import { Sa5FormIPInfo } from '../webflow-form/ip-info';

const init = () => { 

    //    new Sa5Core().init();
    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-form");
    debug.debug (`Initializing v${VERSION}`);

    // const sa5Hotkeys = new Sa5Hotkeys();
    // sa5Hotkeys.init();

    // Find and process all forms  
    // This part will handle features like pre-submit prep 

    document.querySelectorAll("[wfu-form]").forEach((element: HTMLElement) => {

        let form: Sa5Form = new Sa5Form(element); 
        form.init();

    });


    // TODO: Move into Form class 

    // Prepare any tagged forms by appending IP Info
    document.querySelectorAll(
        Sa5Attribute.getBracketed(Sa5Attribute.ATTR_FORM_IPINFO) // '[wfu-form-ipinfo]'
        )
      .forEach((element: HTMLElement) => {
//        console.log("test ip-info"); 

        Sa5FormIPInfo.createFromElement(element)
            .init();

    });

    debug.debug("Checking for forms", Sa5Attribute.getBracketed(Sa5Attribute.ATTR_FORM_HANDLER));

    // Catch any submits on forms
    const formsHandled = document.querySelectorAll(
//        Sa5Attribute.getBracketed(Sa5Attribute.ATTR_FORM_HANDLER) // 
        `div[wfu-form-handler]`
    );

    console.log(formsHandled);

    formsHandled.forEach((element: HTMLElement) => {

        debug.debug("Form detected, installing form handler.");

        WfuFormHandlerFactory.createFromElement(element)
            .init();

        // (new WfuFormIPInfo(element))
        //     .appendIPInfo();

        // const handlerName = element.getAttribute("wfu-form-handler");
        // var handler;

        // handler = WfuFormHandlerFactory
        //     .create(handlerName, element);

    });

    // Catch any submits on forms
    const formSelects = document.querySelectorAll(
        //        Sa5Attribute.getBracketed(Sa5Attribute.ATTR_FORM_HANDLER) // 
        `select[${Sa5Attribute.ATTR_FORM_SELECT}]`
//        `select[wfu-form-select]`
    );
        
    console.log(formSelects);

    formSelects.forEach((element: HTMLSelectElement) => {
        
//        console.log("installing form handler 1."); 
//        debug.debug("Form detected, installing form handler.");

        const select: Sa5FormSelect = new Sa5FormSelect(element); 
        select.init(); 

    });

}

// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}

