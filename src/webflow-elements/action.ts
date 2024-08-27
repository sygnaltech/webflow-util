
/*
 * Sa5DeckController
 * webflow-elements
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */

import { Sa5Attribute } from "../globals";
import { booleanValue } from "../utils";
import { Sa5Core } from "../webflow-core";
import { HtmlBuilder } from "../webflow-html-builder";
import { Sa5Accordion } from "./accordion";
import { WebflowSlider } from "./slider";
import { WebflowTabs } from "./tabs";


enum Action {

    // Navigation
    First = 'first',
    Last = 'last',
    Prev = 'prev',
    PrevLoop = 'prevloop',
    Next = 'next',
    NextLoop = 'nextloop',
    GoTo = 'goto',

    // Visibility
    Hide = 'hide',
    Show = 'show',
    Toggle = 'toggle', 

    // Collapsing
    Open = 'open',
    Close = 'close',

}

enum TargetElementType {



}


export class Sa5ActionController {

    element: HTMLElement; // The controller element ( which will be clicked )
    targetName: string; // The name of the element we want to control
    targetElement: HTMLElement; // The deck element we want to control
    // tabsElement: HTMLElement;
    // sliderElement: HTMLElement;
    deck: IDeckNavigation; // The deck we want to control

    action: Action; // The action we want to take
    item: string; // The item we want to navigate to number | string

    // Initialize
    constructor(element: HTMLElement) {

        this.element = element; 

        // Get the action value from the wfu-action attribute
        const actionValue = this.element.getAttribute(Sa5Attribute.ATTR_ELEMENT_ACTION);
        if (actionValue) {
            this.action = Sa5ActionController.getActionEnum(actionValue);

            if (!this.action) {
                // The action is valid, proceed with your logic
                console.error(`Invalid wfu-action value: ${actionValue}`);
            }
        }

        // Get the target element
        const targetName = element.getAttribute(Sa5Attribute.ATTR_ELEMENT_ACTION_TARGET);
        if (targetName) {
            this.targetName = targetName;

            // Query elements with wfu-tabs or wfu-slider attributes matching the targetName
            const selectorArray = [
                `[${Sa5Attribute.ATTR_ELEMENT}="${targetName}"]`, // wfu-name
                `[${Sa5Attribute.ATTR_ELEMENT_TABS}="${targetName}"]`, // wfu-tabs
                `[${Sa5Attribute.ATTR_ELEMENT_SLIDER}="${targetName}"]`, // wfu-slider
                `[${Sa5Attribute.ATTR_ELEMENT_ACCORDION}="${targetName}"]` // wfu-accordion
            ];
            
            const targetElements = document.querySelectorAll<HTMLElement>(selectorArray.join(', '));
            
            // Check if more than one element is found for each attribute or if elements with different attributes have the same targetName
            if(targetElements.length > 1) {
                console.error(`Multiple elements or conflicting elements found with the target name: ${targetName}`);
            }
            if(targetElements.length == 0) {
                console.error(`No elements found with the target name: ${targetName}`);
                return;
            }

            // Save target element
            // match first 
            this.targetElement = targetElements[0];           
                
        } else {

            const selectorArray = [
                `[${Sa5Attribute.ATTR_ELEMENT}]`, // wfu-element
                `[${Sa5Attribute.ATTR_ELEMENT_TABS}]`, // wfu-tabs
                `[${Sa5Attribute.ATTR_ELEMENT_SLIDER}]`, // wfu-slider
                `[${Sa5Attribute.ATTR_ELEMENT_ACCORDION}]` //  wfu-accordion
            ];
            
            this.targetElement = this.element.closest<HTMLElement>(selectorArray.join(', '));

        }

        // Handle no-element found
        if(!this.targetElement) {
            console.error("Unable to locate a target element for the action");
            return; 
        }
                
        // If it's a deck element, 
        // set the appropriate element handler 
        if(this.targetElement.hasAttribute("wfu-tabs")) {
            this.deck = new WebflowTabs(this.targetElement);
        } else if(this.targetElement.hasAttribute("wfu-slider")) {
            this.deck = new WebflowSlider(this.targetElement);
        } else if(this.targetElement.hasAttribute("wfu-accordion")) {
            this.deck = new Sa5Accordion(this.targetElement);
        }

        // Get the item value from the wfu-deck-action-item attribute
        this.item = this.element.getAttribute(Sa5Attribute.ATTR_ELEMENT_DECK_ITEM);

    }

    init() {

        // Add event listener to the element
        this.element.addEventListener("click", (event) => {
            // block button click 
            event.preventDefault();
            
            switch (this.action) {
                case Action.First:
                    if(!this.deck) {
                        console.error(`Invalid action '${this.action}' attempted on a non-deck element.`);
                        return;
                    }
                    this.deck.goToFirst();
                    break;
                case Action.Prev:
                    if(!this.deck) {
                        console.error(`Invalid action '${this.action}' attempted on a non-deck element.`);
                        return;
                    }
                    this.deck.goToPrev();
                    break;
                case Action.PrevLoop:
                    if(!this.deck) {
                        console.error(`Invalid action '${this.action}' attempted on a non-deck element.`);
                        return;
                    }
                    this.deck.goToPrevLoop();
                    break;
                case Action.Next:
                    if(!this.deck) {
                        console.error(`Invalid action '${this.action}' attempted on a non-deck element.`);
                        return;
                    }
                    this.deck.goToNext();
                    break;
                case Action.NextLoop:
                    if(!this.deck) {
                        console.error(`Invalid action '${this.action}' attempted on a non-deck element.`);
                        return;
                    }
                    this.deck.goToNextLoop();
                    break;
                case Action.Last:
                    if(!this.deck) {
                        console.error(`Invalid action '${this.action}' attempted on a non-deck element.`);
                        return;
                    }
                    this.deck.goToLast();
                    break;
                case Action.GoTo:
                    if(!this.deck) {
                        console.error(`Invalid action '${this.action}' attempted on a non-deck element.`);
                        return;
                    }

                    if (typeof this.item === 'string' && !isNaN(Number(this.item))) {
                        // Convert this.item to a number and call this.deck.goTo
                        this.deck.goTo(Number(this.item) - 1); // Adjust for 0-based index
                    } else if (typeof this.item === 'number') {
                        // this.item is already a number, no conversion needed
                        this.deck.goTo(this.item - 1); // Adjust for 0-based index 
                    } else {
                        // Name translation
                        this.deck.goToName(this.item);
                    }                
                    break;
                default:
                    console.error(`Invalid wfu-action value: ${this.action}`);
                    break;
            }
            
        });

//        this.element.removeAttribute(Sa5Attribute.ATTR_PRELOAD);

    }

    // Function to check if the action is valid and return the action as an enum
    static getActionEnum (actionValue: string): Action | null {
        const lowerCaseValue = actionValue.toLowerCase();

//        console.log(`lowerCaseValue: ${lowerCaseValue}`);

        if (Object.keys(Action).some(key => Action[key as keyof typeof Action] === lowerCaseValue)) {
            return lowerCaseValue as Action;
        } else {
            console.error(`Invalid wfu-action value: ${actionValue}`);
            return null;
        }

    };

}


// Export class to SA5 API 
Sa5Core.startup(Sa5ActionController);
