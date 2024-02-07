

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

    constructor(layoutContainer: HTMLElement, config = {}) {

        // Initialize debugging
        this.debug = new Sa5Debug("sa5-layout-handler");
        this.debug.debug ("Initializing");

        this.container = layoutContainer; 

        this.name = this.container.getAttribute("wfu-layout"); 

        // let action = this.form.formElement.getAttribute("action");
        // this.debug.debug("action", action);

        // // Get the Webflow wait message
        // let waitMessage = this.form.formElement.querySelector("input[type=submit]")
        //     .getAttribute("data-wait");
        // this.debug.debug(`waitMessage: ${waitMessage}`);

//        console.log("layout handler", this.name, this.container, config); 

    }

    layout() { 
// console.log("layout handler layout", this.name, this.container, this.config);
        // Find all elements with 'wfu-layout-target' attribute
        const targetedElements = document.querySelectorAll(
            `[${Sa5Attribute.ATTR_LAYOUT_TARGET}='${this.name}']` // '[wfu-layout-target]'
            );
      
        // Iterate over the collection of movable elements
        targetedElements.forEach(element => {
          // Get the value of the 'wfu-layout-mtargetove' attribute
          const targetName = element.getAttribute(
            Sa5Attribute.ATTR_LAYOUT_TARGET
            );
      
          // Find the corresponding target element
          const targetElement = document.querySelector(`[wfu-layout="${targetName}"]`);
      
          // If a target is found, append the movable element as its child
          if (targetElement) {
            targetElement.appendChild(element);
          }
        });
    }
      
}

/* 
// https://dev.to/sanderdebr/js-es6-design-patterns-factory-3a3g 
export const WfuFormHandlerFactory = {
    create: function (type, elem, config) {
    }
}
*/