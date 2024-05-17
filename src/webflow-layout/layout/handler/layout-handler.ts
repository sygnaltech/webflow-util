

/**
 * 
 * https://codepen.io/memetican/pen/WNmpPQQ/58d28833924001977c4761d31979c2d1
 */


import { Sa5Attribute } from '../../../globals';
import { Sa5Core } from '../../../webflow-core';
import { Sa5Debug } from '../../../webflow-core/debug';
//import { Sa5Form, WebflowFormMode } from '../../webflow-form';


/*
 * WfuFormHandler class.
 */

var defaultLayoutHandlerConfig = {

    debug: false, // Debugging mode

}


export class Sa5LayoutHandler {

    debug: Sa5Debug;
    container: HTMLElement; 
    config; // Optional config
    handler;
    name: string;
    zone: string | null = null;

    constructor(layoutContainer: HTMLElement, config = {}) {

        // Initialize debugging
        this.debug = new Sa5Debug("sa5-layout-handler");
        this.debug.debug ("Initializing");

        this.container = layoutContainer; 

        this.name = this.container.getAttribute("wfu-layout"); 

        this.zone = this.container.getAttribute("wfu-layout-zone") || null; 

    }

    layout() { 

        /**
         * Init container
         */

        if (this.container.getAttribute('wfu-layout-init') === 'clear') {
            // Clear existing tabs and content
            // const tabMenu = this.container.querySelector('.w-tab-menu');
            // const tabContent = this.container.querySelector('.w-tab-content');
            // tabMenu.innerHTML = '';
            // tabContent.innerHTML = ''; 
            this.container.innerHTML = '';
        }

        /**
         * Layout elements
         */

        // Find all elements targeting this container
        let selector: string = `[${Sa5Attribute.ATTR_LAYOUT_TARGET}='${this.name}']`; // '[wfu-layout-target]'
        if(this.zone)
            selector += `[${Sa5Attribute.ATTR_LAYOUT_ZONE}='${this.zone}']`;

        const targetedElements = document.querySelectorAll(
            selector
            );

        targetedElements.forEach(element => {

            // // Get the value of the 'wfu-layout-mtargetove' attribute
            // const targetName = element.getAttribute(
            //     Sa5Attribute.ATTR_LAYOUT_TARGET
            //     );
      
            // let selector: string = `[${Sa5Attribute.ATTR_LAYOUT_TARGET}='${this.name}']`; // '[wfu-layout-target]'
            // if(this.zone)
            //     selector += `[${Sa5Attribute.ATTR_LAYOUT_ZONE}='${this.zone}']`;
        

            // Find the corresponding target element
            //   const targetElement = document.querySelector(`[wfu-layout="${targetName}"]`);
        
            //   // If a target is found, append the movable element as its child
            //   if (targetElement) {
            //     targetElement.appendChild(element);
            //   }

            if (this.container) {
                this.container.appendChild(element);
            }

        });

        /**
         * Remove preloader
         */
        
        this.container.removeAttribute('wfu-preload');

    }
      
}
