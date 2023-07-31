
/*
 * webflow-form
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Adds capabilities to Webflow Forms and form elements.
 */

import { Sa5Core } from './webflow-core';
import { Sa5Debug } from './webflow-core/debug';



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

    constructor(element: HTMLElement) {
//        this._element = element;

        this.debug = new Sa5Debug("sa5-form");
        this.debug.debug ("Initializing");

        // Resolve Form Block pointer
        if (element.tagName == "FORM")
            this.formBlockElement = element.parentElement;
        else
            this.formBlockElement = element;
        console.debug(this.formBlockElement);

        // Resolve Form pointer
        this.formElement = this.formBlockElement.querySelector("form");

        // TODO: everywhere 
        this.isValid = true; 

        console.debug(this.formElement);

    }

    init() {


    }

    // es6 call class methods from within same class
    // https://stackoverflow.com/a/36248405

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

                // Display message
                let successMessage = error.querySelector("[wfu-form-message]");
                if (successMessage)
                    successMessage.innerHTML = message;

                this.formElement.style.display = "none";
                success.style.display = "block";
                error.style.display = "none";

                break;
            case WebflowFormMode.Error:
                
                // Display message
                let errorMessage = error.querySelector("[wfu-form-message]");
                if (errorMessage)
                    errorMessage.innerHTML = message;
                
                this.formElement.style.display = "none";
                success.style.display = "none";
                error.style.display = "block";

                break;
        }

    }

}










