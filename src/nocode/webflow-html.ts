
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


const init = () => { 

    new Sa5Core().init();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-html");
    debug.debug ("Initializing");

    let obj = new Sa5Html({
        dynamicAttributes: true
    });

    obj.init();

}

// Auto-execute on DOM load
document.addEventListener("DOMContentLoaded", init)