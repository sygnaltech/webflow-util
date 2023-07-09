
/*
 * webflow-format
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WebflowFormat } from '../webflow-format';
import { WfuCore, WfuDebug } from '../webflow-core';

const init = () => { 

    new WfuCore().init();

    // Initialize debugging
    let debug = new WfuDebug("wfu-demo");
    debug.debug ("Initializing");

    const webflowFormat = new WebflowFormat();

    const elements = document.querySelectorAll('[wfu-format]') as NodeListOf<HTMLElement>; 

    // Iterate over the matched elements
    elements.forEach((element) => { 

      // Do something with each element
      webflowFormat.formatField(element); 

    });

}
  
document.addEventListener("DOMContentLoaded", init)