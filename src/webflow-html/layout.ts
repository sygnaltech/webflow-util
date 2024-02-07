
/*
 * webflow-html
 * Layouts
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */

import { Sa5Attribute } from '../globals';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5LayoutHandler } from './layout/handler/layout-handler';
import { Sa5LayoutHandlerFactory } from './layout/handler/layout-handler-factory';

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
    
        let layoutElements = Array.from(
            document.querySelectorAll(
                Sa5Attribute.getBracketed(Sa5Attribute.ATTR_LAYOUT) // '[wfu-layout]'
            ));
    
        layoutElements.forEach(element => { 
  
            // Create the appropriate layout handler
            let handler: Sa5LayoutHandler =
                Sa5LayoutHandlerFactory.createFromElement(element as HTMLElement);

            // Perform the layout
            handler.layout();

        });    

    //     // Notify any config-specified handler
    //     if(this.config.layoutChangedCallback) {

    //         this.config.layoutChangedCallback(
    //             device as string, 
    //             e
    //         ); 
    //     }

    }


}






    // Layout 
    /* 
    $("data[layout-target-id]").each(function() {
        
        const containerId = $(this).attr("layout-target-id");
    //    console.debug(`item: ${containerId}`);
        
        var $target = $(`data[layout-container-id='${containerId}']`)
    //    console.debug($target);
        $target=$target.closest("[layout-container]");
    //    console.debug($target);
    
        const $item = $(this).closest("[layout-item]"); 
        $item.appendTo($target);
    }); 
    */