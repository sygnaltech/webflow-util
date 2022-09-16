
/*
 * webflow-html
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { processList } from '../modules/webflow-html.js';

// https://codepen.io/memetican/pen/vYjGbrd/8052e3c39d42e8c1e326b2f6ead371c5

$(function () {

    // Process standalone lists
    var listElems = $("ul[wfu-lists], ol[wfu-lists]");
    $.each(listElems, function (id, listElem) {
        processList(listElem);
    });

    // Process RTF's with embedded lists
    var rtfs = $(".w-richtext[wfu-lists]");
    $.each(rtfs, function (rtfid, rtf) {

        //    console.log(`RTF ${rtfid} -------------------------`);

        var lists = $(rtf).children("ul,ol");

        $.each(lists, function (il, list) {
            processList(list);
        });

        // Remove the attribute
        // So that the skeleton CSS will reveal the underlying
        // processed content.
        $(rtf).removeAttr("wfu-lists");

    });

});


