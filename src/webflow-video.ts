
/*
 * webflow-video
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Webflow Video
 */



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



