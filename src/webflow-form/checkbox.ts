
/*
 * webflow-form-ipinfo
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * For capturing sender IP info,
 * and appending to a form.
 */

import { Sa5Form } from "../webflow-form";

export class Sa5FormCheckbox {

    checkbox: HTMLInputElement;

    config; // Optional config

    constructor(elem: HTMLInputElement, config = {}) {

//        this.handler = this;

        this.checkbox = elem;

        this.config = config;

    }

    init(): void {
 
    }

    process(): void {

        // Process removals if unchecked 
        if (!this.checkbox.checked && this.isCandidateForRemoval()) {
            this.checkbox.parentNode?.removeChild(
                this.checkbox
            ); // Remove unchecked checkbox from the form
        }

    }

    isCandidateForRemoval(): boolean {

        let element: HTMLElement = this.checkbox;

        // Walk the tree 
        while (element) {
            if (element.hasAttribute('wfu-form-checkbox') && 
                element.getAttribute('wfu-form-checkbox') === 'remove-unchecked') {
                    return true;
                }
            element = element.parentElement; // Move up to the parent element
        }

        return false;
    }

}
