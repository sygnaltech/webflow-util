
/*
 * webflow-ui
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * UI Utilities
 */

import { Sa5Attribute } from "./globals";

// import { renderRatingComponent } from "./modules/webflow-ui";

export class Sa5Rating {

  private _element: HTMLElement;
  private _rating: Number;


  set rating(rating: Number) {
    this._rating = rating;
    this._element.setAttribute(
      Sa5Attribute.ATTR_RATING, // "wfu-rating" 
      this._rating.toString());
    this.render(); 
  }
  get rating(): Number {
    return this._rating; 
  }

  // Sets the value of a Rating element and refreshes it
  // setRating (el, rating) {

  //   el.attr("wfu-rating", rating);
  //   this.renderRatingComponent(el);

  // }

  constructor(element: HTMLElement) {

    this._element = element;
    this._rating = Number(element.getAttribute(
      Sa5Attribute.ATTR_RATING // "wfu-rating"
      )); 

  }

  init() {

    this.render();

  }

  private render() {

    let ratingValue: number = Number(this._element.getAttribute(
      Sa5Attribute.ATTR_RATING // "wfu-rating"
      ));
    let exclusionMaskPercent = (100.0 * (5.0 - ratingValue)) / 5.0;

    // Portions copyright (c) 2022 by Chris Coyier  (https://codepen.io/chriscoyier/pen/poWvyXQ)

    this._element.innerHTML = `
        <div class="wfu-rating-stars">
          <svg viewBox="0 0 576 512" width="100" title="star">
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
          </svg><svg viewBox="0 0 576 512" width="100" title="star">
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
          </svg><svg viewBox="0 0 576 512" width="100" title="star">
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
          </svg><svg viewBox="0 0 576 512" width="100" title="star">
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
          </svg><svg viewBox="0 0 576 512" width="100" title="star">
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
          </svg>

          <div class="wfu-rating-stars-cover" style="width: ${exclusionMaskPercent}%;"></div>
        </div>
      `;

  }


}
