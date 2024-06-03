
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
import { Sa5Attribute } from '../globals';
import { VERSION } from '../version';

const init = () => { 

//    new Sa5Core().init();
let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-format");
    debug.debug (`Initializing ${VERSION}`);


    const webflowFormat = new WebflowFormat();

    /**
     * Format numbers & currency
     */

    const elements = document.querySelectorAll(
      Sa5Attribute.getBracketed(Sa5Attribute.ATTR_FORMAT) // '[wfu-format]'
      ) as NodeListOf<HTMLElement>; 

    // Iterate over the matched elements
    elements.forEach((element) => { 

      webflowFormat.formatField(element); 

    });

    /**
     * Format date
     * specify moment formatting string 
     */

    document.querySelectorAll(
      Sa5Attribute.getBracketed(Sa5Attribute.ATTR_FORMAT_DATE) // `[wfu-format-date]`
      )
      .forEach((element: HTMLElement) => { 

        webflowFormat.formatDate(element);

      });   

}
  
document.addEventListener("DOMContentLoaded", init)