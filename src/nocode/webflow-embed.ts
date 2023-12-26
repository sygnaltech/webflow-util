/*
 * webflow-embed
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Embed content such as tables, and more. 
 */

import { Sa5Attribute } from '../globals';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5Embed } from '../webflow-embed';
// import { Sa5HtmlDynamicAttributes } from './webflow-html/dynamic-attributes'
// import { Sa5Breakpoints } from './webflow-html/breakpoints'

// interface Sa5EmbedConfig {

// //    dynamicAttributes?: boolean | true;
// //    handleBreakpointChange?: ((breakpointName: string, e: MediaQueryListEvent) => void) | null;
// //    handleOrientationChange?: ((orientationName: string, e: MediaQueryListEvent) => void) | null;

//     debug?: boolean | true;

// }


const initAsync = async() => { 

    //    new Sa5Core().init();
    let core: Sa5Core = Sa5Core.startup();
    
    // Initialize debugging
    let debug = new Sa5Debug("sa5-embed");
//console.log("INITIALIZING.")
    debug.debug ("Initializing");

    debug.debug ("sa5-embed init.");

    // Init embeds
    
    const embedSelectors = [
//        'script[type="wfu-embed"]', // deprecated
        'script[type^="sygnal/embed"]' // e.g. sygnal/embed and sygnal/embed+hson
    ];

    document.querySelectorAll(embedSelectors.join(', '))
        .forEach(async (scriptElement: HTMLScriptElement) => {

        const webflowEmbed = await Sa5Embed.createFromScriptElementAsync(scriptElement); // ?.init();

    });

}

document.addEventListener("DOMContentLoaded", initAsync);




