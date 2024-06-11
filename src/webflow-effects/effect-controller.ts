
/*
 * webflow-effects
 * Effect Controller
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */

import { Sa5Attribute } from '../globals';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5Effect } from './effects/effect-handler';
import { WfuEffectHandlerFactory } from './effects/effect-handler-factory';

/**
 * EVENTS
 */


interface Sa5EffectsControllerConfig {

//    layoutChangedCallback?: LayoutChangedCallback; 

}




export class Sa5EffectsController {

    config: Sa5EffectsControllerConfig;

    // Type guard to check if a function is a UserInfoChangedCallback
    // private isLayoutsChangedCallback(func: Function): func is LayoutChangedCallback {

    //     if(!func) return false;

    //     // Adjust this check as needed
    //     return func.length === 1;
    // }

    constructor(config: Partial<Sa5EffectsControllerConfig> = {}) {

        // Merge configs, with defaults
        // this.config = {
        //     layoutChangedCallback: config.layoutChangedCallback,
        // }

        // TODO: merge 
        this.config = config; 

        let core: Sa5Core = Sa5Core.startup(); 

    }

    init() {

        // Initialize debugging
        let debug = new Sa5Debug("sa5-effects-controller");
        debug.debug ("Effects Controller initialized.", this.config);
    
        let effectsElements = Array.from(
            document.querySelectorAll(
                `[wfu-effect]`
//                Sa5Attribute.getBracketed(Sa5Attribute.ATTR_MODAL) // '[wfu-modal]'
            ));
    
        effectsElements.forEach(element => { 
  
            let handler: Sa5Effect =
                WfuEffectHandlerFactory.createFromElement(element as HTMLElement);

            handler.init(); 

        });    


    }


}




