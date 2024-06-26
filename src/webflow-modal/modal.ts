
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

// CodePen test 
// https://codepen.io/memetican/pen/QWRMPqp/d706c319a86940074517ad92345da43a


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
        container.style.backgroundColor = '#fff';
        container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.25)';
        container.style.zIndex = '9999';
        container.style.display = 'none'; // Initially hidden

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
        closeButton.style.right = '10px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.background = 'none';
        closeButton.style.border = 'none';
        closeButton.style.fontSize = '24px';
        closeButton.style.lineHeight = '24px';
        closeButton.style.fontWeight = 'bold';
        closeButton.style.color = '#333';
        closeButton.addEventListener('click', () => this.close());

        container.appendChild(closeButton);
        container.appendChild(this.elem); // Wrap the provided element

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
    trigger() {
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
        gsap.fromTo(this.modalContainer, { opacity: 0, y: '-50px' }, { opacity: 1, y: '0', duration: 0.5 });
    
        this.modalContainer.dataset.overlayId = overlayId;
    }
    trigger12() {
        const overlay = document.createElement('div');
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
//        this.elem.setAttribute('wfu-modal-state', 'visible'); 

        gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        gsap.fromTo(this.modalContainer, { opacity: 0, y: '-50px' }, { opacity: 1, y: '0', duration: 0.5 });

        this.modalContainer.dataset.overlayId = overlay.id;
    }

//     close() {
//         const overlay = document.querySelector(`[data-overlay-id="${this.modalContainer.dataset.overlayId}"]`);
//         if (overlay) {
//             gsap.to(this.modalContainer, { opacity: 0, duration: 0.5, onComplete: () => {
//                 this.modalContainer.style.display = 'none'; 
// //                this.elem.setAttribute('wfu-modal-state', 'hidden');
//                 document.body.removeChild(overlay);
//             }});
//             gsap.to(overlay, { opacity: 0, duration: 0.5 });
//         }
//     } 
    clos2() {
        const overlay = document.querySelector(`[data-overlay-id="${this.modalContainer.dataset.overlayId}"]`);
        if (overlay) {
            gsap.to(this.modalContainer, { opacity: 0, duration: 0.5, onComplete: () => {
                this.modalContainer.style.display = 'none';
                document.body.removeChild(overlay);
            }});
            gsap.to(overlay, { opacity: 0, duration: 0.5, onComplete: () => {
                document.body.removeChild(overlay);
            }});
        }
    }
    close1() {
        const overlay = this.modalContainer.previousElementSibling; // Assumes overlay is immediately before modalContainer in DOM
        if (overlay && overlay.parentElement) {
            gsap.to(this.modalContainer, { opacity: 0, duration: 0.5, onComplete: () => {
                this.modalContainer.style.display = 'none';
            }});
            gsap.to(overlay, { opacity: 0, duration: 0.5, onComplete: () => {
                overlay.parentElement.removeChild(overlay);
            }});
        }
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

    trigger2() {

        console.log("triggered."); 

        // Create the modal elements
        const overlay: HTMLDivElement = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.zIndex = '9998';
    
        const modal: HTMLDivElement = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.minWidth = '380px';
        modal.style.width = '80%';
        modal.style.maxWidth = '80%';
        modal.style.backgroundColor = '#fff';
        modal.style.padding = '20px';
        modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.25)';
        modal.style.zIndex = '9999';
    
        const closeButton: SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        closeButton.setAttribute('width', '24');
        closeButton.setAttribute('height', '24');
        closeButton.setAttribute('viewBox', '0 0 24 24');
        closeButton.setAttribute('fill', 'none');
        closeButton.setAttribute('stroke', 'currentColor');
        closeButton.setAttribute('stroke-width', '2');
        closeButton.setAttribute('stroke-linecap', 'round');
        closeButton.setAttribute('stroke-linejoin', 'round');
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.cursor = 'pointer';
        closeButton.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
    
        // Function to close the modal
        function closeModal(): void {
            gsap.to(modal, { opacity: 0, duration: 0.5, onComplete: () => document.body.removeChild(modal) });
            gsap.to(overlay, { opacity: 0, duration: 0.5, onComplete: () => document.body.removeChild(overlay) });
        }
    
        // Close the modal when the close button is clicked
        closeButton.addEventListener('click', closeModal);
    
        // Close the modal when the overlay is clicked
        overlay.addEventListener('click', closeModal);
    
        const iframe: HTMLIFrameElement = document.createElement('iframe');
        iframe.src = 'https://www.google.com';
        iframe.style.width = '100%';
        iframe.style.height = '400px';
        iframe.style.border = 'none';
    
        modal.appendChild(closeButton);
        modal.appendChild(iframe);
        document.body.appendChild(overlay);
        document.body.appendChild(modal);
    
        // Animate the modal and overlay using GSAP
        gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        gsap.fromTo(modal, { opacity: 0, y: '-50px' }, { opacity: 1, y: '0', duration: 0.5 });

    }


}




