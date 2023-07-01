
/*
 * webflow-html
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WfuHtml } from '../webflow-html'
import { WfuCore, WfuDebug } from '../webflow-core';


const init = () => { 

    new WfuCore().init();

    // Initialize debugging
    let debug = new WfuDebug("wfu-html");
    debug.debug ("Initializing");

    let obj = new WfuHtml({
        dynamicAttributes: true
    });

    obj.Process();

}
  
document.addEventListener("DOMContentLoaded", init)