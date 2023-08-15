
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

import { Sa5Core } from '../../webflow-core'
import { WfuVideoPlayer } from '../player';
import VimeoPlayer from '@vimeo/player';


export class WfuVideoPlayerVimeo extends WfuVideoPlayer {

//    config; // Optional config

    player: VimeoPlayer; 

    constructor(element: HTMLElement) {
        super(element); 
//        this.config = config;

console.log('vimeo const', element); 

    }

    // Process elements with the custom attr wfu-query-param
    init() {

console.log('init vimeo player'); 

        this.player = new VimeoPlayer(this.element);
        this.player.on('timeupdate', this.timeUpdate);

    }

    timeUpdate(data) {

        var duration = data.duration;
        var seconds = data.seconds;
    
      console.log(seconds);
      
        // Check if the video is within 5 seconds of ending.
    //    if (seconds >= 10) {
        if (duration - seconds <= 3) 
            console.log("Video is within 3 seconds of ending.");
//          enableButton();


    }


}
