
/*
 * webflow-form
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WfuFormHandler } from '../modules/webflow-form.js';
import { WfuFormIPInfo } from '../modules/webflow-form-ipinfo.js';

$(function () {

    // Prepare any tagged forms by appending IP Info
    $("*[wfu-form-ipinfo]").each(function () {

        const ipInfoHandler = new WfuFormIPInfo($(this));
        ipInfoHandler.appendIPInfo();

    });

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

                break;
            case "n8n":

                console.debug("applying WFU form handler - n8n.");

                handler = new WfuFormHandler($(this));
                handler.setFormHandlerN8N();

                break;
            case "make":

                console.debug("applying WFU form handler - make.");

                handler = new WfuFormHandler($(this));
                handler.setFormHandlerMake();

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

