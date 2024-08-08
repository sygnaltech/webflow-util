
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Accordion 
 * 
 */

import { Sa5Attribute } from "../globals";


export enum Sa5AccordionMode {
    Default = "default", // default classes
    Interactions = "ix", 
}

// Define the type for an element with the necessary properties
// interface AccordionElement extends HTMLElement {
//     // style: {
//     //     maxHeight: string | null;
//     // };
//     scrollHeight: number;
//     nextElementSibling: AccordionElement;
// }

export class Sa5AccordionItem {

    name: string;
    elem: HTMLElement;
    tab: HTMLElement;
    content: HTMLElement;

    triggerOpen: HTMLElement;
    triggerClose: HTMLElement; 

    controller: Sa5Accordion;

    constructor(elem: HTMLElement, controller: Sa5Accordion) {
        
        this.elem = elem;
        this.controller = controller; 

        this.init(); 

    }

    init() {

        // Set the name property if the attribute exists
        const nameAttr = this.elem.getAttribute('wfu-accordion-item');
        if (nameAttr) 
            this.name = nameAttr;

        // Identify the tab element
        const tabElement = this.elem.querySelector<HTMLElement>('[wfu-accordion-item-tab]');
        if (tabElement) {
            this.tab = tabElement;
        } else {
            console.error('Tab element not found');
        }

        // Identify the content element
        const contentElement = this.elem.querySelector<HTMLElement>('[wfu-accordion-item-content]');
        if (contentElement) {
            this.content = contentElement;
        } else {
            console.error('Content element not found');
        }

        // Interaction triggers 
        const triggerOpen = this.elem.querySelector<HTMLElement>('[wfu-accordion-item-trigger="open"]');
        if (triggerOpen) 
            this.triggerOpen = triggerOpen;
        const triggerClose = this.elem.querySelector<HTMLElement>('[wfu-accordion-item-trigger="close"]');
        if (triggerClose) 
            this.triggerClose = triggerClose;

    }

    get isOpen(): boolean {
        return this === this.controller.items[this.controller.index];
    }

    open() {

        // Skip, if already open
        if(this.isOpen)
            return;

        switch(this.controller.mode) {
            case Sa5AccordionMode.Interactions: 

                this.triggerOpen.click();

                break;
            default:

                this.elem.classList.add(this.controller.classOpen);
                this.elem.classList.remove(this.controller.classClosed);
                this.tab.classList.add(this.controller.classOpen);
                this.tab.classList.remove(this.controller.classClosed);
                this.content.classList.add(this.controller.classOpen);
                this.content.classList.remove(this.controller.classClosed);   

                break;
        }



    }

    close() {

        // Skip, if already closed
        if(!this.isOpen)
            return;

        switch(this.controller.mode) {
            case Sa5AccordionMode.Interactions: 

                this.triggerClose.click();

                break;
            default:

                this.elem.classList.add(this.controller.classClosed);
                this.elem.classList.remove(this.controller.classOpen);
                this.tab.classList.add(this.controller.classClosed);
                this.tab.classList.remove(this.controller.classOpen); 
                this.content.classList.add(this.controller.classClosed);
                this.content.classList.remove(this.controller.classOpen);   

                break;
        }


    }

}

export class Sa5Accordion { 
    
    name: string; 
    elem: HTMLElement;
    items: Array<Sa5AccordionItem> = [];

    index: number = 0; // first

    mode: Sa5AccordionMode = Sa5AccordionMode.Default; // "ix"; // ix | default

    classOpen: string = 'is-open';
    classClosed: string = 'is-closed';

    //#region PROPERTYS

    get element(): HTMLElement {
        return this.elem;
    }

    set currentItem(item: Sa5AccordionItem) {

        this.index = this.itemToIndex(item); 

        for (let i = 0; i < this.items.length; i++) {
            if(i == this.index)
                this.items[i].open();
            else
                this.items[i].close();
        }

    }

    //#endregion

    //#region CONSTRUCTORS

    constructor(element: HTMLElement) {

        this.elem = element; 

        // Initialize
        this.init();

    }

    //#endregion

    //#region METHODS

    itemToIndex(accordionItem: Sa5AccordionItem): number {

        console.log("itemToIndex", accordionItem); 

        let i = 0;
        this.items.forEach((item: Sa5AccordionItem) => {

            if (accordionItem === item) {
                this.index = i;
                console.log("itemToIndex", this.index)
                return i;
            }
            i++;
        });

        return -1;
    }

    init() {

        // Set the name property, if defined
        const nameAttr = this.elem.getAttribute('wfu-accordion');
        if (nameAttr) 
            this.name = nameAttr;

        const modeAttr = this.elem.getAttribute('wfu-accordion-mode');
        
        // Convert the enum to an array of values
        const enumValues = Object.values(Sa5AccordionMode);

        // Check if the modeAttr exists in the enum values
        if (modeAttr && enumValues.includes(modeAttr as Sa5AccordionMode)) {
            this.mode = modeAttr as Sa5AccordionMode;
        } else {
            this.mode = Sa5AccordionMode.Default;
        }

        // Init items 
        const accordionItemElems = document.querySelectorAll(
            `[${Sa5Attribute.ATTR_ELEMENT_ACCORDION_ITEM}]` 
            ) as NodeListOf<HTMLElement>;

        accordionItemElems.forEach((item: HTMLElement) => { 

            const accordionItem: Sa5AccordionItem = new Sa5AccordionItem(item, this); 
            this.items.push(accordionItem); // add to stack 

            accordionItem.tab?.addEventListener('click', () => {

                accordionItem.open();
                // this.itemToIndex(accordionItem);

                // this.items.forEach((accordionItem: Sa5AccordionItem) => {

                //     accordionItem.close(); 

                //     if (accordionItem.elem === item) {
                //         accordionItem.open();
                //     }
                // }); 

            }); 

        });

    }

    //#endregion

}

window["Sa5Accordion"] = Sa5Accordion;


