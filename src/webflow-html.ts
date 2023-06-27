/*
 * webflow-html
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * HTML Utilities
 */

import { WfuHtmlDynamicAttributes } from './webflow-html/dynamic-attributes'


interface Config {
    dynamicAttributes: boolean;
}


export class WfuHtml {
    config: Config;

    constructor(config: Config) {
        this.config = config;
    }

    Process() {

        if(this.config.dynamicAttributes) {
            let obj = new WfuHtmlDynamicAttributes({});
            obj.Process();
        }

    }

}
  
  
