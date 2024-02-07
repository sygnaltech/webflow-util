(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/globals.ts
  var Sa5Attribute, Sa5Attribute;
  var init_globals = __esm({
    "src/globals.ts"() {
      ((Sa5Attribute2) => {
        function getBracketed(attr) {
          return `[${attr}]`;
        }
        Sa5Attribute2.getBracketed = getBracketed;
      })(Sa5Attribute || (Sa5Attribute = {}));
      Sa5Attribute = /* @__PURE__ */ ((Sa5Attribute2) => {
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
        Sa5Attribute2["ATTR_404_SEARCH"] = "wfu-404-search";
        Sa5Attribute2["ATTR_FORM_HANDLER"] = "wfu-form-handler";
        Sa5Attribute2["ATTR_FORM_MESSAGE"] = "wfu-form-message";
        Sa5Attribute2["ATTR_FORM_IPINFO"] = "wfu-form-ipinfo";
        Sa5Attribute2["ATTR_MODAL"] = "wfu-modal";
        Sa5Attribute2["ATTR_MODAL_TRIGGER"] = "wfu-modal-trigger";
        Sa5Attribute2["ATTR_MODAL_CLOSE"] = "wfu-modal-close";
        Sa5Attribute2["ATTR_MODAL_CLOSE_TYPE"] = "wfu-modal-close-type";
        Sa5Attribute2["ATTR_MODAL_SUPPRESS_DAYS"] = "wfu-modal-suppress-days";
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
        Sa5Attribute2["ATTR_LAYOUT_ZONE"] = "wfu-layout-zone";
        return Sa5Attribute2;
      })(Sa5Attribute || {});
    }
  });

  // src/webflow-core/debug.ts
  var Sa5Debug;
  var init_debug = __esm({
    "src/webflow-core/debug.ts"() {
      Sa5Debug = class {
        constructor(label) {
          this.localStorageDebugFlag = "sa5-debug";
          this._enabled = false;
          this._label = label;
        }
        get persistentDebug() {
          return Boolean(localStorage.getItem(this.localStorageDebugFlag));
        }
        set persistentDebug(active) {
          if (active) {
            localStorage.setItem(this.localStorageDebugFlag, "true");
            console.debug("sa5-core debug enabled (persistent).");
          } else {
            localStorage.removeItem(this.localStorageDebugFlag);
            console.debug("sa5-core debug disabled (persistent).");
          }
        }
        get enabled() {
          var wfuDebugValue = Boolean(localStorage.getItem(this.localStorageDebugFlag));
          wfuDebugValue = wfuDebugValue || this._enabled;
          return wfuDebugValue;
        }
        set enabled(active) {
          this._enabled = active;
        }
        group(name) {
          if (this.enabled)
            console.group(name);
        }
        groupEnd() {
          if (this.enabled)
            console.groupEnd();
        }
        debug(...args) {
          if (this.enabled)
            console.debug(this._label, ...args);
        }
      };
    }
  });

  // src/webflow-core/designer.ts
  var Sa5Designer;
  var init_designer = __esm({
    "src/webflow-core/designer.ts"() {
      init_globals();
      Sa5Designer = class {
        constructor() {
        }
        init() {
          this.removeDesignTimeElements();
        }
        removeDesignTimeElements() {
          const elements = document.querySelectorAll(
            Sa5Attribute.getBracketed("wfu-design" /* ATTR_DESIGN */)
          );
          elements.forEach((element2) => {
            element2.remove();
          });
        }
      };
    }
  });

  // src/webflow-core.ts
  var Sa5Core;
  var init_webflow_core = __esm({
    "src/webflow-core.ts"() {
      init_globals();
      init_debug();
      init_designer();
      Sa5Core = class {
        constructor() {
          this.handlers = [];
          new Sa5Designer().init();
        }
        getHandlers(name) {
          return this.handlers.filter((item) => item[0] === name).map((item) => item[1]);
        }
        getHandler(name) {
          const item = this.handlers.find((item2) => item2[0] === name);
          return item ? item[1] : void 0;
        }
        init() {
          this.initDebugMode();
          this.initAsync();
        }
        async initAsync() {
          this.initScriptInjectionsAsync();
        }
        async initScriptInjectionsAsync() {
          document.addEventListener("DOMContentLoaded", () => {
            const loadSrcScripts = document.querySelectorAll(
              `script[${"wfu-script-load" /* ATTR_CORE_SCRIPT_INJECT */}]`
            );
            loadSrcScripts.forEach((script) => {
              const loadSrcUrl = script.getAttribute("wfu-script-load" /* ATTR_CORE_SCRIPT_INJECT */);
              if (loadSrcUrl) {
                fetch(loadSrcUrl).then((response) => response.text()).then((jsContent) => {
                  const newScript = document.createElement("script");
                  newScript.textContent = jsContent;
                  script.replaceWith(newScript);
                }).catch((error) => {
                  console.error("Error loading script:", error);
                });
              }
            });
          });
        }
        initDebugMode() {
          const debugParamKey = "debug";
          let params = new URLSearchParams(window.location.search);
          let hasDebug = params.has(debugParamKey);
          if (hasDebug) {
            let wfuDebug = new Sa5Debug(`sa5 init`);
            wfuDebug.persistentDebug = this.stringToBoolean(params.get(debugParamKey));
          }
        }
        stringToBoolean(str) {
          const truthyValues = ["1", "true", "yes"];
          const falsyValues = ["0", "false", "no"];
          if (truthyValues.indexOf(str.toLowerCase()) !== -1) {
            return true;
          } else {
            return false;
          }
        }
        static startup(module = null) {
          let sa5instance = window["sa5"];
          var core2;
          if (sa5instance?.constructor?.name == "Sa5Core") {
            core2 = sa5instance;
          } else {
            core2 = new Sa5Core();
            core2.init();
            if (Array.isArray(sa5instance))
              core2.handlers = sa5instance;
            window["sa5"] = core2;
            window["Sa5"] = window["sa5"];
          }
          if (module) {
            window["sa5"][module.name] = module;
          }
          return core2;
        }
        push(o) {
          this.handlers.push(o);
        }
      };
      Sa5Core.startup();
    }
  });

  // src/webflow-html/dynamic-attributes.ts
  var Sa5HtmlDynamicAttributes;
  var init_dynamic_attributes = __esm({
    "src/webflow-html/dynamic-attributes.ts"() {
      init_debug();
      Sa5HtmlDynamicAttributes = class {
        constructor(config) {
          this.config = config;
        }
        init() {
          let debug2 = new Sa5Debug("sa5-html");
          debug2.debug("Dynamic attributes initialized.", this.config);
          var allElements = document.querySelectorAll("*");
          allElements.forEach(function(element2) {
            for (var i = 0; i < element2.attributes.length; i++) {
              var attr = element2.attributes[i];
              if (attr.name.startsWith("x-")) {
                var newAttrName = attr.name.slice(2);
                element2.setAttribute(newAttrName, attr.value);
              }
            }
          });
        }
      };
    }
  });

  // src/webflow-html/breakpoints.ts
  var sa5Breakpoints, Sa5Breakpoints;
  var init_breakpoints = __esm({
    "src/webflow-html/breakpoints.ts"() {
      init_webflow_core();
      init_debug();
      sa5Breakpoints = {
        large1920: "(min-width: 1920px)",
        large1440: "(min-width: 1440px) and (max-width: 1919px)",
        large1280: "(min-width: 1280px) and (max-width: 1439px)",
        desktop: "(min-width: 992px) and (max-width: 1279px)",
        tablet: "(min-width: 768px) and (max-width: 991px)",
        mobileLandscape: "(min-width: 480px) and (max-width: 767px)",
        mobilePortrait: "(max-width: 479px)"
      };
      Sa5Breakpoints = class {
        constructor(config = {}) {
          this.handleBreakpointChange = (e) => {
            if (!e.matches)
              return;
            var device = null;
            for (let d in sa5Breakpoints) {
              if (e.media == sa5Breakpoints[d]) {
                device = d;
              }
            }
            if (this.config.breakpointChangedCallback) {
              this.config.breakpointChangedCallback(
                device,
                e
              );
            }
          };
          this.config = {
            breakpointChangedCallback: config.breakpointChangedCallback
          };
          let core2 = Sa5Core.startup();
          const breakpointChanged = core2.getHandler("breakpointChanged");
          this.config.breakpointChangedCallback = breakpointChanged;
        }
        isBreakpointsChangedCallback(func) {
          if (!func)
            return false;
          return func.length === 1;
        }
        init() {
          let debug2 = new Sa5Debug("sa5-html");
          debug2.debug("Breakpoints initialized.", this.config);
          for (let device in sa5Breakpoints) {
            let mediaQueryList = window.matchMedia(sa5Breakpoints[device]);
            mediaQueryList.addEventListener("change", this.handleBreakpointChange);
            if (mediaQueryList.matches) {
              this.handleBreakpointChange(
                {
                  media: mediaQueryList.media,
                  matches: mediaQueryList.matches
                }
              );
            }
          }
        }
      };
    }
  });

  // src/webflow-html.ts
  var Sa5Html;
  var init_webflow_html = __esm({
    "src/webflow-html.ts"() {
      init_webflow_core();
      init_debug();
      init_dynamic_attributes();
      init_breakpoints();
      Sa5Html = class {
        constructor(config) {
          this.config = config;
          this.debug = new Sa5Debug("sa5-html");
          this.debug.enabled = this.config.debug;
        }
        init() {
          this.debug.debug("sa5-html init.");
          let breakpoints = new Sa5Breakpoints({
            breakpointChangedCallback: (breakpointName, e) => {
              window["sa5"] = window["sa5"] || {};
              const sa5 = window["sa5"];
              const breakpointChangeHandler = sa5["breakpointChanged"];
              if (breakpointChangeHandler)
                breakpointChangeHandler(breakpointName, e);
            }
          });
          breakpoints.init();
          if (this.config.dynamicAttributes) {
            let obj2 = new Sa5HtmlDynamicAttributes({});
            obj2.init();
          }
        }
      };
      Sa5Core.startup(Sa5Html);
    }
  });

  // src/webflow-core/webflow-editor.ts
  var Sa5Editor;
  var init_webflow_editor = __esm({
    "src/webflow-core/webflow-editor.ts"() {
      Sa5Editor = class {
        get isEditorMode() {
          return document.documentElement.getAttribute("data-wf-mode") === "editor";
        }
        detectEditorMode() {
          if (document.title.startsWith("Editor:")) {
            console.debug("Editor mode");
            document.documentElement.setAttribute("data-wf-mode", "editor");
          } else {
            console.debug("NOT Editor mode");
            document.documentElement.removeAttribute("data-wf-mode");
          }
        }
        constructor(config = null) {
          config = config || {};
          this.config = config;
          this.init();
        }
        init() {
          let titleElement = document.getElementsByTagName("title")[0];
          let observer = new MutationObserver((mutations) => {
            this.detectEditorMode();
          });
          observer.observe(titleElement, { childList: true });
        }
      };
    }
  });

  // src/utils.ts
  function decodeHTML(text) {
    let parser = new DOMParser();
    let dom = parser.parseFromString(
      `<!doctype html><body>${text}`,
      "text/html"
    );
    return dom.body.textContent || "";
  }
  function sequence(groupElement) {
    const groupName = groupElement.getAttribute("wfu-seq-group");
    console.log("sequence group", groupName);
    let i = 0;
    const elements = groupElement.querySelectorAll(`[wfu-seq="${groupName}"]`);
    elements.forEach((element2) => {
      element2.innerHTML = (++i).toString();
    });
  }
  var init_utils = __esm({
    "src/utils.ts"() {
    }
  });

  // src/webflow-html/collection-list.ts
  var Sa5CollectionList;
  var init_collection_list = __esm({
    "src/webflow-html/collection-list.ts"() {
      init_globals();
      Sa5CollectionList = class {
        constructor(elem, config = null) {
          this.config = config;
          this._element = elem;
        }
        init() {
        }
        sort() {
          console.group("SORT");
          const list = this._element;
          const mode = list.getAttribute(
            "wfu-sort" /* ATTR_SORT */
          ) || "default";
          const dir = list.getAttribute(
            "wfu-sort-dir" /* ATTR_SORT_DIR */
          ) || "asc";
          const sortType = list.getAttribute(
            "wfu-sort-type" /* ATTR_SORT_TYPE */
          ) || "string";
          const items = Array.from(list.children);
          console.debug(`WFU sorting ${mode} ${sortType} ${dir} (${items.length} children)`);
          console.debug({
            name: "WFU sorting",
            mode,
            sortType,
            dir,
            children: `${items.length} children`
          });
          if (dir == "random") {
            items.sort(() => Math.random() - 0.5);
          } else {
            items.sort((a, b) => {
              const key1 = a.getAttribute("wfu-sort-key" /* ATTR_SORT_KEY */) || a.querySelector(Sa5Attribute.getBracketed("wfu-sort-key" /* ATTR_SORT_KEY */))?.getAttribute("wfu-sort-key" /* ATTR_SORT_KEY */) || "";
              const key2 = b.getAttribute("wfu-sort-key" /* ATTR_SORT_KEY */) || b.querySelector(Sa5Attribute.getBracketed("wfu-sort-key" /* ATTR_SORT_KEY */))?.getAttribute("wfu-sort-key" /* ATTR_SORT_KEY */) || "";
              let sortResult = 1;
              switch (sortType) {
                case "date":
                  sortResult = new Date(key1) < new Date(key2) ? -1 : 1;
                  console.debug(`comparing dates ${key1} ${key2} = ${sortResult}`);
                  break;
                case "number":
                  sortResult = Number(key1) < Number(key2) ? -1 : 1;
                  console.debug(`comparing numbers ${key1} ${key2} = ${sortResult}`);
                  break;
                case "semver":
                  break;
                case "string":
                default:
                  sortResult = key1.localeCompare(key2);
                  console.debug(`comparing strings ${key1} ${key2} = ${sortResult}`);
                  break;
              }
              if (dir != "asc") {
                sortResult = sortResult * -1;
              }
              return sortResult;
            });
          }
          while (list.firstChild) {
            list.firstChild.remove();
          }
          items.forEach((item) => list.appendChild(item));
          list.removeAttribute("wfu-sort" /* ATTR_SORT */);
          console.groupEnd();
        }
      };
    }
  });

  // src/webflow-html/layout/handler/layout-handler.ts
  var Sa5LayoutHandler;
  var init_layout_handler = __esm({
    "src/webflow-html/layout/handler/layout-handler.ts"() {
      init_globals();
      init_debug();
      Sa5LayoutHandler = class {
        constructor(layoutContainer, config = {}) {
          this.zone = null;
          this.debug = new Sa5Debug("sa5-layout-handler");
          this.debug.debug("Initializing");
          this.container = layoutContainer;
          this.name = this.container.getAttribute("wfu-layout");
          this.zone = this.container.getAttribute("wfu-layout-zone") || null;
        }
        layout() {
          if (this.container.getAttribute("wfu-layout-init") === "clear") {
            this.container.innerHTML = "";
          }
          let selector = `[${"wfu-layout-target" /* ATTR_LAYOUT_TARGET */}='${this.name}']`;
          if (this.zone)
            selector += `[${"wfu-layout-zone" /* ATTR_LAYOUT_ZONE */}='${this.zone}']`;
          const targetedElements = document.querySelectorAll(
            selector
          );
          targetedElements.forEach((element2) => {
            if (this.container) {
              this.container.appendChild(element2);
            }
          });
          this.container.removeAttribute("wfu-preload");
        }
      };
    }
  });

  // src/webflow-html/layout/handler/tabs-handler.ts
  var Sa5LayoutHandlerTabs;
  var init_tabs_handler = __esm({
    "src/webflow-html/layout/handler/tabs-handler.ts"() {
      init_globals();
      init_layout_handler();
      Sa5LayoutHandlerTabs = class extends Sa5LayoutHandler {
        constructor(elem, config) {
          super(elem, config);
          this.tabMenu = this.container.querySelector(".w-tab-menu");
          this.tabContent = this.container.querySelector(".w-tab-content");
          const firstTabMenuItem = this.tabMenu.children[0];
          this.tabMenuClasses = firstTabMenuItem ? firstTabMenuItem.className : "";
          const firstTabContentItem = this.tabContent.children[0];
          this.tabContentClasses = firstTabContentItem ? firstTabContentItem.className : "";
        }
        layout() {
          if (this.container.getAttribute("wfu-layout-init") === "clear") {
            const tabMenu = this.container.querySelector(".w-tab-menu");
            const tabContent = this.container.querySelector(".w-tab-content");
            tabMenu.innerHTML = "";
            tabContent.innerHTML = "";
          }
          let selector = `[${"wfu-layout-target" /* ATTR_LAYOUT_TARGET */}='${this.name}']`;
          if (this.zone)
            selector += `[${"wfu-layout-zone" /* ATTR_LAYOUT_ZONE */}='${this.zone}']`;
          const targetedElements = document.querySelectorAll(
            selector
          );
          targetedElements.forEach((element2) => {
            const tabName = element2.getAttribute("wfu-layout-item-name");
            const newTab = document.createElement("a");
            newTab.className = `w-inline-block w-tab-link ${this.tabMenuClasses}`;
            newTab.dataset.wTab = tabName;
            newTab.innerHTML = `<div>${tabName}</div>`;
            this.container.querySelector(".w-tab-menu").appendChild(newTab);
            const contentPane = document.createElement("div");
            contentPane.className = `w-tab-pane ${this.tabContentClasses}`;
            contentPane.dataset.wTab = tabName;
            contentPane.appendChild(element2);
            this.container.querySelector(".w-tab-content").appendChild(contentPane);
          });
          const firstTab = this.container.querySelector(".w-tab-menu .w-tab-link");
          const firstTabContent = this.container.querySelector(".w-tab-content .w-tab-pane");
          if (firstTab && firstTabContent) {
          }
          this.container.removeAttribute("wfu-preload");
        }
      };
    }
  });

  // src/webflow-html/layout/handler/layout-handler-factory.ts
  var Sa5LayoutHandlerFactory;
  var init_layout_handler_factory = __esm({
    "src/webflow-html/layout/handler/layout-handler-factory.ts"() {
      init_layout_handler();
      init_tabs_handler();
      init_globals();
      Sa5LayoutHandlerFactory = class {
        constructor(layoutContainer, config = {}) {
        }
        static createFromElement(layoutContainer, config = {}) {
          var handler;
          let type = layoutContainer.getAttribute(
            "wfu-layout-handler" /* ATTR_LAYOUT_HANDLER */
          ) || "auto";
          if (type == "auto") {
            if (layoutContainer.classList.contains("w-tabs")) {
              type = "tabs";
            } else {
              type = "default";
            }
          }
          switch (type) {
            case "tabs":
              handler = new Sa5LayoutHandlerTabs(layoutContainer, config);
              break;
            case "default":
              handler = new Sa5LayoutHandler(layoutContainer, config);
              break;
            default:
              console.error(`Unknown wfu-layout-handler - ${type}`);
              break;
          }
          return handler;
        }
      };
    }
  });

  // src/webflow-html/layout.ts
  var Sa5Layouts;
  var init_layout = __esm({
    "src/webflow-html/layout.ts"() {
      init_globals();
      init_webflow_core();
      init_debug();
      init_layout_handler_factory();
      Sa5Layouts = class {
        isLayoutsChangedCallback(func) {
          if (!func)
            return false;
          return func.length === 1;
        }
        constructor(config = {}) {
          this.config = {
            layoutChangedCallback: config.layoutChangedCallback
          };
          let core2 = Sa5Core.startup();
          const layoutChanged = core2.getHandler("layoutChanged");
          this.config.layoutChangedCallback = layoutChanged;
        }
        init() {
          let debug2 = new Sa5Debug("sa5-html");
          debug2.debug("Layouts initialized.", this.config);
          let layoutElements = Array.from(
            document.querySelectorAll(
              Sa5Attribute.getBracketed("wfu-layout" /* ATTR_LAYOUT */)
            )
          );
          layoutElements.forEach((element2) => {
            let handler = Sa5LayoutHandlerFactory.createFromElement(element2);
            handler.layout();
          });
        }
      };
    }
  });

  // src/nocode/webflow-html.ts
  var require_webflow_html = __commonJS({
    "src/nocode/webflow-html.ts"(exports, module) {
      init_webflow_html();
      init_webflow_core();
      init_debug();
      init_webflow_editor();
      init_utils();
      init_collection_list();
      init_globals();
      init_layout();
      var init = () => {
        let core = Sa5Core.startup();
        let debug = new Sa5Debug("sa5-html");
        debug.debug("Initializing");
        let obj = new Sa5Html({
          dynamicAttributes: true
        }).init();
        const editor = new Sa5Editor();
        new Sa5Layouts().init();
        let sequenceGroupElements = Array.from(
          document.querySelectorAll("[wfu-seq-group]")
        );
        sequenceGroupElements.forEach((element2) => {
          sequence(element2);
        });
        document.querySelectorAll(
          Sa5Attribute.getBracketed("wfu-decode" /* ATTR_DECODE */)
        ).forEach((element2) => {
          element2.innerHTML = decodeHTML(element2.innerHTML);
          element2.removeAttribute(
            "wfu-decode" /* ATTR_DECODE */
          );
        });
        document.querySelectorAll(`[${"wfu-sort" /* ATTR_SORT */}] [${"wfu-sort" /* ATTR_SORT */}] [${"wfu-sort" /* ATTR_SORT */}]`).forEach((element2) => {
          new Sa5CollectionList(element2).sort();
        });
        document.querySelectorAll(`[${"wfu-sort" /* ATTR_SORT */}] [${"wfu-sort" /* ATTR_SORT */}]`).forEach((element2) => {
          new Sa5CollectionList(element2).sort();
        });
        document.querySelectorAll(`[${"wfu-sort" /* ATTR_SORT */}]`).forEach((element2) => {
          new Sa5CollectionList(element2).sort();
        });
        document.querySelectorAll(`[${"wfu-filter" /* ATTR_FILTER */}],[${"wfu-filter-eval" /* ATTR_FILTER_EVAL */}]`).forEach((element) => {
          let filterEval = null;
          if (element.hasAttribute("wfu-filter-eval" /* ATTR_FILTER_EVAL */))
            filterEval = element.getAttribute("wfu-filter-eval" /* ATTR_FILTER_EVAL */);
          else {
            filterEval = element.getAttribute("wfu-filter" /* ATTR_FILTER */);
            console.warn(`[${"wfu-filter" /* ATTR_FILTER */}] is deprecated, use [${"wfu-filter-eval" /* ATTR_FILTER_EVAL */}] instead.`);
          }
          let visible = eval(filterEval);
          if (visible) {
            element.removeAttribute("wfu-filter" /* ATTR_FILTER */);
            element.removeAttribute("wfu-filter-eval" /* ATTR_FILTER_EVAL */);
          }
        });
        document.querySelectorAll(`[${"wfu-filter-match" /* ATTR_FILTER_MATCH */}]`).forEach((element) => {
          let filterEval = element.getAttribute("wfu-filter-match" /* ATTR_FILTER_MATCH */);
          let filterMatches = eval(`\`${filterEval}\``);
          let visible = element.matches(filterMatches);
          if (visible) {
            element.removeAttribute("wfu-filter-match" /* ATTR_FILTER_MATCH */);
          }
        });
        document.querySelectorAll(`[${"wfu-filter-func" /* ATTR_FILTER_FUNC */}]`).forEach((element2) => {
          let funcName = element2.getAttribute("wfu-filter-func" /* ATTR_FILTER_FUNC */);
          let fqFuncName = `window.${funcName}`;
          let f = new Function(fqFuncName);
          let func = window[funcName];
          if (typeof func === "function") {
            let visible2 = func(element2);
            if (visible2) {
              element2.removeAttribute("wfu-filter-func" /* ATTR_FILTER_FUNC */);
            }
          }
        });
        document.querySelectorAll(`[${"wfu-suppress" /* ATTR_SUPPRESS */}=empty-lists]`).forEach((element2) => {
          if (element2.querySelector(".w-dyn-items")) {
            element2.removeAttribute("wfu-suppress" /* ATTR_SUPPRESS */);
          }
        });
        document.querySelectorAll(
          Sa5Attribute.getBracketed("wfu-limit-multiple" /* ATTR_LIMIT_MULTIPLE */)
        ).forEach((element2) => {
          var listElement = element2;
          if (element2.classList.contains("w-dyn-list"))
            listElement = element2.children[0];
          const itemCount = listElement.children.length;
          const itemMultipleCount = Number(element2.getAttribute(
            "wfu-limit-multiple" /* ATTR_LIMIT_MULTIPLE */
          ));
          const itemMinimumCount = Number(element2.getAttribute(
            "wfu-limit-multiple-min" /* ATTR_LIMIT_MULTIPLE_MIN */
          ));
          let lastItem = Math.floor(itemCount / itemMultipleCount) * itemMultipleCount;
          if (lastItem < itemMinimumCount)
            lastItem = itemMinimumCount;
          for (let hideItem = 1; hideItem < itemMultipleCount; hideItem++) {
            let child = listElement.querySelector(`:nth-child(${lastItem + hideItem})`);
            if (child) {
              child.style.display = "none";
            }
          }
        });
      };
      document.addEventListener("DOMContentLoaded", init);
    }
  });
  require_webflow_html();
})();
//# sourceMappingURL=webflow-html.js.map
