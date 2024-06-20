
/*
 * webflow-video
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WebflowVideo } from '../webflow-video';
import { Sa5Core } from '../webflow-core'; 
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5VideoPlayerFactory } from '../webflow-video/player-factory';
import { Sa5Attribute } from '../globals';
import { VERSION } from '../version';

// type VideoTimeUpdateCallback = (name: string, time: number, totalTime: number, percent: number) => void;


const init = () => { 


    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-video");
    debug.debug (`Initializing ${VERSION}`);



    /**
     * Initialize all [wfu-video] elements
     */

    let videos = document.querySelectorAll(`[${Sa5Attribute.ATTR_VIDEO}]`);
    videos.forEach((element: HTMLElement) => {

        Sa5VideoPlayerFactory.create(element).init();

    });
    


    const webflowVideo = new WebflowVideo();


    /**
     * Initialize all [wfu-youtube-norel] elements
     */    

    // let youtube = document.querySelectorAll(`[${Sa5Attribute.ATTR_VIDEO_YOUTUBE_NOREL}]`);

    // youtube.forEach((element: HTMLElement) => {

//    console.log("Processing NOREL")

    webflowVideo.processAllYouTubeNorel();

//        Sa5VideoPlayerFactory.create(element).init();

//    });

    /**
     * Handle background videos. 
     */


    webflowVideo.processAllDataPosterUrls();

    // // Find poster video overrides and apply them
    // const elements = document.querySelectorAll(`div[wfu-data-poster-url]`) as NodeListOf<HTMLDivElement>; 
    // elements.forEach((element) => { 

    //   // Do something with each element
    //   webflowInfo.updateHrefToWebflowPreviewLink(element);

    // });

}
  
// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}