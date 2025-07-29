
/*
 * webflow-modal
 * Modal
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
import { Sa5ModalGateController } from './modal-gate-controller';
import { Utils } from 'handlebars';
import { parseDuration } from '../utils';

/**
 * EVENTS
 */

// type LayoutChangedCallback = (
//     breakpointName: string, 
//     e: MediaQueryListEvent
//     ) => void; 

enum ModalMode {
    Popup = 'popup',
    Modal = 'modal'
}

enum ModalSuppressMode {
    None = 'none',
    Forever = 'forever',
    Session = 'session',
    Duration = 'duration',
}

interface Sa5ModalConfig {

//    layoutChangedCallback?: LayoutChangedCallback; 

    mode: ModalMode; // popup | modal
//    return button value 

}


export class Sa5Modal {

    controller?: Sa5ModalController;
    config: Sa5ModalConfig;
    elem: HTMLElement; 
    modalContainer: HTMLDivElement; 
    timer?: number; // ms
    suppressMode: ModalSuppressMode = ModalSuppressMode.None;
    suppressDuration: string; // SA5 duration 
    name: string;  

    //#region EVENTS

    private closeResolver?: (result: boolean) => void; // Resolver for Promise    

    //#endregion

    //#region PROPERTYS

    /**
     * Returns the modal's key for storage. 
     */
    get key(): string {
        return `sa5-modal_${this.name}`; 
    }

    /**
     * Determines if the modal is currently suppressed. 
     * @returns true if suppressed 
     */
    get isSuppressed(): boolean {
        switch (this.suppressMode) {
            case ModalSuppressMode.Session:
                return sessionStorage.getItem(this.key) === 'true';
            case ModalSuppressMode.Forever:
            case ModalSuppressMode.Duration:
                return this.getCookie(this.key) === 'true';
            case ModalSuppressMode.None:
            default:
                return false;
        }
    }

    //#endregion 

    //#region CONSTRUCTOR 

    constructor(elem: HTMLElement, controller?: Sa5ModalController, config: Partial<Sa5ModalConfig> = {}) {

        this.elem = elem; 
        this.controller = controller; 

        const defaultConfig: Sa5ModalConfig = {

            mode: ModalMode.Popup,

        };

//        this.config = Object.assign({}, defaultConfig, config);
        this.config = { 
            ...defaultConfig, 
            ...this.normalizeConfig(config) 
        }; 
//        this.config = { ...defaultConfig, ...config };

        this.modalContainer = this.createModalContainer();

        let core: Sa5Core = Sa5Core.startup(); 

    }

    //#endregion 

    //#region METHODS

    private normalizeConfig(config: Partial<Sa5ModalConfig>): Partial<Sa5ModalConfig> {
        if (config.mode && typeof config.mode === 'string') {
            config.mode = this.getModalMode(config.mode);
        }
        return config;
    }

    private getModalMode(mode: string): ModalMode {
        switch (mode.toLowerCase()) {
            case ModalMode.Popup:
                return ModalMode.Popup;
            case ModalMode.Modal:
                return ModalMode.Modal;
            default:
                throw new Error(`Invalid mode: ${mode}`);
        }
    }

    private createModalContainer(): HTMLDivElement { 

        const container = document.createElement('div');

        container.style.position = 'fixed';
        container.style.top = '50%';
        container.style.left = '50%';
        container.style.transform = 'translate(-50%, -50%)';
//        container.style.backgroundColor = '#fff';
        container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.25)';
        container.style.zIndex = '9999';
        container.style.display = 'none'; // Initially hidden

// console.log("container style", container.style)

        // const closeButton = document.createElement('button');
        // closeButton.innerText = 'Close';
        // closeButton.style.position = 'absolute';
        // closeButton.style.top = '10px';
        // closeButton.style.right = '10px';
        // closeButton.style.cursor = 'pointer';
        // closeButton.addEventListener('click', () => this.close());
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;'; // HTML entity for a nice-looking X
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '18px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.background = 'none';
        closeButton.style.border = 'none';
        closeButton.style.fontSize = '36px';
        closeButton.style.lineHeight = '36px';
        closeButton.style.fontWeight = 'bold';
        closeButton.style.color = '#333';
        closeButton.style.zIndex = '1'; // Ensure it's above the content body 

        closeButton.addEventListener('click', () => this.close());

        container.appendChild(closeButton);

        // Move modal inside of container 
        container.appendChild(this.elem); 
        this.elem.style.display = 'block'; // make it visible, as it is likely display: none in the designer 
        this.elem.style.marginTop = '0';
        this.elem.style.marginBottom = '0';
        this.elem.style.marginLeft = '0';
        this.elem.style.marginRight = '0';

