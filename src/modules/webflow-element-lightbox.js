
/*
 * webflow-element-lightbox
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Extensions to Webflow's lightbox element. 
 */


/*
 * Elements class.
 */

var defaultConfig = {

    // sessionStorage | localStorage | cookies
//    method: 'sessionStorage',
    
//    prefix: 'track' 

}

export class WfuLightbox {

    config; // Optional config

    constructor(config = {}) {

        this.config = $.extend({}, defaultConfig, config);
    
    }

    initializeLightbox = function(lightboxElem) {

        const imageAltText = $(lightboxElem).children("img").attr("alt");
        const script = $(lightboxElem).children("script");
        const imageJSON = JSON.parse(script.html());
        imageJSON.items[0].caption = imageAltText;
        script.html(JSON.stringify(imageJSON));  
        
        // Apply ref key for caption retrieval
        $(lightboxElem).children("img").attr("ref-key", imageJSON.items[0].url);

    }

}

