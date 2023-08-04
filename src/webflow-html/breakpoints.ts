

/*
 * webflow-html
 * Breakpoints
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */


import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';


type BreakpointChangedCallback = (
    breakpointName: string, 
    e: MediaQueryListEvent
    ) => void; 



interface Sa5BreakpointsConfig {

    breakpointChangedCallback?: BreakpointChangedCallback; 

}

// Webflow breakpoints
export const sa5Breakpoints = {
    large1920: '(min-width: 1920px)',
    large1440: '(min-width: 1440px) and (max-width: 1919px)',
    large1280: '(min-width: 1280px) and (max-width: 1439px)',
    desktop: '(min-width: 992px) and (max-width: 1279px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    mobileLandscape: '(min-width: 480px) and (max-width: 767px)',
    mobilePortrait: '(max-width: 479px)'
}


export class Sa5Breakpoints {

    config: Sa5BreakpointsConfig;

    // Type guard to check if a function is a UserInfoChangedCallback
    private isBreakpointsChangedCallback(func: Function): func is BreakpointChangedCallback {

        if(!func) return false;

        // Adjust this check as needed
        return func.length === 1;
    }

    constructor(config: Partial<Sa5BreakpointsConfig> = {}) {

        // Merge configs, with defaults
        this.config = {
            breakpointChangedCallback: config.breakpointChangedCallback,
        }

        let core: Sa5Core = Sa5Core.startup(); 

        const breakpointChanged = core.getHandler('breakpointChanged'); 

        this.config.breakpointChangedCallback = breakpointChanged as BreakpointChangedCallback;

    }

    init() {

        // Initialize debugging
        let debug = new Sa5Debug("sa5-html");
        debug.debug ("Breakpoints initialized.", this.config);
    
        // Create MediaQueryList and attach listeners for each breakpoint
        for (let device in sa5Breakpoints) {
            let mediaQueryList = window.matchMedia(sa5Breakpoints[device]);

            // Register internal handler
            mediaQueryList.addEventListener('change', this.handleBreakpointChange);

            if (mediaQueryList.matches) {
                this.handleBreakpointChange(
                { 
                    media: mediaQueryList.media, 
                    matches: mediaQueryList.matches 
                } as MediaQueryListEvent); 
            }

        }

    }

    // Breakpoint changed
    handleBreakpointChange = ((e: MediaQueryListEvent) => {

        // We only want matching events 
        if (!e.matches)
            return;

        // Identify breakpoint
        var device = null;
        for (let d in sa5Breakpoints) {
            if (e.media == sa5Breakpoints[d]) {
//                console.log(`Current device: ${d}`);
                device = d; 
            }
        }

        // Notify any config-specified handler
        if(this.config.breakpointChangedCallback) {

            this.config.breakpointChangedCallback(
                device as string, 
                e
            ); 
        }

    });

}

// Register
// window["sa5"] = window["sa5"] || []; // {};
// window["sa5"]["Sa5Breakpoints"] = Sa5Breakpoints;


  
// "site": {
//     "mediaQueries": [{
//         "key": "main",
//         "min": 992,
//         "max": 10000
//     }, {
//         "key": "medium",
//         "min": 768,
//         "max": 991
//     }, {
//         "key": "small",
//         "min": 480,
//         "max": 767
//     }, {
//         "key": "tiny",
//         "min": 0,
//         "max": 479
//     }]