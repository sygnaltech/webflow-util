
/*
 * webflow-layout
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5Layouts } from '../webflow-layout/layout';
import { Sa5ElementGroups } from '../webflow-layout/element-groups';
import { VERSION } from '../version';

const init = () => { 

//    new Sa5Core().init();

    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-layout");
    debug.debug (`Initializing ${VERSION}`);


    /**
     * Layout items
     */

    (new Sa5Layouts).init();

}

// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}