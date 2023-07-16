
/*
 * webflow-demo
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WebflowInfo } from '../webflow-demo';
import { Sa5Core, Sa5Debug } from '../webflow-core.js';

const init = () => { 

    new Sa5Core().init();

    // Initialize debugging
    let debug = new Sa5Debug("wfu-demo");
    debug.debug ("Initializing");

    const webflowInfo = new WebflowInfo();

    const elements = document.querySelectorAll('a[wfu-demo-link]') as NodeListOf<HTMLLinkElement>; 

    // Iterate over the matched elements
    elements.forEach((element) => { 

      // Do something with each element
      webflowInfo.updateHrefToWebflowPreviewLink(element);

    });

}
  
document.addEventListener("DOMContentLoaded", init)