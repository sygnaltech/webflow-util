
/*
 * webflow-form
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Adds capabilities to Webflow Forms and form elements.
 */

import { Sa5Attribute } from './globals';
import { Sa5Core } from './webflow-core';
import { Sa5Debug } from './webflow-core/debug';
import { Sa5FormCheckbox } from './webflow-form/checkbox';
import { Sa5FormTextarea } from './webflow-form/textarea';



export enum WebflowFormMode {
    Active,
    Success,
    Error, 
}


export class Sa5Form {
//    private _element: HTMLElement;

    debug: Sa5Debug;

    formBlockElement: HTMLElement;
    formElement: HTMLFormElement;

    isValid: boolean;

    // Get the form's redirect attribute, if exists
    get redirect(): string | null {
        return this.formElement.getAttribute('redirect');
    }

    constructor(element: HTMLElement) {
//        this._element = element;

        this.debug = new Sa5Debug("sa5-form");
        this.debug.debug ("Initializing");

        // Resolve Form Block pointer
        if (element.tagName == "FORM")
            this.formBlockElement = element.parentElement;
        else
            this.formBlockElement = element;
//        console.debug(this.formBlockElement);

        // Resolve Form pointer
        this.formElement = this.formBlockElement.querySelector("form");

        // TODO: everywhere 
        this.isValid = true; 

//        console.debug(this.formElement);

    }

    init() {

console.log("init form")

        this.formElement.addEventListener("submit", (event: Event) => {

            console.log("form submitted")

            // First, check if the form is valid using HTML5 validation
            if (!this.formElement.checkValidity()) {
              // If the form is invalid, show default validation messages
              event.preventDefault(); // Prevent form submission
              this.formElement.reportValidity();  // Display native validation messages
              return;
            }

            console.log("form is valid")

            // Form is valid, do pre-submit prep 
            this.preSubmit(); 

        }); 

    }

    /**
     * Handle any data modifications immediately prior to valid 
     * form submission. 
     */
    preSubmit(): void {


      // Find all checkboxes within the form
      const checkboxes = this.formElement.querySelectorAll<HTMLInputElement>("input[type='checkbox']");
      checkboxes.forEach((elem: HTMLInputElement) => {

        let checkbox: Sa5FormCheckbox = new Sa5FormCheckbox(elem);  
        checkbox.process(); 

      });


    //   // Find all textAreas within the form
    //   const textAreas = this.formElement.querySelectorAll<HTMLTextAreaElement>("textarea");
    //   textAreas.forEach((elem: HTMLTextAreaElement) => {

    //     let textarea: Sa5FormTextarea = new Sa5FormTextarea(elem);  
    //     textarea.process(); 

    //   });


    }

    submitButtonWaitMessage(): void {

        // Find all submit buttons in the form
        const submitButtons = this.formElement.querySelectorAll('input[type="submit"]');
        
        // Loop through each submit button
        submitButtons.forEach((button: HTMLInputElement) => {
            // Get the value of the data-wait attribute
            const waitMessage = button.getAttribute('data-wait');
            
            // If data-wait attribute exists, set the button's value to the attribute value
            if (waitMessage) {
                button.value = waitMessage;
            }
        });      

    }

    setMode(mode: WebflowFormMode, message = "") {

        this.debug.debug("setting mode.", mode, message); 

        let success: HTMLElement = this.formBlockElement.querySelector("div.w-form-done");
        let error: HTMLElement = this.formBlockElement.querySelector("div.w-form-fail");

        switch (mode as WebflowFormMode) {
            case WebflowFormMode.Active:

                this.formElement.style.display = "block";
                success.style.display = "none";
                error.style.display = "none";
                
                break;
            case WebflowFormMode.Success:
// console.log("SUCCESS"); 
                // Redirect, if appropriate 
                if (this.redirect) {
                    console.log("redirecting")
                    this.submitButtonWaitMessage(); 
                    window.location.href = this.redirect; 
                    return;
                }

                // Display message
                let successMessage = error.querySelector(
                    Sa5Attribute.getBracketed(Sa5Attribute.ATTR_FORM_MESSAGE)
                    ); // wfu-form-message
                if (successMessage)
                    successMessage.innerHTML = message;

                this.formElement.style.display = "none";
                success.style.display = "block";
                error.style.display = "none";

                break;
            case WebflowFormMode.Error:
                
                // Display message
                let errorMessage = error.querySelector(
                    Sa5Attribute.getBracketed(Sa5Attribute.ATTR_FORM_MESSAGE)
                    ); // wfu-form-message
                if (errorMessage)
                    errorMessage.innerHTML = message;
                
                this.formElement.style.display = "none";
                success.style.display = "none";
                error.style.display = "block";

                break;
        }

    }

}



Sa5Core.startup(Sa5Form);






