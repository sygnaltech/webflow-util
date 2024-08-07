
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
import { Sa5ModalController, ModalRule } from './modal-controller';

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

    controller: Sa5ModalController;
    config: Sa5ModalConfig;
    elem: HTMLElement; 
    modalContainer: HTMLDivElement; 
    timer?: number; // ms
    suppressMode: ModalSuppressMode = ModalSuppressMode.None;
    suppressDuration: string; // SA5 duration 
    name: string;

    get key(): string {
        return `sa5-modal_${this.name}`; 
    }

    constructor(elem: HTMLElement, controller: Sa5ModalController, config: Partial<Sa5ModalConfig> = {}) {

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
        if(this.elem.hasAttribute("wfu-modal")) {
            this.name = this.elem.getAttribute("wfu-modal");
        }

        // Trigger: Timer
        if(this.elem.hasAttribute("wfu-modal-trigger-timer")) {
            this.timer = Number(this.elem.getAttribute("wfu-modal-trigger-timer"));
        }

        // Suppress
        if(this.elem.hasAttribute("wfu-modal-suppress")) {

            const suppressValue = this.elem.getAttribute('wfu-modal-suppress');

            if (suppressValue && Object.values(ModalSuppressMode).includes(suppressValue as ModalSuppressMode)) {
                this.suppressMode = suppressValue as ModalSuppressMode;
            } else {
                this.suppressMode = ModalSuppressMode.Duration;
                this.suppressDuration = suppressValue || '';
            }


//            this.timer = Number(this.elem.getAttribute("wfu-modal-trigger-timer"));
        }

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

    }

    display(force: boolean = false) { 

        switch(this.controller.modalRule) {
            case ModalRule.None:
                return; // suppress all modals
            case ModalRule.Default:
                break; // do nothing
        }

        if(!force) {
            if(this.isSuppressed())
                return; // skip open, suppressed
        }

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
                this.setCookie(this.key, 'true', Infinity);
                break;
            case ModalSuppressMode.Session:
                sessionStorage.setItem(this.key, 'true');
                break;
            case ModalSuppressMode.Duration:
                // Handle duration if needed
                break;
            default:
            case ModalSuppressMode.None:
                // Do nothing
                break;
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

    isSuppressed(): boolean {
        switch (this.suppressMode) {
            case ModalSuppressMode.Forever:
                return this.getCookie(this.key) === 'true';
            case ModalSuppressMode.Session:
                return sessionStorage.getItem(this.key) === 'true';
            case ModalSuppressMode.Duration:
                // Implement logic for duration if needed
                return false;
            default:
            case ModalSuppressMode.None:
                return false;
        }
    }

    setCookie(name: string, value: string, days: number) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
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

}




