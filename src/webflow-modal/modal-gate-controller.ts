
/*
 * webflow-modal
 * Modal Gate
 * 
 * A special class for handling gating-related activities. 
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 */

import { Sa5Attribute } from '../globals';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { gsap } from "gsap";
import { Sa5ModalController, ModalRule } from './modal-controller';
import { Sa5Modal } from './modal';

/**
 * EVENTS
 */

// type LayoutChangedCallback = (
//     breakpointName: string, 
//     e: MediaQueryListEvent
//     ) => void; 


enum ModalGateSuppressMode {
    None = 'none',
    Forever = 'forever',
    Session = 'session',
    Duration = 'duration',
}

interface Sa5ModalGateControllerConfig {

//    layoutChangedCallback?: LayoutChangedCallback; 

//    mode: ModalMode; // popup | modal
//    return button value 

}


export class Sa5ModalGateController {

    controller?: Sa5ModalController;
    config: Sa5ModalGateControllerConfig;
    elem: HTMLElement; 
    modalContainer: HTMLDivElement; 
    timer?: number; // ms
    suppressMode: ModalGateSuppressMode = ModalGateSuppressMode.None;
    suppressDuration: string; // SA5 duration 
    // name: string;

    constructor(controller?: Sa5ModalController, config: Partial<Sa5ModalGateControllerConfig> = {}) { 

        this.controller = controller; 

    }

    static getGateKey(modalName: string) {

        return `sa5-modal-gate_${modalName}`; 

    }

    static isGateOpen(modalName: string): boolean { 

        const gateOpen = localStorage.getItem(
            Sa5ModalGateController.getGateKey(modalName)
        );

        return gateOpen !== null;
    }

    static openGate(modalName: string) {

        localStorage.setItem(
            Sa5ModalGateController.getGateKey(modalName), "true"
        );

    }

    static closeGate(modalName: string) {

        localStorage.removeItem(
            Sa5ModalGateController.getGateKey(modalName)
        );

    }

    init() {

        this.installModalGates(); 

    }

    //#region INSTALL GATING TRIGGERS 

    /**
     * Install modal gates
     * [wfu-modal-gate]
     */

    installModalGates() { 

        // Get all gates 
        let gateElements: Array<HTMLElement> = Array.from(
            document.querySelectorAll( 
                Sa5Attribute.getBracketed(
                    Sa5Attribute.ATTR_MODAL_GATE
                )
            ));

        gateElements.forEach(element => { 

            const gateID: string = element.getAttribute(Sa5Attribute.ATTR_MODAL_GATE); 
            const gateKey: string = Sa5ModalGateController.getGateKey(gateID);   
            
            // wfu-modal-trigger-click

            if(element.hasAttribute(Sa5Attribute.ATTR_MODAL_TRIGGER_CLICK)) {

                console.log("Installing gated modal", gateID); 

                this.installModalGates_Modal(element); 

            } else if(element.tagName == "A") { 

                console.log("Installing gated link", gateID); 

                this.installModalGates_Link(element); 

            }

        });    

    }

    installModalGates_Modal(element: HTMLElement) {

        // Verify it's an SA5 modal
        if(!element.hasAttribute("wfu-modal-trigger-click")) {
            console.error("SA5 Modal gate is not on a modal click-trigger element. "); 
            return;
        }

        const modalName: string = element.getAttribute(Sa5Attribute.ATTR_MODAL_TRIGGER_CLICK); 
        const gateModalName: string = element.getAttribute(Sa5Attribute.ATTR_MODAL_GATE); 
        const gateKey: string = Sa5ModalGateController.getGateKey(modalName); 

        console.log(modalName, gateKey)

        element.addEventListener("click", async (e) => { 
            e.preventDefault();

            // Check if form was already submitted
            if(Sa5ModalGateController.isGateOpen(gateModalName)) {
                console.log("Gate open. Showing...", modalName);
                this.controller.display(modalName, true); 
            } else { 

                console.log("Gate closed. Showing...", gateModalName);

                const openGate: boolean = await this.controller.display(gateModalName, true); 

                console.log("gating modeal returned", openGate)

                if(openGate) {
                    Sa5ModalGateController.openGate(gateModalName) 
                    this.controller.display(modalName, true);  
                }

            } 
            
        });

    }

    installModalGates_Link(element: HTMLElement) {
            
        const linkElement: HTMLLinkElement = element as HTMLLinkElement;    
        const gateModalName: string = element.getAttribute(Sa5Attribute.ATTR_MODAL_GATE); 

        element.addEventListener("click", async (event) => {
            event.preventDefault(); 

            // Check if form was already submitted
            if(Sa5ModalGateController.isGateOpen(gateModalName)) {

                this.navigateToLink(element); 
                
            } else {

                console.log("Gate closed. Showing...", gateModalName);

                const openGate: boolean = await this.controller.display(gateModalName, true); 

                console.log("gating modeal returned", openGate)

                if(openGate) {
                    Sa5ModalGateController.openGate(gateModalName) 
//                    this.controller.display(modalName, true);  
                    this.navigateToLink(element); 
                }

            } 

        });

    }

    //#endregion

    //#region MODAL SPECIFIC GATING

    /**
     * Install Gate Actions within SA5 Modal 
     * @param element SA5 Modal Elem
     */

    installModalGateActions(modal: Sa5Modal) {

        // Setup gate buttons in Modal
        let gateButtons: Array<HTMLElement> = Array.from(
            modal.elem.querySelectorAll( 
                Sa5Attribute.getBracketed(
                    Sa5Attribute.ATTR_MODAL_GATE_BUTTON 
                )
            ));

        gateButtons.forEach(element => { 
            element.addEventListener("click", async (e) => { 

                modal.close(true); 

            });
        }); 

        // Setup gate forms in Modal
        let gateForms: Array<HTMLElement> = Array.from(
            modal.elem.querySelectorAll( 
                `form[${Sa5Attribute.ATTR_MODAL_GATE_FORM}]`
            ));

        gateForms.forEach(element => { 
            element.addEventListener("submit", async (e) => { 
                
                modal.close(true); 

            });
        }); 

    }

    /**
     * Handles link navigation while respecting the target attribute.
     * @param {HTMLAnchorElement} linkElement - The link element to navigate to.
     */
    navigateToLink(linkElement) {
        if (linkElement.target && linkElement.target !== "_self") {
            window.open(linkElement.href, linkElement.target);
        } else {
            window.location.href = linkElement.href;
        }
    }

    //#endregion

}


 //  Sa5Core.startup(Sa5Modal);

