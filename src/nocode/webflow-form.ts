
/*
 * webflow-form
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

// import {  } from '../modules/webflow-form';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';

import { Sa5Form } from '../webflow-form';
import { WfuFormHandler } from '../webflow-form/handler/form-handler'; 
import { WfuFormHandlerFactory } from '../webflow-form/handler/form-handler-factory'; 
import { Sa5FormIPInfo } from '../webflow-form/ip-info';

const init = () => { 

    new Sa5Core().init();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-form");
    debug.debug ("Initializing");

    // const sa5Hotkeys = new Sa5Hotkeys();
    // sa5Hotkeys.init();


    // Prepare any tagged forms by appending IP Info
    document.querySelectorAll('[wfu-form-ipinfo]')
      .forEach((element: HTMLElement) => {
//        console.log("test ip-info"); 

        Sa5FormIPInfo.createFromElement(element)
            .init();

    });

    // Catch any submits on forms
    // Which post to Zapier-webhooks 
    document.querySelectorAll('[wfu-form-handler]')
      .forEach((element: HTMLElement) => {

 console.log("installing form handler."); 

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


