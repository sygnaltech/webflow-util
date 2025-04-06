
/*
 * webflow-element-lightbox
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Extensions to Webflow's lightbox element. 
 */

import { Sa5Core } from "../webflow-core";


interface LightboxItem {
    _id: string;
    origFileName: string;
    fileName: string;
    fileSize: number;
    height: number;
    url: string;
    width: number;
    type: string;
}

/** 
 * Lightbox class.
 */

var defaultConfig = {
}

export class Sa5Lightbox {

    thumbnailImage: string;
    group: string;
    items: LightboxItem[];

    config; // Optional config
    _element: HTMLElement;

    constructor(element: HTMLElement, config = {}) {

        this._element = element;
//        this.config = $.extend({}, defaultConfig, config);
    
    }

    init() {

//        this.setCaptionToImageAlt(); 

    }

    setCaptionToImageAlt() {

        let imgElement = this._element.querySelector("img");
        let scriptElement = this._element.querySelector("script");
      
        // Set the caption to the image alt text
        if (imgElement && scriptElement) {
          const imageAltText = imgElement.getAttribute("alt");
          const imageJSON = JSON.parse(scriptElement.innerHTML);
      
          imageJSON.items[0].caption = imageAltText;
          scriptElement.innerHTML = JSON.stringify(imageJSON);
      
          // Apply ref key for caption retrieval
          imgElement.setAttribute("ref-key", imageJSON.items[0].url);
        }

        /* 
        const imageAltText = $(lightboxElem).children("img").attr("alt");
        const script = $(lightboxElem).children("script");
        const imageJSON = JSON.parse(script.html());
        imageJSON.items[0].caption = imageAltText;
        script.html(JSON.stringify(imageJSON));  
        
        // Apply ref key for caption retrieval
        $(lightboxElem).children("img").attr("ref-key", imageJSON.items[0].url);
*/

    }

    static createNew (container: HTMLElement, thumbnailImage: string, group: string, items: LightboxItem[] = []): Sa5Lightbox {

//        new Sa5Lightbox()

        // this.thumbnailImage = thumbnailImage;
        // this.group = group;
        // this.items = items;

        // Create item from thumbnailImage
        // if none exists 
        if(items.length == 0) {
            items.push({
                _id: "66a47ce64421398ae9c33fea",
                origFileName: "",
                fileName: "",
                fileSize: 0,
                height: 1024,
                width: 1024, 
                url: thumbnailImage, 
                type: "image"
            })
        }

        const itemsJSON = JSON.stringify({ items: items, group: group });
        const html = `
            <a href="#" class="lightbox-link w-inline-block w-lightbox">
                <img src="${thumbnailImage}" loading="lazy" alt="">
                <script type="application/json" class="w-json">${itemsJSON}</script>
            </a>
        `;

        // Create a temporary container to hold the HTML string
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = html.trim();

        // Get the actual element from the temporary container
        const newElement = tempContainer.firstChild as HTMLElement;

        // Append the new element to the specified container
        container.appendChild(newElement);

        // Return the newly appended element
        return new Sa5Lightbox(newElement);
    } 

    // Function to reset Webflow lightbox
    static resetLightbox() {
    
        window["Webflow"].require("lightbox").ready();
    
    }

}


// Register class
Sa5Core.startup(Sa5Lightbox); 
