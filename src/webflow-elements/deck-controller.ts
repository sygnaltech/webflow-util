
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
import { WebflowSlider } from "./slider";
import { WebflowTabs } from "./tabs";


enum Action {
    First = 'first',
    Prev = 'prev',
    Next = 'next',
    Last = 'last',
    GoTo = 'goto'
}


export class Sa5DeckController {

    element: HTMLElement; // The controller element ( which will be clicked )
    deckName: string; // The name of the deck we want to control
    deckElement: HTMLElement; // The deck element we want to control
    tabsElement: HTMLElement;
    sliderElement: HTMLElement;
    deck: IDeckNavigation; // The deck we want to control

    action: Action; // The action we want to take
    item: string; // The item we want to navigate to number | string

    // Initialize
    constructor(element: HTMLElement) {

        this.element = element; 

        // Get the action value from the wfu-deck-action attribute
        const actionValue = this.element.getAttribute(Sa5Attribute.ATTR_ELEMENT_DECK_ACTION);
        if (actionValue) {
            this.action = Sa5DeckController.getActionEnum(actionValue);
//            console.log(`Action is valid: ${this.action}`);

            if (!this.action) {
                // The action is valid, proceed with your logic
                console.error(`Invalid wfu-deck-action value: ${actionValue}`);
            }
        }

        // Get the target deck element
        const targetName = element.getAttribute(Sa5Attribute.ATTR_ELEMENT_DECK_TARGET);
        if (targetName) {
            this.deckName = targetName;

            // Query elements with wfu-tabs or wfu-slider attributes matching the targetName
            const tabsElements = document.querySelectorAll(`[wfu-tabs="${targetName}"]`);
            const sliderElements = document.querySelectorAll(`[wfu-slider="${targetName}"]`);

            // Check if more than one element is found for each attribute or if elements with different attributes have the same targetName
            if(tabsElements.length + sliderElements.length > 1) {
                console.error(`Multiple elements or conflicting elements found with the target name: ${targetName}`);
            }
            if(tabsElements.length + sliderElements.length == 0) {
                console.error(`No elements found with the target name: ${targetName}`);
            }

            // Verify it's a valid element [tabs or slider] 
            // anything that implments our deck interface 

            // Handle the found elements
            if (tabsElements.length === 1) {
                this.tabsElement = tabsElements[0] as HTMLElement;
                this.deck = new WebflowTabs(this.tabsElement);
            } else if (sliderElements.length === 1) {
                this.sliderElement = sliderElements[0] as HTMLElement;
                this.deck = new WebflowSlider(this.sliderElement);  
            }

        } else {

            // Get the nearest parent element with an attribute of wfu-tabs or wfu-slider
            const tabsParent = this.element.closest(`[${Sa5Attribute.ATTR_ELEMENT_TABS}]`);
            const sliderParent = this.element.closest(`[${Sa5Attribute.ATTR_ELEMENT_SLIDER}]`);

            if (tabsParent) {
                this.tabsElement = tabsParent as HTMLElement;
                this.deck = new WebflowTabs(this.tabsElement);
            } else if (sliderParent) {
                this.sliderElement = sliderParent as HTMLElement;
                this.deck = new WebflowSlider(this.sliderElement);
            } else {
                console.error(`No valid target element found for the wfu-deck-action element`);
            }

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
                    this.deck.goToFirst();
                    break;
                case Action.Prev:
                    this.deck.goToPrev();
                    break;
                case Action.Next:
                    this.deck.goToNext();
                    break;
                case Action.Last:
                    this.deck.goToLast();
                    break;
                case Action.GoTo:
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
                    console.error(`Invalid wfu-deck-action value: ${this.action}`);
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
            console.error(`Invalid wfu-deck-action value: ${actionValue}`);
            return null;
        }

    };

}


// Export class to SA5 API 
Sa5Core.startup(Sa5DeckController);
