
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
    lightboxNavObserver;

    constructor() {
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

    } 
        
    uninstallLightBoxNavObserver() {

        if (this.lightboxNavObserver)
            this.lightboxNavObserver.disconnect();
            
    }
    
    setupCaption() {

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

    lightBoxNavCallback = (mutationList: MutationRecord[], observer: MutationObserver) => {
        for (let mutation of mutationList) {
            if (mutation.target instanceof HTMLElement) {
                if (mutation.target.classList.contains("w-lightbox-content")) {
                    this.setupCaption();
                }
            }
        }
    }

}

