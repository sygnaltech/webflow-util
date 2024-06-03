
/*
 * webflow-elements
 * Slider, Lightbox, Tabs, and more. 
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */


import { Sa5Attribute } from '../globals';
import { Sa5Lightbox } from '../webflow-elements/lightbox';
import { Sa5Button } from '../webflow-elements/button';
import { Sa5LightboxCaptionHandler } from '../webflow-lightbox/caption-handler';
import { WebflowTabs } from '../webflow-elements/tabs';
import { WebflowSlider } from '../webflow-elements/slider';
import { Sa5DeckController } from '../webflow-elements/deck-controller';
import { Sa5Dropdown } from '../webflow-elements/dropdown';
import { Sa5Autocomplete } from '../webflow-elements/autocomplete';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { VERSION } from '../version';


const init = () => { 

    // elements is a NodeList of all elements with the "wfu-tabs" attribute

    let core: Sa5Core = Sa5Core.startup();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-elements");
    debug.debug (`Initializing ${VERSION}`);
    
    // [wfu-tab-default]

    /**
     * Tabs
     */

    // Tabs
    // Auto-register class on named items? 
    // [wfu-tabs=NAME]
    let tabElements: NodeListOf<Element> = document.querySelectorAll(`[${Sa5Attribute.ATTR_ELEMENT_TABS}]`);
    tabElements.forEach(element => {

        var tabObj = new WebflowTabs(element as HTMLElement);

    });

    /**
     * Slider
     */

    // Slider
    // Auto-register class on named items? 
    // [wfu-slider=NAME]
    let sliderElements: NodeListOf<Element> = document.querySelectorAll(`[${Sa5Attribute.ATTR_ELEMENT_SLIDER}]`);
    sliderElements.forEach(element => {

        var sliderObj = new WebflowSlider(element as HTMLElement);

    });

    /**
     * Deck Controllers
     */

    let deckControllerElements: NodeListOf<Element> = document.querySelectorAll(`[${Sa5Attribute.ATTR_ELEMENT_DECK_ACTION}]`);
    deckControllerElements.forEach(element => {

        var deckControllerObj = new Sa5DeckController(element as HTMLElement);
        deckControllerObj.init();

    });    

    /**
     * Buttons
     */

    const buttons = document.querySelectorAll(`[${Sa5Attribute.ATTR_ELEMENT_BUTTON}]`) as NodeListOf<HTMLElement>; 
    buttons.forEach((element) => { 

        // Do something with each element
        new Sa5Button(element).init();

    });

    /**
     * Dropdowns
     */

    const dropdowns = document.querySelectorAll(`[${Sa5Attribute.ATTR_ELEMENT_DROPDOWN}]`) as NodeListOf<HTMLElement>; 
    dropdowns.forEach((element) => { 

        // Do something with each element
        new Sa5Dropdown(element).init();

    });

    /**
     * Autocomplete Elements
     */

    const autocompletes = document.querySelectorAll(`[${Sa5Attribute.ATTR_ELEMENT_AUTOCOMPLETE}]`) as NodeListOf<HTMLElement>; 
    autocompletes.forEach((element) => { 

        // Create & init each element
        new Sa5Autocomplete(element).init();

    });

    /**
     * Init lightbox captions 
     */

    let useLightboxCaptionHandler = false;

    const elements = document.querySelectorAll(
        Sa5Attribute.getBracketed(Sa5Attribute.ATTR_LIGHTBOX_CAPTIONS) // '[wfu-lightbox-captions]'
        ) as NodeListOf<HTMLElement>; 
    useLightboxCaptionHandler = elements.length > 0;
    elements.forEach((element) => { 

        // Do something with each element
        const wfuLightbox = new Sa5Lightbox(element).init();

    });

    if(useLightboxCaptionHandler) {
        new Sa5LightboxCaptionHandler().init(); 
    }

    /**
     * Init lightbox CMS groups
     */

    let lightBoxCmsGroups = false;

    const groups = document.querySelectorAll(
        Sa5Attribute.getBracketed(Sa5Attribute.ATTR_LIGHTBOX_GROUP) // '[wfu-lightbox-group]'
        ) as NodeListOf<HTMLElement>; 
    lightBoxCmsGroups = groups.length > 0;
    groups.forEach((element) => { 

        // Get the value of the wfu-lightbox-group attribute
        let groupValue = element.getAttribute(
            Sa5Attribute.ATTR_LIGHTBOX_GROUP // "wfu-lightbox-group"
            );

        // Find all descendant script elements with the class .w-json
        let scripts = element.querySelectorAll("script.w-json");

        // For each script
        scripts.forEach((script) => {
        // Parse the JSON
        let json = JSON.parse(script.textContent);

        // Update the group value
        json.group = groupValue;

        // Convert the JSON back to a string and update the script's content
        script.textContent = JSON.stringify(json, null, 2);
        });

    });

    // Re-initialize lightbox
    // to pick up new group names
    if(lightBoxCmsGroups) {
        var Webflow = Webflow || [];
        Webflow.push(function () {
            Webflow.require("lightbox").ready();
        });
    }
    
}
  
document.addEventListener("DOMContentLoaded", init);
  




