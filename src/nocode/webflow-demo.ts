
/*
 * webflow-demo
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WebflowInfo } from '../webflow-demo';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5Attribute } from '../globals';
import { VERSION } from '../version';

const init = () => { 

//    new Sa5Core().init();
let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("wfu-demo");
    debug.debug (`Initializing v${VERSION}`);

    const webflowInfo = new WebflowInfo();

    const elements = document.querySelectorAll(
      `a[${Sa5Attribute.ATTR_DEMO_LINK}]` // wfu-demo-link 
      ) as NodeListOf<HTMLLinkElement>; 

    // Iterate over the matched elements
    elements.forEach((element) => { 

      // Do something with each element
      webflowInfo.updateHrefToWebflowPreviewLink(element);

    });

}
  

// Auto-execute on DOM load
if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}