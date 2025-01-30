

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


import { booleanValue } from '../utils';
import { Sa5Debug } from '../webflow-core/debug';



interface Config {
}

interface DynamicAttributeConfig {
    name: string;
    value?: string;
    pre?: string;
    post?: string;
    target: string; // Always defined, defaults to "parent" if missing
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



        // // Select all elements in the document
        // var allElements = document.querySelectorAll<HTMLElement>('*');

        // // Iterate over all elements
        // allElements.forEach(element => {
        //     // Iterate over all attributes of each element
        //     Array.from(element.attributes).forEach(attr => {
        //     // Check if attribute name starts with 'x-'
        //     if (attr.name.startsWith('x-') || attr.name.startsWith('x:')) {
        //         // Create a new attribute name by removing 'x-'
        //         const newAttrName = attr.name.slice(2);
    
        //         this.applyAttr(element, newAttrName, attr.value); 

        //         // Optional: log the new attribute for debugging
        //         debug.debug(`Element: ${element.tagName}, New Attribute: ${newAttrName}, Value: ${attr.value}`);
        //     }
        //     });
        // });

        // Legacy transforms
        // x-* 

        document.querySelectorAll<HTMLElement>('*').forEach(el => {
            Array.from(el.attributes).forEach(attr => {
                if (attr.name.startsWith('x-')) {
        
                    // Create a new attribute name by removing 'x-'
                    const newAttrName = attr.name.slice(2);
            
                    this.applyAttr(el, newAttrName, attr.value); 

                    // Optional: log the new attribute for debugging
                    debug.debug(`Element: ${el.tagName}, New Attribute: ${newAttrName}, Value: ${attr.value}`);

                }
            });
        });        

        // Transforms
        // x:*
        // x:*:pre
        // x:*:post

        document.querySelectorAll<HTMLElement>('*').forEach(el => {
            Array.from(el.attributes).forEach(attr => {
                if (attr.name.startsWith('x:')) {
        
                    // If the attribute does not still exist on this element, continue
                    if (!el.hasAttribute(attr.name)) return;
        
                    // Get the base attribute name, without the x: or any :pre or :post suffix
                    const baseAttr = attr.name.split(':')[1]; 
                    const mainAttr = `x:${baseAttr}`; 
                    const preAttr = `x:${baseAttr}:pre`;
                    const postAttr = `x:${baseAttr}:post`;
        
                    // Retrieve the 4 values - attr, x:attr, x:attr:pre, x:attr:post
                    const existingValue = el.getAttribute(baseAttr) || ""; // Existing value (if exists)
                    const mainValue = el.getAttribute(mainAttr) !== null ? el.getAttribute(mainAttr) : existingValue;
                    const preValue = el.getAttribute(preAttr) || "";  // Prefix (if exists)
                    const postValue = el.getAttribute(postAttr) || ""; // Suffix (if exists)
        
                    // Assemble the resulting value
                    const finalValue = preValue + mainValue + postValue;
        
                    // Apply the resulting value
                    el.setAttribute(baseAttr, finalValue);
                    this.applyAttr(el, baseAttr, finalValue); 
        

                    // Remove the three x: attributes
                    el.removeAttribute(mainAttr); // Remove x:something (if exists)
                    el.removeAttribute(preAttr);   // Remove x:something:pre (if exists)
                    el.removeAttribute(postAttr);  // Remove x:something:post (if exists)
                }
            });
        });

        // Handle scripts 

        const scripts = document.querySelectorAll<HTMLScriptElement>(
            'script[type="application/sa5+json"][handler="DynamicAttribute"]'
        );
    
        const configs: DynamicAttributeConfig[] = [];
    
