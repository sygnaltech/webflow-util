
import { Sa5Core } from '../../webflow-core';
import { Sa5Debug } from '../../webflow-core/debug';

import { Sa5Effect } from './effect-handler';

import { Sa5DepthMapEffect } from './depth-map';
import { Sa5Attribute } from '../../globals';




export class WfuEffectHandlerFactory {

    constructor(elem: HTMLElement, config = {}) {
        
    }

    static create(elem: HTMLElement, config = {}): Sa5Effect {
        var handler: Sa5Effect;

        let type = elem.getAttribute(
            `wfu-effect`
//            Sa5Attribute.ATTR_FORM_HANDLER // "wfu-form-handler"
            ); 

console.log("factory 2", elem.parentNode)

        switch (type) {
            case "depthmap":

                handler = new Sa5DepthMapEffect(elem, config);

                break;
            default:

                console.error(`Unknown SA5 Effect - ${type}`);

                break;
        }

        return handler;
    }

    static createFromElement(elem: HTMLElement): Sa5Effect {

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