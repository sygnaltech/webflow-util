
/*
 * webflow-elements
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version.
 */


import { WfuLightbox } from '../webflow-core/lightbox';



const init = () => { 
 

    // Show all elements tagged for logged-in users only

    const elements = document.querySelectorAll('[wfu-lightbox-captions]') as NodeListOf<HTMLElement>; 
    elements.forEach((element) => { 

      // Do something with each element
      const wfuLightbox = new WfuLightbox(element).init();

    });
    
    let observer = new MutationObserver(lightBoxStateCallback);
    observer.observe(document.getElementsByTagName("html")[0], {
        childList: false, // observe direct children
        subtree: false, // and lower descendants too
        characterDataOldValue: false, // pass old data to callback 
        attributes: true, 
        attributeFilter: ["class"]
    });

}
  
document.addEventListener("DOMContentLoaded", init)

const lightBoxStateCallback = (mutationList: MutationRecord[], observer: MutationObserver) => {
    for (const mutation of mutationList) {
        if (mutation.type === 'attributes' && mutation.target instanceof HTMLElement) {
            if (mutation.target.classList.contains("w-lightbox-noscroll")) {
                console.debug("Lightbox opened.");
                installLightBoxNavObserver();
            } else {
                console.debug("Lightbox closed.");
                uninstallLightBoxNavObserver();
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
  
var lightboxNavObserver;
  
function setupCaption() {
  
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
  
function uninstallLightBoxNavObserver() {
    if (lightboxNavObserver)
        lightboxNavObserver.disconnect();
}
  
function installLightBoxNavObserver() {
    
    setupCaption();

    let lightboxContainer = document.querySelector(".w-lightbox-container");

    if (lightboxContainer) {
        let lightboxNavObserver = new MutationObserver(lightBoxNavCallback);

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


const lightBoxNavCallback = (mutationList: MutationRecord[], observer: MutationObserver) => {
    for (let mutation of mutationList) {
        if (mutation.target instanceof HTMLElement) {
            if (mutation.target.classList.contains("w-lightbox-content")) {
                setupCaption();
            }
        }
    }
};

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