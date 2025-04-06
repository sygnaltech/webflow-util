

/*
 * webflow-layout
 * Element Groups
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * notes: https://codepen.io/memetican/pen/gOJYVao/55abe124d574a10a71d94f8a036f6dd9
 */

import { Sa5Attribute } from '../globals';



export class Sa5ElementGroups {

    tabMenu: HTMLElement;
    tabContent: HTMLElement;
    tabMenuClasses: string;
    tabContentClasses: string;

    constructor() {

    }

    setElementValue(group: string, name: string, value: string) {
  
        var selector: string;
        
        if(group) {
            selector = `[${Sa5Attribute.ATTR_ELEMENTGROUP_GROUP}="${group}"][${Sa5Attribute.ATTR_ELEMENTGROUP_NAME}="${name}"]`;
        } else {
            // Construct the attribute selector based on provided group and name
            selector = `[${Sa5Attribute.ATTR_ELEMENTGROUP_NAME}="${name}"]:not([${Sa5Attribute.ATTR_ELEMENTGROUP_GROUP}])`;
        }
        
        // Find all elements matching the selector
        const elements: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
      
        // Iterate over found elements and set the value or text based on the element type
        elements.forEach(element => {

            switch(element.tagName) {
                case 'INPUT':
                    const inputElement: HTMLInputElement = element as HTMLInputElement;
                    inputElement.value = value;
                    break;
                case 'SELECT':
                    const selectElement: HTMLSelectElement = element as HTMLSelectElement;
                    selectElement.value = value;
                    break;
                case 'TEXTAREA':
                    const textAreaElement: HTMLTextAreaElement = element as HTMLTextAreaElement;
                    textAreaElement.value = value; 
                    break;
                default:
                    element.innerText = value;
                    break;
            }

        }); 

    }
      
    hideElement(elem) {
  
        // Get all computed styles of the element
        //const style = window.getComputedStyle(elem);
            
        // Access the 'display' property
        //const display = style.display;
        
        //  console.log("elem current display", display);
        
        //  elem.setAttribute("site-element-display", display);
        
        elem.style.display = 'none';
        
    }
      
    showElement(elem) {
        
        const display = elem.getAttribute(Sa5Attribute.ATTR_ELEMENTGROUP_DISPLAY);
        
        elem.style.display = display || 'block';
      
      //  elem.style.removeProperty('display');
        
    }

    selectGroupElement(group, item) {

        console.log("select", group, item);
        
        // Hide all elements of the group
        const groupElements = document.querySelectorAll(`[${Sa5Attribute.ATTR_ELEMENTGROUP_GROUP}="${group}"]`);
        groupElements.forEach(elem => {
            this.hideElement(elem);
        });
      
        // Show the specific elements 
        const specificElements = document.querySelectorAll(`[${Sa5Attribute.ATTR_ELEMENTGROUP_GROUP}="${group}"][${Sa5Attribute.ATTR_ELEMENTGROUP_NAME}="${item}"]`);
        specificElements.forEach(elem => {
            this.showElement(elem);
        });
        
    }

    init() {

        // Setup triggers
        const radios = document.querySelectorAll(`input[type="radio"][${Sa5Attribute.ATTR_ELEMENTGROUP_ACTION}]`);
    
        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.checked) {
                    const action = this.getAttribute(Sa5Attribute.ATTR_ELEMENTGROUP_ACTION);
                    const group = this.getAttribute(Sa5Attribute.ATTR_ELEMENTGROUP_TARGETGROUP);
                    const name = this.getAttribute(Sa5Attribute.ATTR_ELEMENTGROUP_TARGETNAME);

                    switch(action) {
                        case "select":
//                    const [group, item] = attributeValue.split('.');
                            name.split(',').each(n => {
                                this.selectGroupElement(group, n);
                            });
                            
                            break;
                    }
                    this.selectGroupElement(group, name);
    
                }
            });
        });

    }
      
}



