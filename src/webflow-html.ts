/*
 * webflow-html
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * HTML Utilities
 */

import { Sa5Core } from './webflow-core'
import { Sa5Debug } from './webflow-core/debug'
import { Sa5HtmlDynamicAttributes } from './webflow-html/dynamic-attributes'
import { Sa5Breakpoints } from './webflow-html/breakpoints'
import { Sa5Markdown } from './webflow-html/markdown';

interface Sa5HtmlConfig {

    dynamicAttributes?: boolean | true;
    handleBreakpointChange?: ((breakpointName: string, e: MediaQueryListEvent) => void) | null;
//    handleOrientationChange?: ((orientationName: string, e: MediaQueryListEvent) => void) | null;

    debug?: boolean | true;

}





export class Sa5Html {
    config: Sa5HtmlConfig;
    debug: Sa5Debug; 
 
    constructor(config: Sa5HtmlConfig) {
        this.config = config;

        this.debug = new Sa5Debug("sa5-html");
        this.debug.enabled = this.config.debug; 

    }

    init() {

        this.debug.debug ("sa5-html init.");

        /**
         * Breakpoints
         */

        let breakpoints = new Sa5Breakpoints({
            breakpointChangedCallback: (breakpointName: string, e: MediaQueryListEvent) => {

                window['sa5'] = window['sa5'] || {};
                const sa5: any = window['sa5'];

                // Get any global handler
                const breakpointChangeHandler = sa5['breakpointChanged'];
                if(breakpointChangeHandler) 
                    breakpointChangeHandler(breakpointName, e);

            }
        });
        breakpoints.init();

        /**
         * Dynamic attributes
         */

        if(this.config.dynamicAttributes) {
            let obj = new Sa5HtmlDynamicAttributes({});
            obj.init();
        }

        /**
         * Markdown
         */

        document.querySelectorAll<HTMLElement>(`markdown, md, [wfu-markdown]`)
        .forEach((element: HTMLElement) => { 

            let md: Sa5Markdown = new Sa5Markdown(element); 
            md.init(); 
  
        }); 
  

    }

}
  
// Register
Sa5Core.startup(Sa5Html);


