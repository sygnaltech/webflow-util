(() => {
  // src/webflow-lightbox/caption-handler.ts
  var Sa5LightboxCaptionHandler = class {
    constructor() {
      this.lightBoxStateCallback = (mutationList, observer) => {
        for (const mutation of mutationList) {
          if (mutation.type === "attributes" && mutation.target instanceof HTMLElement) {
            if (mutation.target.classList.contains("w-lightbox-noscroll")) {
              console.debug("Lightbox opened.");
              this.installLightBoxNavObserver();
            } else {
              console.debug("Lightbox closed.");
              this.uninstallLightBoxNavObserver();
            }
          }
        }
      };
      this.lightBoxNavCallback = (mutationList, observer) => {
        for (let mutation of mutationList) {
          if (mutation.target instanceof HTMLElement) {
            if (mutation.target.classList.contains("w-lightbox-content")) {
              this.setupCaption();
            }
          }
        }
      };
    }
    init() {
      let observer = new MutationObserver(this.lightBoxStateCallback);
      observer.observe(document.getElementsByTagName("html")[0], {
        childList: false,
        subtree: false,
        characterDataOldValue: false,
        attributes: true,
        attributeFilter: ["class"]
      });
    }
    installLightBoxNavObserver() {
      this.setupCaption();
      let lightboxContainer = document.querySelector(".w-lightbox-container");
      if (lightboxContainer) {
        let lightboxNavObserver = new MutationObserver(this.lightBoxNavCallback);
        const config = { childList: true, subtree: true };
        lightboxNavObserver.observe(lightboxContainer, config);
      }
    }
    uninstallLightBoxNavObserver() {
      if (this.lightboxNavObserver)
        this.lightboxNavObserver.disconnect();
    }
    setupCaption() {
      let figure = document.querySelector("figure.w-lightbox-figure");
      if (figure) {
        let img = figure.querySelector("img");
        let captionElement = figure.querySelector("figcaption");
        if (img) {
          let key = img.getAttribute("src");
          let thumb = document.querySelector(`img[ref-key='${key}']`);
          if (captionElement) {
            captionElement.remove();
          }
          if (thumb) {
            let caption = thumb.getAttribute("alt");
            if (caption) {
              let newCaption = document.createElement("figcaption");
              newCaption.textContent = caption;
              newCaption.classList.add("w-lightbox-caption");
              figure.appendChild(newCaption);
            }
          }
        }
      }
    }
  };
})();
//# sourceMappingURL=caption-handler.js.map
