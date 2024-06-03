
/*
 * webflow-utils
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

//import { WfuQuery, WfuRelativeLinkFixup, WfuTargetLinks } from '../webflow-url';
import { VERSION } from '../version';
import { Sa5Core } from '../webflow-core'; 
import { Sa5Debug } from '../webflow-core/debug';

//import { loadAllData } from '../modules/webflow-data.js';

import { Sa5Datastore } from '../webflow-data';
import { WfuDataBinder} from '../webflow-databind';

//import { dataBindAllForms } from '../modules/webflow-form.js';

// export var dataBindAll = function () {

const init = () => { 

//    new Sa5Core().init();
    let core: Sa5Core = Sa5Core.startup();

//    console.log("webflow-data", "init"); 

    // Initialize debugging
    let debug = new Sa5Debug("sa5-data");
    debug.debug (`Initializing ${VERSION}`);

    // Create datastore
    var ds: Sa5Datastore = new Sa5Datastore();
    ds.init();

    // BUG: DEPRECATED 
    // Bind all form elements
//    dataBindAllForms(db);

    let binder = new WfuDataBinder(ds).bindAll();

}

document.addEventListener("DOMContentLoaded", init); 