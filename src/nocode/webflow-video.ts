
/*
 * webflow-video
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WebflowVideo } from '../webflow-video';
import { WfuCore, WfuDebug } from '../webflow-core.js';

const init = () => { 

    new WfuCore().init();

    // Initialize debugging
    let debug = new WfuDebug("wfu-video");
    debug.debug ("Initializing");

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