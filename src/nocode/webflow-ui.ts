
/*
 * webflow-ui
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { Sa5Rating } from '../webflow-ui';

const init = () => { 

    // Find all rating components
    document.querySelectorAll('div[wfu-ui="rating"]')
      .forEach((element: HTMLElement) => { 

        new Sa5Rating(element).init();

    }); 

}

// Auto-execute on DOM load
document.addEventListener("DOMContentLoaded", init);

