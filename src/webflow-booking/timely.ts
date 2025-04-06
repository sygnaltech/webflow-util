

/*
 * webflow-booking
 * Timely
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 */

/*
https://app.gettimely.com/promote/buttonwizard
<script>new timelyButton("ponsonbydoctors", {"location":"244540","product":"4002346:SV","staff":"424054","style":"dark"});</script>

<script>new timelyButton("ponsonbydoctors", {"product":"4002346:SV","style":"dark"});</script>


<script>new timelyButton("ponsonbydoctors", {"location":"244540","category":"297101","staff":"424054","style":"dark"});</script>
*/


import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';


type BreakpointChangedCallback = (
    breakpointName: string, 
    e: MediaQueryListEvent
    ) => void; 



interface Sa5TimelyConfig {

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


export class Sa5Timely {

    config: Sa5TimelyConfig;

    // Type guard to check if a function is a UserInfoChangedCallback
    private isBreakpointsChangedCallback(func: Function): func is BreakpointChangedCallback {

        if(!func) return false;

        // Adjust this check as needed
        return func.length === 1;
    }

    constructor(config: Partial<Sa5TimelyConfig> = {}) {

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

