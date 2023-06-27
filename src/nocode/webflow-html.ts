
/*
 * webflow-html
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WfuHtml } from '../webflow-html'


const init = () => { 

    let obj = new WfuHtml({
        dynamicAttributes: true
    });

    obj.Process();

}
  
document.addEventListener("DOMContentLoaded", init)