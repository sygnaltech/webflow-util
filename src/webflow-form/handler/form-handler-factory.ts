
import { Sa5Core } from '../../webflow-core';
import { Sa5Debug } from '../../webflow-core/debug';
import { Sa5Form, WebflowFormMode } from '../../webflow-form';

import { WfuFormHandler } from './form-handler';

import { WfuFormHandlerBasin } from './basin-handler';
import { WfuFormHandlerMake } from './make-handler';
import { WfuFormHandlerN8N } from './n8n-handler';
import { WfuFormHandlerZapier } from './zapier-handler';
import { WfuFormHandlerSuccess } from './success-handler';
import { Sa5Attribute } from '../../globals';




export class WfuFormHandlerFactory {

    constructor(form: Sa5Form, config = {}) {


    }

    static create(form: Sa5Form, config = {}): WfuFormHandler {
        var handler: WfuFormHandler;

        let type = form.formBlockElement.getAttribute(
            Sa5Attribute.ATTR_FORM_HANDLER // "wfu-form-handler"
            ); 

        switch (type) {
            case "zapier":

                handler = new WfuFormHandlerZapier(form, config);

                break;
            case "n8n":

                handler = new WfuFormHandlerN8N(form, config);

                break;
            case "make":

                handler = new WfuFormHandlerMake(form, config);

                break;
            case "basin":

                handler = new WfuFormHandlerBasin(form, config);

                break;
            case "success":

                handler = new WfuFormHandlerSuccess(form, config);

                break;
            case "other":
            case "": // unspecified 

                handler = new WfuFormHandler(form, config);

                break;
            default:

                console.error(`Unknown wfu-form-handler ${type}`);

                break;
        }

        return handler;
    }

    static createFromElement(elem: HTMLElement): WfuFormHandler {

        let form: Sa5Form = new Sa5Form(elem);

        // if form is valid
        if (!form.isValid) {
            console.error("Cannot only instantiate Sa5 form handler from a Form element."); 
        }

        return WfuFormHandlerFactory.create(form); 

    }

}

/* 
// https://dev.to/sanderdebr/js-es6-design-patterns-factory-3a3g 
export const WfuFormHandlerFactory = {
    create: function (type, elem, config) {
    }
}
*/