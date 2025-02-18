
/*
 * webflow-calc
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { VERSION } from '../version';
import { Sa5CalcController } from '../webflow-calc';

const init = () => { 

//    new Sa5Core().init();

    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-calc");
    debug.enabled = true; 
    debug.debug (`Initializing v${VERSION}`);

    /**
     * 
     */

    /**
     * Initialize core Sa5Html handler
     */

    // Create Sa5Cro
    let obj = new Sa5CalcController({
    }).init();



 

}

// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}