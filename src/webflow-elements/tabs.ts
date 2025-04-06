
/*
 * SA5 
 * webflow-elements
 * Tabs
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Tabs Utilities
 */



/*
 * Webflow Tabs
 */

//#region Sample HTML

/*
<div wfu-tabs="main" data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" class="w-tabs">
  <div class="w-tab-menu" role="tablist"><a data-w-tab="Tab 1" class="tab w-inline-block w-tab-link w--current" id="w-tabs-0-data-w-tab-0" href="#w-tabs-0-data-w-pane-0" role="tab" aria-controls="w-tabs-0-data-w-pane-0" aria-selected="true">
      <div>Tab 1</div>
    </a><a data-w-tab="Tab 2" class="tab w-inline-block w-tab-link" tabindex="-1" id="w-tabs-0-data-w-tab-1" href="#w-tabs-0-data-w-pane-1" role="tab" aria-controls="w-tabs-0-data-w-pane-1" aria-selected="false">
      <div>Tab 2</div>
    </a><a data-w-tab="Tab 3" class="tab w-inline-block w-tab-link" tabindex="-1" id="w-tabs-0-data-w-tab-2" href="#w-tabs-0-data-w-pane-2" role="tab" aria-controls="w-tabs-0-data-w-pane-2" aria-selected="false">
      <div>Tab 3</div>
    </a></div>
  <div class="w-tab-content">
    <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active" id="w-tabs-0-data-w-pane-0" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-0"></div>
    <div data-w-tab="Tab 2" class="w-tab-pane" id="w-tabs-0-data-w-pane-1" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-1"></div>
    <div data-w-tab="Tab 3" class="w-tab-pane" id="w-tabs-0-data-w-pane-2" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-2"></div>
  </div>
</div>
*/

//#endregion

/*
- can we add/remove tabs
- hide/show tabs
- reorder tabs

Events
  tab change

Select no tabs

Querystring
    Scroll and navigate to 

.w--current
[data-w-tab] weems to be the identifier 
*/

// [wfu-tabs=IDENTIFIER]

// Separately, we...
// 1. create this element for anything [wfu-tabs].w-tabs 
// 1. install click handlers for [wfu-tabs=x] other elements
//      anything? 
// Have the internal handlers perform actions
// wfu-tab-action=first|last|next|prev|clear ? 
import { Sa5Attribute, Sa5GlobalEvent } from '../globals';
import { Sa5Core } from '../webflow-core'
import { Sa5Debug } from '../webflow-core/debug'


type TabChangedCallback = (tabs: any, index: any) => void;



export class WebflowTabs implements IDeckNavigation {
    
    private _element: HTMLElement;
    private _elementTabMenu: HTMLElement;
    private _elementTabContent: HTMLElement;

    private _observer: MutationObserver; 

    private debug: Sa5Debug; 

    //#region CONSTRUCTORS

    constructor(element: HTMLElement) {

        this.debug = new Sa5Debug("sa5-webflow-tabs");
        this.debug.enabled = true;

        // Verify element type
        if(!element.classList.contains("w-tabs")) {
            console.error (
                `[${Sa5Attribute.ATTR_ELEMENT_TABS}] is not on a tabs element`
                );
            return;
        }

        // Initialize
        this._element = element;
        this.init();

    }

// changeTab
// https://discourse.webflow.com/t/solution-setting-default-active-tab/66476/3 
// Webflow.require("tabs") 

    //#endregion

    //#region PROPERTYS

    get element(): HTMLElement {
        return this._element;
    }
    get elementTabMenu(): HTMLElement {
        return this._elementTabMenu;
    }
    get elementTabContent(): HTMLElement {
        return this._elementTabContent;
    }
  
    get name(): string {
        return this._element.getAttribute(Sa5Attribute.ATTR_ELEMENT_TABS)
    }

    // 1-based convenience functions
    get currentNum(): number | null {
        return this.currentIndex + 1;
    }
    set currentNum(num: number) {
        this.currentIndex = num - 1;
    }

