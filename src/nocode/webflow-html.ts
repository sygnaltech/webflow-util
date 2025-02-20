
/*
 * webflow-html
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { Sa5Html } from '../webflow-html'
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5Editor } from '../webflow-core/webflow-editor'; 
import { sequence, decodeHTML } from '../utils';
import { Sa5CollectionList } from '../webflow-html/collection-list';
// import { HtmlBuilder } from '../modules/webflow-html-builder';
import { Sa5Attribute } from '../globals';
import { VERSION } from '../version';
import { Sa5EncodedEmail } from '../webflow-html/encoded-email';
// import Showdown from 'showdown';
//import { Sa5Designer } from '../webflow-core/designer';
//import { Sa5Layouts } from '../webflow-html/layout';

const init = () => { 

//    new Sa5Core().init();

    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-html");
    debug.debug (`Initializing v${VERSION}`);

    // Dynamic Attributes
//    applyDynamicAttributes();

    /**
     * Initialize core Sa5Html handler
     */

    // Create Sa5Html
    let lib = new Sa5Html({
        dynamicAttributes: true
    }).init();

}

// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}