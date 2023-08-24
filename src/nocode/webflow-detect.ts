
/*
 * webflow-detect
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WebflowVideo } from '../webflow-video';
import { Sa5Core } from '../webflow-core'; 
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5VideoPlayerFactory } from '../webflow-video/player-factory';
import { Sa5Attribute } from '../globals';
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




const init = async() => { 



    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-detect");
    debug.debug ("Initializing");


    /**
     * Get IP Info, GeoLocation 
     */

    // Usage
    let detect = new Sa5Detect(); 
    detect.countries["NZ"] = "/nz";
    detect.countries["AU"] = "/au";
    detect.countries["US"] = "/us";
    detect.countries["GB"] = "/gb";

    // const countries: CountryPathMap = new Map([
    //     ["NZ", "/nz"],
    //     ["AU", "/au"],
    //     ["US", "/us"],
    //     ["GB", "/gb"]
    // ]);

    detect.loadOrGetUserInfo(); 
    detect.applyDetectContext();

}
  
document.addEventListener("DOMContentLoaded", init)