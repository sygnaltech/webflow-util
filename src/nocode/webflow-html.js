
/*
 * webflow-html
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WfuEditor } from '../modules/webflow.js';
import { decodeHtml, applyDynamicAttributes, processList, sortCollectionList, sequence } from '../modules/webflow-html.js';

// https://codepen.io/memetican/pen/vYjGbrd/8052e3c39d42e8c1e326b2f6ead371c5

$(function () {

    // Dynamic Attributes
    applyDynamicAttributes();

    // Init Editor mode detection
    const wfuEditor = new WfuEditor();

    // Sequence items 
    $("[wfu-seq-group").each(function () {
        sequence($(this));
    });

    // Unwrap tagged items
//    $("*[wfu-unwrap]").each(function (index) {

        //        console.log($(this).attr("wfu-filter"));

//        var visible = eval($(this).attr("wfu-filter"));

  //      if (visible)
  //          $(this).css("display", "block");
//    });

    // HTML decode items 
    $("[wfu-decode]").each(function (index) {
        $(this).html(
            decodeHtml($(this).html())
            );
        $(this).removeAttr("wfu-decode");
    });

    // Process filtered items
    $("[wfu-filter]").each(function (index) {
        var visible = eval($(this).attr("wfu-filter"));
        if (visible)
            $(this).css("display", "block");
    });

    // Process sorted items 
    // Innermost first, to make sure the sorting does not
    // break jQuery references 
    $("[wfu-sort] [wfu-sort] [wfu-sort]").each(function () {
        sortCollectionList($(this));
    });
    $("[wfu-sort] [wfu-sort]").each(function () {
        sortCollectionList($(this));
    });
    $("[wfu-sort]").each(function () {
        sortCollectionList($(this));
    });

    // Process filtered items
    $("[wfu-filter-func]").each(function (index) {

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

    // Process limit multiple items
    // e.g. limit a list to a multiple of N items
    $("[wfu-limit-multiple]").each(function (index) {

        // Determine multiple limit
        const items = $(this).children().length;
        const multiple = $(this).attr("wfu-limit-multiple");
        const min = $(this).attr("wfu-limit-multiple-min"); // Minimum
        var lastItem = Math.floor(items / multiple) * multiple;
        if (lastItem < min) lastItem = min; // Apply minimum

        // Hide extra items over multiple limit
        for (var hideItem = 1; hideItem < multiple; hideItem++) {
            $(this).children(`*:nth-child(${lastItem + hideItem})`).hide();
        } 

    });

    // Layout 
    /* 
    $("data[layout-target-id]").each(function() {
        
        const containerId = $(this).attr("layout-target-id");
    //    console.debug(`item: ${containerId}`);
        
        var $target = $(`data[layout-container-id='${containerId}']`)
    //    console.debug($target);
        $target=$target.closest("[layout-container]");
    //    console.debug($target);
    
        const $item = $(this).closest("[layout-item]"); 
        $item.appendTo($target);
    }); 
    */

});


