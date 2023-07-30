
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


    /** 
     * Decode html chunk
     */

    document.querySelectorAll('[wfu-decode]')
      .forEach((element) => {
        element.innerHTML = decodeHTML(element.innerHTML);
        element.removeAttribute('wfu-decode');
    });





    /** 
     * Sort items 
     * Innermost first, to support nested sorts
     */

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




    /**
     * Filter items
     * Place on item you want to conditionally hide 
     * TODO: add remove mode? 
     */



    // Process filtered items
    document.querySelectorAll('[wfu-filter]')
      .forEach((element: HTMLElement) => {

        let visible = eval(element.getAttribute('wfu-filter') as string);
        if (visible) {
            element.removeAttribute("wfu-filter");
        }

    });




    // Process filtered items
    document.querySelectorAll('[wfu-filter-func]')
      .forEach((element: HTMLElement) => { 

        let funcName = element.getAttribute('wfu-filter-func');
        let fqFuncName = `window.${funcName}`;
    
        let f = new Function(fqFuncName);
    
        // Retrieve function from window object using the function name
        let func = window[funcName as string];
    
        if (typeof func === 'function') {
            let visible = func(element);
            if (visible) {
                element.removeAttribute("wfu-filter-func"); 
            }
        }

    });




    /** 
     * Process nested lists
     */

    // // Process standalone lists
    // document.querySelectorAll('ul[wfu-lists], ol[wfu-lists]')
    // .forEach((listElem: HTMLElement) => {

    //     new Sa5NestedList(listElem)
    //         .processNestedList();

    // });

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



    /**
     * Limit to a multiple of X items 
     */

    // Process limit multiple items
    // e.g. limit a list to a multiple of N items
    document.querySelectorAll('[wfu-limit-multiple]')
      .forEach((element: HTMLElement) => { 

// .w-dyn-list
// .w-dyn-items
// .w-dyn-item

        // If collection list wrapper, adjust to list
        var listElement: HTMLElement = element;
        if(element.classList.contains("w-dyn-list"))
            listElement = element.children[0] as HTMLElement; 

        // Determine multiple limit
        const itemCount = listElement.children.length;
        const itemMultipleCount = Number(element.getAttribute('wfu-limit-multiple'));
        const itemMinimumCount = Number(element.getAttribute('wfu-limit-multiple-min')); // Minimum
        let lastItem = Math.floor(itemCount / itemMultipleCount) * itemMultipleCount;
        if (lastItem < itemMinimumCount) lastItem = itemMinimumCount; // Apply minimum

        // Hide extra items over multiple limit
        for (let hideItem = 1; hideItem < itemMultipleCount; hideItem++) {
            let child: HTMLElement = listElement.querySelector(`:nth-child(${lastItem + hideItem})`);
            if (child) {
                child.style.display = 'none';
            }
        }

    });



//    obj.init();


// Layout 


}

// Auto-execute on DOM load
document.addEventListener("DOMContentLoaded", init)