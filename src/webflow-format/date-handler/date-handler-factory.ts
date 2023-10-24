
import { Sa5Core } from '../../webflow-core';
import { Sa5Debug } from '../../webflow-core/debug';
import { Sa5Form, WebflowFormMode } from '../../webflow-form';

import { WfuDateHandler } from './date-handler';

import { WfuDateHandlerMoment } from './moment-handler';
import { WfuDateHandlerDay } from './day-handler';
import { booleanValue } from '../../utils';
import { Sa5Attribute } from '../../globals';




export class WfuDateHandlerFactory {

    constructor(config = {}) {


    }

    static create(type: string, config = {}): WfuDateHandler {
        var handler: WfuDateHandler;

//        let type = form.formBlockElement.getAttribute("wfu-form-handler"); 

        switch (type) {
            // case "moment": case "momentjs":

            //     handler = new WfuDateHandlerMoment(config);

            //     break;
            case "": // unspecified 
            case "day": case "dayjs":

                handler = new WfuDateHandlerDay(config);

                break;
            default:

                console.error(`Unknown wfu-format-handler ${type}`);

                break;
        }

        return handler;
    }

    static createFromElement(elem: HTMLElement): WfuDateHandler {

        let type = elem.getAttribute(
            Sa5Attribute.ATTR_FORMAT_HANDLER // "wfu-format-handler"
            ); 
        let format = elem.getAttribute(
            Sa5Attribute.ATTR_FORMAT_DATE // "wfu-format-date"
            ); 
//console.log(type);
//console.log(format);

        const handler = WfuDateHandlerFactory.create(type); 
        handler.mode = elem.getAttribute(
            Sa5Attribute.ATTR_FORMAT_MODE // "wfu-format-mode"
            ) || "date"; 
        handler.formatString = format;
        handler.suffix = booleanValue(elem.getAttribute(
            Sa5Attribute.ATTR_FORMAT_SUFFIX // "wfu-format-suffix"
            ) || "yes"); 

        return handler; 
    }

}
