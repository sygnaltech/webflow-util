(() => {
  // src/globals.ts
  var Sa5Attribute;
  ((Sa5Attribute2) => {
    function getBracketed(attr) {
      return `[${attr}]`;
    }
    Sa5Attribute2.getBracketed = getBracketed;
  })(Sa5Attribute || (Sa5Attribute = {}));
  var Sa5Attribute = /* @__PURE__ */ ((Sa5Attribute2) => {
    Sa5Attribute2["ATTR_CORE_SCRIPT_INJECT"] = "wfu-script-load";
    Sa5Attribute2["ATTR_VIDEO"] = "wfu-video";
    Sa5Attribute2["ATTR_VIDEO_YOUTUBE_NOREL"] = "wfu-youtube-norel";
    Sa5Attribute2["ATTR_VIDEO_DATA_POSTER_URL"] = "wfu-data-poster-url";
    Sa5Attribute2["ATTR_DESIGN"] = "wfu-design";
    Sa5Attribute2["ATTR_ELEMENT_SLIDER"] = "wfu-slider";
    Sa5Attribute2["ATTR_ELEMENT_SLIDE_NAME"] = "wfu-slide-name";
    Sa5Attribute2["ATTR_ELEMENT_TABS"] = "wfu-tabs";
    Sa5Attribute2["ATTR_ELEMENT_TAB_NAME"] = "wfu-tab-name";
    Sa5Attribute2["ATTR_ELEMENT_BUTTON"] = "wfu-button";
    Sa5Attribute2["ATTR_BUTTON_ENABLED"] = "wfu-button-enabled";
    Sa5Attribute2["ATTR_BUTTON_DISABLED_CLASS"] = "wfu-button-disabled-class";
    Sa5Attribute2["ATTR_ELEMENT_DECK_TARGET"] = "wfu-deck-target";
    Sa5Attribute2["ATTR_ELEMENT_DECK_ACTION"] = "wfu-deck-action";
    Sa5Attribute2["ATTR_ELEMENT_DECK_ITEM"] = "wfu-deck-action-item";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN"] = "wfu-dropdown";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_NAME"] = "wfu-dropdown-name";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_INIT"] = "wfu-dropdown-init";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_TYPE"] = "wfu-dropdown-type";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE"] = "wfu-autocomplete";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_INPUT"] = "wfu-autocomplete-input";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_LIST"] = "wfu-autocomplete-list";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_ITEM"] = "wfu-autocomplete-item";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_ITEM_ACTION"] = "wfu-autocomplete-item-action";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_ITEM_MATCH"] = "wfu-autocomplete-item-match";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_ITEM_LAYOUT"] = "wfu-autocomplete-item-layout";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION"] = "wfu-accordion";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_ITEM"] = "wfu-accordion-item";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_ITEM_TAB"] = "wfu-accordion-item-tab";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_ITEM_CONTENT"] = "wfu-accordion-item-content";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_CLASS_OPEN"] = "wfu-accordion-class-open";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_CLASS_CLOSED"] = "wfu-accordion-class-closed";
    Sa5Attribute2["ATTR_DATA"] = "wfu-data";
    Sa5Attribute2["ATTR_DATA_TYPE"] = "wfu-data-type";
    Sa5Attribute2["ATTR_DATA_DSN"] = "wfu-data-dsn";
    Sa5Attribute2["ATTR_DATA_ITEM_ID"] = "wfu-data-item-id";
    Sa5Attribute2["ATTR_DATABIND"] = "wfu-bind";
    Sa5Attribute2["ATTR_DATABIND_CONTENT"] = "wfu-bind-content";
    Sa5Attribute2["ATTR_DATABIND_CONTEXT_DSN"] = "wfu-bind-dsn";
    Sa5Attribute2["ATTR_DATABIND_CONTEXT_ITEM_ID"] = "wfu-bind-item-id";
    Sa5Attribute2["ATTR_PRELOAD"] = "wfu-preload";
    Sa5Attribute2["ATTR_IX_TRIGGER"] = "wfu-ix-trigger";
    Sa5Attribute2["ATTR_IX_ID"] = "wfu-ix-id";
    Sa5Attribute2["ATTR_SORT"] = "wfu-sort";
    Sa5Attribute2["ATTR_SORT_DIR"] = "wfu-sort-dir";
    Sa5Attribute2["ATTR_SORT_TYPE"] = "wfu-sort-type";
    Sa5Attribute2["ATTR_SORT_KEY"] = "wfu-sort-key";
    Sa5Attribute2["ATTR_FILTER"] = "wfu-filter";
    Sa5Attribute2["ATTR_FILTER_MATCH"] = "wfu-filter-match";
    Sa5Attribute2["ATTR_FILTER_EVAL"] = "wfu-filter-eval";
    Sa5Attribute2["ATTR_FILTER_FUNC"] = "wfu-filter-func";
    Sa5Attribute2["ATTR_HIDE"] = "wfu-hide";
    Sa5Attribute2["ATTR_SUPPRESS"] = "wfu-suppress";
    Sa5Attribute2["ATTR_EMAIL_ENCODED"] = "wfu-email-encoded";
    Sa5Attribute2["ATTR_404_SEARCH"] = "wfu-404-search";
    Sa5Attribute2["ATTR_FORM_HANDLER"] = "wfu-form-handler";
    Sa5Attribute2["ATTR_FORM_MESSAGE"] = "wfu-form-message";
    Sa5Attribute2["ATTR_FORM_IPINFO"] = "wfu-form-ipinfo";
    Sa5Attribute2["ATTR_FORM_SELECT"] = "wfu-form-select";
    Sa5Attribute2["ATTR_FORM_SELECT_MODE"] = "wfu-form-select-mode";
    Sa5Attribute2["ATTR_FORM_SELECT_THEME"] = "wfu-form-select-theme";
    Sa5Attribute2["ATTR_DISMISS"] = "wfu-dismiss";
    Sa5Attribute2["ATTR_DISMISS_TRIGGER"] = "wfu-dismiss-trigger";
    Sa5Attribute2["ATTR_DISMISS_CLOSE"] = "wfu-dismiss-close";
    Sa5Attribute2["ATTR_DISMISS_CLOSE_TYPE"] = "wfu-dismiss-close-type";
    Sa5Attribute2["ATTR_DISMISS_DAYS"] = "wfu-dismiss-suppress-days";
    Sa5Attribute2["ATTR_MODAL"] = "wfu-modal";
    Sa5Attribute2["ATTR_MODAL_TRIGGER_CLICK"] = "wfu-modal-trigger-click";
    Sa5Attribute2["ATTR_MODAL_STATE"] = "wfu-modal-state";
    Sa5Attribute2["ATTR_FORMAT"] = "wfu-format";
    Sa5Attribute2["ATTR_FORMAT_DATE"] = "wfu-format-date";
    Sa5Attribute2["ATTR_FORMAT_HANDLER"] = "wfu-format-handler";
    Sa5Attribute2["ATTR_FORMAT_MODE"] = "wfu-format-mode";
    Sa5Attribute2["ATTR_FORMAT_SUFFIX"] = "wfu-format-suffix";
    Sa5Attribute2["ATTR_COUNTUP"] = "wfu-countup";
    Sa5Attribute2["ATTR_COUNTUP_TRIGGER"] = "wfu-countup-trigger";
    Sa5Attribute2["ATTR_DEMO_LINK"] = "wfu-demo-link";
    Sa5Attribute2["ATTR_LIGHTBOX_CAPTIONS"] = "wfu-lightbox-captions";
    Sa5Attribute2["ATTR_LIGHTBOX_GROUP"] = "wfu-lightbox-group";
    Sa5Attribute2["ATTR_DECODE"] = "wfu-decode";
    Sa5Attribute2["ATTR_LIMIT_MULTIPLE"] = "wfu-limit-multiple";
    Sa5Attribute2["ATTR_LIMIT_MULTIPLE_MIN"] = "wfu-limit-multiple-min";
    Sa5Attribute2["ATTR_SHOW_LOGGED_IN"] = "wfu-show-logged-in";
    Sa5Attribute2["ATTR_HIDE_LOGGED_IN"] = "wfu-hide-logged-in";
    Sa5Attribute2["ATTR_LOGIN_BUTTON"] = "wfu-login-button";
    Sa5Attribute2["ATTR_RICHTEXT_LISTS"] = "wfu-lists";
    Sa5Attribute2["ATTR_RICHTEXT_LIST_THEME"] = "wfu-list-theme";
    Sa5Attribute2["ATTR_URL_RELATIVE_LINKS"] = "wfu-relative-links";
    Sa5Attribute2["ATTR_URL_EXTERNAL_LINKS"] = "wfu-external-links";
    Sa5Attribute2["ATTR_UI_ACCORDION"] = "wfu-ui-accordion";
    Sa5Attribute2["ATTR_RATING"] = "wfu-rating";
    Sa5Attribute2["ATTR_GIST"] = "wfu-gist";
    Sa5Attribute2["ATTR_GIST_COPY"] = "wfu-gist-copy";
    Sa5Attribute2["ATTR_LAYOUT"] = "wfu-layout";
    Sa5Attribute2["ATTR_LAYOUT_HANDLER"] = "wfu-layout-handler";
    Sa5Attribute2["ATTR_LAYOUT_TARGET"] = "wfu-layout-target";
    Sa5Attribute2["ATTR_LAYOUT_NS"] = "wfu-layout-ns";
    Sa5Attribute2["ATTR_LAYOUT_INIT"] = "wfu-layout-init";
    Sa5Attribute2["ATTR_ELEMENTGROUP_NAME"] = "wfu-element-name";
    Sa5Attribute2["ATTR_ELEMENTGROUP_GROUP"] = "wfu-element-display";
    Sa5Attribute2["ATTR_ELEMENTGROUP_DEFAULT"] = "wfu-element-default";
    Sa5Attribute2["ATTR_ELEMENTGROUP_DISPLAY"] = "wfu-element-display";
    Sa5Attribute2["ATTR_ELEMENTGROUP_TARGETGROUP"] = "wfu-element-target-group";
    Sa5Attribute2["ATTR_ELEMENTGROUP_TARGETNAME"] = "wfu-element-target-name";
    Sa5Attribute2["ATTR_ELEMENTGROUP_ACTION"] = "wfu-element-action";
    return Sa5Attribute2;
  })(Sa5Attribute || {});

  // src/webflow-elements/accordion.ts
  var Sa5AccordionMode = /* @__PURE__ */ ((Sa5AccordionMode2) => {
    Sa5AccordionMode2["Default"] = "default";
    Sa5AccordionMode2["Interactions"] = "ix";
    return Sa5AccordionMode2;
  })(Sa5AccordionMode || {});
  var Sa5AccordionItem = class {
    constructor(elem, controller) {
      this.elem = elem;
      this.controller = controller;
      this.init();
    }
    init() {
      const nameAttr = this.elem.getAttribute("wfu-accordion-item");
      if (nameAttr)
        this.name = nameAttr;
      const tabElement = this.elem.querySelector("[wfu-accordion-item-tab]");
      if (tabElement) {
        this.tab = tabElement;
      } else {
        console.error("Tab element not found");
      }
      const contentElement = this.elem.querySelector("[wfu-accordion-item-content]");
      if (contentElement) {
        this.content = contentElement;
      } else {
        console.error("Content element not found");
      }
      const triggerOpen = this.elem.querySelector('[wfu-accordion-item-trigger="open"]');
      if (triggerOpen)
        this.triggerOpen = triggerOpen;
      const triggerClose = this.elem.querySelector('[wfu-accordion-item-trigger="close"]');
      if (triggerClose)
        this.triggerClose = triggerClose;
    }
    get isOpen() {
      return this === this.controller.items[this.controller.index];
    }
    open() {
      if (this.isOpen)
        return;
      switch (this.controller.mode) {
        case "ix" /* Interactions */:
          this.triggerOpen.click();
          break;
        default:
          this.elem.classList.add(this.controller.classOpen);
          this.elem.classList.remove(this.controller.classClosed);
          this.tab.classList.add(this.controller.classOpen);
          this.tab.classList.remove(this.controller.classClosed);
          this.content.classList.add(this.controller.classOpen);
          this.content.classList.remove(this.controller.classClosed);
          break;
      }
    }
    close() {
      if (!this.isOpen)
        return;
      switch (this.controller.mode) {
        case "ix" /* Interactions */:
          this.triggerClose.click();
          break;
        default:
          this.elem.classList.add(this.controller.classClosed);
          this.elem.classList.remove(this.controller.classOpen);
          this.tab.classList.add(this.controller.classClosed);
          this.tab.classList.remove(this.controller.classOpen);
          this.content.classList.add(this.controller.classClosed);
          this.content.classList.remove(this.controller.classOpen);
          break;
      }
    }
  };
  var Sa5Accordion = class {
    constructor(element) {
      this.items = [];
      this.index = 0;
      this.mode = "default" /* Default */;
      this.classOpen = "is-open";
      this.classClosed = "is-closed";
      this.elem = element;
      this.init();
    }
    get element() {
      return this.elem;
    }
    set currentItem(item) {
      this.index = this.itemToIndex(item);
      for (let i = 0; i < this.items.length; i++) {
        if (i == this.index)
          this.items[i].open();
        else
          this.items[i].close();
      }
    }
    itemToIndex(accordionItem) {
      console.log("itemToIndex", accordionItem);
      let i = 0;
      this.items.forEach((item) => {
        if (accordionItem === item) {
          this.index = i;
          console.log("itemToIndex", this.index);
          return i;
        }
        i++;
      });
      return -1;
    }
    init() {
      const nameAttr = this.elem.getAttribute("wfu-accordion");
      if (nameAttr)
        this.name = nameAttr;
      const modeAttr = this.elem.getAttribute("wfu-accordion-mode");
      const enumValues = Object.values(Sa5AccordionMode);
      if (modeAttr && enumValues.includes(modeAttr)) {
        this.mode = modeAttr;
      } else {
        this.mode = "default" /* Default */;
      }
      const accordionItemElems = document.querySelectorAll(
        `[${"wfu-accordion-item" /* ATTR_ELEMENT_ACCORDION_ITEM */}]`
      );
      accordionItemElems.forEach((item) => {
        const accordionItem = new Sa5AccordionItem(item, this);
        this.items.push(accordionItem);
        accordionItem.tab?.addEventListener("click", () => {
          accordionItem.open();
        });
      });
    }
  };
  window["Sa5Accordion"] = Sa5Accordion;
})();
//# sourceMappingURL=accordion.js.map
