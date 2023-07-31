
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
    Active = 0,
    Success = 1,
    Error = 2
}


export class Sa5Form {
//    private _element: HTMLElement;

    debug: Sa5Debug;

    formBlockElement: HTMLElement;
    formElement: HTMLFormElement;

    isValid: boolean;

    constructor(element: HTMLElement) {
//        this._element = element;

        let debug = new Sa5Debug("sa5-form");
        debug.debug ("Initializing");

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

        this.debug.debug("setting form mode.");

        let success = this.formBlockElement.querySelector("div.w-form-done") as HTMLElement;
        let error = this.formBlockElement.querySelector("div.w-form-fail") as HTMLElement;

        switch (mode) {
            case WebflowFormMode.Active:
                this.debug.debug("Change Webflow form mode to active.");
                
                this.formElement.style.display = "block";
                success.style.display = "none";
                error.style.display = "none";
                
                break;
            case WebflowFormMode.Success:

                this.debug.debug("Change Webflow form mode to success (done).");
                
                success.querySelector("[wfu-form-message]").innerHTML = message;

                this.formElement.style.display = "none";
                success.style.display = "block";
                error.style.display = "none";

                break;
            case WebflowFormMode.Error:

                this.debug.debug("Change Webflow form mode to error.");
                
                error.querySelector("[wfu-form-message]").innerHTML = message;
                
                this.formElement.style.display = "none";
                success.style.display = "none";
                error.style.display = "block";

                break;
        }

    }

}










