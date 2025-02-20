

/*
 * webflow-html 
 * Sort 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */


import { Sa5Attribute } from '../globals';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';

import Showdown from 'showdown';
import { Sa5CollectionList } from './collection-list';




interface Sa5SortConfig {

//    breakpointChangedCallback?: BreakpointChangedCallback; 

}



export class Sa5Sort {

    config: Sa5SortConfig;
    elem: HTMLElement; 

    constructor(element: HTMLElement, config: Partial<Sa5SortConfig> = {}) {

        this.elem = element; 

        // Merge configs, with defaults
        this.config = {
        }

        let core: Sa5Core = Sa5Core.startup(); 

    }

    init() {

        // Initialize debugging
        let debug = new Sa5Debug("sa5-sort");
        debug.enabled = true; 

        document.querySelectorAll(`[${Sa5Attribute.ATTR_SORT}] [${Sa5Attribute.ATTR_SORT}] [${Sa5Attribute.ATTR_SORT}]`)
            .forEach((element: HTMLElement) => {
                new Sa5CollectionList(element)
                    .sort();
            });
        document.querySelectorAll(`[${Sa5Attribute.ATTR_SORT}] [${Sa5Attribute.ATTR_SORT}]`)
            .forEach((element: HTMLElement) => {
                new Sa5CollectionList(element)
                    .sort();
            });
        document.querySelectorAll(`[${Sa5Attribute.ATTR_SORT}]`)
            .forEach((element: HTMLElement) => {
                new Sa5CollectionList(element)
                    .sort();
            });

    }

}

