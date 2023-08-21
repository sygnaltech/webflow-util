
/*
 * Sa5
 * webflow-ix
 * EXPERIMENTAL
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * IX2 Utilities
 * This lib aggregates functionality relating to Webflow's IX2 interactions. 
 * It's intented to develop as an interface to key functionality, ideally-
 * - Resetting interactions after a DOM change
 * - Possibly solving problems like the per-page onpageload restriction 
 * - Triggering interactions directly from script 
 * - Unpacking the Redux store
 * 
 */

// import { renderRatingComponent } from "./modules/webflow-ui";

export class Sa5IX {

  // private _element: HTMLElement;
  // private _rating: Number;



  // Sets the value of a Rating element and refreshes it
  // setRating (el, rating) {

  //   el.attr("wfu-rating", rating);
  //   this.renderRatingComponent(el);

  // }

  constructor(element: HTMLElement) {

    // this._element = element;
    // this._rating = Number(element.getAttribute("wfu-rating")); 

  }

  init() {

  }

  restart() {

// Webflow is loaded?
// Re-initialize ix2  
//    Webflow.require('ix2').init()

// https://discourse.webflow.com/t/reinitialize-webflow-ix2/51094/10?u=memetican 

  }

  // https://redux.js.org/ 
  stateRestore() {

// https://discourse.webflow.com/t/reinitialize-webflow-ix2/51094/11?u=memetican
// https://discourse.webflow.com/t/reinitialize-webflow-ix2/51094/14?u=memetican
// window.Webflow && window.Webflow.require( 'ix2' ).init();
// document.dispatchEvent( new CustomEvent( 'IX2_PREVIEW_LOAD' ) );

  }

  // https://discourse.webflow.com/t/reinitialize-webflow-ix2/51094/15?u=memetican
  eventPageStart() {
    document.dispatchEvent(new Event('readystatechange'));
  }

}
