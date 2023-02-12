
/*
 * webflow-form
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WfuFormHandler, WfuFormHandlerFactory } from '../modules/webflow-form.js';
import { WfuFormIPInfo } from '../modules/webflow-form-ipinfo.js';

$(function() {

    // Prepare any tagged forms by appending IP Info
    $("[wfu-form-ipinfo]").each(function () {

        const ipInfoHandler = new WfuFormIPInfo($(this));
        ipInfoHandler.appendIPInfo();

    });

    // Catch any submits on forms
    // Which post to Zapier-webhooks 
    $("[wfu-form-handler]").each(function () {

        const handlerName = $(this).attr("wfu-form-handler");
        var handler;

        handler = WfuFormHandlerFactory.create(handlerName, $(this));

    });

});

