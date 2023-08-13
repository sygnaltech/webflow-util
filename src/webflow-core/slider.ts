
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Tabs Utilities
 */



/*
 * Webflow Slider 
 */

//#region Sample HTML

/*
<div data-delay="4000" data-animation="slide" class="w-slider" data-autoplay="false" wfu-slider="" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true" role="region" aria-label="carousel">
  <div class="w-slider-mask" id="w-slider-mask-0">
    <div class="w-slide" aria-label="1 of 3" role="group" style="transform: translateX(0px); opacity: 1;">
        ...
    </div>
    <div class="w-slide" aria-label="2 of 3" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1;">
        ...
    </div>
    <div class="w-slide" aria-label="3 of 3" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1;">
        ...
    </div>
    <div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore=""></div>
  </div>
  <div class="w-slider-arrow-left" role="button" tabindex="0" aria-controls="w-slider-mask-0" aria-label="previous slide">
    <div class="w-icon-slider-left"></div>
  </div>
  <div class="w-slider-arrow-right" role="button" tabindex="0" aria-controls="w-slider-mask-0" aria-label="next slide">
    <div class="w-icon-slider-right"></div>
  </div>
  <div class="w-slider-nav w-round w-num">
    <div class="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 3" aria-pressed="true" role="button" tabindex="0" style="margin-left: 3px; margin-right: 3px;">1</div>
    <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 3" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;">2</div>
    <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 3" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;">3</div>
  </div>
</div>
*/

//#endregion

/*
- can we add/remove slides
- hide/show slides
- reorder slides

Events
  slide change

Querystring
    Scroll and navigate to 

.w--current
[data-w-tab] weems to be the identifier 
*/

// [wfu-slider=IDENTIFIER]

// [w-slider]

// Separately, we...
// 1. create this element for anything [wfu-tabs].w-tabs 
// 1. install click handlers for [wfu-tabs=x] other elements
//      anything? 
// Have the internal handlers perform actions
// wfu-tab-action=first|last|next|prev|clear ? 
import { Sa5Core } from '../webflow-core'
import { Sa5Debug } from './debug'

export class WebflowSlider {
    
    private _element: HTMLElement;
    private _elementSliderMask: HTMLElement;
    private _elementSliderNav: HTMLElement;
// .w-slider-aria-label
// .w-slider-arrow-left
// .w-icon-slider-left
// .w-slider-arrow-right 
// .w-icon-slider-right


    private debug: Sa5Debug; 

    //#region CONSTRUCTORS

    constructor(element: HTMLElement) {

        this.debug = new Sa5Debug("sa5-webflow-slider");
        this.debug.enabled = true;

        // Verify element thep
        if(!element.classList.contains("w-slider")) {
            console.error ("[wfu-slider] is not on a slider element");
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
    get elementSliderMask(): HTMLElement {
        return this._elementSliderMask;
    }
    get elementSliderNav(): HTMLElement {
        return this._elementSliderNav;
    }
 
    // 1-based convenience functions
    get slideNum(): number | null {
        return this.slideIndex + 1;
    }
    set slideNum(num: number) {
        this.slideIndex = num - 1;
    }

    get slideIndex(): number | null {
        //        let parentElement: HTMLElement; // Assume this is your parent element with class .w-tab-menu

        let currentIndex: number | null = null;

        currentIndex = Array.from(this._elementSliderNav.children)
            .findIndex(child => 
                (child as HTMLElement).classList.contains('w-active')
            );
        
        // // Find current tab
        // for (let i = 0; i < this._elementSliderMask.children.length; i++) {
        //     if (this._elementSliderMask.children[i].classList.contains('w--current')) {
        //         currentIndex = i;
        //         break;
        //     }
        // }

        // if (currentIndex !== null) {
        //   console.log(`The child with class 'w--current' is at index ${currentIndex}`);
        // } else {
        //   console.log("No child with class 'w--current' was found");
        // }

        return currentIndex; 
    }
    set slideIndex(index: number) {

// TODO: support null sets 

        // verify number in range
        if (index < 0) 
            return; 
        if (index >= this.slideCount)
            return;

        let clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
            }); 

        this.debug.debug("setting slide", index); 

        let button = this.elementSliderNav.children[index] as HTMLElement; 

        // Select the tab
        // HACK: dealing with the fact that Webflow events may not have run yet 
        setTimeout(() => {

            console.log(index, button);

            button.dispatchEvent(clickEvent);
        }, 0);
        
    }

