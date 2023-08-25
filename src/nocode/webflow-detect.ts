
/*
 * webflow-detect
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 * Place in HEAD, do not defer 
 */

import { WebflowVideo } from '../webflow-video';
import { Sa5Core } from '../webflow-core'; 
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5VideoPlayerFactory } from '../webflow-video/player-factory';
import { Sa5Attribute, Sa5GlobalVar } from '../globals';
import { Sa5Detect } from '../webflow-detect';

// type VideoTimeUpdateCallback = (name: string, time: number, totalTime: number, percent: number) => void;





// Region (Abbreviation: Reg.)
// Zone (Abbreviation: Zn.)
// Bloc (Often used in terms like "trade bloc" or "economic bloc")
// Cluster (Abbreviation: Cl.)
// Grouping (Abbreviation: Grp.)
// Assembly (Abbreviation: Asm.)
// Alliance (Often used in political or military contexts)
// Federation (Abbreviation: Fed.)
// Union (Abbreviation: Un.)
// Sector (Abbreviation: Sec.)


// Run IIFE immediately 
(async() => {

    console.log("DETECT");  

    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-detect");
    debug.debug ("Initializing");

    /**
     * Get IP Info, GeoLocation 
     */

    // Usage
    let detect = new Sa5Detect(); 

    // Process Rules 
    let routingRules = window[Sa5GlobalVar.GLOBAL_ROUTE]; 

    if (routingRules)
        detect.routingRules.load(routingRules);


    await detect.applyDetectContextAsync(); 

})();

const init = async() => { 
}

document.addEventListener("DOMContentLoaded", init); 