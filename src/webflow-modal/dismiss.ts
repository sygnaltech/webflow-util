
/*
 * Sa5
 * webflow-modal
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */

// import { renderRatingComponent } from "./modules/webflow-ui";
// import * as Cookies from 'js-cookie';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'
import { Sa5Attribute } from '../globals';
//import { Cookies } from 'js-cookie';

export class Sa5Dismiss {

    private _element: HTMLElement;
    private _name: string; 

    constructor(element: HTMLElement) {

        this._element = element;

    }
 
    // Generates the unique key name for suppression tracking
    private getModalKeyName() { 

        return `wfu-dismiss_${this._name}`; 
    }

    // Returns true if the item is flagged as suppressed
    isDismissed() { // name 
      
//        console.log("suppressed", this.getModalKeyName())

        const dismissed = getCookie(
            this.getModalKeyName()
            );

//        console.log("suppressed", suppressed)

        // We use session storage
        // suppression is temporary, to the current tab-session 
        // const suppressed = sessionStorage.getItem(
        //     this.getModalKeyName()  
        //     ); 
        
        return dismissed;
    }

    // Suppress the item
    dismiss(val, duration: number) {
      
        setCookie(
          this.getModalKeyName(), 
          val, 
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
            this.getModalKeyName()
        )

    }

    // Initialize all "modals" on the page
    init() {

        this._name = this._element.getAttribute(
            Sa5Attribute.ATTR_DISMISS // "wfu-modal"
            ) || "default";

        if(this.isDismissed()) {
            this._element.remove(); 
            return; // nothing else to do 
        }

        // Un-hide the item, if not suppressed
        this._element.removeAttribute(
            Sa5Attribute.ATTR_DISMISS_TRIGGER // "wfu-modal-trigger"
            );

        // Detect close button clicks,
        // and then suppress the targeted element 
        document.querySelectorAll(
            Sa5Attribute.getBracketed(Sa5Attribute.ATTR_DISMISS_CLOSE) // "[wfu-modal-close]"
            ).forEach((element) => {
            
          // Detect close button clicks,
          // and then suppress the targeted element 
          element.addEventListener('click', () => {

              // Get modal
              const modalClose = element; 
              const modal = modalClose.closest(
                Sa5Attribute.getBracketed(Sa5Attribute.ATTR_DISMISS)// "[wfu-modal]"
                ) as HTMLElement; 
              const modalCloseVal = modalClose.getAttribute(
                Sa5Attribute.ATTR_DISMISS_CLOSE // "wfu-modal-close"
                ) || "true";
              const modalCloseType = modal.getAttribute(
                Sa5Attribute.ATTR_DISMISS_CLOSE_TYPE // "wfu-modal-close-type"
                ) || "auto";
              const modalSuppressDuration = parseFloat(modal.getAttribute(
                Sa5Attribute.ATTR_DISMISS_DAYS // "wfu-modal-suppress-days"
                )) || 9999;
              
              // Set cookie suppression 
              this.dismiss(
                  modalCloseVal, 
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

    }

}

