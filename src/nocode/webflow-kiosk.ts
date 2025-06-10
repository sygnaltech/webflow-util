
/*
 * sa5-kiosk
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { VERSION } from '../version';
import { Sa5Kiosk } from '../webflow-kiosk';

const init = () => { 

    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-kiosk");
    debug.debug (`Initializing v${VERSION}`);

    const sa5Kiosk = new Sa5Kiosk();
    sa5Kiosk.init();

}
  
// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
} 





