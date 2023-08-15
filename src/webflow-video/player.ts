
/*
 * webflow-video
 * Vimeo
 * Handles Vimeo player.
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Video Utilities
 */

import { Sa5GlobalEvent } from '../globals';
import { Sa5Core } from '../webflow-core'
import { WfuVideoPlayerVimeo } from './players/vimeo';



export class WfuVideoPlayer {

//    config; // Optional config

    name: string;
    element: HTMLElement;



    constructor(element: HTMLElement) {

console.log('player constructor', element); 

        // Player factory 

        if (element) {
            let videoName = element.getAttribute('wfu-video'); 
            this.name = videoName;
            this.element = element;

            console.log("video name is", this.name);
            // if (videoValue) {
            //     console.log(videoValue);
            // } else {
            //     console.log('Attribute not found or has no value');
            // }
        }

//var videoElement = document.querySelector('iframe[wfu-video="video1"]');

//        this.config = config;

    }

    // Process elements with the custom attr wfu-query-param
    init() {


    }

    // static create(element: HTMLElement): WfuVideoPlayer {

    //     // It's Vimeo!
    //         // Verify it's a recognized player
    //         // Vimeo ( on iframe? )
    //         return new WfuVideoPlayerVimeo(element);
    
    //         /*
    //     if (element) {
    //         let videoValue = element.getAttribute('wfu-video');
    //         if (videoValue) {
    //             console.log(videoValue);
    //         } else {
    //             console.log('Attribute not found or has no value');
    //         }
    //     }
    //     */
    
    // }

    onTimeUpdate(time: number, duration: number) {

//console.log('onTimeUpdate'); 

        let core: Sa5Core = Sa5Core.startup();

        let percent = time * 100 / duration;

//        console.log('onTimeUpdate', time, duration, percent);

        // Get any global handlers
        core.getHandlers(Sa5GlobalEvent.EVENT_VIDEO_TIME_UPDATE)
          .forEach(func => {

//            console.log('onSlideChanged func', index)

//            if (this.isSlideChangedCallback(func)) {
//                console.log('onSlideChanged func OK', index)

                func(this.name, time, duration, percent);
    
 //            }
          });         
        
    }

}

