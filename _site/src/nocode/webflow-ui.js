
/*
 * webflow-ui
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { renderRatingComponent } from '../modules/webflow-ui.js';

$(function () {


    // Find all rating components
    $("div[wfu='rating']").each(function (index) {

        // Render them
        renderRatingComponent($(this));

    });

});

