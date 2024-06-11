
/*
 * webflow-effects
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

//import { WfuQuery, WfuRelativeLinkFixup, WfuTargetLinks } from '../webflow-url';
import { Sa5Core } from '../webflow-core'; 
import { Sa5Debug } from '../webflow-core/debug';

import { Sa5Attribute } from '../globals';

import { Sa5EffectsController } from '../webflow-effects/effect-controller'; 
import { VERSION } from '../version';

const init = () => { 

    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-effects");
    debug.debug (`Initializing ${VERSION}`);

    (new Sa5EffectsController()).init();

}

document.addEventListener("DOMContentLoaded", init); 