
/*
 * webflow-video
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WebflowVideo } from '../webflow-video';
import { Sa5Core } from '../webflow-core'; 
import { Sa5Debug } from '../webflow-core/debug';
// import { Sa5VideoPlayerFactory } from '../webflow-video/player-factory';
// import { Sa5Attribute } from '../globals';
import { VERSION } from '../version';
import { Sa5VideoController } from '../webflow-video/video-controller';

// type VideoTimeUpdateCallback = (name: string, time: number, totalTime: number, percent: number) => void;


const init = () => { 


    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-video");
    debug.debug (`Initializing v${VERSION}`);



    // /**
    //  * Initialize all [wfu-video] elements
    //  */

    // let videos = document.querySelectorAll(`[${Sa5Attribute.ATTR_VIDEO}]`);
    // videos.forEach((element: HTMLElement) => {

    //     Sa5VideoPlayerFactory.create(element).init();

    // });
    
    /**
     * Init Video Controller and Events 
     */

    const videoController = new Sa5VideoController();
    videoController.init();



    /**
     * General video enhancements 
     */

    const webflowVideo = new WebflowVideo();

    // Initialize all [wfu-youtube-norel] elements
    webflowVideo.processAllYouTubeNorel();

    // Handle background videos. 
    webflowVideo.processAllDataPosterUrls();

}
  
// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}