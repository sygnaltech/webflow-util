

/**
 * 
 * https://codepen.io/memetican/pen/WNmpPQQ/58d28833924001977c4761d31979c2d1
 */


import { Sa5Core } from '../../webflow-core';
import { Sa5Debug } from '../../webflow-core/debug';
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

    constructor(layoutContainer: HTMLElement, config = {}) {

        // Initialize debugging
        this.debug = new Sa5Debug("sa5-layout-handler");
        this.debug.debug ("Initializing");

        this.container = layoutContainer; 

        // let action = this.form.formElement.getAttribute("action");
        // this.debug.debug("action", action);

        // // Get the Webflow wait message
        // let waitMessage = this.form.formElement.querySelector("input[type=submit]")
        //     .getAttribute("data-wait");
        // this.debug.debug(`waitMessage: ${waitMessage}`);

    }


    
    init() {

        // const form = this.form;

        // this.debug.debug("WFU Handle Form submit to webhook (success response).");



    }

    layout() {

        // Find all elements with 'wfu-layout-move' attribute
        const movableElements = document.querySelectorAll('[wfu-layout-move]');
      
        // Iterate over the collection of movable elements
        movableElements.forEach(element => {
          // Get the value of the 'wfu-layout-move' attribute
          const moveValue = element.getAttribute('wfu-layout-move');
      
          // Find the corresponding target element
          const targetElement = document.querySelector(`[wfu-layout-target="${moveValue}"]`);
      
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