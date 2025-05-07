
/*
 * SA5 Elements
 * Accordion 
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 */

import { Sa5Attribute, Sa5GlobalEvent } from "../globals";
import { Sa5Core } from "../webflow-core";
import { Sa5Debug } from "../webflow-core/debug";


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

// #region Sa5AccordionItem

export class Sa5AccordionItem {

    name: string;
    elem: HTMLElement;
    tab: HTMLElement;
    content: HTMLElement;

    triggerOpen: HTMLElement;
    triggerClose: HTMLElement; 

    controller: Sa5Accordion;

    get index(): number {
        return this.controller.itemToIndex(this);
    }

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

        // Mode setup
        switch(this.controller.mode) {
            case Sa5AccordionMode.Interactions: 

                // this.elem.classList.remove(this.controller.classClosed);
                // this.tab.classList.remove(this.controller.classClosed);
                // this.content.classList.remove(this.controller.classClosed);   
                // this.elem.classList.remove(this.controller.classOpen);
                // this.tab.classList.remove(this.controller.classOpen);
                // this.content.classList.remove(this.controller.classOpen);   
                
                break;
        }

    }

    get isOpen(): boolean {
        return this === this.controller.items[this.controller.currentIndex];
    }

    open() {

        // Skip, if already open
        // if(this.isOpen)
        //     return;

        switch(this.controller.mode) {
            case Sa5AccordionMode.Interactions: 

                this.triggerOpen.click();

                this.controller.onItemChanged(this.index);

                break;
            default:

                this.elem.classList.add(this.controller.classOpen);
                this.elem.classList.remove(this.controller.classClosed);
                this.tab.classList.add(this.controller.classOpen);
                this.tab.classList.remove(this.controller.classClosed);
                this.content.classList.add(this.controller.classOpen);
                this.content.classList.remove(this.controller.classClosed);   

                this.controller.onItemChanged(this.index);

                break;
        }




    }

    close() {

        // Skip, if already closed
        // if(!this.isOpen)
        //     return;

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

// #endregion

type ItemChangedCallback = (accordion: any, index: any) => void;

// #region Sa5Accordion

export class Sa5Accordion implements IDeckNavigation { 
    
    name: string; 
    elem: HTMLElement;
    items: Array<Sa5AccordionItem> = [];

    _currentIndex: number = 0; // first


    get currentIndex(): number {
        return this._currentIndex; 
    }
    set currentIndex(index: number) {
        console.log("setting current item index to", this.currentIndex, this.items.length); 

        this._currentIndex = index; 

        for (let i = 0; i < this.items.length; i++) {
            if(i == this._currentIndex) { 
                console.log("opening item", i)
                this.items[i].open();
            } else { 
                console.log("closing item", i)
                this.items[i].close();
            }
        }

    }

    get count(): number {
        return this.items.length;
    }

    get currentNum(): number {
        return this.currentIndex + 1; 
    }
    set currentNum(num: number) {
        this.currentIndex = num - 1; 
    }

    mode: Sa5AccordionMode = Sa5AccordionMode.Default; 
    
    classOpen: string = 'is-open';
    classClosed: string = 'is-closed';

    private debug: Sa5Debug; 

    //#region PROPERTYS

    get element(): HTMLElement {
        return this.elem;
    }

    get currentItem(): Sa5AccordionItem {
        return this.items[this.currentIndex];  
    }
    set currentItem(item: Sa5AccordionItem) {

        this.currentIndex = this.itemToIndex(item); 


    }

    //#endregion

    //#region CONSTRUCTORS

    /**
     * Instantiates and inits an Accordion instance. 
     * @param element The [wfu-accordion] element. 
     */
    constructor(element: HTMLElement) {

        this.debug = new Sa5Debug("sa5-webflow-accordion");
        this.debug.enabled = true;

        this.elem = element; 

        // Initialize
        this.init();

    }

    //#endregion

    //#region METHODS

    itemToIndex(accordionItem: Sa5AccordionItem): number {

//        console.log("itemToIndex elem", accordionItem); 

        let i = 0;
        let itemIndex = -1;
        this.items.forEach((item: Sa5AccordionItem) => {

//            console.log("comparing", accordionItem, item)

            if (accordionItem == item) {
  //              console.log("itemToIndex index", this.currentIndex); 
                itemIndex = i;
                return;
            }
            i++;
        });

        if (itemIndex < 0) {  
            console.error("Accordion itemtoindex item not recognized.")
        }

        return itemIndex;
    }

    /**
     * Init Accordion. 
     */
    init() {

        // Set the name property, if defined
        const nameAttr = this.elem.getAttribute('wfu-accordion');
        if (nameAttr) 
            this.name = nameAttr;

//  console.log("creating accordion", this.name); 

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
        const accordionItemElems = this.elem.querySelectorAll(
            `[${Sa5Attribute.ATTR_ELEMENT_ACCORDION_ITEM}]` 
            ) as NodeListOf<HTMLElement>;

        accordionItemElems.forEach((item: HTMLElement) => { 

// console.log("creating item.")
            const accordionItem: Sa5AccordionItem = new Sa5AccordionItem(item, this); 
            this.items.push(accordionItem); // add to stack 

            accordionItem.tab?.addEventListener('click', () => {
// console.log("click")
                this.currentItem = accordionItem;

            }); 

        }); 

        // Select first 
        this.currentIndex = 0; 

    }

    goTo(index: number): void {
        this.currentIndex = index;
    }

    goToName(name: string): void {
        console.error("Accordion.goToName not yet implemented")
    }

    goToNext(): void {
        if(this.currentIndex < this.items.length - 1)
            this.goTo(this.currentIndex++); 
    }

    goToNextLoop(): void {
        if(this.currentIndex == this.items.length - 1)
            this.goToFirst();
        else
            this.goTo(this.currentIndex++); 
    }

    goToPrev(): void {
        if(this.currentIndex > 0) 
            this.goTo(this.currentIndex--);
    }

    goToPrevLoop(): void {
        if(this.currentIndex == 0) 
            this.goToLast();
        else
            this.goTo(this.currentIndex--);
    }

    goToFirst(): void {
        this.goTo(0); 
    }

    goToLast(): void {
        this.goTo(this.items.length - 1);
    }

    //#endregion
    onItemChanged(index: number) {
        // Raise event

        let core: Sa5Core = Sa5Core.startup();

        // Get any global handlers
        core.getHandlers(Sa5GlobalEvent.EVENT_ACCORDION_CHANGED)
          .forEach(func => {

//            console.log('onSlideChanged func', index)

//            if (this.isSlideChangedCallback(func)) {
//                console.log('onSlideChanged func OK', index)

            func(this, index); 
    
 //            }
          }); 

    }
}

// #endregion


//#region Sa5AccordionController 

export class Sa5AccordionController {

    constructor() {

    }

    init() {

        let accordionElements: NodeListOf<Element> = document.querySelectorAll(`[${Sa5Attribute.ATTR_ELEMENT_ACCORDION}]`);
        accordionElements.forEach(element => {
    
console.log("Initializing accordion", element.getAttribute(Sa5Attribute.ATTR_ELEMENT_ACCORDION));

            var accordionObj = new Sa5Accordion(element as HTMLElement); 
    
        });

    }

}

// #endregion 


Sa5Core.startup(Sa5Accordion);
Sa5Core.startup(Sa5AccordionController);
//window["Sa5Accordion"] = Sa5Accordion;


