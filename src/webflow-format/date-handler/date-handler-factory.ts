
import { Sa5Core } from '../../webflow-core';
import { Sa5Debug } from '../../webflow-core/debug';
import { Sa5Form, WebflowFormMode } from '../../webflow-form';

import { WfuDateHandler } from './date-handler';

import { WfuDateHandlerMoment } from './moment-handler';
import { WfuDateHandlerDay } from './day-handler';




export class WfuDateHandlerFactory {

    constructor(config = {}) {


    }

    static create(type: string, config = {}): WfuDateHandler {
        var handler: WfuDateHandler;

//        let type = form.formBlockElement.getAttribute("wfu-form-handler"); 

        switch (type) {
            case "moment":

                handler = new WfuDateHandlerMoment(config);

                break;
            case "": // unspecified 
            case "day":

                handler = new WfuDateHandlerDay(config);

                break;
            default:

                console.error(`Unknown wfu-format-handler ${type}`);

                break;
        }

        return handler;
    }

    static createFromElement(elem: HTMLElement): WfuDateHandler {

        let type = elem.getAttribute("wfu-format-handler"); 
        let format = elem.getAttribute("wfu-format-date"); 

console.log(type);
console.log(format);

        const handler = WfuDateHandlerFactory.create(type); 
        handler.formatString = format;

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