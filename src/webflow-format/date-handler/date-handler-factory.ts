
import { Sa5Core } from '../../webflow-core';
import { Sa5Debug } from '../../webflow-core/debug';
import { Sa5Form, WebflowFormMode } from '../../webflow-form';

import { WfuDateHandler } from './date-handler';

import { WfuDateHandlerMoment } from './moment-handler';
import { WfuDateHandler_DayJs } from './date-handler-dayjs';
import { booleanValue } from '../../utils';
import { Sa5Attribute } from '../../globals';
import { Exception } from 'handlebars';




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

                handler = new WfuDateHandler_DayJs(config);

                break;
            default:

                console.error(`Unknown wfu-format-handler ${type}`);
                throw new Exception("Unknown")
                break;
        }

        return handler;
    }

    static createFromElement(elem: HTMLElement): WfuDateHandler {

        // Format handler lib 
        let type = elem.getAttribute(
            Sa5Attribute.ATTR_FORMAT_HANDLER // "wfu-format-handler"
            ) || "dayjs"; 

        // Format string
        let format = elem.getAttribute(
            Sa5Attribute.ATTR_FORMAT_DATE // "wfu-format-date"
            ); 
        
//console.log(type);
//console.log(format);

        const handler = WfuDateHandlerFactory.create(type); 
        handler.mode = elem.getAttribute(
            Sa5Attribute.ATTR_FORMAT_MODE // "wfu-format-mode"
            ) || "date"; 
        handler.formatString = format || "";
        handler.suffix = booleanValue(elem.getAttribute(
            Sa5Attribute.ATTR_FORMAT_SUFFIX // "wfu-format-suffix"
            ) || "yes"); 

        // Check for the `wfu-format-locale` attribute
        if (elem.hasAttribute(Sa5Attribute.ATTR_FORMAT_LOCALE)) { // "wfu-format-locale"
            // If the attribute exists, use the document's lang attribute or fallback to 'en'
            handler.locale = document.documentElement.lang || 'en';
        } else {
            // If the attribute doesn't exist, set locale to undefined
            handler.locale = undefined;
        }

        return handler; 
    }

}
