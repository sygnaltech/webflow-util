(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

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

  // src/webflow-core.ts
  var Sa5Core;
  var init_webflow_core = __esm({
    "src/webflow-core.ts"() {
      init_debug();
      Sa5Core = class {
        constructor() {
          this.handlers = [];
        }
        init() {
          this.initDebugMode();
        }
        initDebugMode() {
          const debugParamKey = "sa-debug";
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
          var _a;
          let sa5instance = window["sa5"];
          if (!(((_a = sa5instance == null ? void 0 : sa5instance.constructor) == null ? void 0 : _a.name) == "Sa5Core")) {
            var core = new Sa5Core();
            if (Array.isArray(sa5instance))
              core.handlers = window["sa5"];
            window["sa5"] = core;
            window["Sa5"] = window["sa5"];
          }
          if (module) {
            window["sa5"][module.name] = module;
          }
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
        constructor(config) {
          this.handleBreakpointChange = (e) => {
            if (!e.matches)
              return;
            var device = null;
            for (let d in sa5Breakpoints) {
              if (e.media == sa5Breakpoints[d]) {
                device = d;
              }
            }
            if (this.config.handleBreakpointChange)
              this.config.handleBreakpointChange(
                device,
                e
              );
          };
          this.config = config;
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
            handleBreakpointChange: (breakpointName, e) => {
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

  // src/webflow-core/tabs.ts
  var WebflowTabs;
  var init_tabs = __esm({
    "src/webflow-core/tabs.ts"() {
      init_webflow_core();
      init_debug();
      WebflowTabs = class {
        constructor(element2) {
          this.debug = new Sa5Debug("sa5-webflow-tabs");
          this.debug.enabled = true;
          this.init(element2);
        }
        get element() {
          return this._element;
        }
        get elementTabMenu() {
          return this._elementTabMenu;
        }
        get elementTabContent() {
          return this._elementTabContent;
        }
        get tabNum() {
          return this.tabIndex + 1;
        }
        set tabNum(num) {
          this.tabIndex = num - 1;
        }
        get tabIndex() {
          let currentIndex = null;
          for (let i = 0; i < this._elementTabMenu.children.length; i++) {
            if (this._elementTabMenu.children[i].classList.contains("w--current")) {
              currentIndex = i;
              break;
            }
          }
          return currentIndex;
        }
        set tabIndex(index) {
          if (index < 0)
            return;
          if (index >= this.tabCount)
            return;
          let clickEvent = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
          });
          this.debug.debug("setting tab", index);
          setTimeout(() => {
            this.elementTab(index).dispatchEvent(clickEvent);
          }, 0);
        }
        get tabCount() {
          return this._elementTabMenu.children.length;
        }
        goToTabNone() {
          this.goToTabIndexForced(null);
        }
        goToTabIndexForced(index) {
          Array.from(this._elementTabMenu.querySelectorAll(".w-tab-link")).forEach(
            (elem) => {
              elem.classList.remove("w--current");
              elem.removeAttribute("tabindex");
              elem.setAttribute("aria-selected", "true");
            }
          );
          Array.from(this._elementTabContent.querySelectorAll(".w-tab-pane")).forEach(
            (elem) => {
              elem.classList.remove("w--tab-active");
            }
          );
          if (index) {
            console.log("setting forced index", index);
            Array.from(this._elementTabMenu.querySelectorAll(`.w-tab-link:nth-child(${index + 1})`)).forEach(
              (elem) => {
                elem.classList.add("w--current");
              }
            );
            Array.from(this._elementTabContent.querySelectorAll(`.w-tab-pane:nth-child(${index + 1})`)).forEach(
              (elem) => {
                elem.classList.add("w--tab-active");
                elem.style.cssText = "style=opacity: 1; transition: opacity 300ms ease 0s;";
              }
            );
          }
        }
        getTabIndex(tab) {
          let index = Array.from(this._elementTabMenu.children).indexOf(tab);
          if (index == -1) {
            index = Array.from(this._elementTabContent.children).indexOf(tab);
          }
          if (index == -1)
            return null;
          return index;
        }
        init(element2) {
          if (!element2.classList.contains("w-tabs")) {
            console.error("[wfu-tabs] is not on a tabs element");
            return;
          }
          this._element = element2;
          this._elementTabMenu = element2.querySelector(".w-tab-menu");
          this._elementTabContent = element2.querySelector(".w-tab-content");
          for (let elem of this._elementTabMenu.children) {
            if (elem.hasAttribute("wfu-tab-default")) {
              this.debug.debug("default");
              let defaultTabIndex = this.getTabIndex(elem);
              this.debug.debug(defaultTabIndex);
              if (defaultTabIndex != null)
                this.tabIndex = defaultTabIndex;
            }
          }
          ;
        }
        elementTab(index) {
          if (index < 0)
            return;
          if (index >= this.tabCount)
            return;
          return this._elementTabMenu.children[index];
        }
        goToTabIndex(index) {
          this.debug.debug(index);
          this.tabIndex = index;
        }
        goToNextTab() {
          if (this.tabIndex == null) {
            this.tabIndex = 0;
            return;
          }
          var newTabIndex = this.tabIndex + 1;
          if (newTabIndex >= this.tabCount)
            newTabIndex = 0;
          this.goToTabIndex(newTabIndex);
        }
        goToPrevTab() {
          if (this.tabIndex == null) {
            this.tabIndex = 0;
            return;
          }
          var newTabIndex = this.tabIndex - 1;
          if (newTabIndex < 0)
            newTabIndex = this.tabCount - 1;
          this.goToTabIndex(newTabIndex);
        }
        goToFirstTab() {
          this.goToTabIndex(0);
        }
        goToLastTab() {
          var newTabIndex = this.tabCount - 1;
          this.goToTabIndex(newTabIndex);
        }
        onTabChanged() {
        }
      };
      Sa5Core.startup(WebflowTabs);
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
          console.debug(`WFU Edit mode monitor installed`);
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
  function sequence(l) {
    const group = l;
    const groupName = group.getAttribute("wfu-seq-group");
    let i = 0;
    const elements = group.querySelectorAll(`[wfu-seq="${groupName}"]`);
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
          const mode = list.getAttribute("wfu-sort") || "default";
          const dir = list.getAttribute("wfu-sort-dir") || "asc";
          const sortType = list.getAttribute("wfu-sort-type") || "string";
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
              var _a, _b;
              const key1 = a.getAttribute("wfu-sort-key") || ((_a = a.querySelector("[wfu-sort-key]")) == null ? void 0 : _a.getAttribute("wfu-sort-key")) || "";
              const key2 = b.getAttribute("wfu-sort-key") || ((_b = b.querySelector("[wfu-sort-key]")) == null ? void 0 : _b.getAttribute("wfu-sort-key")) || "";
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
          list.removeAttribute("wfu-sort");
          console.groupEnd();
        }
      };
    }
  });

  // src/webflow-html/nested-list.ts
  var Sa5NestedList;
  var init_nested_list = __esm({
    "src/webflow-html/nested-list.ts"() {
      Sa5NestedList = class {
        constructor(listElement, config = null) {
          this._element = listElement;
          this.config = config;
        }
        processNestedList() {
          const content = this._element.innerHTML;
          const data = new DOMParser().parseFromString(content, "text/html").body.childNodes;
          let items = [];
          data.forEach((el, i) => {
            var _a;
            if (el.nodeName !== "LI")
              return;
            let item = {
              indent: 1,
              mode: "",
              text: ((_a = el.textContent) == null ? void 0 : _a.trim()) || ""
            };
            const LIST_DEPTH_LIMIT = 10;
            for (let j = 1; j < LIST_DEPTH_LIMIT; j++) {
              if (item.text.startsWith(">")) {
                item.text = item.text.substring(1).trim();
                item.indent++;
              } else if (item.text.startsWith("+")) {
                item.text = item.text.substring(1).trim();
                item.mode = "pro";
              } else if (item.text.startsWith("-")) {
                item.text = item.text.substring(1).trim();
                item.mode = "con";
              } else {
                break;
              }
            }
            items.push(item);
          });
          let listWrapper = document.createElement("div");
          listWrapper.setAttribute(
            "wfu-list-theme",
            this._element.getAttribute("wfu-list-theme") || "default"
          );
          listWrapper.appendChild(
            this.createNestedListFromArray(this._element.nodeName, items)
          );
          this._element.replaceWith(
            listWrapper
          );
        }
        createNestedListFromArray(listElementType = "UL", items) {
          let root = document.createElement(listElementType);
          root.setAttribute("role", "list");
          root.classList.add(`wfu-list-level-1`);
          let currentParent = root;
          let parents = [root];
          for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const li = document.createElement("li");
            switch (item.mode) {
              case "pro":
                li.classList.add("wfu-pro");
                break;
              case "con":
                li.classList.add("wfu-con");
                break;
            }
            if (item.text) {
              let span = document.createElement("span");
              span.textContent = item.text;
              switch (item.mode) {
                case "pro":
                  span.classList.add("wfu-pro");
                  break;
                case "con":
                  span.classList.add("wfu-con");
                  break;
              }
              li.appendChild(span);
            }
            if (item.indent > parents.length) {
              for (let j = parents.length; j < item.indent; j++) {
                if (!parents[j - 1].lastChild) {
                  const newLI = document.createElement("li");
                  parents[j - 1].appendChild(newLI);
                }
                const newUL = document.createElement(listElementType);
                let newULparent = parents[j - 1].lastChild || parents[j - 1];
                newUL.classList.add(`wfu-list-level-${j + 1}`);
                newULparent.appendChild(newUL);
                parents.push(newUL);
              }
            } else if (item.indent < parents.length) {
              parents = parents.slice(0, item.indent);
            }
            parents[parents.length - 1].appendChild(li);
          }
          return root;
        }
      };
    }
  });

  // src/nocode/webflow-html.ts
  var require_webflow_html = __commonJS({
    "src/nocode/webflow-html.ts"(exports, module) {
      init_webflow_html();
      init_debug();
      init_tabs();
      init_webflow_editor();
      init_utils();
      init_collection_list();
      init_nested_list();
      var init = () => {
        let debug = new Sa5Debug("sa5-html");
        debug.debug("Initializing");
        let obj = new Sa5Html({
          dynamicAttributes: true
        }).init();
        let tabElements = document.querySelectorAll("[wfu-tabs]");
        tabElements.forEach((element2) => {
          var tabObj = new WebflowTabs(element2);
        });
        const editor = new Sa5Editor();
        let sequenceGroupElements = Array.from(
          document.querySelectorAll("[wfu-seq-group]")
        );
        sequenceGroupElements.forEach((element2) => {
          sequence(element2);
        });
        document.querySelectorAll("[wfu-decode]").forEach((element2) => {
          element2.innerHTML = decodeHTML(element2.innerHTML);
          element2.removeAttribute("wfu-decode");
        });
        document.querySelectorAll("[wfu-filter]").forEach((element) => {
          let visible = eval(element.getAttribute("wfu-filter"));
          if (visible) {
            element.style.display = "block";
          }
        });
        document.querySelectorAll("[wfu-sort] [wfu-sort] [wfu-sort]").forEach((element2) => {
          new Sa5CollectionList(element2).sort();
        });
        document.querySelectorAll("[wfu-sort] [wfu-sort]").forEach((element2) => {
          new Sa5CollectionList(element2).sort();
        });
        document.querySelectorAll("[wfu-sort]").forEach((element2) => {
          new Sa5CollectionList(element2).sort();
        });
        document.querySelectorAll("[wfu-filter-func]").forEach((element2) => {
          let funcName = element2.getAttribute("wfu-filter-func");
          let fqFuncName = `window.${funcName}`;
          let f = new Function(fqFuncName);
          let func = window[funcName];
          if (typeof func === "function") {
            let visible2 = func(element2);
            if (visible2) {
              element2.removeAttribute("wfu-filter-func");
            }
          }
        });
        document.querySelectorAll(".w-richtext[wfu-lists]").forEach((rtfElem) => {
          rtfElem.querySelectorAll(":scope > ul, :scope > ol").forEach((list) => {
            new Sa5NestedList(list).processNestedList();
          });
          rtfElem.removeAttribute("wfu-lists");
        });
        document.querySelectorAll("[wfu-limit-multiple]").forEach((element2) => {
          var listElement = element2;
          if (element2.classList.contains("w-dyn-list"))
            listElement = element2.children[0];
          const itemCount = listElement.children.length;
          const itemMultipleCount = Number(element2.getAttribute("wfu-limit-multiple"));
          const itemMinimumCount = Number(element2.getAttribute("wfu-limit-multiple-min"));
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
