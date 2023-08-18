
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Core Utilities
 */



/*
 * Webflow Dropdown.
 */


/*

<div class="nav-item-frame">
  <div data-delay="0" data-hover="true" class="dropdown w-dropdown" style="max-width: 940px;">
    <div class="navigation-link w-dropdown-toggle" id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
      <div class="w-icon-dropdown-toggle" aria-hidden="true"></div>
      <div>LEARN</div>
    </div>
    <nav class="nav_dropdown w-dropdown-list" id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2">
      <a href="/blog" class="dropdown-link w-dropdown-link" tabindex="0">Technology &amp; Programming Blog</a>
      <a href="/courses" class="dropdown-link w-dropdown-link" tabindex="0">Sygnal-U Webflow Courses</a>
      <a href="https://coachmike.live" target="_blank" class="dropdown-link w-dropdown-link" tabindex="0">Psychology &amp;&nbsp;Entrepreneurship Blog</a>
      <div class="separator"></div>
      <a href="/news" class="dropdown-link w-dropdown-link" tabindex="0">News &amp; Press Releases</a>
      <a href="/faqs" class="dropdown-link w-dropdown-link" tabindex="0">Frequently Asked Questions ( FAQs ) </a>
    </nav>
  </div>
</div>
*/

/*

.w-dropdown-toggle
.w--open

dropdown.open
.close
.toggle

opened


// Toggle the dropdown
const dropdownToggle = document.querySelector('#menu-search .w-dropdown-toggle') as HTMLElement; 
dropdownToggle.dispatchEvent(new Event('mousedown'));
dropdownToggle.dispatchEvent(new Event('mouseup'));

// Give input to the search input
const search = document.querySelector("#search-input") as HTMLElement;
search.focus();
search.click(); 

https://www.youtube.com/watch?v=HvLqXnSjoSA&t=3s&ab_channel=FrancescoCastronuovo
https://github.com/francesco-castronuovo/opened-dropdown/blob/main/main.js

*/

// [wfu-tabs=IDENTIFIER]

// Separately, we...
// 1. create this element for anything [wfu-tabs].w-tabs 
// 1. install click handlers for [wfu-tabs=x] other elements
//      anything? 
// Have the internal handlers perform actions
// wfu-tab-action=first|last|next|prev|clear ? 
import { Sa5Core } from '../webflow-core'
import { Sa5Debug } from '../webflow-core/debug'



export class WebflowDropdown {
    
    private _element: HTMLElement;
    private _elementToggle: HTMLElement;
    private _elementList: HTMLElement;

    //#region PROPERTYS

    // .w-dropdown
    get element(): HTMLElement {
        return this._element;
    }
    // w-dropdown-toggle
    get elementToggle(): HTMLElement {
        return this._elementToggle;
    }
    // w-dropdown-list
    get elementList(): HTMLElement {
        return this._elementList;
    }

    get opened(): boolean | null {
        
        if (!this._elementToggle)
            return null;

        // Find current tab
        if (this._elementToggle.classList.contains('w--open')) {
            return true;
        }

        return false; 
    }
    set opened(state: boolean) {

        if (state)
            open();
        else
            close();

        // let clickEvent = new MouseEvent('click', {
        //     // Event properties
        //     bubbles: true,
        //     cancelable: true,
        //     view: window,
        //     // More properties can be added as needed
        //     }); 

        // this.elementTab(index).dispatchEvent(clickEvent);

//        this.elementTabMenu.children[index].click
    }



    //#endregion

    //#region CONSTRUCTORS

    constructor(element: HTMLElement) {

        // Initialize
        this.init(element);

    }

    //#endregion

    //#region METHODS

    // Initialize the class to the element
    init(element: HTMLElement) {

        // Verify it's a tabs element .w-tabs
        if(!element.classList.contains("w-dropdown")) {
            console.error ("sa5-core", "element is not on a dropdown element");
            return;
        }

        console.log("init."); 

        // Inventory parts
        this._element = element; 
        this._elementToggle = element.querySelector('.w-dropdown-toggle');
        this._elementList = element.querySelector('.w-dropdown-list');

    }
 
    // Open the dropdown
    open(): void { 

        console.log("open");
        if(!this.opened) 
            this.toggle();            

    }

    // Close the dropdown
    close(): void {

        console.log("close");
        if(this.opened)
            this.toggle();

    }

    // Goes to the identified tab 
    // raises navigation events
    toggle(): void {
        
        console.log("toggle");
        this._elementToggle.dispatchEvent(new Event('mousedown'));
        this._elementToggle.dispatchEvent(new Event('mouseup'));

    }



    //#endregion

    //#region EVENTS

    onOpenChanged() {
        // Detect change ( mutationobserver? )
        // Raise event
    }

    //#endregion

}

// (window as any).WebflowDropdown = WebflowDropdown;
Sa5Core.startup(WebflowDropdown);

