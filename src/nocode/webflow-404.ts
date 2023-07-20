
/*
 * webflow-404
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { Sa5Core } from '../webflow-core'; 
import { Sa5Debug } from '../webflow-core/debug';

const init = () => { 

    new Sa5Core().init();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-404");
    debug.debug ("Initializing");


// parse url, put into search field

// special url detection and redirects






}
  
document.addEventListener("DOMContentLoaded", init)