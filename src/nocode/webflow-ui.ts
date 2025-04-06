
/*
 * webflow-ui
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { VERSION } from '../version';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5Rating } from '../webflow-ui';

const init = () => { 

    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-ui");
    debug.debug (`Initializing v${VERSION}`);

    // Find all rating components
    document.querySelectorAll('div[wfu-ui="rating"]')
      .forEach((element: HTMLElement) => { 

        new Sa5Rating(element).init();

    }); 

}

// Auto-execute on DOM load
if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}

