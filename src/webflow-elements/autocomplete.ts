
/*
 * sa5-elements
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Elements 
 */



/*
 * SA5 Autocomplete.
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
import { Sa5Dropdown } from './dropdown';



// ATTR_ELEMENT_AUTOCOMPLETE = 'wfu-autocomplete',
// ATTR_ELEMENT_AUTOCOMPLETE_INPUT = 'wfu-autocomplete-input',
// ATTR_ELEMENT_AUTOCOMPLETE_LIST = 'wfu-autocomplete-list',
// ATTR_ELEMENT_AUTOCOMPLETE_ITEM = 'wfu-autocomplete-item',
// ATTR_ELEMENT_AUTOCOMPLETE_ITEM_ACTION = 'wfu-autocomplete-item-action',
// ATTR_ELEMENT_AUTOCOMPLETE_ITEM_MATCH = 'wfu-autocomplete-item-match',

// enum Sa5DropdownType {
//     Native = "native", // Webflow
//     Custom = "custom" // SA5 replaced
// }


export class Sa5Autocomplete extends Sa5Dropdown {
    
//    private _element: HTMLElement;
    private _elementInput: HTMLElement;

    // private _elementList: HTMLElement;
    // private _delayMs: number = 100; // ms
    // private _elementDropdown: Sa5Dropdown; 

//    private _type: Sa5DropdownType = Sa5DropdownType.Native; 

    valid: boolean = false;

    //#region PROPERTYS

    // .w-dropdown
    // get element(): HTMLElement {
    //     return this._element;
    // }
    // w-dropdown-toggle
    get elementInput(): HTMLElement {
        return this._elementInput;
    }
    // // w-dropdown-list
    // get elementListItems(): HTMLElement {
    //     return this._elementList;
    // }

    // get delayMs(): number {
    //     return this._delayMs;
    // }
    // set delayMs(val: number) {
    //     this._delayMs = val;
    // }

    //#endregion

    //#region CONSTRUCTORS

    constructor(element: HTMLElement) {
        super(element); // Init dropdown element 

        // Initialize
        this.init();

    }

    //#endregion

    //#region METHODS

    // Initialize the class to the element
    init() {
        super.init();
        // Find all elements 

        // Iterate and init individual elements 
        this.setupListeners(); 

        // Element structure; 
        // Drowdown Element
        // Input
        // List items
        // Search item

//       console.log("init."); 

//         // Verify it's a tabs element .w-tabs
//         if(!this._element.classList.contains("w-dropdown")) {
//    //         console.error ("sa5-core", "element is not on a dropdown element");
//             this.valid = false;
//             return;
//         }

        // // Determine type
        // const typeAttribute = this._element.getAttribute('wfu-dropdown-type')?.toLowerCase(); // Convert to lowercase
        // if (!typeAttribute) {
        //     this._type = Sa5DropdownType.Native;
        // } else if (!(typeAttribute.toLowerCase() in Sa5DropdownType)) {
        //     this.valid = false; 
        //     throw new Error("Invalid dropdown type");
        //     return;
        // } else {
        //     // Safe casting since we know typeAttribute is a valid key
        //     this._type = Sa5DropdownType[typeAttribute.toLowerCase() as keyof typeof Sa5DropdownType];
        // }

   //     console.log(`Type is ${this._type}`); 

        // Inventory parts
        this._elementInput = super.elementToggle.querySelector(`[${Sa5Attribute.ATTR_ELEMENT_AUTOCOMPLETE_INPUT}]`);
        if(!this._elementInput) {
            this.valid = false;
            return false;
        }

        // this._elementList = this._element.querySelector('.w-dropdown-list');
        // if(!this._elementList) {
        //     this.valid = false;
        //     return false;
        // }

        this.valid = true;

    }

    actionSiteSearch(matchingString: string): void {
        const query = encodeURIComponent(matchingString);
        const url = `/search?query=${query}`;
        window.location.href = url;
    }
  
    displayMatchingElements(matchingString: string) {

        // console.log("updating", matchingString); 
        
        // TODO: ensure it's visible
        
        // Get the list element with the custom attribute
        const listElement = super.elementList; //   document.querySelector(`[${Sa5Attribute.ATTR_ELEMENT_AUTOCOMPLETE_ITEM}]`) as HTMLElement;
            
        // Show or hide the list element based on the input content
        // if (matchingString.trim() === "") {
        //   listElement.style.display = 'none';
        //   return; // No need to continue if the input is empty
        // } else {
        //   listElement.style.display = 'block';
        // }
        
        // Convert the matching string to lowercase for case-insensitive comparison
        const lowerCaseMatchingString = matchingString.toLowerCase();
        
        // Get all elements with the custom attribute and hide them initially
        const elements: NodeListOf<Element> = listElement.querySelectorAll(`[${Sa5Attribute.ATTR_ELEMENT_AUTOCOMPLETE_ITEM}]`);

        // Hide them all initially
        elements.forEach(element => {
            (element as HTMLElement).style.display = 'none';
        });
        
        // Get all elements with the custom attribute
//        const elements = document.querySelectorAll(`[${AUTOCOMPLETE_LIST}] [${AUTOCOMPLETE_MATCH}]`);
        
        // Loop through all elements and check if the attribute value contains the matching string (case-insensitive)
        elements.forEach(element => {
            const attributeValue = element.getAttribute(Sa5Attribute.ATTR_ELEMENT_AUTOCOMPLETE_ITEM_MATCH)?.toLowerCase();
            console.log(lowerCaseMatchingString, attributeValue);
            if (attributeValue && attributeValue.includes(lowerCaseMatchingString)) {

            // Make matching items it visible
            const itemLayout = element.getAttribute(Sa5Attribute.ATTR_ELEMENT_AUTOCOMPLETE_ITEM_LAYOUT) || 'block'; 
            (element as HTMLElement).style.display = itemLayout;
            }
        });
    }    
      
    private setupListeners(): void {

        // Find the input element with the custom attribute
        const inputElement = super.elementToggle.querySelector(`[${Sa5Attribute.ATTR_ELEMENT_AUTOCOMPLETE_INPUT}]`) as HTMLInputElement;
        if (inputElement) {
          // Add event listener for input changes
          inputElement.addEventListener('input', () => {
            this.displayMatchingElements(inputElement.value);
          });
        } else {
          console.error("no input element found for tour search."); 
    //      return;
          // error
        }
    
        // Find the search elements
        const searchElement = super.elementList.querySelector(`[${Sa5Attribute.ATTR_ELEMENT_AUTOCOMPLETE_ITEM_ACTION}=search]`) as HTMLLinkElement;
        if (searchElement) {
          // Add event listener for input changes
          searchElement.addEventListener('click', () => {
            this.actionSiteSearch(inputElement.value);
          });
        }
    
      }

    //#endregion

    //#region EVENTS

    // onOpenChanged() {
    //     // Detect change ( mutationobserver? )
    //     // Raise event
    // }

    //#endregion

} 

// (window as any).WebflowDropdown = WebflowDropdown;
Sa5Core.startup(Sa5Autocomplete);

 

