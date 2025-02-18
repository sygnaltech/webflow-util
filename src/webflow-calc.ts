
/*
 * webflow-calc 
 * Cache Utilities 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Cache Utilities 
 * An advanced utility for retriving and caching values online, for maximum performance.
 */

import { Sa5CacheItemTyped } from './webflow-cache/cache-item-typed';
import { Sa5CacheItem } from './webflow-cache/cache-item';
import { Sa5Core } from './webflow-core'

import { Sa5Debug } from './webflow-core/debug';


//#region WfuCacheItem




interface Sa5CalcConfig {

    // id: string, // Cache instance identifier
    // cacheKey: string, // Cache validation key 
    // prefix: string; 
    debug: boolean;

}


var defaultConfig: Sa5CalcConfig = {

    debug: false, // Debugging mode
  
}


export class Sa5Calc {

    config: Sa5CalcConfig; // Optional config
    debug: Sa5Debug; 
    elem: HTMLElement; 
 
    constructor(el: HTMLElement, customConfig = {}, debug: Sa5Debug) {

        this.elem = el; 

        //        this.config = $.extend({}, defaultWfuCacheConfig, config);
        this.config = { ...defaultConfig, ...customConfig };

        // Enable debugging, if specified
        this.debug = debug; //  new Sa5Debug("sa5-cache");
//        this.debug.enabled = this.config.debug; 

    }
 
    setCalc(value: string) {

        this.elem.innerText = value; 

    }

    init() {

        const method: string | null = this.elem.getAttribute("wfu-calc");
        const sourceType: string | null = this.elem.getAttribute("wfu-calc-source-type");
        const source: string | null = this.elem.getAttribute("wfu-calc-source"); 

        if (!source) {
            console.error("Source attribute not found");
            return;
        }

        switch(sourceType) {
            // Count all elements with 
            case "field": case null: 
                break; 
            case "selector": 
                console.error ("SourceType of selector is not yet supported");
                return;
            case "avg": 
                console.error ("SourceType of sitemap is not yet supported");
                return;
            default:
                console.error ("Source Type unknown");
                return;
        }        

        // Retrieve all elements with attribute wfu-calc-field equal to the source value
        const fieldElements = document.querySelectorAll(`[wfu-calc-field="${source}"]`);

        // Convert NodeList to an array of HTMLElements
        const elements: HTMLElement[] = Array.from(fieldElements).filter((el): el is HTMLElement => el instanceof HTMLElement);

        switch(method) {
            // Count all elements with 
            case "count": 
                this.setCalc(elements.length.toString()); 
                console.log(`Count: ${elements.length}`);
                break; 
            case "sum": 
                // Iterate through the elements, convert innerText to a number and sum them together
                let sum = 0;
                elements.forEach(el => {
                    const value = parseFloat(el.innerText);
                    if (!isNaN(value)) {
                    sum += value;
                    }
                });
                this.setCalc(sum.toString()); 
                console.log(`Sum: ${sum}`);

                break; 
            case "avg": 
                // Iterate through the elements, sum their numeric innerText values and compute the average
                let sumAvg = 0;
                let countAvg = 0;
                elements.forEach(el => {
                    const value = parseFloat(el.innerText);
                    if (!isNaN(value)) {
                        sumAvg += value;
                        countAvg++; 
                    }
                });
                const average = countAvg > 0 ? sumAvg / countAvg : 0;
                this.setCalc(average.toString()); 
                console.log(`Average: ${average}`);
                break;
            default:
                console.error ("Method unknown");
                return; 
        }

    }

}



// Controller
export class Sa5CalcController {

//    console = new WfuDebug("wfu-cache");

    config: Sa5CalcConfig; // Optional config
    debug: Sa5Debug; 
 
    constructor(customConfig = {}) {

        //        this.config = $.extend({}, defaultWfuCacheConfig, config);
        this.config = { ...defaultConfig, ...customConfig };

        // Enable debugging, if specified
        this.debug = new Sa5Debug("sa5-calc");
        this.debug.enabled = this.config.debug; 

    }
 
    init() {

        // Find all wfu-calc items
        // Instantiate Sa5Calc 
        const calcElements = document.querySelectorAll('[wfu-calc]');

        calcElements.forEach((el) => {
            if (el instanceof HTMLElement) {
                var calc: Sa5Calc = new Sa5Calc(el, this.config, this.debug); 
                calc.init(); 
            }
        });
        
    }

}

//#endregion


// Register
Sa5Core.startup(Sa5CalcController);

