/*
 * webflow-html
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * HTML Utilities
 */

import { WfuHtmlDynamicAttributes } from './webflow-html/dynamic-attributes'
import { WfuBreakpoints } from './webflow-html/breakpoints'

interface Config {
    dynamicAttributes?: boolean | true;
    handleBreakpointChange?: ((e: MediaQueryListEvent) => void) | null;
}




export class WfuHtml {
    config: Config;

    constructor(config: Config) {
        this.config = config;
    }

    init() {

        // Init breakpoints
        let breakpoints = new WfuBreakpoints({
            handleBreakpointChange: (e: MediaQueryListEvent) => {
                // handle the breakpoint change here
            }
        });
        breakpoints.init();

        // Init dynamic attributes
        if(this.config.dynamicAttributes) {
            let obj = new WfuHtmlDynamicAttributes({});
            obj.init();
        }

    }

}
  
  
