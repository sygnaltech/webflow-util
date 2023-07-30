(() => {
  // src/webflow-ui.ts
  var Sa5Rating = class {
    set rating(rating) {
      this._rating = rating;
      this._element.setAttribute("wfu-rating", this._rating.toString());
      this.render();
    }
    get rating() {
      return this._rating;
    }
    constructor(element) {
      this._element = element;
      this._rating = Number(element.getAttribute("wfu-rating"));
    }
    init() {
      this.render();
    }
    render() {
      let ratingValue = Number(this._element.getAttribute("wfu-rating"));
      let exclusionMaskPercent = 100 * (5 - ratingValue) / 5;
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
  };

  // src/nocode/webflow-ui.ts
  var init = () => {
    document.querySelectorAll('div[wfu-ui="rating"]').forEach((element) => {
      new Sa5Rating(element).init();
    });
  };
  document.addEventListener("DOMContentLoaded", init);
})();
//# sourceMappingURL=webflow-ui.js.map
