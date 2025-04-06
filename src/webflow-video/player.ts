
/*
 * webflow-video
 * Vimeo
 * Handles Vimeo player.
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Video Utilities
 */

import { Sa5GlobalEvent } from '../globals';
import { Sa5Core } from '../webflow-core'
import { Sa5VideoPlayerVimeo } from './players/vimeo';


export enum PlayerStatus {
    Playing = 'playing',
    Paused = 'paused',
    Stopped = 'stopped',
    Buffering = 'buffering',
}

export enum PlayerStateChange {
    TimeUpdate = 'timeupdate',
}


export class Sa5VideoPlayerState { 

    stateChange: PlayerStateChange; 

    status: PlayerStatus;
    at: number;  // position, in seconds
    duration: number;  // video total duration, in seconds

    // video playback progress, as percent
    get progress(): number {
        return (this.at / this.duration) * 100.0;
    };  // as a percentage from 0 to 100
    
}

export class Sa5VideoPlayer {

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

    onPlayerStateChange(stateChange: PlayerStateChange, time: number, duration: number) {

        let core: Sa5Core = Sa5Core.startup();

// console.log('name', this.name);
        let percent = time * 100 / duration;

        // Get any global handlers
        core.getHandlers(Sa5GlobalEvent.EVENT_VIDEO_PLAYER_STATE_CHANGE)
          .forEach(func => {

            // Initialize player state info 
            let state: Sa5VideoPlayerState = new Sa5VideoPlayerState();
            state.stateChange = stateChange; 
            state.at = time;
            state.duration = duration;

            func(this.name, state);
    
          });         
        
    }

}