        scripts.forEach((script) => {
            try {
                if (!script.textContent) return; // Skip empty script blocks
        
                const parsed = JSON.parse(script.textContent);
        
                // Validate structure
                if (parsed["@type"] === "DynamicAttribute" && typeof parsed.name === "string") {
                    const config: DynamicAttributeConfig = {
                        name: parsed.name,
                        value: typeof parsed.value === "string" ? parsed.value : undefined,
                        pre: typeof parsed.pre === "string" ? parsed.pre : undefined,
                        post: typeof parsed.post === "string" ? parsed.post : undefined,
                        target: typeof parsed.target === "string" ? parsed.target.toLowerCase() : "parent",
                    };

// console.log(config); 

                    let targetElement: Element | null = null;
                    targetElement = this.getElem(script, config.target); 

                    // If target element is found, retrieve the attribute value
                    if (targetElement) { 

                        const existingValue = targetElement.getAttribute(config.name); 
                        const mainValue = config.value !== null ? config.value : existingValue;
                        const preValue = config.pre || "";  // Prefix (if exists)
                        const postValue = config.post || ""; // Suffix (if exists)
            
// console.log(existingValue, mainValue, preValue, postValue)

                        // Assemble the resulting value
                        const finalValue = preValue + mainValue + postValue;

                        targetElement.setAttribute(config.name, finalValue); 

//                         console.log(`Attribute "${name}" value:`, finalValue);
                    } else {
                        console.warn(`No target element found for target "${config.target}".`);
                    }

                    configs.push(config);
                }
            } catch (error) {
                console.warn("Invalid JSON in DynamicAttribute script block:", script, error);
            }
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

    getElem(element: HTMLElement, target: string) {

        // Identify the target element
        let targetElement: Element | null = null;
        switch (target) {
            case "parent":
                targetElement = element.parentElement.parentElement;
                break;
            case "prev":
                targetElement = element.parentElement.previousElementSibling;
                break;
            case "next":
                targetElement = element.parentElement.nextElementSibling;
                break;
        }

        return targetElement; 
    }


    // combineAttr() {
    //     const existingValue = el.getAttribute(baseAttr) || ""; // Existing value (if exists)
    //     const mainValue = el.getAttribute(mainAttr) !== null ? el.getAttribute(mainAttr) : existingValue;
    //     const preValue = el.getAttribute(preAttr) || "";  // Prefix (if exists)
    //     const postValue = el.getAttribute(postAttr) || ""; // Suffix (if exists)
    // }


    applyAttr(element: HTMLElement, newAttrName: string, newAttrValue: string) {

        // Set the new attribute on the element with the same value as the old attribute
        element.setAttribute(newAttrName, newAttrValue);  

        // Special case: if element is a textarea and newAttrName is "input"
        switch(element.tagName.toLowerCase()) {
            case "textarea":
                if (newAttrName === 'value') 
                    (element as HTMLTextAreaElement).value = newAttrValue;
                break;
            case "select":
                if (newAttrName === 'value') 
                    (element as HTMLSelectElement).value = newAttrValue;
                break;
            case "input":
                switch (element.getAttribute("type")) {   

                    // Special checkbox processing 
                    case "checkbox":

                        // Process checked specially as boolean
                        if(newAttrName == "checked") {
                            if(booleanValue(newAttrValue))
                                element.setAttribute("checked", "checked");
                            else
                                element.removeAttribute("checked");
                        } 
                        break;
                }
                break;
        }

    }

/*

    applyAttr(element: HTMLElement, newAttrName: string, newAttrValue: string) {

        // Set the new attribute on the element with the same value as the old attribute
        element.setAttribute(newAttrName, attr.value);  

        // Special case: if element is a textarea and newAttrName is "input"
        switch(element.tagName.toLowerCase()) {
            case "textarea":
                if (newAttrName === 'value') 
                    (element as HTMLTextAreaElement).value = attr.value;
                break;
            case "select":
                if (newAttrName === 'value') 
                    (element as HTMLSelectElement).value = attr.value;
                break;
            case "input":
                switch (element.getAttribute("type")) {   

                    // Special checkbox processing 
                    case "checkbox":

                        // Process checked specially as boolean
                        if(newAttrName == "checked") {
                            if(booleanValue(attr.value))
                                element.setAttribute("checked", "checked");
                            else
                                element.removeAttribute("checked");
                        } 
                        break;
                }
                break;
        }

*/


}
  
// Register
// window["sa5"] = window["sa5"] || []; // {};
// window["sa5"]["Sa5HtmlDynamicAttributes"] = Sa5HtmlDynamicAttributes;


