

/*
 * webflow-html
 * Breakpoints
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */


import { Sa5Debug } from '../webflow-core/debug';


interface Config {
    handleBreakpointChange?: ((breakpointName: string, e: MediaQueryListEvent) => void) | null;
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
    config: Config;

    constructor(config: Config) {
        this.config = config;
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
        if(this.config.handleBreakpointChange) 
            this.config.handleBreakpointChange(
                device as string, 
                e
            ); 

    });

}

// Register
window["sa5"] = window["sa5"] || {};
window["sa5"]["Sa5Breakpoints"] = Sa5Breakpoints;


  
