
/*
 * SA5
 * webflow-core
 * Slider
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Slider Utilities
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
import { Sa5Attribute, Sa5GlobalEvent } from '../globals';
import { Sa5Core } from '../webflow-core'
import { Sa5Debug } from '../webflow-core/debug'



type SlideChangedCallback = (slider: any, index: any) => void;

type SlideCanChangedCallback = (slider: any, index: any) => void;


// interface SliderConfig {
// //    loadUserInfoCallback?: ((user: Sa5User) => void) | undefined; // Function callback 
//     slideChangedCallback?: SlideChangedCallback; 
// //    userLogoutPurge?: ((user: Sa5User) => void) | undefined;

//     debug?: boolean;

// }


export class WebflowSlider implements IDeckNavigation {

    private _element: HTMLElement;
    private _elementSliderMask: HTMLElement;
    private _elementSliderNav: HTMLElement;
    private _elementSliderArrowRight: HTMLElement;
    private _elementSliderArrowLeft: HTMLElement;

    private _observer: MutationObserver; 

// .w-slider-aria-label
// .w-slider-arrow-left
// .w-icon-slider-left
// .w-slider-arrow-right 
// .w-icon-slider-right

    debug: Sa5Debug; 
    
//    config: SliderConfig; // Optional config

    //#region CONSTRUCTORS

    constructor(element: HTMLElement) {

        this.debug = new Sa5Debug("sa5-webflow-slider");
        this.debug.enabled = true;

        // Verify element then
        if(!element.classList.contains("w-slider")) {
            console.error (`[${Sa5Attribute.ATTR_ELEMENT_SLIDER}] is not on a slider element`);
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
 
    get name(): string {
        return this._element.getAttribute(Sa5Attribute.ATTR_ELEMENT_SLIDER)
    }

    // 1-based convenience functions
    get currentNum(): number | null {
        return this.currentIndex + 1;
    }
    set currentNum(num: number) {
        this.currentIndex = num - 1;
    }

    get currentIndex(): number | null {

        let currentIndex: number | null = null;

        currentIndex = Array.from(this._elementSliderNav.children)
            .findIndex(child => 
                (child as HTMLElement).classList.contains('w-active')
            );
        
        return currentIndex; 
    }
    set currentIndex(index: number) {

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

        this.debug.debug("setting slide", index); 

        let button = this.elementSliderNav.children[index] as HTMLElement; 

        // Select the slide 
        // HACK: dealing with the fact that Webflow events may not have run yet 
        setTimeout(() => {

//            console.log(index, button);

            button.dispatchEvent(clickEvent);
        }, 0);
        
    }

    get count(): number {
        return this._elementSliderNav.children.length;
    }

    //#endregion

    //#region METHODS

    // Given an element, identifies which slide it represents
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

        // Inventory parts
        this._elementSliderMask = this._element.querySelector('.w-slider-mask');
        this._elementSliderNav = this._element.querySelector('.w-slider-nav');
        this._elementSliderArrowLeft = this._element.querySelector('.w-slider-arrow-left');
        this._elementSliderArrowRight = this._element.querySelector('.w-slider-arrow-right');

        if (this._elementSliderArrowLeft) {
            this._elementSliderArrowLeft.addEventListener('click', (event: MouseEvent) => {

                if(!this.onSlidePrevRequest(this.currentIndex)) {
                    event.preventDefault(); 
                    event.stopPropagation(); 
                }
                console.log('Left arrow clicked');
            }, true);
        }
        
        if (this._elementSliderArrowRight) {
            this._elementSliderArrowRight.addEventListener('click', (event: MouseEvent) => {
                if(!this.onSlideNextRequest(this.currentIndex)) {
                    event.preventDefault(); 
                    event.stopPropagation(); 
                }
                console.log('Right arrow clicked');
            }, true);
        }
        

        // Setup mutation observer to detect slide changes
        this._observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const target = mutation.target as HTMLElement;
                    if (target.classList.contains('w-active')) {

                        this.onSlideChanged(this.currentIndex);

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
        this._observer.observe(this._elementSliderNav, config);

    }

    // Get the tab element at the specified index
    // TEST: with different element arrangements 
    elementSlide(index: number): HTMLElement { 

        // verify number in range
        if (index < 0) 
            return; 
        if (index >= this.count)
            return;

        // Get .w-slide children
        let filteredChildren: HTMLElement[] = Array.from(this._elementSliderMask.children)
          .filter(child => 
                (child as HTMLElement).classList.contains('w-slide')
            ) as HTMLElement[];
        
        let targetChild: HTMLElement | undefined = filteredChildren[index];

        // constrain to w-slide items 
        return targetChild; 
    }

    // Goes to the identified slide 
    // raises navigation events
    goTo(index: number) {

        // Eventing tab change (pre)
        // from & to tabs

        this.debug.debug(index);
        
        this.currentIndex = index;

        // Eventing tab change (post)
        // from & to slide
    }

    goToName(name: string) {

        // Get the index of the slide with the matching name
        let index = Array.from(this._elementSliderMask.children)
            .findIndex(child => 
                (child as HTMLElement).getAttribute(Sa5Attribute.ATTR_ELEMENT_SLIDE_NAME) == name
            );

        // If no match found, return
        if (index == -1) {
            console.error(`No slide found with name: ${name}`);            
            return;
        }

        this.goTo(index);

    }

    goToNext() {

        // If no slide selected, select first
        if(this.currentIndex == null) {
            this.currentIndex = 0;
            return;
        }

        // Determine new slide
        var newSlideIndex: number = this.currentIndex + 1;
        if (newSlideIndex >= this.count)
            return; // do nothing 

        this.goTo(newSlideIndex);

    }

    goToNextLoop() {

        // If no slide selected, select first
        if(this.currentIndex == null) {
            this.currentIndex = 0;
            return;
        }

        // Determine new slide
        var newSlideIndex: number = this.currentIndex + 1;
        if (newSlideIndex >= this.count)
            newSlideIndex = 0;

        this.goTo(newSlideIndex);

    }

    goToPrev() {

        // If no slide selected, select first
        if(this.currentIndex == null) {
            this.currentIndex = 0;
            return;
        }

        // Determine new slide
        var newSlideIndex: number = this.currentIndex - 1;
        if (newSlideIndex < 0)
            return; // do nothing 
        
        this.goTo(newSlideIndex);

    }

    goToPrevLoop() {

        // If no slide selected, select first
        if(this.currentIndex == null) {
            this.currentIndex = 0;
            return;
        }

        // Determine new slide
        var newSlideIndex: number = this.currentIndex - 1;
        if (newSlideIndex < 0)
            newSlideIndex = this.count - 1;
        
        this.goTo(newSlideIndex);

    }

    goToFirst() {
                
        this.goTo(0);

    }

    goToLast() {

        var newSlideIndex: number = this.count - 1;

        this.goTo(newSlideIndex);

    }

    //#endregion

    //#region EVENTS

    // Type guard to check callback function 
    private isSlideChangedCallback(func: Function): func is SlideChangedCallback { 

        if(!func) return false;

        // Adjust this check as needed
        return func.length === 1;
    }

    // Raise event
    onSlideChanged(index: number) {

        let core: Sa5Core = Sa5Core.startup();

        // Get any global handlers
        core.getHandlers(Sa5GlobalEvent.EVENT_SLIDE_CHANGED)
          .forEach(func => {

//            console.log('onSlideChanged func', index)

//            if (this.isSlideChangedCallback(func)) {
//                console.log('onSlideChanged func OK', index)

            func(this, index); 
    
 //            }
          }); 

    }

    onSlideNextRequest(currentIndex: number): boolean {
        let core: Sa5Core = Sa5Core.startup();

        // Get any global handlers for the slide next request
        const handlers = core.getHandlers(Sa5GlobalEvent.EVENT_SLIDE_NEXT_REQUEST);
        let nextAllowed = true; // Default to true to allow slide change unless a handler returns false

        handlers.forEach(func => {
            // Assuming func returns a boolean indicating whether to proceed
            const result = func(this, currentIndex);
            if (!result) {
                nextAllowed = false; // If any handler returns false, do not advance
            }
        });

        return nextAllowed; // Return whether the slide should change
    }

    onSlidePrevRequest(currentIndex: number): boolean {
        let core: Sa5Core = Sa5Core.startup();

        // Get any global handlers for the slide next request
        const handlers = core.getHandlers(Sa5GlobalEvent.EVENT_SLIDE_PREV_REQUEST);
        let prevAllowed = true; // Default to true to allow slide change unless a handler returns false

        handlers.forEach(func => {
            // Assuming func returns a boolean indicating whether to proceed
            const result = func(this, currentIndex);
            if (!result) {
                prevAllowed = false; // If any handler returns false, do not advance
            }
        });

        return prevAllowed; // Return whether the slide should change
    }

    //#endregion

}



Sa5Core.startup(WebflowSlider);


