
/*
 * webflow-lightbox
 * Caption Handler
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Extensions to Webflow's lightbox element. 
 */


/** 
 * Lightbox class.
 */

var defaultConfig = {
}

export class Sa5LightboxCaptionHandler {

    config; // Optional config
//    _element: HTMLElement;

    constructor() {

//        this._element = element;
//        this.config = $.extend({}, defaultConfig, config);
    
    }

    init() {
    
        // Create lightbox state mutation observer
        let observer = new MutationObserver(this.lightBoxStateCallback);
        observer.observe(document.getElementsByTagName("html")[0], {
            childList: false, // observe direct children
            subtree: false, // and lower descendants too
            characterDataOldValue: false, // pass old data to callback 
            attributes: true, 
            attributeFilter: ["class"]
        });

    }

    lightBoxStateCallback = (mutationList: MutationRecord[], observer: MutationObserver) => {
        for (const mutation of mutationList) {
            if (mutation.type === 'attributes' && mutation.target instanceof HTMLElement) {
                if (mutation.target.classList.contains("w-lightbox-noscroll")) {
                    console.debug("Lightbox opened.");
                    this.installLightBoxNavObserver();
                } else {
                    console.debug("Lightbox closed.");
                    this.uninstallLightBoxNavObserver();
                }
            }
        }
    };

    /* 
    const lightBoxStateCallback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === 'attributes') {
            
                if ($("html").hasClass("w-lightbox-noscroll")) {
                    console.debug("Lightbox opened.");
                    installLightBoxNavObserver();
                } else {
                    console.debug("Lightbox closed."); 
                    uninstallLightBoxNavObserver();
                }
                
            }
        }
    };
    */
    
    lightboxNavObserver;
    
    setupCaption() {
    
        /*
        const figure = $("figure.w-lightbox-figure");
        const img = figure.children("img");
        const key = img.attr("src");
        const thumb = $(`img[ref-key='${key}'`); 
        const caption = thumb.attr("alt");
        
        figure.children("figcaption").remove();
        
        if (caption)
            figure.append(
                $(`<figcaption class="w-lightbox-caption">${caption}</figcaption>`)
                );
    */ 

        let figure = document.querySelector("figure.w-lightbox-figure");

        if (figure) {
            let img = figure.querySelector("img");
            let captionElement = figure.querySelector("figcaption");
        
            if (img) {
            let key = img.getAttribute("src");
            let thumb = document.querySelector(`img[ref-key='${key}']`);
        
            if (captionElement) {
                // Remove existing figcaption
                captionElement.remove();
            }
        
            if (thumb) {
                let caption = thumb.getAttribute("alt");
                
                if (caption) {
                // Append new figcaption
                let newCaption = document.createElement("figcaption");
                newCaption.textContent = caption;
                newCaption.classList.add("w-lightbox-caption");
                figure.appendChild(newCaption);
                }
            }
            }
        }
                
    }
        
    uninstallLightBoxNavObserver() {
        if (this.lightboxNavObserver)
            this.lightboxNavObserver.disconnect();
    }
  
    installLightBoxNavObserver() {
        
        this.setupCaption();

        let lightboxContainer = document.querySelector(".w-lightbox-container");

        if (lightboxContainer) {
            let lightboxNavObserver = new MutationObserver(this.lightBoxNavCallback);

            // Options for the observer (which mutations to observe)
            const config = { childList: true, subtree: true };

            // Start observing the target node for configured mutations
            lightboxNavObserver.observe(lightboxContainer, config);
        }

    /* 
        lightboxNavObserver = new MutationObserver(lightBoxNavCallback);
        lightboxNavObserver.observe($(".w-lightbox-container")[0], {
            childList: true, // observe direct children
            subtree: true // and lower descendants too
        });
        */
    } 


    lightBoxNavCallback = (mutationList: MutationRecord[], observer: MutationObserver) => {
        for (let mutation of mutationList) {
            if (mutation.target instanceof HTMLElement) {
                if (mutation.target.classList.contains("w-lightbox-content")) {
                    this.setupCaption();
                }
            }
        }
    }

    /* 
    const lightBoxNavCallback = (mutationList, observer) => {
        for (let mutation of mutationList) {
    
            // if ($(mutation.target).hasClass("w-lightbox-view")) { 
            //     $(mutation.target).children("figcaption").remove();
            // }

            if ($(mutation.target).hasClass("w-lightbox-content")) { 
                setupCaption(); 
            }
        }
        
    };
    */

}

