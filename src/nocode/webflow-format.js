
/*
 * webflow-format
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { formatField } from '../modules/webflow-format.js';


$(function () {
    
    // https://codepen.io/memetican/pen/poKvLrJ/7bff0818f6a71585e2c2e915c6c5c972?editors=1010 
    // Process filtered items
    $("*[wfu-format]").each(function() {

        formatField($(this));

    });

});


