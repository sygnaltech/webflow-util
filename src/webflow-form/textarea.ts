
/*
 * webflow-textarea
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * For capturing sender IP info,
 * and appending to a form.
 */

import { Sa5Form } from "../webflow-form";

export class Sa5FormTextarea {

    textarea: HTMLTextAreaElement; 

    config; // Optional config

    constructor(elem: HTMLTextAreaElement, config = {}) {

        this.textarea = elem; 

        this.config = config;

    }


    init(): void {

    }

    process(): void {

        return; // not in use 

        // Process removals if unchecked 
        if (this.checkPreserveLineBreaks()) {

            // Get the textarea value
//            var modifiedText = this.textarea.value.replace(/(\r\n|\r|\n)/g, '\\n');
//            var modifiedText = this.textarea.value.replace(/(\r\n|\r|\n)/g, '<br>');
            var modifiedText = this.textarea.value.replace(/(\r\n|\r|\n)/g, '\\n\\n');

            // Set the modified text back to the textarea or prepare it for sending
            this.textarea.value = modifiedText;

        }

    }

    checkPreserveLineBreaks(): boolean {

        return false;  // not in use

        let element: HTMLElement = this.textarea;

        // Walk the tree 
        while (element) {
            if (element.hasAttribute('wfu-form-textarea') && 
                element.getAttribute('wfu-form-textarea') === 'preserve-linebreaks') {
                    return true;
                }
            element = element.parentElement; // Move up to the parent element
        }

        return false;
    }

}
