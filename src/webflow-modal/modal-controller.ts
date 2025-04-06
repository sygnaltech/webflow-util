
/*
 * webflow-modal
 * Modal Controller
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 */

import { Sa5Attribute, Sa5GlobalEvent } from '../globals';
import { VERSION } from '../version';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5EventsActionModalOpen } from './actions/modal-open';
import { Sa5Modal } from './modal';
import { Sa5ModalGateController } from './modal-gate-controller';

/**
 * EVENTS
 */

type ModalOpenRequestCallback = (
    modalName: string, 
    ) => void; 
type ModalOpenedCallback = (
    modalName: string, 
    ) => void; 
type ModalCloseRequestCallback = (
    modalName: string, 
    ) => void; 
type ModalClosedCallback = (
    modalName: string, 
    ) => void; 
    
/**
 * CONFIG
 */ 

interface Sa5ModalControllerConfig {

    modalOpenRequestCallback?: ModalOpenRequestCallback; 
    modalOpenedCallback?: ModalOpenedCallback; 
    modalCloseRequestCallback?: ModalCloseRequestCallback; 
    modalClosedCallback?: ModalClosedCallback; 

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

        // Initialize debugging
        let debug = new Sa5Debug("sa5-modals");
        debug.debug (`Initializing v${VERSION}`);

        /**
         * Register Controller
         */

        // Export the modals controller so that it can be accessed 
        // as an SA5 JS API 
        core.setController("modals", this);  

        /**
         * Register Events
         */

        // Prepare modals action handler 
        (new Sa5EventsActionModalOpen(core, debug)).init(); 

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

        /**
         * Process modal elements 
         */

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

        /**
         * Process modal triggers 
         */

        let triggerElements = Array.from(
            document.querySelectorAll(
                Sa5Attribute.getBracketed(Sa5Attribute.ATTR_MODAL_TRIGGER_CLICK)
            ));
    
        triggerElements.forEach(element => { 
            
            // Suppress gated triggers 
            // we want the gate to trigger them 
            if(element.hasAttribute("wfu-modal-gate")) {
 //                console.log("trigger click suppressed ...") 
                return;
            }

            element.addEventListener('click', () => {

                let modalKey = element.getAttribute(Sa5Attribute.ATTR_MODAL_TRIGGER_CLICK);
                if (!modalKey) {
                    console.error("No modal key specified."); 
                    return; 
                }

                let modal: Sa5Modal = this.modals.get(modalKey);
                if (!modal) {
                    console.error(`Requested modal ${modalKey} not found.`); 
                    return; 
                }

                modal.display();
    
            }); 

        });    



        /**
         * Process modal gates 
         */

        const gateController: Sa5ModalGateController = new Sa5ModalGateController(this);
        gateController.init(); 





    //     // Notify any config-specified handler
    //     if(this.config.layoutChangedCallback) {

    //         this.config.layoutChangedCallback(
    //             device as string, 
    //             e
    //         ); 
    //     }

    } 


    /**
     * Close all modals 
     */

    closeAll() {

        this.modals.forEach((modal, key) => {
            console.log(`Closing modal: ${key}`);
            modal.close();
        });

    }

    /**
     * Display modal. 
     * @param modalName Modal name  
     * @param force 
     * @returns 
     */
    async display(modalName: string, force: boolean = false): Promise<boolean> {

        const modal: Sa5Modal = this.modals.get(modalName); 
        if(!modal) {
            console.error(`Modal '${modalName}' not found.`); 
            return; 
        }

        return await modal.display(force); 

    }


    onModalOpenRequest(modalName: string): boolean {
        let core: Sa5Core = Sa5Core.startup();

        // Get any global handlers for the slide next request
//        const handlers = core.getHandlers(Sa5GlobalEvent.EVENT_SLIDE_PREV_REQUEST);
        let allowed = true; // Default to true to allow slide change unless a handler returns false 

        // handlers.forEach(func => {
        //     // Assuming func returns a boolean indicating whether to proceed
        //     const result = func(this, modalName);
        //     if (!result) {
        //         allowed = false; // If any handler returns false, do not advance
        //     }
        // });

        return allowed; // Return whether the slide should change
    }

}




