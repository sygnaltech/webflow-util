
/*
 * webflow-gallery
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { VERSION } from '../version';  
import { Sa5Gallery, Sa5GalleryManager } from '../webflow-gallery';

const init = () => { 

    //    new Sa5Core().init();
    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-gallery");
    debug.debug (`Initializing v${VERSION}`);

    // Initialize gallery manager 
    const sa5GalleryManager = new Sa5GalleryManager();
    sa5GalleryManager.init();

}
  
// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
} 





 