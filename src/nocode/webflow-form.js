
/*
 * webflow-form
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { setFormHandlerZapier } from '../modules/webflow-form.js';

$(function () {

    // Catch any submits on forms
    // Which post to Zapier-webhooks 
    $("form[action^='https://hooks.zapier.com/hooks/catch/']").each(function () {
        
        setFormHandlerZapier($(this));

    });

});

