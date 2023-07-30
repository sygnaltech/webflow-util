(() => {
  // src/webflow-core/lightbox.ts
  var WfuLightbox = class {
    constructor(element, config = {}) {
      this._element = element;
    }
    init() {
      let imgElement = this._element.querySelector("img");
      let scriptElement = this._element.querySelector("script");
      if (imgElement && scriptElement) {
        const imageAltText = imgElement.getAttribute("alt");
        const imageJSON = JSON.parse(scriptElement.innerHTML);
        imageJSON.items[0].caption = imageAltText;
        scriptElement.innerHTML = JSON.stringify(imageJSON);
        imgElement.setAttribute("ref-key", imageJSON.items[0].url);
      }
    }
  };

  // src/nocode/webflow-elements.ts
  var init = () => {
    const elements = document.querySelectorAll("[wfu-lightbox-captions]");
    elements.forEach((element) => {
      const wfuLightbox = new WfuLightbox(element).init();
    });
    let observer = new MutationObserver(lightBoxStateCallback);
    observer.observe(document.getElementsByTagName("html")[0], {
      childList: false,
      subtree: false,
      characterDataOldValue: false,
      attributes: true,
      attributeFilter: ["class"]
    });
  };
  document.addEventListener("DOMContentLoaded", init);
  var lightBoxStateCallback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "attributes" && mutation.target instanceof HTMLElement) {
        if (mutation.target.classList.contains("w-lightbox-noscroll")) {
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
  function uninstallLightBoxNavObserver() {
    if (lightboxNavObserver)
      lightboxNavObserver.disconnect();
  }
  function installLightBoxNavObserver() {
    setupCaption();
    let lightboxContainer = document.querySelector(".w-lightbox-container");
    if (lightboxContainer) {
      let lightboxNavObserver2 = new MutationObserver(lightBoxNavCallback);
      const config = { childList: true, subtree: true };
      lightboxNavObserver2.observe(lightboxContainer, config);
    }
  }
  var lightBoxNavCallback = (mutationList, observer) => {
    for (let mutation of mutationList) {
      if (mutation.target instanceof HTMLElement) {
        if (mutation.target.classList.contains("w-lightbox-content")) {
          setupCaption();
        }
      }
    }
  };
})();
//# sourceMappingURL=webflow-elements.js.map
