
/*
 * Sa5
 * webflow-modal
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 */

/**
 * ATTR_DISMISS identifies the element and name 
 * ATTR_DISMISS_TRIGGER trigger button 
 * ATTR_DISMISS_CLOSE = 'wfu-dismiss-close',
 * ATTR_DISMISS_CLOSE_TYPE = 'wfu-dismiss-close-type',
 * ATTR_DISMISS_DAYS = 'wfu-dismiss-suppress-days',
 * ATTR_PRELOAD = hidden
 */

// import { renderRatingComponent } from "./modules/webflow-ui";
// import * as Cookies from 'js-cookie';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'
import { Sa5Attribute } from '../globals';
import { Sa5Debug } from '../webflow-core/debug';
import { VERSION } from '../version';
//import { Cookies } from 'js-cookie';

export class Sa5Dismiss {

    private _element: HTMLElement;
    private _name: string; 
    private debug: Sa5Debug; 

    constructor(element: HTMLElement) {

        this._element = element;

        // Initialize debugging
        this.debug = new Sa5Debug("sa5-dismiss");
//        this.debug.enabled = true; 
        this.debug.debug (`Initializing v${VERSION}`);

    }

    // Generates the unique key name for suppression tracking
    private getKeyName() {  

        return `wfu-dismiss_${this._name}`; 
    }

    // Returns true if the item is flagged as suppressed
    isDismissed() { // name 

        const dismissed = getCookie(
            this.getKeyName()
            );

        this.debug.debug("is-dismissed", this._name, this.getKeyName(), dismissed); 

        // TODO: consider session storage approach 
        // We use localSession storage  
        // suppression is temporary, to the current tab-session 
        // const suppressed = sessionStorage.getItem(
        //     this.getModalKeyName()  
        //     ); 
        
        return dismissed;
    }

    // Suppress the item
    dismiss(duration: number) {

        this.debug.debug("dismissed", this._name, this.getKeyName(), duration); 
        
        setCookie(
          this.getKeyName(), 
          "true", // val, 
          {
            expires: duration // days 
          }
        );
      
        // We'll use session storage
        // suppression is temporary, to the current tab-session 
        // sessionStorage.setItem(
        //     this.getModalKeyName(this._name), val);
      
    }

    // Un-suppress the item
    unDismiss() {
      
        // We'll use session storage
        // suppression is temporary, to the current tab-session 
        removeCookie(
            this.getKeyName()
        )

    }

    // Initialize all "modals" on the page
    init() {

        this._name = this._element.getAttribute(
            Sa5Attribute.ATTR_DISMISS // wfu-dismiss 
            ) || "default";

        if(this.isDismissed()) {
            this._element.remove(); 
            return; // nothing else to do 
        }

        // Un-hide the item, if not suppressed
        this._element.removeAttribute(
            Sa5Attribute.ATTR_DISMISS_TRIGGER // wfu-dismiss-trigger
            );

        //
        // Install close button handlers 
        //

        // Find all close buttons within the dismissible element 
        // which may include the element itself 

        const selector = Sa5Attribute.getBracketed(Sa5Attribute.ATTR_DISMISS_CLOSE);
        const nodes = Array.from(this._element.querySelectorAll(selector));

        // Check if the element itself matches
        if (this._element.matches(selector)) {
            nodes.unshift(this._element);
        }

        // Install handler 
        nodes.forEach((element) => {

            this.debug.debug("Installing close button."); 

            // Detect close button clicks,
            // and then suppress the targeted element 
            element.addEventListener('click', () => {

                this.debug.debug("Close button clicked."); 

                // Get modal
                const modalClose = element; 

                // Get the modal element, which an ancestor or the current element 
                const modal = modalClose.closest(
                    Sa5Attribute.getBracketed(Sa5Attribute.ATTR_DISMISS) // wfu-dismiss
                    ) as HTMLElement; 
                    
                const modalCloseType = modal.getAttribute(
                    Sa5Attribute.ATTR_DISMISS_CLOSE_TYPE // wfu-dismiss-close-type
                    ) || "auto";
                const modalSuppressDuration = parseFloat(modal.getAttribute(
                    Sa5Attribute.ATTR_DISMISS_DAYS // wfu-dismiss-suppress-days
                    )) || 9999;

                // Set cookie suppression 
                this.dismiss(
                    modalSuppressDuration // days
                );
        
                // Close dialog
                // TODO: consider special interaction closes, do nothing 
                switch(modalCloseType) {
                    case "interaction":
                        // do nothing
                        break;
                    case "auto":
                    default:
                        // remove now 
                        modal.remove(); 
                        break;
                }

            });

        });

        /**
         * Remove preloader
         */
        
        this._element.removeAttribute(Sa5Attribute.ATTR_PRELOAD);

    }

}

