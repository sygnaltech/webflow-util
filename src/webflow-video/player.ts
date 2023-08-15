
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


export enum PlayerStatus {
    Playing = 'playing',
    Paused = 'paused',
    Stopped = 'stopped',
    Buffering = 'buffering'
}


export class WfuVideoPlayerState {
    status: PlayerStatus;
    currentTime: number;  // in seconds
    totalVideoTime: number;  // in seconds

    get percentagePlayed(): number {
        return (this.currentTime / this.totalVideoTime) * 100.0;
    };  // as a percentage from 0 to 100
    // ... any other properties you want
}

export class WfuVideoPlayer {

//    config; // Optional config

    name: string;
    element: HTMLElement;

    constructor(element: HTMLElement) {

        if (element) {
            let videoName = element.getAttribute('wfu-video'); 
            this.name = videoName;
            this.element = element;
        }

    }

    // Process elements with the custom attr wfu-query-param
    init() {

    }

    onTimeUpdate(time: number, duration: number) {

        let core: Sa5Core = Sa5Core.startup();

// console.log('name', this.name);
        let percent = time * 100 / duration;

        // Get any global handlers
        core.getHandlers(Sa5GlobalEvent.EVENT_VIDEO_TIME_UPDATE)
          .forEach(func => {

            // Initialize player state info 
            let state: WfuVideoPlayerState = new WfuVideoPlayerState();
            state.currentTime = time;
            state.totalVideoTime = duration;

            func(this.name, state);
    
          });         
        
    }

}

