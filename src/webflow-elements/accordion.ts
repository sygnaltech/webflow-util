
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Accordion Utilities
 */

import { Sa5Attribute } from "../globals";



/*
 * Accordion.
 */




/*


    // container (holds set)
    // - item (one item)
    // - - header/title
    // - - - indicator expanded/collapsed 
    // - - content panel

Similar to tabs element

Events
  tab change

Select no tabs

close all
open all

Querystring
    Scroll and navigate to 

.w--current
[data-w-tab] weems to be the identifier 
*/

// [wfu-accordion=IDENTIFIER]

// Separately, we...
// 1. create this element for anything [wfu-tabs].w-tabs 
// 1. install click handlers for [wfu-tabs=x] other elements
//      anything? 
// Have the internal handlers perform actions
// wfu-tab-action=first|last|next|prev|clear ? 

// Define the type for an element with the necessary properties
interface AccordionElement extends HTMLElement {
    // style: {
    //     maxHeight: string | null;
    // };
    scrollHeight: number;
    nextElementSibling: AccordionElement;
}

export class WebflowAccordion {
    
    private _element: HTMLElement;
    private _elementTabMenu: HTMLElement;
    private _elementTabContent: HTMLElement;

    //#region PROPERTYS

    get element(): HTMLElement {
        return this._element;
    }
    get elementTabMenu(): HTMLElement {
        return this._elementTabMenu;
    }
    get elementTabContent(): HTMLElement {
        return this._elementTabContent;
    }

    get tabIndex(): number | null {
        //        let parentElement: HTMLElement; // Assume this is your parent element with class .w-tab-menu

        let currentIndex: number | null = null;
        
        // Find current tab
        for (let i = 0; i < this._elementTabMenu.children.length; i++) {
            if (this._elementTabMenu.children[i].classList.contains('w--current')) {
                currentIndex = i;
                break;
            }
        }

        // if (currentIndex !== null) {
        //   console.log(`The child with class 'w--current' is at index ${currentIndex}`);
        // } else {
        //   console.log("No child with class 'w--current' was found");
        // }

        return currentIndex; 
    }
    set tabIndex(index: number) {

        // verify number in range
        if (index < 0) 
            return; 
        if (index >= this.tabCount)
            return;

        let clickEvent = new MouseEvent('click', {
            // Event properties
            bubbles: true,
            cancelable: true,
            view: window,
            // More properties can be added as needed
            }); 

        this.elementTab(index).dispatchEvent(clickEvent);

//        this.elementTabMenu.children[index].click
    }

    get tabCount(): number {
        return this._elementTabMenu.children.length;
    }

    //#endregion

    //#region CONSTRUCTORS

    constructor(element: HTMLElement) {

        // Initialize
        this.init(element);

    }



    init(element: HTMLElement) {

        // Find accordions
        const accordionBtns = document.querySelectorAll(
            `[${Sa5Attribute.ATTR_UI_ACCORDION}=header]` // "[wfu-ui-accordion=header]"
            ) as NodeListOf<AccordionElement>;

        accordionBtns.forEach((accordion: AccordionElement) => {

          accordion.onclick = function () {
            accordion.classList.toggle("is-open");
        
            let content = accordion.nextElementSibling;
            console.log(content);
        
            if (content.style.maxHeight) {
              //this is if the accordion is open
              content.style.maxHeight = "auto";
            } else {
              //if the accordion is currently closed
              content.style.maxHeight = content.scrollHeight + "px";
              console.log(content.style.maxHeight);
            }
          };
        });

    }



    //#endregion

    //#region METHODS

    // Initialize the class to the element
    init2(element: HTMLElement) {

        // Verify it's a tabs element .w-tabs
        if(!element.classList.contains("w-tabs")) {
            console.error ("[wfu-tabs] is not on a tabs element");
            return;
        }

        console.log("init."); 

        // Inventory parts
        this._element = element; 
        this._elementTabMenu = element.querySelector('.w-tab-menu');
        this._elementTabContent = element.querySelector('.w-tab-content');
        //.w-tab-menu

        console.log("count", this.tabCount);
        console.log("index", this.tabIndex); 
        //.w-tab-content

    }

    // Get the tab element at the specified index
    elementTab(index: number): HTMLElement { 

        // verify number in range
        if (index < 0) 
            return; 
        if (index >= this.tabCount)
            return;

        return this._elementTabMenu.children[index] as HTMLElement;
    }

    // Goes to the identified tab 
    // raises navigation events
    goToTabIndex(index: number) {

        // Eventing tab change (pre)
        // from & to tabs

        console.log(index);
        
        this.tabIndex = index;

        // Eventing tab change (post)
        // from & to tabs
    }

    goToNextTab() {

        // If no tab selected, select first
        if(this.tabIndex == null) {
            this.tabIndex = 0;
            return;
        }

        // Determine new tab
        var newTabIndex: number = this.tabIndex + 1;
        if (newTabIndex >= this.tabCount)
            newTabIndex = 0;

        this.goToTabIndex(newTabIndex);

    }

    goToPrevTab() {

        // If no tab selected, select first
        if(this.tabIndex == null) {
            this.tabIndex = 0;
            return;
        }

        // Determine new tab
        var newTabIndex: number = this.tabIndex - 1;
        if (newTabIndex < 0)
            newTabIndex = this.tabCount - 1;
        
        this.goToTabIndex(newTabIndex);

    }

    goToFirstTab() {
                
        this.goToTabIndex(0);

    }

    goToLastTab() {

        var newTabIndex: number = this.tabCount - 1;

        this.goToTabIndex(newTabIndex);

    }

    //#endregion

    //#region EVENTS

    onTabChanged() {
        // Raise event
    }

    //#endregion

}

// window["WebflowAccordion"] = WebflowAccordion;


