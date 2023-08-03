(() => {
  // src/webflow-core/lightbox.ts
  var Sa5Lightbox = class {
    constructor(element, config = {}) {
      this._element = element;
    }
    init() {
      this.setCaptionToImageAlt();
    }
    setCaptionToImageAlt() {
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

  // src/nocode/webflow-elements.ts
  var init = () => {
    let useLightboxCaptionHandler = false;
    const elements = document.querySelectorAll("[wfu-lightbox-captions]");
    useLightboxCaptionHandler = elements.length > 0;
    elements.forEach((element) => {
      const wfuLightbox = new Sa5Lightbox(element).init();
    });
    if (useLightboxCaptionHandler) {
      new Sa5LightboxCaptionHandler().init();
    }
    let lightBoxCmsGroups = false;
    const groups = document.querySelectorAll("[wfu-lightbox-group]");
    lightBoxCmsGroups = groups.length > 0;
    groups.forEach((element) => {
      let groupValue = element.getAttribute("wfu-lightbox-group");
      let scripts = element.querySelectorAll("script.w-json");
      scripts.forEach((script) => {
        let json = JSON.parse(script.textContent);
        json.group = groupValue;
        script.textContent = JSON.stringify(json, null, 2);
      });
    });
    if (lightBoxCmsGroups) {
      var Webflow = Webflow || [];
      Webflow.push(function() {
        Webflow.require("lightbox").ready();
      });
    }
  };
  document.addEventListener("DOMContentLoaded", init);
})();
//# sourceMappingURL=webflow-elements.js.map
