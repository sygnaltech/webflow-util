
/*
 * webflow-modal
 * Modal
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */

import { Sa5Attribute } from '../globals';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { gsap } from "gsap";

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


interface Sa5ModalConfig {

//    layoutChangedCallback?: LayoutChangedCallback; 

    mode: ModalMode; // popup | modal
//    return button value 

}


export class Sa5Modal {

    config: Sa5ModalConfig;
    elem: HTMLElement; 
    modalContainer: HTMLDivElement; 

    constructor(elem: HTMLElement, config: Partial<Sa5ModalConfig> = {}) {

        this.elem = elem; 

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

console.log("container style", container.style)

if (container) {
    let styleString = '';
  
    for (let i = 0; i < container.style.length; i++) {
      const property = container.style[i];
      const value = container.style.getPropertyValue(property);
      styleString += `${property}: ${value}; `;
    }
  
    console.log("container style:", styleString);
  }
  

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

        document.body.appendChild(this.modalContainer);

    //     // Notify any config-specified handler
    //     if(this.config.layoutChangedCallback) {

    //         this.config.layoutChangedCallback(
    //             device as string, 
    //             e
    //         ); 
    //     }

    }

    display() { 

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
        gsap.fromTo(this.modalContainer, { opacity: 0, y: '-50px' }, { opacity: 1, y: '-50px', duration: 0.5 });
    
        this.modalContainer.dataset.overlayId = overlayId;
    }

    close() {
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
    }

}




