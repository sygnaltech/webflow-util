
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
import { WfuVideoPlayer } from '../webflow-video/player';
import { WfuVideoPlayerFactory } from '../webflow-video/player-factory';

const init = () => { 

//    new Sa5Core().init();
let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-video");
    debug.debug ("Initializing");




    let videos = document.querySelectorAll('[wfu-video]');
    WfuVideoPlayer

    videos.forEach((element: HTMLElement) => {

        WfuVideoPlayerFactory.create(element).init();

//        (new WfuVideoPlayer(element)).init(); 

        // let videoValue = element.getAttribute('wfu-video');
        // if (videoValue) {
        //     console.log(videoValue);
        // } else {
        //     console.log('Attribute not found or has no value');
        // }
    });
    

    const webflowVideo = new WebflowVideo();

    webflowVideo.processAllDataPosterUrls();

    // // Find poster video overrides and apply them
    // const elements = document.querySelectorAll(`div[wfu-data-poster-url]`) as NodeListOf<HTMLDivElement>; 
    // elements.forEach((element) => { 

    //   // Do something with each element
    //   webflowInfo.updateHrefToWebflowPreviewLink(element);

    // });

}
  
document.addEventListener("DOMContentLoaded", init)