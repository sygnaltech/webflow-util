

/*
 * webflow-html
 * Breakpoints
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */


import { WfuDebug } from '../webflow-core';


interface Config {
    handleBreakpointChange?: ((e: MediaQueryListEvent) => void) | null;
}

// Webflow breakpoints
export const wfuBreakpoints = {
    large1920: '(min-width: 1920px)',
    large1440: '(min-width: 1440px) and (max-width: 1919px)',
    large1280: '(min-width: 1280px) and (max-width: 1439px)',
    desktop: '(min-width: 992px) and (max-width: 1279px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    mobileLandscape: '(min-width: 480px) and (max-width: 767px)',
    mobilePortrait: '(max-width: 479px)'
}


export class WfuBreakpoints {
    config: Config;

    constructor(config: Config) {
        this.config = config;
    }

    init() {

        // Initialize debugging
        let debug = new WfuDebug("wfu-html");
        debug.debug ("Breakpoints initialized.", this.config);
    
        // Create MediaQueryList and attach listeners for each breakpoint
        for (let device in wfuBreakpoints) {
            let mediaQueryList = window.matchMedia(wfuBreakpoints[device]);

            if(this.config.handleBreakpointChange) {

                // Install change listener
                mediaQueryList.addEventListener('change', this.config.handleBreakpointChange);

                // Call the callback now to initialize current breakpoint
                this.config.handleBreakpointChange({ 
                    media: mediaQueryList.media, 
                    matches: mediaQueryList.matches 
                } as MediaQueryListEvent); 

            }
        }

    }

}
  
  
