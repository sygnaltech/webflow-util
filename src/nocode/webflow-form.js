
/*
 * webflow-form
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WfuFormHandler } from '../modules/webflow-form.js';

$(function () {

    // Catch any submits on forms
    // Which post to Zapier-webhooks 
    $("*[wfu-form-handler]").each(function () {

        const handlerName = $(this).attr("wfu-form-handler");
        var handler;

        switch (handlerName) {
            case "zapier":

                console.debug("applying WFU form handler - zapier.");

                handler = new WfuFormHandler($(this));
                handler.setFormHandlerZapier();

                console.debug(`Data - ${$(this).serialize()}`);

                break;
            case "other":

                console.debug("applying WFU form handler - other.");

                handler = new WfuFormHandler($(this));
                handler.setFormHandlerOther();

                break;
            default:

                console.error(`Unknown wfu-form-handler ${handlerName}`);

                break;
        }

    });

});

