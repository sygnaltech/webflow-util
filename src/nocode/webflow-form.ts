
/*
 * webflow-form
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

// import {  } from '../modules/webflow-form';
import { Sa5Attribute } from '../globals';
import { VERSION } from '../version';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';

import { Sa5Form } from '../webflow-form';
import { WfuFormHandler } from '../webflow-form/handler/form-handler'; 
import { WfuFormHandlerFactory } from '../webflow-form/handler/form-handler-factory'; 
import { Sa5FormIPInfo } from '../webflow-form/ip-info';

const init = () => { 

//    new Sa5Core().init();
let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-form");
    debug.debug (`Initializing ${VERSION}`);


    // const sa5Hotkeys = new Sa5Hotkeys();
    // sa5Hotkeys.init();


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


console.log("forms", document.querySelectorAll("form"));

console.log("attrs", document.querySelectorAll("[wfu-form-handler]"));

    // Catch any submits on forms
    const formsHandled = document.querySelectorAll(
//        Sa5Attribute.getBracketed(Sa5Attribute.ATTR_FORM_HANDLER) // 
        `div[wfu-form-handler]`
        );

        console.log(formsHandled);

      formsHandled.forEach((element: HTMLElement) => {

 console.log("installing form handler 1."); 



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

/* 
    dataBindAllForms(db) {

        // Create datalists from all data sources
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
        db.data.forEach((data, dataSourceName) => {

            // Create HTML datalists of all data sources
            // for data binding
            createHtmlDataList(
                createDsnMoniker(dataSourceName), // creates a more unique name to avoid element ID conflicts
                data
            );
        });

        // Bind all SELECTS with [wfu-bind] specified
        dataBindAllFormSelects(db);

        // Bind all INPUTS with [wfu-bind] specified
        dataBindAllFormInputs(db);

    }
*/

}

document.addEventListener("DOMContentLoaded", init)
//document.addEventListener("load", init)

