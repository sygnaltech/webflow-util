
import { Sa5Core } from '../../webflow-core';
import { Sa5Debug } from '../../webflow-core/debug';
import { Sa5Form, WebflowFormMode } from '../../webflow-form';

import { WfuFormHandler } from './form-handler';

import { WfuFormHandlerBasin } from './basin-handler';
import { WfuFormHandlerMake } from './make-handler';
import { WfuFormHandlerN8N } from './n8n-handler';
import { WfuFormHandlerZapier } from './zapier-handler';




export class WfuFormHandlerFactory {

    constructor(form: Sa5Form, config = {}) {


    }

    static create(form: Sa5Form, config = {}): WfuFormHandler {
        //type, elem, config) {
        var handler: WfuFormHandler;

        let type = form.formBlockElement.getAttribute("wfu-form-handler"); 

        switch (type) {
            case "zapier":

                handler = new WfuFormHandlerZapier(form, config);
                handler.init();

                break;
            case "n8n":

                handler = new WfuFormHandlerN8N(form, config);
                handler.init();

                break;
            case "make":

                handler = new WfuFormHandlerMake(form, config);
                handler.init();

                break;
            case "basin":

                handler = new WfuFormHandlerBasin(form, config);
                handler.init();

                break;
            case "other":
            case "": // unspecified 

                handler = new WfuFormHandler(form, config);
                handler.init();

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