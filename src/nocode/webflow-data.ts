
/*
 * webflow-utils
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

//import { WfuQuery, WfuRelativeLinkFixup, WfuTargetLinks } from '../webflow-url';
import { Sa5Core } from '../webflow-core'; 
import { Sa5Debug } from '../webflow-core/debug';

import { loadAllData } from '../modules/webflow-data.js';
import { dataBindAllForms } from '../modules/webflow-form.js';

// export var dataBindAll = function () {

const init = () => { 

    new Sa5Core().init();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-data");
    debug.debug ("Initializing");

    // Create database
    var db = loadAllData();

    // Bind all form elements
    dataBindAllForms(db);

}

document.addEventListener("DOMContentLoaded", init)