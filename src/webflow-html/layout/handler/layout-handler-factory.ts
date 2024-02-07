
import { Sa5Core } from '../../../webflow-core';
import { Sa5Debug } from '../../../webflow-core/debug';
import { Sa5Form, WebflowFormMode } from '../../../webflow-form';

// Default handler
import { Sa5LayoutHandler } from './layout-handler';

// Typed handlers
import { Sa5LayoutHandlerTabs } from './tabs-handler'

import { Sa5Attribute } from '../../../globals';




export class Sa5LayoutHandlerFactory {

    constructor(layoutContainer: HTMLElement, config = {}) {


    }

    static createFromElement(layoutContainer: HTMLElement, config = {}): Sa5LayoutHandler {
        var handler: Sa5LayoutHandler;

        // Get the explicit type of layout handler
        let type = layoutContainer.getAttribute(
            Sa5Attribute.ATTR_LAYOUT_HANDLER // "wfu-form-handler"
            ) || "auto"; 

        // Resolve the type of layout handler
        if(type == "auto") {
            if(layoutContainer.classList.contains('w-tabs')) {
                type = "tabs";
            } else {
                type = "default";
            }
        }

// console.log("layout handler type", type, layoutContainer, config);

        switch (type) {
            case "tabs":

                handler = new Sa5LayoutHandlerTabs(layoutContainer, config);

                break;
            case "default":

                handler = new Sa5LayoutHandler(layoutContainer, config);

                break;
            default:

                console.error(`Unknown wfu-layout-handler - ${type}`);

                break;
        }

        return handler;
    }

}

/* 
// https://dev.to/sanderdebr/js-es6-design-patterns-factory-3a3g 
export const WfuFormHandlerFactory = {
    create: function (type, elem, config) {
    }
}
*/