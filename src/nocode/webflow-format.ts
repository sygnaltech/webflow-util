
/*
 * webflow-format
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WebflowFormat } from '../webflow-format';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import moment = require('moment');

const init = () => { 

//    new Sa5Core().init();
let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-demo");
    debug.debug ("Initializing");

    const webflowFormat = new WebflowFormat();

    /**
     * Format numbers & currency
     */

    const elements = document.querySelectorAll('[wfu-format]') as NodeListOf<HTMLElement>; 

    // Iterate over the matched elements
    elements.forEach((element) => { 

      // Do something with each element
      webflowFormat.formatField(element); 

    });

    /**
     * Format date
     * specify moment formatting string 
     */

    document.querySelectorAll(`[wfu-format-date]`)
      .forEach((element: HTMLElement) => { 

        // Get the format string from the 'wfu-format-date' attribute
        const formatString = element.getAttribute("wfu-format-date");
        
        // Get the original content (assumed to be a valid date)
        const originalContent = element.textContent;
        
        // Use Moment.js to format the date
        const formattedDate = moment(originalContent).format(formatString);

        debug.debug (`formatting date ${originalContent} -> ${formattedDate}`);
        
        // Update the element's content
        element.textContent = formattedDate;
        
        // Remove the 'wfu-format-date' attribute
        element.removeAttribute("wfu-format-date");

      });   

}
  
document.addEventListener("DOMContentLoaded", init)