    get currentIndex(): number | null {
        //        let parentElement: HTMLElement; // Assume this is your parent element with class .w-tab-menu

        let currentIndex: number | null = null;
        
        // Find current tab
        for (let i = 0; i < this._elementTabMenu.children.length; i++) {
            if (this._elementTabMenu.children[i].classList.contains('w--current')) {
                currentIndex = i;
                break;
            }
        }

        // if (currentIndex !== null) {
        //   console.log(`The child with class 'w--current' is at index ${currentIndex}`);
        // } else {
        //   console.log("No child with class 'w--current' was found");
        // }

        return currentIndex; 
    }
    set currentIndex(index: number) {

// TODO: support null sets 

        // verify number in range
        if (index < 0) 
            return; 
        if (index >= this.count)
            return;

        let clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
            }); 

        this.debug.debug("setting tab", index); 

        // Select the tab
        // HACK: dealing with the fact that Webflow events may not have run yet 
        setTimeout(() => {
            this.elementTab(index).dispatchEvent(clickEvent);
        }, 0);
        
    }

    get count(): number {
        return this._elementTabMenu.children.length;
    }

    private goToTabNone() { 
    
        // https://discourse.webflow.com/t/solution-setting-default-active-tab/66476 
        this.goToTabIndexForced(null); 

    }

    // Direct element manipulation
    // IMPORTANT: this does not change the internal state of the tab element classes. 
    // only use when necessary, such as deselecting all tabs 
    private goToTabIndexForced(index: number | null) {

        // Deselect current tab 
        Array.from(this._elementTabMenu.querySelectorAll(".w-tab-link")).forEach(
            elem => {
                elem.classList.remove("w--current"); 
                elem.removeAttribute("tabindex"); 
                elem.setAttribute("aria-selected", "true"); 
            });
        Array.from(this._elementTabContent.querySelectorAll(".w-tab-pane")).forEach(
            elem => {
                elem.classList.remove("w--tab-active");
            });
            
        // If specified, select specified tab index
        if(index) {

            console.log("setting forced index", index); 

            // make the nth-child the active tab
            Array.from(this._elementTabMenu.querySelectorAll(`.w-tab-link:nth-child(${index + 1})`)).forEach(
                elem => {
                    elem.classList.add("w--current");
                });
            Array.from(this._elementTabContent.querySelectorAll(`.w-tab-pane:nth-child(${index + 1})`)).forEach(
                elem => {
                    elem.classList.add("w--tab-active");
                    (elem as HTMLElement).style.cssText = 
                        "style=opacity: 1; transition: opacity 300ms ease 0s;"; 
                });
        }

    }

    //#endregion

    //#region METHODS

    // Given an element, identifies which tab it represents
    getTabIndex(tab: HTMLElement): number | null {

        // Check tab menu
        let index = Array.from(this._elementTabMenu.children).indexOf(tab);

        // Check tab content
        if (index == -1) {
            index = Array.from(this._elementTabContent.children).indexOf(tab);
        }

        // No match found
        if (index == -1)
            return null;
        
        return index;
    }

    // Initialize the class to the element
    init() {

        // Inventory parts
        this._elementTabMenu = this._element.querySelector('.w-tab-menu');
        this._elementTabContent = this._element.querySelector('.w-tab-content');

        // Setup mutation observer to detect slide changes
        this._observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const target = mutation.target as HTMLElement;
                    if (target.classList.contains('w--current')) {

                        this.onTabChanged(this.currentIndex);

                    }
                }
            }
        });

        // Configuration for the observer:
        const config = {
            attributes: true, // Observe attribute changes
            childList: true,  // Observe addition/removal of child elements
            subtree: true     // Observe changes in descendants
        };
        
        // Start observing the target element
        this._observer.observe(this._elementTabMenu, config);

        // Additional setup 

        // Initial setup
        for (let elem of this._elementTabMenu.children) { 

            if(elem.hasAttribute('wfu-tab-default')) {
                this.debug.debug("default");
                let defaultTabIndex = this.getTabIndex(elem as HTMLElement); 

                this.debug.debug(defaultTabIndex); 

                // If a default tab was specified, select it 
                if (defaultTabIndex != null)
                    this.currentIndex = defaultTabIndex; 
            }

        };

    }

    // Get the tab element at the specified index
    elementTab(index: number): HTMLElement { 

        // verify number in range
        if (index < 0) 
            return; 
        if (index >= this.count)
            return;

        return this._elementTabMenu.children[index] as HTMLElement;
    }

    // Goes to the identified tab 
    // raises navigation events
    goTo(index: number) {

        // Eventing tab change (pre)
        // from & to tabs

        this.debug.debug("goTo", index);
        
        this.currentIndex = index;

        // Eventing tab change (post)
        // from & to tabs
    }

    goToName(name: string): void {

        this.debug.debug("goToName", name);

        // Get the index of the slide with the matching name
        let index = Array.from(this._elementTabMenu.children)
            .findIndex(child => 
                (child as HTMLElement).getAttribute(Sa5Attribute.ATTR_ELEMENT_TAB_NAME) == name
            );

        // If no match found, return
        if (index == -1) {
            console.error(`No tab found with name: ${name}`);            
            return;
        }

        this.goTo(index);

    }

    goToNext() {

        // If no tab selected, select first
        if(this.currentIndex == null) {
            this.currentIndex = 0;
            return;
        }

        // Determine new tab
        var newTabIndex: number = this.currentIndex + 1;
        if (newTabIndex >= this.count)
            return; // do nothing 

        this.goTo(newTabIndex);

    }

    goToNextLoop() {

        // If no tab selected, select first
        if(this.currentIndex == null) {
            this.currentIndex = 0;
            return;
        }

        // Determine new tab
        var newTabIndex: number = this.currentIndex + 1;
        if (newTabIndex >= this.count)
            newTabIndex = 0;

        this.goTo(newTabIndex);

    }

    goToPrev() {

        // If no tab selected, select first
        if(this.currentIndex == null) {
            this.currentIndex = 0;
            return;
        }

        // Determine new tab
        var newTabIndex: number = this.currentIndex - 1;
        if (newTabIndex < 0)
            return; // do nothing
        
        this.goTo(newTabIndex);

    }

    goToPrevLoop() {

        // If no tab selected, select first
        if(this.currentIndex == null) {
            this.currentIndex = 0;
            return;
        }

        // Determine new tab
        var newTabIndex: number = this.currentIndex - 1;
        if (newTabIndex < 0)
            newTabIndex = this.count - 1;
        
        this.goTo(newTabIndex);

    }

    goToFirst() {
                
        this.goTo(0);

    }

    goToLast() {

        var newTabIndex: number = this.count - 1;

        this.goTo(newTabIndex);

    }

    //#endregion

    //#region EVENTS

    // Type guard to check callback function 
    private isTabChangedCallback(func: Function): func is TabChangedCallback { 

        if(!func) return false;

        // Adjust this check as needed
        return func.length === 1;
    }

    onTabChanged(index: number) {
        // Raise event

        let core: Sa5Core = Sa5Core.startup();

        // Get any global handlers
        core.getHandlers(Sa5GlobalEvent.EVENT_TAB_CHANGED)
          .forEach(func => {

//            console.log('onSlideChanged func', index)

//            if (this.isSlideChangedCallback(func)) {
//                console.log('onSlideChanged func OK', index)

            func(this, index); 
    
 //            }
          }); 


    }

    //#endregion

}

// window["WebflowTabs"] = WebflowTabs;

// console.log("TABS LOADED.");

// (window as any).WebflowDropdown = WebflowDropdown;
Sa5Core.startup(WebflowTabs);


