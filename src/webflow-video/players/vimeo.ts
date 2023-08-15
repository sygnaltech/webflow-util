
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
    
//        console.log(seconds, duration);


//        console.log('onTimeUpdate', time, duration, percent);


super.onTimeUpdate(seconds, duration);

      
        // Check if the video is within 5 seconds of ending.
    //    if (seconds >= 10) {
//        if (duration - seconds <= 3) 
  //          console.log("Video is within 3 seconds of ending.");
//          enableButton();


    }


}


/*

If you're referring to the Vimeo player from the previous question, Vimeo's official JavaScript player API provides a variety of events you can listen for and interact with. Here's a list of some of the most commonly used events:

play: Triggered when the video starts to play.

pause: Triggered when the video is paused.

ended: Triggered when the video reaches the end.

timeupdate: Triggered as the current playback time changes. This is useful for tracking the progress of the video.

progress: Triggered as the video is downloaded. This can be helpful for monitoring buffering status.

seeked: Triggered when a seek operation completes.

texttrackchange: Triggered when the active text track (like subtitles or captions) changes.

volumechange: Triggered when the volume changes.

playbackratechange: Triggered when the playback speed rate changes.

error: Triggered when an error occurs, like when a video fails to load.

loaded: Triggered when the player initially loads.

fullscreenchange: Triggered when the player enters or exits fullscreen mode.

*/
