
/*
 * webflow-video
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Webflow Video
 */

import { Sa5Core } from './webflow-core'

export class WebflowVideo {

    // Initialize
    constructor() {
    }

    // Fix all data poster urls
    processAllDataPosterUrls (): void {

        // Find poster video overrides and apply them
        const elements = document.querySelectorAll(`div[wfu-data-poster-url]`);
        elements.forEach((element) => {

            element.setAttribute(
                "data-poster-url",
                element.getAttribute("wfu-data-poster-url")
            );

        });

    }

}

// Register
Sa5Core.startup(WebflowVideo);
// window["sa5"] = window["sa5"] || []; //{};
// window["sa5"]["Sa5Video"] = WebflowVideo;




