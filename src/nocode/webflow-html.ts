
/*
 * webflow-html
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { Sa5Html } from '../webflow-html'
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { WebflowTabs } from '../webflow-core/tabs';
import { Sa5Editor } from '../webflow-core/webflow-editor'; 
import { sequence, decodeHTML } from '../utils';
import { Sa5CollectionList } from '../webflow-html/collection-list';
import { HtmlBuilder } from '../modules/webflow-html-builder';
import { Sa5NestedList } from '../webflow-html/nested-list'

const init = () => { 

//    new Sa5Core().init();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-html");
    debug.debug ("Initializing");

    // Dynamic Attributes
//    applyDynamicAttributes();


    // Create Sa5Html
    let obj = new Sa5Html({
        dynamicAttributes: true
    }).init();

    // Tabs
    // Auto-register class on named items? 
    // [wfu-tabs=NAME]
    let tabElements: NodeListOf<Element> = document.querySelectorAll('[wfu-tabs]');
    tabElements.forEach(element => {

        var tabObj = new WebflowTabs(element as HTMLElement);
//        tabObj.init();
//        element["sa5"] = tabObj;


        // Do something with each element
    });
    
    // elements is a NodeList of all elements with the "wfu-tabs" attribute
    
    // [wfu-tab-default]


//    const wfuEditor = new WfuEditor();

    // Init Editor mode detection
    const editor = new Sa5Editor(); 


    // Sequence items 
    let sequenceGroupElements = Array.from(
        document.querySelectorAll("[wfu-seq-group]")
        );

    sequenceGroupElements.forEach(element => {
        sequence(element as HTMLElement);
    });
    
//   // Sequence items 
//   $("[wfu-seq-group").each(function () {
//     sequence($(this));
// });


    // Unwrap tagged items



    /*
  
//    $("*[wfu-unwrap]").each(function (index) {

        //        console.log($(this).attr("wfu-filter"));

//        var visible = eval($(this).attr("wfu-filter"));

  //      if (visible)
  //          $(this).css("display", "block");
//    });
*/


    // HTML decode items 
    document.querySelectorAll('[wfu-decode]')
        .forEach((element) => {
            element.innerHTML = decodeHTML(element.innerHTML);
            element.removeAttribute('wfu-decode');
        });
    
    // function decodeHtml(html: string) {
    //     let txt = document.createElement('textarea');
    //     txt.innerHTML = html;
    //     return txt.value;
    // }

/*
    $("[wfu-decode]").each(function (index) {
        $(this).html(
            decodeHtml($(this).html())
            );
        $(this).removeAttr("wfu-decode");
    });
*/

    // Process filtered items
    document.querySelectorAll('[wfu-filter]')
        .forEach((element: HTMLElement) => {
// console.error("wfu-filter not yet implemented."); 
            let visible = eval(element.getAttribute('wfu-filter') as string);
            if (visible) {
                element.style.display = 'block';
            }

            // element.innerHTML = decodeHTML(element.innerHTML);
            // element.removeAttribute('wfu-decode');
        });

/*
    $("[wfu-filter]").each(function (index) {
        var visible = eval($(this).attr("wfu-filter"));
        if (visible)
            $(this).css("display", "block");
    });
*/

    // Process sorted items 
    // Innermost first, to make sure the sorting does not
    // break jQuery references 
    document.querySelectorAll('[wfu-sort] [wfu-sort] [wfu-sort]')
        .forEach((element: HTMLElement) => {
            new Sa5CollectionList(element)
                .sort();
        });
    document.querySelectorAll('[wfu-sort] [wfu-sort]')
        .forEach((element: HTMLElement) => {
            new Sa5CollectionList(element)
                .sort();
        });
    document.querySelectorAll('[wfu-sort]')
        .forEach((element: HTMLElement) => {
            new Sa5CollectionList(element)
                .sort();
        });


/*
    $("[wfu-sort] [wfu-sort] [wfu-sort]").each(function () {
        sortCollectionList($(this));
    });
    $("[wfu-sort] [wfu-sort]").each(function () {
        sortCollectionList($(this));
    });
    $("[wfu-sort]").each(function () {
        sortCollectionList($(this));
    });
*/

    // Process filtered items
    document.querySelectorAll('[wfu-filter-func]')
    .forEach((element: HTMLElement) => {
        let funcName = element.getAttribute('wfu-filter-func');
        let fqFuncName = `window.${funcName}`;
    
        console.debug(fqFuncName);
    
        let f = new Function(fqFuncName);
    
        // Retrieve function from window object using the function name
        let func = window[funcName as string];
    
        if (typeof func === 'function') {
            let visible = func(element);
            if (visible) {
                element.style.display = 'block';
            }
        }
    });
    





/* 
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
*/


    //
    // Nested Lists
    //

    // Process standalone lists
    document.querySelectorAll('ul[wfu-lists], ol[wfu-lists]')
    .forEach((listElem: HTMLElement) => {

        new Sa5NestedList(listElem)
            .processNestedList();

    });

/*
    var listElems = $("ul[wfu-lists], ol[wfu-lists]");
    $.each(listElems, function (id, listElem) {
        processList(listElem);
    });
*/

    document.querySelectorAll('.w-richtext[wfu-lists]')
      .forEach((rtfElem: HTMLElement) => {

        rtfElem.querySelectorAll(':scope > ul, :scope > ol')
          .forEach((list: HTMLElement) => {

            new Sa5NestedList(list)
                .processNestedList();

        });
    
        // Remove the attribute
        // So that the skeleton CSS will reveal the underlying
        // processed content.
        rtfElem.removeAttribute('wfu-lists');

    });

/*
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
*/

    // Process limit multiple items
    // e.g. limit a list to a multiple of N items
    document.querySelectorAll('[wfu-limit-multiple]')
    .forEach((element: HTMLElement) => {
        // Determine multiple limit
        const items = element.children.length;
        const multiple = Number(element.getAttribute('wfu-limit-multiple'));
        const min = Number(element.getAttribute('wfu-limit-multiple-min')); // Minimum
        let lastItem = Math.floor(items / multiple) * multiple;
        if (lastItem < min) lastItem = min; // Apply minimum
    
        // Hide extra items over multiple limit
        for (let hideItem = 1; hideItem < multiple; hideItem++) {
            let child: HTMLElement = element.querySelector(`:nth-child(${lastItem + hideItem})`);
            if (child) {
                child.style.display = 'none';
            }
        }
    });


/* 
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
*/



//    obj.init();


// Layout 


}

// Auto-execute on DOM load
document.addEventListener("DOMContentLoaded", init)