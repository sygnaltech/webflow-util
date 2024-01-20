

/*
 * webflow-html
 * Layouts
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */


import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';

/**
 * EVENTS
 */

type LayoutChangedCallback = (
    breakpointName: string, 
    e: MediaQueryListEvent
    ) => void; 



interface Sa5LayoutsConfig {

    layoutChangedCallback?: LayoutChangedCallback; 

}




export class Sa5Layouts {

    config: Sa5LayoutsConfig;

    // Type guard to check if a function is a UserInfoChangedCallback
    private isLayoutsChangedCallback(func: Function): func is LayoutChangedCallback {

        if(!func) return false;

        // Adjust this check as needed
        return func.length === 1;
    }

    constructor(config: Partial<Sa5LayoutsConfig> = {}) {

        // Merge configs, with defaults
        this.config = {
            layoutChangedCallback: config.layoutChangedCallback,
        }

        let core: Sa5Core = Sa5Core.startup(); 

        const layoutChanged = core.getHandler('layoutChanged'); 

        this.config.layoutChangedCallback = layoutChanged as LayoutChangedCallback;

    }

    init() {

        // Initialize debugging
        let debug = new Sa5Debug("sa5-html");
        debug.debug ("Layouts initialized.", this.config);
    


    //     // Notify any config-specified handler
    //     if(this.config.layoutChangedCallback) {

    //         this.config.layoutChangedCallback(
    //             device as string, 
    //             e
    //         ); 
    //     }

    }


}



