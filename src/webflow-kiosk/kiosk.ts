

/*
 * webflow-kiosk
 * Kiosk Core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */


import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';




interface Sa5KioskConfig {

//    breakpointChangedCallback?: BreakpointChangedCallback; 

}



export class Sa5Kiosk {

    config: Sa5KioskConfig;
    elem: HTMLElement; 

    constructor(element: HTMLElement, config: Partial<Sa5KioskConfig> = {}) {

        this.elem = element; 
// console.log(this.elem)
        // Merge configs, with defaults
        this.config = {
        }

        let core: Sa5Core = Sa5Core.startup(); 

    }

    init() {

        // Initialize the lazy-loading functionality
//        this.setupTemplateRendering();

    }

}



/*

document.addEventListener("DOMContentLoaded", () => {
    // Function to check for kiosk mode
    function isKioskMode() {
        return /kiosk/i.test(navigator.userAgent); // Case-insensitive check for "kiosk" in the user agent string
    }

    // Log kiosk mode and the result of the isKioskMode function
    const kioskMode = isKioskMode();
    console.log("Kiosk Mode:", kioskMode);

    // Handle elements with kiosk-mode attributes based on the kioskMode flag
    if (kioskMode) {
        // Remove the "kiosk-mode=show" attribute if in kiosk mode
        const showElements = document.querySelectorAll('.kiosk-show');
        showElements.forEach(element => {
            element.classList.remove("kiosk-show");
        });
    } else {
        // Remove the "kiosk-mode=hide" attribute if not in kiosk mode
        const hideElements = document.querySelectorAll('.kiosk-hide');
        hideElements.forEach(element => {
            element.classList.remove("kiosk-hide");
        });
    }

    // Select all <data> elements with action="add-query"
    const dataElements = document.querySelectorAll('data[action="add-query"]');

    dataElements.forEach(dataElement => {
        // Extract the param and value attributes
        const param = dataElement.getAttribute("param");
        const value = dataElement.getAttribute("value");

        if (param && value) {
            // Find the nearest parent link element containing the <data> element
            let parentLink = dataElement.closest("a");

            if (parentLink) {
                // Parse the existing URL
                const url = new URL(parentLink.href);

                // Add the new query parameter
                url.searchParams.set(param, value);

                // Update the link's href
                parentLink.href = url.toString();
            }
        }
    });
});

*/ 