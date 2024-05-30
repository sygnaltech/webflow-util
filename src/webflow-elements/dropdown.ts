
/*
 * webflow-elements
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Elements 
 */



/*
 * Webflow Dropdown. 
 * Represents a single dropdown element. 
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
// Give input to the search input
const search = document.querySelector("#search-input") as HTMLElement;
search.focus();
search.click(); 

https://www.youtube.com/watch?v=HvLqXnSjoSA&t=3s&ab_channel=FrancescoCastronuovo
https://github.com/francesco-castronuovo/opened-dropdown/blob/main/main.js
*/

import { Sa5Attribute } from '../globals';
import { Sa5Core } from '../webflow-core'
import { Sa5Debug } from '../webflow-core/debug'


enum Sa5DropdownType {
    Native = "native", // Webflow
    Custom = "custom" // SA5 replaced
}


export class Sa5Dropdown {
    
    private _element: HTMLElement;
    private _elementToggle: HTMLElement;
    private _elementList: HTMLElement;

    private _delayMs: number = 100; // ms

    private _type: Sa5DropdownType = Sa5DropdownType.Native; 

    valid: boolean = false;

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

    get delayMs(): number {
        return this._delayMs;
    }
    set delayMs(val: number) {
        this._delayMs = val;
    }


    async checkOpen(): Promise<boolean | null> {
        if (!this._elementToggle) {
            return null;
        }

        return new Promise((resolve) => {
            setTimeout(() => {
        //        console.log('w--open', this._elementToggle?.classList.contains('w--open'))
                resolve(this._elementToggle?.classList.contains('w--open'));
            }, this._delayMs);
        });
    }


    /*
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
*/


    //#endregion

    //#region CONSTRUCTORS

    constructor(element: HTMLElement) {

        // Initialize
        this._element = element;
        this.init();

    }

    //#endregion

    //#region METHODS

    // Initialize the class to the element
    init() {

//       console.log("init."); 

        // Verify it's a tabs element .w-tabs
        if(!this._element.classList.contains("w-dropdown")) {
   //         console.error ("sa5-core", "element is not on a dropdown element");
            this.valid = false;
            return;
        }

        // Determine type
        const typeAttribute = this._element.getAttribute('wfu-dropdown-type')?.toLowerCase(); // Convert to lowercase
        if (!typeAttribute) {
            this._type = Sa5DropdownType.Native;
        } else if (!(typeAttribute.toLowerCase() in Sa5DropdownType)) {
            this.valid = false; 
            throw new Error("Invalid dropdown type");
            return;
        } else {
            // Safe casting since we know typeAttribute is a valid key
            this._type = Sa5DropdownType[typeAttribute.toLowerCase() as keyof typeof Sa5DropdownType];
        }

   //     console.log(`Type is ${this._type}`); 

        // Inventory parts
        this._elementToggle = this._element.querySelector('.w-dropdown-toggle');
        if(!this._elementToggle) {
            this.valid = false;
            return;
        }

        this._elementList = this._element.querySelector('.w-dropdown-list');
        if(!this._elementList) {
            this.valid = false;
            return;
        }

        this.valid = true;

//  console.log("init succeeded")

        // Perform any init actions
        switch(this._element.getAttribute(Sa5Attribute.ATTR_ELEMENT_DROPDOWN_INIT)?.toLowerCase()) {
            case "open": {
//                console.log("opening")
                this.open();
                break;
            }
        }

    }

    /**
     * Returns true if the dropdown appears to be initialized validly
     */
    // valid(): boolean {

    //     if(!this._element) return false;
    //     if(!this._elementToggle) return false;
    //     if(!this._elementList) return false;

    //     return true;
    // }
 
    // Open the dropdown
    async open() { 

  //      console.log("open");
//        if(!this.opened) 
        if(!await this.checkOpen())
            this.toggle();            

    }

    // Close the dropdown
    async close() {

   //     console.log("close");
        if(await this.checkOpen())
            this.toggle();

    }

    // Goes to the identified tab 
    // raises navigation events
    async toggle() {
        
//        console.debug("toggle");
        this._elementToggle.dispatchEvent(new Event('mousedown'));
//        this._elementToggle.dispatchEvent(new Event('mouseup'));
        setTimeout(() => {
            this._elementToggle.dispatchEvent(new Event('mouseup'));
        }, 1);
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
Sa5Core.startup(Sa5Dropdown);

/**
 * LEGACY HACK
 * To continue supporting WebflowDropdown class name 
 */

export class WebflowDropdown extends Sa5Dropdown {
}

Sa5Core.startup(WebflowDropdown);


