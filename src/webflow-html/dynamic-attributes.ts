

/*
 * webflow-html
 * Dynamic Attributes
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Applies all x- prefixed attributes to their elements without the prefix.
 * Designed to overcome limitations with Webflow's custom attributes reserved names. 
 * Best paired with the new CMS databinding feature of Webflow's custom attributes. 
 */


import { Sa5Debug } from '../webflow-core/debug';



interface Config {
}


export class Sa5HtmlDynamicAttributes {
    config: Config;

    constructor(config: Config) {
        this.config = config;
    }

    init() {

        // Initialize debugging
        let debug = new Sa5Debug("sa5-html");
        debug.debug ("Dynamic attributes initialized.", this.config);
    
        // Select all elements in the document
        var allElements = document.querySelectorAll<HTMLElement>('*');

        // Iterate over all elements
        allElements.forEach(element => {
            // Iterate over all attributes of each element
            Array.from(element.attributes).forEach(attr => {
            // Check if attribute name starts with 'x-'
            if (attr.name.startsWith('x-')) {
                // Create a new attribute name by removing 'x-'
                const newAttrName = attr.name.slice(2);
    
                // Set the new attribute on the element with the same value as the old attribute
                element.setAttribute(newAttrName, attr.value);
    
                // Special case: if element is a textarea and newAttrName is "input"
                switch(element.tagName.toLowerCase()) {
                    case "textarea":
                        if (newAttrName === 'value') 
                            (element as HTMLTextAreaElement).value = attr.value;
                        break;
                }

                // Optional: log the new attribute for debugging
                debug.debug(`Element: ${element.tagName}, New Attribute: ${newAttrName}, Value: ${attr.value}`);
            }
            });
        });

//         // Iterate over all elements
//         allElements.forEach(element => {

//             // Iterate over all attributes of each element
//             for (var i = 0; i < element.attributes.length; i++) {
//                 var attr = element.attributes[i]; 

//                 // Check if attribute name starts with 'x-'
//                 if (attr.name.startsWith('x-')) {
//                     // Do something with the element or attribute

//                     var newAttrName = attr.name.slice(2);
//                     // Set the new attribute on the element with the same value as the old attribute
//                     element.setAttribute(newAttrName, attr.value);

//                     // Special element handling
// //                    switch(element.typ)

// //                    console.log('Element:', element, 'Attribute:', attr.name, 'Value:', attr.value);
//                 }
//             }

//         });

    }

}
  
// Register
// window["sa5"] = window["sa5"] || []; // {};
// window["sa5"]["Sa5HtmlDynamicAttributes"] = Sa5HtmlDynamicAttributes;