        this.elem.removeAttribute("wfu-modal-state"); 

        return container;
    }

    init() {

        // Initialize debugging
        let debug = new Sa5Debug("sa5-modal");
        debug.debug ("Modal initialized.", this.config);

        // Name
        if(this.elem.hasAttribute(Sa5Attribute.ATTR_MODAL)) { //  "wfu-modal" 
            this.name = this.elem.getAttribute(Sa5Attribute.ATTR_MODAL);
        }

        // Trigger: Timer
        if(this.elem.hasAttribute(Sa5Attribute.ATTR_MODAL_TRIGGER_TIMER)) { // "wfu-modal-trigger-timer" 
            const modalTriggerDelay = this.elem.getAttribute(Sa5Attribute.ATTR_MODAL_TRIGGER_TIMER); 
//            parseDuration(modalTriggerDelay, "ms"); 
            console.log("trigger timer found", modalTriggerDelay, parseDuration(modalTriggerDelay, "ms"))
            this.timer = parseDuration(modalTriggerDelay, "ms"); 
        }

        // Suppress
        if(this.elem.hasAttribute(Sa5Attribute.ATTR_MODAL_SUPPRESS)) { //  "wfu-modal-suppress" 

            const suppressValue = this.elem.getAttribute(Sa5Attribute.ATTR_MODAL_SUPPRESS); 

            if (suppressValue && Object.values(ModalSuppressMode).includes(suppressValue as ModalSuppressMode)) {
                this.suppressMode = suppressValue as ModalSuppressMode;
            } else {
                this.suppressMode = ModalSuppressMode.Duration;
                this.suppressDuration = '1d'; // suppressValue || '';
            }


//            this.timer = Number(this.elem.getAttribute("wfu-modal-trigger-timer"));
        }

        // Suppress Duration
        if(this.elem.hasAttribute(Sa5Attribute.ATTR_MODAL_SUPPRESS_DURATION)) { //  "wfu-modal-suppress-duration" 
            this.suppressDuration = this.elem.getAttribute(Sa5Attribute.ATTR_MODAL_SUPPRESS_DURATION) || '1d'; 
        }

        // Check for additional close buttons 

        // Setup close buttons 
        let closeButtons: Array<HTMLElement> = Array.from(
            this.elem.querySelectorAll( 
                Sa5Attribute.getBracketed(
                    Sa5Attribute.ATTR_MODAL_CLOSE // "wfu-modal-close" 
                )
            ));
        closeButtons.forEach(element => { 
            element.addEventListener("click", async (e) => { 

                // Initialize suppression settings to modal defaults 
                let suppressMode = this.suppressMode;
                let suppressDuration = this.suppressDuration; 

                console.log("Closing modal")

                // Suppress
                if(this.elem.hasAttribute(Sa5Attribute.ATTR_MODAL_SUPPRESS)) { //  "wfu-modal-suppress" 

                    const suppressValue = element.getAttribute(Sa5Attribute.ATTR_MODAL_SUPPRESS); 

                    if (suppressValue && Object.values(ModalSuppressMode).includes(suppressValue as ModalSuppressMode)) {
                        suppressMode = suppressValue as ModalSuppressMode;
                    } else {
                        suppressMode = ModalSuppressMode.Duration;
                        suppressDuration = '1d'; // suppressValue || '';
                    }

                }

                // Suppress Duration
                if(this.elem.hasAttribute(Sa5Attribute.ATTR_MODAL_SUPPRESS_DURATION)) { //  "wfu-modal-suppress-duration" 
                    suppressDuration = element.getAttribute(Sa5Attribute.ATTR_MODAL_SUPPRESS_DURATION) || '1d'; 
                }

                // Close modal 
                this.close(suppressMode, suppressDuration);
                
            });
        }); 




        // // Setup gate buttons 
        // let gateButtons: Array<HTMLElement> = Array.from(
        //     document.querySelectorAll( 
        //         Sa5Attribute.getBracketed(
        //             Sa5Attribute.ATTR_MODAL_GATE_BUTTON // "wfu-modal-gate-button" 
        //         )
        //     ));

        // gateButtons.forEach(element => { 
        //     element.addEventListener("click", async (e) => { 

        //         // Open the gate 
        //         Sa5ModalGateController.openGate(this.name); 
                
        //     });
        // }); 





        document.body.appendChild(this.modalContainer);

        if(this.timer) {
            setTimeout(() => {
                this.display();
            }, this.timer);
        }

    //     // Notify any config-specified handler
    //     if(this.config.layoutChangedCallback) {

    //         this.config.layoutChangedCallback(
    //             device as string, 
    //             e
    //         ); 
    //     }



        // Install any Gate Actions 
        const gateController: Sa5ModalGateController = new Sa5ModalGateController(this.controller); 
        gateController.installModalGateActions(this); 


    }

    /**
     * Display the modal. 
     * @param force If true, ignores cookie suppression state. 
     * @returns 
     */
    display(force: boolean = false): Promise<boolean> { 

        if(this.controller) {
            switch(this.controller.modalRule) {
                case ModalRule.None:
                    return; // suppress all modals
                case ModalRule.Default:
                    break; // do nothing
            }
        }

        // Exit if modal is suppressed 
        // unless this is a forced display situation  
        if(!force) {
            if(this.isSuppressed)
                return; // skip open, suppressed
        }








        return new Promise<boolean>((resolve) => { 

            this.closeResolver = resolve; // Store resolver for closing event        

            const overlayId = `overlay-${Math.random().toString(36).substr(2, 9)}`; // Generate a unique ID for the overlay
            const overlay = document.createElement('div');
            overlay.id = overlayId;
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            overlay.style.zIndex = '9998';
        
            overlay.addEventListener('click', () => this.close());
        
            document.body.appendChild(overlay);
            this.modalContainer.style.display = 'block';
        
            gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.5 });
            gsap.fromTo(this.modalContainer, { opacity: 0, transform: 'translate(-50%, -50%)' }, { opacity: 1, transform: 'translate(-50%, -50%)', duration: 0.5 });
        
            this.modalContainer.dataset.overlayId = overlayId;


            // Suppress
            switch (this.suppressMode) {
                case ModalSuppressMode.Forever:
                    this.setCookie(this.key, 'true', '10y'); // Infinity);
                    break;
                case ModalSuppressMode.Session:
                    sessionStorage.setItem(this.key, 'true');
                    break;
                case ModalSuppressMode.Duration:
                    // Handle duration if needed
                    this.setCookie(this.key, 'true', this.suppressDuration);
                    break;
                default:
                case ModalSuppressMode.None:
                    // Do nothing
                    break;
            }

        });

    }

    close(
        suppressMode: ModalSuppressMode = ModalSuppressMode.None,
        suppressDuration: string = '1d', // SA5 duration 
        openGate: boolean = false
    ) {

        // If this modal is configured for view gate, 
        // open the gate 
//         if(this.elem.hasAttribute(Sa5Attribute.ATTR_MODAL_GATE_VIEW)) {

// //            Sa5ModalGateController.openGate(this.name); 
// //            const gateKey: string = Sa5ModalGateController.getGateKey(this.name);   

//         }


        // Suppress modal 
        switch (suppressMode) {
            case ModalSuppressMode.Forever:
                console.log(`Suppressing modal ${this.name} for 10y`); 
                this.setCookie(this.key, 'true', '10y'); // Infinity);
                break; 
            case ModalSuppressMode.Session:
                console.log(`Suppressing modal ${this.name} for session`); 
                sessionStorage.setItem(this.key, 'true');
                break;
            case ModalSuppressMode.Duration:
                // Handle duration if needed
                console.log(`Suppressing modal ${this.name} for ${suppressDuration}`); 
                this.setCookie(this.key, 'true', suppressDuration);
                break;
            default:
            case ModalSuppressMode.None:
                // Do nothing
                break;
        } 

        // Close modal visually 
        const overlayId = this.modalContainer.dataset.overlayId;
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            gsap.to(this.modalContainer, { opacity: 0, duration: 0.5, onComplete: () => {
                this.modalContainer.style.display = 'none';
            }});
            gsap.to(overlay, { opacity: 0, duration: 0.5, onComplete: () => {
                document.body.removeChild(overlay);
            }});
        }

        // Resolve the stored Promise if `display()` was awaited
        if (this.closeResolver) {
            if(this.elem.hasAttribute(Sa5Attribute.ATTR_MODAL_GATE_VIEW))
                this.closeResolver(true);
            else
                this.closeResolver(openGate);
            this.closeResolver = undefined; // Prevent multiple calls
        }

    }

    /**
     * Sets the suppression cookie 
     * @param name Cookie name
     * @param value Cookie value to set 
     * @param duration Cookie duration. SA5 duration, defaults to days when no unit specified. 
     */
    setCookie(name: string, value: string, duration: string) {

        const ms: number = parseDuration(duration, 'd'); 

        let expires = '';
        if (ms) { // days) {
            const date = new Date();
            date.setTime(date.getTime() + ms); // (days * 24 * 60 * 60 * 1000));
            expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${name}=${value || ''}${expires}; path=/`;
    }

    getCookie(name: string): string | null {
        const nameEQ = `${name}=`;
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    //#endregion 

}


Sa5Core.startup(Sa5Modal);

