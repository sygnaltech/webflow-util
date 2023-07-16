/*
 * webflow-html
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * HTML Utilities
 */

import { Sa5Handler } from './webflow-core'
import { Sa5HtmlDynamicAttributes } from './webflow-html/dynamic-attributes'
import { Sa5Breakpoints } from './webflow-html/breakpoints'

interface Sa5HtmlConfig {
    dynamicAttributes?: boolean | true;
    handleBreakpointChange?: ((breakpointName: string, e: MediaQueryListEvent) => void) | null;
}




  


export class Sa5Html {
    config: Sa5HtmlConfig;

    constructor(config: Sa5HtmlConfig) {
        this.config = config;
    }

    init() {

        console.log ("sa5-html init.");

        // Init breakpoints
        let breakpoints = new Sa5Breakpoints({
            handleBreakpointChange: (breakpointName: string, e: MediaQueryListEvent) => {

//                if (!e.matches)
//                    return;

                window['sa5'] = window['sa5'] || {};
                const sa5: any = window['sa5'];
    
//console.log("sa5", sa5);

                const breakpointChangeHandler = sa5['breakpointChangeHandler']; // sa5.find(item => item[0] === 'breakpointChange');
                
                console.log("x breakpointChangeHandler", breakpointChangeHandler);

if(breakpointChangeHandler) 
    breakpointChangeHandler(breakpointName, e);

                // if(window['sa5'])
                // handle the breakpoint change here
            }
        });
        breakpoints.init();

        // Init dynamic attributes
        if(this.config.dynamicAttributes) {
            let obj = new Sa5HtmlDynamicAttributes({});
            obj.init();
        }

    }

}
  
// Register
window["sa5"] = window["sa5"] || {};
window["sa5"]["Sa5Html"] = Sa5Html;


