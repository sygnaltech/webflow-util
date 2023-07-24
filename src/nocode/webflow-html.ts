
/*
 * webflow-html
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { Sa5Html } from '../webflow-html'
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { WebflowTabs } from '../webflow-core/tabs';


const init = () => { 

//    new Sa5Core().init();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-html");
    debug.debug ("Initializing");

    // Create Sa5Html
    let obj = new Sa5Html({
        dynamicAttributes: true
    }).init();

    // Tabs
    // Auto-register class on named items? 
    // [wfu-tabs=NAME]
    let tabElements: NodeListOf<Element> = document.querySelectorAll('[wfu-tabs]');
    tabElements.forEach(element => {

        var tabObj = new WebflowTabs(element as HTMLElement);
//        tabObj.init();
//        element["sa5"] = tabObj;


        // Do something with each element
    });
    
    // elements is a NodeList of all elements with the "wfu-tabs" attribute
    
    // [wfu-tab-default]


//    obj.init();



}

// Auto-execute on DOM load
document.addEventListener("DOMContentLoaded", init)