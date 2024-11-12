
/*
 * webflow-cro
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
import Showdown from 'showdown';
import { Sa5Cro } from '../webflow-cro';
//import { Sa5Designer } from '../webflow-core/designer';
//import { Sa5Layouts } from '../webflow-html/layout';

const init = () => { 

//    new Sa5Core().init();

    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-cro");
    debug.enabled = true; 
    debug.debug (`Initializing v${VERSION}`);

    /**
     * 
     */

    /**
     * Initialize core Sa5Html handler
     */

    // Create Sa5Cro
    let obj = new Sa5Cro({
    }).init();


    /**
     * Automatically handle forms to inject UTM data 
     */

    // Sequence items 
//     let sequenceGroupElements = Array.from(
//         document.querySelectorAll("[wfu-cro-form]")
//         );

//     sequenceGroupElements.forEach(element => {

//         // 

// //        sequence(element as HTMLElement);
//     });

    /**
     * If /success page 
     * Auto log an event 
     */
 

    // Check path against config
    // Or, use attribute on <body> 

    // Or, drop an embed block
    // ref transaction ID
    // ref target notification 
    // tracking event 
 

}

// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}