    get slideCount(): number {
        return this._elementSliderNav.children.length;
    }

    //#endregion

    //#region METHODS

    // Given an element, identifies which tab it represents
    getSlideIndex(slide: HTMLElement): number | null {

        // Check tab menu
        let index = Array.from(this._elementSliderMask.children).indexOf(slide);

        // Check tab content
        if (index == -1) {
            index = Array.from(this._elementSliderNav.children).indexOf(slide);
        }

        // No match found
        if (index == -1)
            return null;
        
        return index;
    }

    // Initialize the class to the element
    init() {

//        console.log("init."); 

        // Inventory parts
        this._elementSliderMask = this._element.querySelector('.w-slider-mask');
        this._elementSliderNav = this._element.querySelector('.w-slider-nav');
        //.w-tab-menu

//        console.log("count", this.tabCount);
//        console.log("index", this.tabIndex); 
        //.w-tab-content
        

//         // Initial setup
//         for (let elem of this._elementSliderMask.children) { 

// //            console.log(elem);

//             if(elem.hasAttribute('wfu-tab-default')) {
//                 this.debug.debug("default");
//                 let defaultTabIndex = this.getTabIndex(elem as HTMLElement); 

//                 this.debug.debug(defaultTabIndex); 

//                 // If a default tab was specified, select it 
//                 if (defaultTabIndex != null)
//                     this.slideIndex = defaultTabIndex; 
//             }

//         };

    }

    // Get the tab element at the specified index
    // TEST: with different element arrangements 
    elementSlide(index: number): HTMLElement { 

        // verify number in range
        if (index < 0) 
            return; 
        if (index >= this.slideCount)
            return;

        // Get .w-slide children
        let filteredChildren: HTMLElement[] = Array.from(this._elementSliderMask.children)
          .filter(child => 
                (child as HTMLElement).classList.contains('w-slide')
            ) as HTMLElement[];
        
        let targetChild: HTMLElement | undefined = filteredChildren[index];
        
        // if (targetChild) {
        //     console.log(targetChild); // This is the child with the class 'w-slide' at the specified index
        // } else {
        //     console.log('No child found at the specified index.');
        // }

        // constrain to w-slide items 
        return targetChild; // this._elementSliderMask.children[index] as HTMLElement;
    }

    // Goes to the identified tab 
    // raises navigation events
    goToSlideIndex(index: number) {

        // Eventing tab change (pre)
        // from & to tabs

        this.debug.debug(index);
        
        this.slideIndex = index;

        // Eventing tab change (post)
        // from & to tabs
    }

    goToNextSlide() {

        // If no tab selected, select first
        if(this.slideIndex == null) {
            this.slideIndex = 0;
            return;
        }

        // Determine new tab
        var newSlideIndex: number = this.slideIndex + 1;
        if (newSlideIndex >= this.slideCount)
            newSlideIndex = 0;

        this.goToSlideIndex(newSlideIndex);

    }

    goToPrevSlide() {

        // If no tab selected, select first
        if(this.slideIndex == null) {
            this.slideIndex = 0;
            return;
        }

        // Determine new tab
        var newSlideIndex: number = this.slideIndex - 1;
        if (newSlideIndex < 0)
            newSlideIndex = this.slideCount - 1;
        
        this.goToSlideIndex(newSlideIndex);

    }

    goToFirstSlide() {
                
        this.goToSlideIndex(0);

    }

    goToLastSlide() {

        var newSlideIndex: number = this.slideCount - 1;

        this.goToSlideIndex(newSlideIndex);

    }

    //#endregion

    //#region EVENTS

    onSlideChanged() {
        // Raise event
    }

    //#endregion

}

// window["WebflowTabs"] = WebflowTabs;

// console.log("TABS LOADED.");

// (window as any).WebflowDropdown = WebflowDropdown;
Sa5Core.startup(WebflowSlider);


