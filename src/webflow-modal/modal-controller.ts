
/*
 * webflow-modal
 * Modal Controller
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */

import { Sa5Attribute } from '../globals';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5Modal } from './modal';

/**
 * EVENTS
 */

// type LayoutChangedCallback = (
//     breakpointName: string, 
//     e: MediaQueryListEvent
//     ) => void; 



interface Sa5ModalControllerConfig {

//    layoutChangedCallback?: LayoutChangedCallback; 

}


export enum ModalRule {
    Default = 'default',
    None = 'none'
}

export class Sa5ModalController {

    config: Sa5ModalControllerConfig;
    modals: Map<string, Sa5Modal>;
    modalRule: ModalRule = ModalRule.Default; 

    // Type guard to check if a function is a UserInfoChangedCallback
    // private isLayoutsChangedCallback(func: Function): func is LayoutChangedCallback {

    //     if(!func) return false;

    //     // Adjust this check as needed
    //     return func.length === 1;
    // }

    constructor(config: Partial<Sa5ModalControllerConfig> = {}) {



        // Merge configs, with defaults
        // this.config = {
        //     layoutChangedCallback: config.layoutChangedCallback,
        // }

        // TODO: merge 
        this.config = config; 
        this.modals = new Map<string, Sa5Modal>();

        let core: Sa5Core = Sa5Core.startup(); 

//        const layoutChanged = core.getHandler('layoutChanged'); 

  //      this.config.layoutChangedCallback = layoutChanged as LayoutChangedCallback;

    }

    init() {

        // Initialize debugging
        let debug = new Sa5Debug("sa5-modal-controller");
        debug.debug ("Modal initialized.", this.config);
    
        //
        // Get the Modal Rule
        // Used for Page-specific suppression 
        //

        this.modalRule = ModalRule.Default; 

        const modalRuleAttr = document.body.getAttribute('wfu-modal-rule');
        if (modalRuleAttr) {
            switch (modalRuleAttr) {
                case ModalRule.None:
                    this.modalRule = ModalRule.None;
                    break;
                default:
                    this.modalRule = ModalRule.Default;
                    break;
            }
        }

        debug.debug("Modal rule", this.modalRule); 

        //
        // Process modal elements 
        //

        let modalElements = Array.from(
            document.querySelectorAll<HTMLElement>(
                Sa5Attribute.getBracketed(Sa5Attribute.ATTR_MODAL) // '[wfu-modal]'
            ));
    
        modalElements.forEach(element => { 
  
            // // Create the appropriate layout handler
            // let handler: Sa5LayoutHandler =
            //     Sa5LayoutHandlerFactory.createFromElement(element as HTMLElement);

            // // Perform the layout
            // handler.layout();

            // If Timer-triggered, add timer trigger

            // If Exit-intent-triggered, add timer trigger

            let modal: Sa5Modal = new Sa5Modal(element, this);
            modal.init(); 

            // TODO: error if duplicate 
            let modalKey = element.getAttribute(Sa5Attribute.ATTR_MODAL);
            if (modalKey) {
                this.modals.set(modalKey, modal);
            } 

        });    


        let triggerElements = Array.from(
            document.querySelectorAll(
                Sa5Attribute.getBracketed(Sa5Attribute.ATTR_MODAL_TRIGGER_CLICK)
            ));
    
        triggerElements.forEach(element => { 
            
            element.addEventListener('click', () => {

                let modalKey = element.getAttribute(Sa5Attribute.ATTR_MODAL_TRIGGER_CLICK);
                if (modalKey) {
    // console.log("trigger click", modalKey);
    // console.log(this.modals.get(modalKey)); 

                    this.modals.get(modalKey).display();
                } 
    

            }); 

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




