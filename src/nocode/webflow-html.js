
/*
 * webflow-html
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { processList, sortCollectionList } from '../modules/webflow-html.js';

// https://codepen.io/memetican/pen/vYjGbrd/8052e3c39d42e8c1e326b2f6ead371c5

$(function () {

    // Unwrap tagged items
//    $("*[wfu-unwrap]").each(function (index) {

        //        console.log($(this).attr("wfu-filter"));

//        var visible = eval($(this).attr("wfu-filter"));

  //      if (visible)
  //          $(this).css("display", "block");
//    });

    // Process filtered items
    $("*[wfu-filter]").each(function (index) {

//        console.log($(this).attr("wfu-filter"));

        var visible = eval($(this).attr("wfu-filter"));

        if (visible)
            $(this).css("display", "block");
    });

    // Process sorted items
    $("[wfu-sort]").each(function () {


        sortCollectionList($(this));
        //        console.log($(this).attr("wfu-filter"));

//        var visible = eval($(this).attr("wfu-filter"));

 //       if (visible)
 //           $(this).css("display", "block");
    });

    // Process filtered items
    $("*[wfu-filter-func]").each(function (index) {

        var funcName = $(this).attr("wfu-filter-func");
        var fqFuncName = `window.${funcName}`;  // ()`;
//        var func = eval(`window["top"]["${funcName}"]`);

        console.debug(fqFuncName);

        var f = new Function(fqFuncName);

//        console.log(f($(this)));
//        alert(window);

        // Test for function
        // jquery isFunction deprecated
        // https://stackoverflow.com/a/66824642
//        console.log(typeof window[`"${funcName}"`] === "function");

        var visible = eval(`${fqFuncName}($(this))`);
//        console.log(visible);

        if (visible)
            $(this).css("display", "block");
    });

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


