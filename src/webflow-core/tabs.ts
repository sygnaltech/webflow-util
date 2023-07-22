
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Core Utilities
 */



/*
 * Webflow Tabs.
 */


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

export class WebflowTabs {
    
    private _element: HTMLElement;
    private _elementTabMenu: HTMLElement;
    private _elementTabContent: HTMLElement;

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
 
    get tabIndex(): number | null {
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
    set tabIndex(index: number) {

        // verify number in range
        if (index < 0) 
            return; 
        if (index >= this.tabCount)
            return;

        let clickEvent = new MouseEvent('click', {
            // Event properties
            bubbles: true,
            cancelable: true,
            view: window,
            // More properties can be added as needed
            }); 

        this.elementTab(index).dispatchEvent(clickEvent);

//        this.elementTabMenu.children[index].click
    }

    get tabCount(): number {
        return this._elementTabMenu.children.length;
    }

    //#endregion

    //#region CONSTRUCTORS

    constructor(element: HTMLElement) {

        // Initialize
        this.init(element);

    }

    //#endregion

    //#region METHODS

    // Initialize the class to the element
    init(element: HTMLElement) {

        // Verify it's a tabs element .w-tabs
        if(!element.classList.contains("w-tabs")) {
            console.error ("[wfu-tabs] is not on a tabs element");
            return;
        }

        console.log("init."); 

        // Inventory parts
        this._element = element; 
        this._elementTabMenu = element.querySelector('.w-tab-menu');
        this._elementTabContent = element.querySelector('.w-tab-content');
        //.w-tab-menu

        console.log("count", this.tabCount);
        console.log("index", this.tabIndex); 
        //.w-tab-content

    }

    // Get the tab element at the specified index
    elementTab(index: number): HTMLElement { 

        // verify number in range
        if (index < 0) 
            return; 
        if (index >= this.tabCount)
            return;

        return this._elementTabMenu.children[index] as HTMLElement;
    }

    // Goes to the identified tab 
    // raises navigation events
    goToTabIndex(index: number) {

        // Eventing tab change (pre)
        // from & to tabs

        console.log(index);
        
        this.tabIndex = index;

        // Eventing tab change (post)
        // from & to tabs
    }

    goToNextTab() {

        // If no tab selected, select first
        if(this.tabIndex == null) {
            this.tabIndex = 0;
            return;
        }

        // Determine new tab
        var newTabIndex: number = this.tabIndex + 1;
        if (newTabIndex >= this.tabCount)
            newTabIndex = 0;

        this.goToTabIndex(newTabIndex);

    }

    goToPrevTab() {

        // If no tab selected, select first
        if(this.tabIndex == null) {
            this.tabIndex = 0;
            return;
        }

        // Determine new tab
        var newTabIndex: number = this.tabIndex - 1;
        if (newTabIndex < 0)
            newTabIndex = this.tabCount - 1;
        
        this.goToTabIndex(newTabIndex);

    }

    goToFirstTab() {
                
        this.goToTabIndex(0);

    }

    goToLastTab() {

        var newTabIndex: number = this.tabCount - 1;

        this.goToTabIndex(newTabIndex);

    }

    //#endregion

    //#region EVENTS

    onTabChanged() {
        // Raise event
    }

    //#endregion

}

// window["WebflowTabs"] = WebflowTabs;


