
/*
 * webflow-countup
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Countup Utilities 
 * Wraps Inorganik's CountUp library for nocode & locode use in Webflow.
 * Utilizes Waypoints for individual and group triggering.
 */

// Library added by npm package install 
// https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.js';
import { CountUp, CountUpOptions } from 'countup.js'; 

// Added by .d.ts types wrapper, custom built 
// BUG: import { Waypoint } from 'waypoints'; // 'waypoint'; 

import { WfuDebug } from '../webflow-core';



// Waypoints 
// http://imakewebthings.com/waypoints/guides/getting-started/
// https://github.com/imakewebthings/waypoints/blob/master/lib/noframework.waypoints.js
// import { Waypoint } from 'waypoint';
// https://attr.sygnal.com/webflow-countup/countup 


interface WfuCountUpConfig {
    waypointSelfTrigger: {
      offset: number; // string;
    },
    waypointGroupTrigger: {
      offset: number; //string;
    },
    countupSettings: CountUpOptions;
    debug: boolean;
}


var defaultConfig: WfuCountUpConfig = {

    waypointSelfTrigger: {
        offset: 90, //'90%',
    },
    waypointGroupTrigger: {
        offset: 70, //'70%',
    },
    countupSettings: {}, 

    debug: false, // Debugging mode

}


export class WfuCountUp {

    config: WfuCountUpConfig; // Optional config
    debug: WfuDebug; 
 
    // Initialize
    constructor(customConfig = {}) {

        // Initialize debugging
        this.debug = new WfuDebug("wfu-countup");
        this.debug.debug ("Initializing");

        // Merge configs
//        this.config = Object.assign({}, defaultConfig, customConfig);
        this.config = { ...defaultConfig, ...customConfig };

        // Enable debugging, if specified
        this.debug.enabled = this.config.debug; 

    }


    init(): void {

        this.debug.debug("countup init");

        this.installCountupWaypoints();

    }

    startCountups(group): void {

        this.debug.debug("startCountups", group);

        const that = this;

        // Install self-triggered ones
        const elements = document.querySelectorAll(`[wfu-countup='${group}']`);
        elements.forEach((element) => {

            // Perform actions on each element
//            console.log(element.textContent);

        
//            const v = element.textContent;
        //    $(this).attr("wfu-countup-val", v);
            const n = parseFloat(element.textContent ?? "0");

            // Configuration settings
            // https://github.com/inorganik/CountUp.js 
            const counter = new CountUp(
                element as HTMLElement, 
                n,
                this.config.countupSettings
                ).start();
        
        });  
    
    }
      
    installCountupWaypoints() { 

        this.debug.debug("installCountupWaypoints"); 

        const that = this;

        // Install self-triggered ones
        const triggers = document.querySelectorAll(`[wfu-countup-trigger]`);
        triggers.forEach((trigger) => {

//        $("[wfu-countup-trigger]").each(function() { 
    
            const group = trigger.getAttribute("wfu-countup-trigger"); 
        
            var countups: CountUp[] = [];
            
            // Install group-triggered countups
            const elements = document.querySelectorAll(`[wfu-countup='${group}']`);
            elements.forEach((element) => { 

//                $(`[wfu-countup='${group}']`).each(function() {
        
                const v = element.textContent;
            //    $(this).attr("wfu-countup-val", v);

                const n = parseFloat(element.textContent ?? "0");

                // Configuration settings
                // https://github.com/inorganik/CountUp.js 
                const counter: CountUp = new CountUp(
                    element as HTMLElement, 
                    n,
                    this.config.countupSettings
                    );
        
                if(counter != null)
                    countups.push(counter);

                counter.start();
                    

            });  
        
            // const wp = new Waypoint({
            //     element: trigger as HTMLElement,
            //     handler: function() { 
        
            //         for (var i = 0; i < countups.length; i++) {
            //             countups[i].start();
            //         }
                        
            //         this.destroy(); // to trigger once
            //     }, 
            //     offset: that.config.waypointGroupTrigger.offset // '70%'
            // });      
            
        });

        // Install self-triggered ones
        const counters = document.querySelectorAll(`[wfu-countup]`);
        counters.forEach((c) => {
//        $("[wfu-countup='']").each(function() {
            
//            const v = c.textContent;
        //      $(this).attr("wfu-countup-val", v);

            const n = parseFloat(c.textContent ?? "0");
            
            // https://codepen.io/vn38/pen/eYZWeGr 
            // Configuration settings
            // https://github.com/inorganik/CountUp.js 
            const counter = new CountUp(
                c as HTMLElement, 
                n,
                that.config.countupSettings
            );
        
            // const wp = new Waypoint({
            //     element: c as HTMLElement,
            //     handler: function() {
            //         counter.start(); 
            //         this.destroy(); // to trigger once
            //     }, 
            //     offset: that.config.waypointSelfTrigger.offset // '90%'
            // });
            
        });
      
    }

}

window["WfuCountUp"] = WfuCountUp;
