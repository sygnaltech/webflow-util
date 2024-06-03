
/*
 * webflow-hotkeys
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { Sa5Hotkeys } from '../webflow-hotkeys';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { VERSION } from '../version';

const init = () => { 

//    new Sa5Core().init();
let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-hotkeys");
    debug.debug (`Initializing ${VERSION}`);


    const sa5Hotkeys = new Sa5Hotkeys();
    sa5Hotkeys.init();

}
  
document.addEventListener("DOMContentLoaded", init)