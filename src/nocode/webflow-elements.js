
/*
 * webflow-elements
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version.
 */


import { WfuLightbox } from '../modules/webflow-element-lightbox.js';

$(function () {
 
    const wfuLightbox = new WfuLightbox();

    // Show all elements tagged for logged-in users only
    $("[wfu-lightbox-captions]").each(function() {
    
        wfuLightbox.initializeLightbox($(this));
        
    });
  
    let observer = new MutationObserver(lightBoxStateCallback);
    observer.observe(document.getElementsByTagName("html")[0], {
        childList: false, // observe direct children
        subtree: false, // and lower descendants too
        characterDataOldValue: false, // pass old data to callback 
        attributes: true, 
        attributeFilter: ["class"]
    });

});

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
  
var lightboxNavObserver;
  
function setupCaption() {
  
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
  
}
  
function uninstallLightBoxNavObserver() {
    if (lightboxNavObserver)
        lightboxNavObserver.disconnect();
}
  
function installLightBoxNavObserver() {
    
    setupCaption();

    lightboxNavObserver = new MutationObserver(lightBoxNavCallback);
    lightboxNavObserver.observe($(".w-lightbox-container")[0], {
        childList: true, // observe direct children
        subtree: true // and lower descendants too
    });
    
} 
  
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
