
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

import { CountUp } from 'https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.js';
import { WfuDebug } from './webflow-core.js';


var defaultConfig = {

    waypointSelfTrigger: {
        offset: '90%',
    },
    waypointGroupTrigger: {
        offset: '70%',
    },
    countupSettings: {}, 

    debug: false, // Debugging mode

}

export class WfuCountUp {

    console = new WfuDebug();

    config; // Optional config

    constructor(config = {}) {

        this.config = $.extend({}, defaultConfig, config);

        this.console.enabled = this.config.debug; 

    }

    init() {

        this.console.debug("countup init");

        this.installCountupWaypoints();

    }

    startCountups(group) {

        this.console.debug("startCountups", group);

        const that = this;

        // Install self-triggered ones
        $(`[wfu-countup='${group}']`).each(function() {
        
            const v = $(this).text();
        //    $(this).attr("wfu-countup-val", v);
        
            // Configuration settings
            // https://github.com/inorganik/CountUp.js 
            const counter = new CountUp(
                $(this)[0], 
                v,
                this.config.countupSettings
                ).start();
        
        });  
    
    }
      
    installCountupWaypoints() { 

        this.console.debug("installCountupWaypoints"); 

        const that = this;

        // Install self-triggered ones
        $("[wfu-countup-trigger]").each(function() { 
    
            const group = $(this).attr("wfu-countup-trigger"); 
        
            var countups = [];
            
            // Install group-triggered countups
            $(`[wfu-countup='${group}']`).each(function() {
        
                const v = $(this).text();
            //    $(this).attr("wfu-countup-val", v);
        
                // Configuration settings
                // https://github.com/inorganik/CountUp.js 
                const counter = new CountUp(
                    $(this)[0], 
                    v,
                    that.config.countupSettings
                    );
        
                countups.push(counter);
                
            });  
        
            const wp = new Waypoint({
                element: $(this)[0],
                handler: function() { 
        
                    for (var i = 0; i < countups.length; i++) {
                        countups[i].start();
                    }
                        
                    this.destroy(); // to trigger once
                }, 
                offset: that.config.waypointGroupTrigger // '70%'
            });      
            
        });

        // Install self-triggered ones
        $("[wfu-countup='']").each(function() {
            
            const v = $(this).text();
        //      $(this).attr("wfu-countup-val", v);
            
            // https://codepen.io/vn38/pen/eYZWeGr 
            // Configuration settings
            // https://github.com/inorganik/CountUp.js 
            const counter = new CountUp(
                $(this)[0], 
                v,
                that.config.countupSettings
            );
        
            const wp = new Waypoint({
                element: $(this)[0],
                handler: function() {
                    counter.start(); 
                    this.destroy(); // to trigger once
                }, 
                offset: that.config.waypointSelfTrigger // '90%'
            });
            
        });
      
    }

}

