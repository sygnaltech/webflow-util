
/*
 * sa5-elements
 * Autocomplete
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Elements 
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





export class Sa5Autocomplete extends Sa5Dropdown {
    
//    private _element: HTMLElement;
    private _elementInput: HTMLElement;

    valid: boolean = false;

    //#region PROPERTYS

    get elementInput(): HTMLElement {
        return this._elementInput;
    }

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

        // Inventory parts
        this._elementInput = super.elementToggle.querySelector(`[${Sa5Attribute.ATTR_ELEMENT_AUTOCOMPLETE_INPUT}]`);
        if(!this._elementInput) {
            this.valid = false;
            return false;
        }

        this.valid = true;

    }

    /**
     * Perform a site search using the input text 
     * @param matchingString 
     */
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
            super.open();
          });
        } else {
          console.error("no input element found for autocomplete."); 
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

} 

// (window as any).WebflowDropdown = WebflowDropdown;
Sa5Core.startup(Sa5Autocomplete);

 

