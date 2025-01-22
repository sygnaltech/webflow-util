
/*
 * webflow-form
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Adds capabilities to Webflow Forms and form elements.
 */

import { Sa5Attribute, Sa5GlobalEvent } from './globals';
import { Sa5Core } from './webflow-core';
import { Sa5Debug } from './webflow-core/debug';
import { Sa5FormCheckbox } from './webflow-form/checkbox';
import { Sa5FormTextarea } from './webflow-form/textarea';




type FormSubmitSuccessCallback = (form: Sa5Form, data: any) => void; 

type FormSubmitFailCallback = (form: Sa5Form, data: any) => void;




export enum WebflowFormMode {
    Active,
    Success,
    Error, 
}




interface Sa5FormConfig {
    
    formSubmitSuccessCallback?: FormSubmitSuccessCallback; 
    formSubmitFailCallback?: FormSubmitFailCallback; 
    
    debug?: boolean;

}




export class Sa5Form {
//    private _element: HTMLElement;

    debug: Sa5Debug;

    config: Sa5FormConfig; // Optional config

    formBlockElement: HTMLElement;
    formElement: HTMLFormElement;

    isValid: boolean;

    submitButtonReadyMessage: string;
    submitButtonWaitMessage: string; 

    // Get the form's redirect attribute, if exists
    get redirect(): string | null {
        return this.formElement.getAttribute('redirect');
    }

    // // Type guard to check if a function is a FormSubmitSuccessCallback
    // private isFormSubmitSuccessCallback(func: Function): func is FormSubmitSuccessCallback {

    //     if(!func) return false;

    //     // Adjust this check as needed
    //     return func.length === 1;
    // }

    // // Type guard to check if a function is a FormSubmitFailCallback
    // private isFormSubmitFailCallback(func: Function): func is FormSubmitFailCallback {

    //     if(!func) return false;

    //     // Adjust this check as needed
    //     return func.length === 1;
    // }

    constructor(element: HTMLElement, config: Partial<Sa5FormConfig> = {}) {
//        this._element = element;

        // Merge configs, with defaults
        this.config = {
            formSubmitSuccessCallback: config.formSubmitSuccessCallback, 
            formSubmitFailCallback: config.formSubmitFailCallback, 
            debug: config.debug ?? false 
        }

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

        // Find all submit buttons in the form
        const submitButton = this.formElement.querySelector('input[type="submit"]');
        this.submitButtonReadyMessage = submitButton?.getAttribute('value'); 
        this.submitButtonWaitMessage = submitButton?.getAttribute('data-wait'); 

    }

    onFormSubmitSuccess(data: any) {

        let core: Sa5Core = Sa5Core.startup();
        
        const formSubmitSuccess = core.getHandlers(Sa5GlobalEvent.EVENT_FORM_SUBMIT_SUCCESS); 
        formSubmitSuccess.forEach((f) => {

//            if(this.isFormSubmitSuccessCallback(f)) {
                f(this, data); 
//            }

        });         

    }  

    onFormSubmitFail(data: any) {

        let core: Sa5Core = Sa5Core.startup();

        const formSubmitFail = core.getHandlers(Sa5GlobalEvent.EVENT_FORM_SUBMIT_FAIL); 
        formSubmitFail.forEach((f) => {

//            if(this.isFormSubmitFailCallback(f)) {
                f(this, data); 
//            }

        });         

    }

    init() {

        console.log("INIT FORM")

        let core: Sa5Core = Sa5Core.startup();

        this.formElement.addEventListener("submit", (event: Event) => {

//            console.log("form submitted")

            // First, check if the form is valid using HTML5 validation
            if (!this.formElement.checkValidity()) {
              // If the form is invalid, show default validation messages
              event.preventDefault(); // Prevent form submission
              this.formElement.reportValidity();  // Display native validation messages
              return;
            }

//            console.log("form is valid")

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

    setSubmitButtonWaitMessage(): void {
console.log("wait message")
        // Find all submit buttons in the form
        const submitButtons = this.formElement.querySelectorAll('input[type="submit"]');
        
        // Loop through each submit button
        submitButtons.forEach((button: HTMLInputElement) => {
            // Get the value of the data-wait attribute
            const message = this.submitButtonWaitMessage; // button.getAttribute('data-wait');
            
            // If data-wait attribute exists, set the button's value to the attribute value
            if (message) {
                button.value = message;
            }

            // TODO: disable button 
        });      

    }

    setSubmitButtonReadyMessage(): void {
        console.log("ready message")
        // Find all submit buttons in the form
        const submitButtons = this.formElement.querySelectorAll('input[type="submit"]');
        
        // Loop through each submit button
        submitButtons.forEach((button: HTMLInputElement) => {
            // Get the value of the data-wait attribute
            const message = this.submitButtonReadyMessage;
            if (message) {
                button.value = message;
            }

            // TODO: enable button 
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
                
                this.setSubmitButtonReadyMessage(); 

                break;
            case WebflowFormMode.Success:

                // Redirect, if appropriate 
                if (this.redirect) {
                    this.debug.debug("Redirecting to " + this.redirect); 
                    this.setSubmitButtonReadyMessage(); 
                    window.location.href = this.redirect; 
                    return;
                }

                // Display message
                let successMessage = success.querySelector(
                    Sa5Attribute.getBracketed(Sa5Attribute.ATTR_FORM_MESSAGE)
                    ); // wfu-form-message
                if (successMessage)
                    successMessage.innerHTML = message;

                this.formElement.style.display = "none";
                success.style.display = "block";
                error.style.display = "none";
                
                this.setSubmitButtonReadyMessage(); 

                break;
            case WebflowFormMode.Error:
                
                // Display message
                let errorMessage = error.querySelector(
                    Sa5Attribute.getBracketed(Sa5Attribute.ATTR_FORM_MESSAGE)
                    ); // wfu-form-message

                if (errorMessage)
                    errorMessage.innerHTML = message;
                
                this.formElement.style.display = "block"; // "none";
                success.style.display = "none";
                error.style.display = "block";
                
                this.setSubmitButtonReadyMessage(); 

                break;
        }

    }

}



Sa5Core.startup(Sa5Form);






