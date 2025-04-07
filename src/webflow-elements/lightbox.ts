
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

    // get caption(): string {

    //     // Attempt to get caption from SA5 attribute 
    //     if(this._element.hasAttribute("wfu-lightbox-captions-text"))
    //         return this._element.getAttribute("wfu-lightbox-captions-text");
        
    //     // Attempt to get caption from thumbnail image alt text 
    //     let thumbnail = this._element.querySelector("img");
    //     if(thumbnail) 
    //         return thumbnail.getAttribute("alt");

    //     return null; 
    // }

    constructor(element: HTMLElement, config = {}) {
// console.log("installing lightbox"); 
        this._element = element;
//        this.config = $.extend({}, defaultConfig, config);
    
    }

    init() {

//        this.setCaptionToImageAlt(); 

    }

    setCaptionToImageAlt() {

        let imgElement = this._element.querySelector("img");
        let scriptElement = this._element.querySelector("script");
        
//console.log(this.caption); 

        // Set the caption to the image alt text for all items
        if (imgElement && scriptElement) {
//        if (scriptElement) {
          const imageAltText = imgElement.getAttribute("alt");
          const imageJSON = JSON.parse(scriptElement.innerHTML);
        
          // Apply the alt text as the caption to each item 
          imageJSON.items[0].caption = imageAltText;
        //   imageJSON.items.forEach(item => {
        //     item.caption = imageAltText;
        //   });
        
          scriptElement.innerHTML = JSON.stringify(imageJSON);
        
          // Optionally apply ref-key to the first image URL
          if (imageJSON.items.length > 0) {
            imgElement.setAttribute("ref-key", imageJSON.items[0].url);
          }
        }
        

        // let imgElement = this._element.querySelector("img");
        // let scriptElement = this._element.querySelector("script");
      
        // // Set the caption to the image alt text
        // if (imgElement && scriptElement) {
        //   const imageAltText = imgElement.getAttribute("alt");
        //   const imageJSON = JSON.parse(scriptElement.innerHTML);
      
        //   imageJSON.items[0].caption = imageAltText;
        //   scriptElement.innerHTML = JSON.stringify(imageJSON);
      
        //   // Apply ref key for caption retrieval
        //   imgElement.setAttribute("ref-key", imageJSON.items[0].url);
        // }



    }

    static createNew(container: HTMLElement, thumbnailImage: string, group: string, items: LightboxItem[] = []): Sa5Lightbox {

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
