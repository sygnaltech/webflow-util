
import { Sa5Core } from '../../webflow-core';
import { Sa5Debug } from '../../webflow-core/debug';
import { Sa5Form, WebflowFormMode } from '../../webflow-form';

// Default handler
import { Sa5LayoutHandler } from './layout-handler';

// Typed handlers
import { Sa5LayoutHandlerTabs } from './tabs-handler'

import { Sa5Attribute } from '../../globals';




export class Sa5LayoutHandlerFactory {

    constructor(layoutContainer: HTMLElement, config = {}) {


    }

    static create(layoutContainer: HTMLElement, config = {}): Sa5LayoutHandler {
        var handler: Sa5LayoutHandler;



        let type = layoutContainer.getAttribute(
            "wfu-layout-handler",
//            Sa5Attribute.ATTR_FORM_HANDLER // "wfu-form-handler"
            ); 

        switch (type) {
            case "tabs":

                handler = new Sa5LayoutHandlerTabs(layoutContainer, config);

                break;
            case "default":
            case "": // unspecified 

                handler = new Sa5LayoutHandler(layoutContainer, config);

                break;
            default:

                console.error(`Unknown wfu-layout-handler ${type}`);

                break;
        }

        return handler;
    }

    static createFromElement(elem: HTMLElement): Sa5LayoutHandler {

        // let form: Sa5Form = new Sa5Form(elem);

        // // if form is valid
        // if (!form.isValid) {
        //     console.error("Cannot only instantiate Sa5 form handler from a Form element."); 
        // }

        return this.create(elem); 

    }

}

/* 
// https://dev.to/sanderdebr/js-es6-design-patterns-factory-3a3g 
export const WfuFormHandlerFactory = {
    create: function (type, elem, config) {
    }
}
*/