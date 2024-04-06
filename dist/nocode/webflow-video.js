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

  // src/webflow-core/debug.ts
  var Sa5Debug = class {
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

  // src/webflow-core/designer.ts
  var Sa5Designer = class {
    constructor() {
    }
    init() {
      this.removeDesignTimeElements();
    }
    removeDesignTimeElements() {
      const elements = document.querySelectorAll(
        Sa5Attribute.getBracketed("wfu-design" /* ATTR_DESIGN */)
      );
      elements.forEach((element) => {
        element.remove();
      });
    }
  };

  // src/webflow-core.ts
  var Sa5Core = class {
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
      var core;
      if (sa5instance?.constructor?.name == "Sa5Core") {
        core = sa5instance;
      } else {
        core = new Sa5Core();
        core.init();
        if (Array.isArray(sa5instance))
          core.handlers = sa5instance;
        window["sa5"] = core;
        window["Sa5"] = window["sa5"];
      }
      if (module) {
        window["sa5"][module.name] = module;
      }
      return core;
    }
    push(o) {
      this.handlers.push(o);
    }
  };
  Sa5Core.startup();

  // src/webflow-video.ts
  var WebflowVideo = class {
    constructor() {
    }
    processAllDataPosterUrls() {
      const elements = document.querySelectorAll(`div[${"wfu-data-poster-url" /* ATTR_VIDEO_DATA_POSTER_URL */}]`);
      elements.forEach((element) => {
        element.setAttribute(
          "data-poster-url",
          element.getAttribute("wfu-data-poster-url" /* ATTR_VIDEO_DATA_POSTER_URL */)
        );
      });
    }
    processAllYouTubeNorel() {
      if (typeof YT === "undefined") {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
      let onYouTubeIframeAPIReadyCallbacks = [];
      for (let playerWrap of document.querySelectorAll(`[${"wfu-youtube-norel" /* ATTR_VIDEO_YOUTUBE_NOREL */}]`)) {
        console.log("loading video", playerWrap);
        if (!playerWrap.classList.contains("w-embed-youtubevideo")) {
          console.warn("SA5", "The SA5 YouTube Norel attribute can only be applied to Webflow's YouTube elements.");
          continue;
        }
        let playerFrame = playerWrap.querySelector("iframe");
        if (!playerFrame) {
          console.warn("SA5", "YouTube player element malformed, missing iframe.");
          continue;
        }
        const iframeURL = new URL(playerFrame.src);
        iframeURL.searchParams.append("enablejsapi", "1");
        playerFrame.src = iframeURL.toString();
        const pathSegments = iframeURL.pathname.split("/");
        let videoID = null;
        if (pathSegments.length > 2 && pathSegments[1] === "embed") {
          videoID = pathSegments[2];
        }
        let onPlayerStateChange = function(event) {
          if (event.data == YT.PlayerState.ENDED) {
            console.log("Ended");
            playerWrap.classList.add("sa5-video-ended");
          } else if (event.data == YT.PlayerState.PAUSED) {
            console.log("Paused");
            playerWrap.classList.add("sa5-video-paused");
          } else if (event.data == YT.PlayerState.PLAYING) {
            console.log("Playing");
            playerWrap.classList.remove("sa5-video-ended");
            playerWrap.classList.remove("sa5-video-paused");
          }
        };
        let player;
        onYouTubeIframeAPIReadyCallbacks.push(() => {
          player = new YT.Player(playerFrame, {
            events: {
              "onStateChange": onPlayerStateChange
            }
          });
        });
        playerWrap.addEventListener("click", function() {
          if (!player || typeof player.getPlayerState !== "function")
            return;
          let playerState = player.getPlayerState();
          if (playerState == YT.PlayerState.ENDED) {
            player.seekTo(0);
          } else if (playerState == YT.PlayerState.PAUSED) {
            player.playVideo();
          }
        });
      }
      window.onYouTubeIframeAPIReady = function() {
        for (let callback of onYouTubeIframeAPIReadyCallbacks) {
          callback();
        }
      };
    }
  };
  Sa5Core.startup(WebflowVideo);

  // src/webflow-video/player.ts
  var Sa5VideoPlayerState = class {
    get progress() {
      return this.at / this.duration * 100;
    }
  };
  var Sa5VideoPlayer = class {
    constructor(element) {
      if (element) {
        let videoName = element.getAttribute("wfu-video");
        this.name = videoName;
        this.element = element;
      }
    }
    init() {
    }
    onPlayerStateChange(stateChange, time, duration) {
      let core = Sa5Core.startup();
      let percent = time * 100 / duration;
      core.getHandlers("playerStateChange" /* EVENT_VIDEO_PLAYER_STATE_CHANGE */).forEach((func) => {
        let state = new Sa5VideoPlayerState();
        state.stateChange = stateChange;
        state.at = time;
        state.duration = duration;
        func(this.name, state);
      });
    }
  };

  // node_modules/@vimeo/player/dist/player.es.js
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function() {
      return exports;
    };
    var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
      obj[key] = desc.value;
    }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self2, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self2, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
      return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg, value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
            invoke("next", value2, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function(unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function(error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self2, context) {
      var state = "suspendedStart";
      return function(method, arg) {
        if ("executing" === state)
          throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method)
            throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg; ; ) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel)
                continue;
              return delegateResult;
            }
          }
          if ("next" === context.method)
            context.sent = context._sent = context.arg;
          else if ("throw" === context.method) {
            if ("suspendedStart" === state)
              throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else
            "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self2, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
              continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method, method = delegate.iterator[methodName];
      if (void 0 === method)
        return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type)
        return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod)
          return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next)
          return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1, next = function next2() {
            for (; ++i < iterable.length; )
              if (hasOwn.call(iterable, i))
                return next2.value = iterable[i], next2.done = false, next2;
            return next2.value = void 0, next2.done = true, next2;
          };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: void 0,
        done: true
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function(genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function(arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
      return this;
    }), define(Gp, "toString", function() {
      return "[object Generator]";
    }), exports.keys = function(val) {
      var object = Object(val), keys = [];
      for (var key in object)
        keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length; ) {
          var key2 = keys.pop();
          if (key2 in object)
            return next.value = key2, next.done = false, next;
        }
        return next.done = true, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
          for (var name in this)
            "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
      },
      stop: function() {
        this.done = true;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type)
          throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function(exception) {
        if (this.done)
          throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i], record = entry.completion;
          if ("root" === entry.tryLoc)
            return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc)
                return handle(entry.catchLoc, true);
              if (this.prev < entry.finallyLoc)
                return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc)
                return handle(entry.catchLoc, true);
            } else {
              if (!hasFinally)
                throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc)
                return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function(record, afterLoc) {
        if ("throw" === record.type)
          throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc)
            return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName,
          nextLoc
        }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
      }
    }, exports;
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct2(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2)
          _setPrototypeOf(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  var isNode = typeof global !== "undefined" && {}.toString.call(global) === "[object global]";
  function getMethodName(prop, type) {
    if (prop.indexOf(type.toLowerCase()) === 0) {
      return prop;
    }
    return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
  }
  function isDomElement(element) {
    return Boolean(element && element.nodeType === 1 && "nodeName" in element && element.ownerDocument && element.ownerDocument.defaultView);
  }
  function isInteger(value) {
    return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
  }
  function isVimeoUrl(url) {
    return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
  }
  function isVimeoEmbed(url) {
    var expr = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
    return expr.test(url);
  }
  function getVimeoUrl() {
    var oEmbedParameters2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var id = oEmbedParameters2.id;
    var url = oEmbedParameters2.url;
    var idOrUrl = id || url;
    if (!idOrUrl) {
      throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
    }
    if (isInteger(idOrUrl)) {
      return "https://vimeo.com/".concat(idOrUrl);
    }
    if (isVimeoUrl(idOrUrl)) {
      return idOrUrl.replace("http:", "https:");
    }
    if (id) {
      throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
    }
    throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
  }
  var subscribe = function subscribe2(target, eventName, callback) {
    var onName = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "addEventListener";
    var offName = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "removeEventListener";
    var eventNames = typeof eventName === "string" ? [eventName] : eventName;
    eventNames.forEach(function(evName) {
      target[onName](evName, callback);
    });
    return {
      cancel: function cancel() {
        return eventNames.forEach(function(evName) {
          return target[offName](evName, callback);
        });
      }
    };
  };
  var arrayIndexOfSupport = typeof Array.prototype.indexOf !== "undefined";
  var postMessageSupport = typeof window !== "undefined" && typeof window.postMessage !== "undefined";
  if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) {
    throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
  }
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }
  (function(self2) {
    if (self2.WeakMap) {
      return;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasDefine = Object.defineProperty && function() {
      try {
        return Object.defineProperty({}, "x", {
          value: 1
        }).x === 1;
      } catch (e) {
      }
    }();
    var defineProperty = function(object, name, value) {
      if (hasDefine) {
        Object.defineProperty(object, name, {
          configurable: true,
          writable: true,
          value
        });
      } else {
        object[name] = value;
      }
    };
    self2.WeakMap = function() {
      function WeakMap2() {
        if (this === void 0) {
          throw new TypeError("Constructor WeakMap requires 'new'");
        }
        defineProperty(this, "_id", genId("_WeakMap"));
        if (arguments.length > 0) {
          throw new TypeError("WeakMap iterable is not supported");
        }
      }
      defineProperty(WeakMap2.prototype, "delete", function(key) {
        checkInstance(this, "delete");
        if (!isObject(key)) {
          return false;
        }
        var entry = key[this._id];
        if (entry && entry[0] === key) {
          delete key[this._id];
          return true;
        }
        return false;
      });
      defineProperty(WeakMap2.prototype, "get", function(key) {
        checkInstance(this, "get");
        if (!isObject(key)) {
          return void 0;
        }
        var entry = key[this._id];
        if (entry && entry[0] === key) {
          return entry[1];
        }
        return void 0;
      });
      defineProperty(WeakMap2.prototype, "has", function(key) {
        checkInstance(this, "has");
        if (!isObject(key)) {
          return false;
        }
        var entry = key[this._id];
        if (entry && entry[0] === key) {
          return true;
        }
        return false;
      });
      defineProperty(WeakMap2.prototype, "set", function(key, value) {
        checkInstance(this, "set");
        if (!isObject(key)) {
          throw new TypeError("Invalid value used as weak map key");
        }
        var entry = key[this._id];
        if (entry && entry[0] === key) {
          entry[1] = value;
          return this;
        }
        defineProperty(key, this._id, [key, value]);
        return this;
      });
      function checkInstance(x, methodName) {
        if (!isObject(x) || !hasOwnProperty.call(x, "_id")) {
          throw new TypeError(methodName + " method called on incompatible receiver " + typeof x);
        }
      }
      function genId(prefix) {
        return prefix + "_" + rand() + "." + rand();
      }
      function rand() {
        return Math.random().toString().substring(2);
      }
      defineProperty(WeakMap2, "_polyfill", true);
      return WeakMap2;
    }();
    function isObject(x) {
      return Object(x) === x;
    }
  })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : commonjsGlobal);
  var npo_src = createCommonjsModule(function(module) {
    (function UMD(name, context, definition) {
      context[name] = context[name] || definition();
      if (module.exports) {
        module.exports = context[name];
      }
    })("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {
      var builtInProp, cycle, scheduling_queue, ToString = Object.prototype.toString, timer = typeof setImmediate != "undefined" ? function timer2(fn) {
        return setImmediate(fn);
      } : setTimeout;
      try {
        Object.defineProperty({}, "x", {});
        builtInProp = function builtInProp2(obj, name, val, config) {
          return Object.defineProperty(obj, name, {
            value: val,
            writable: true,
            configurable: config !== false
          });
        };
      } catch (err) {
        builtInProp = function builtInProp2(obj, name, val) {
          obj[name] = val;
          return obj;
        };
      }
      scheduling_queue = function Queue() {
        var first, last, item;
        function Item(fn, self2) {
          this.fn = fn;
          this.self = self2;
          this.next = void 0;
        }
        return {
          add: function add(fn, self2) {
            item = new Item(fn, self2);
            if (last) {
              last.next = item;
            } else {
              first = item;
            }
            last = item;
            item = void 0;
          },
          drain: function drain() {
            var f = first;
            first = last = cycle = void 0;
            while (f) {
              f.fn.call(f.self);
              f = f.next;
            }
          }
        };
      }();
      function schedule(fn, self2) {
        scheduling_queue.add(fn, self2);
        if (!cycle) {
          cycle = timer(scheduling_queue.drain);
        }
      }
      function isThenable(o) {
        var _then, o_type = typeof o;
        if (o != null && (o_type == "object" || o_type == "function")) {
          _then = o.then;
        }
        return typeof _then == "function" ? _then : false;
      }
      function notify() {
        for (var i = 0; i < this.chain.length; i++) {
          notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
        }
        this.chain.length = 0;
      }
      function notifyIsolated(self2, cb, chain) {
        var ret, _then;
        try {
          if (cb === false) {
            chain.reject(self2.msg);
          } else {
            if (cb === true) {
              ret = self2.msg;
            } else {
              ret = cb.call(void 0, self2.msg);
            }
            if (ret === chain.promise) {
              chain.reject(TypeError("Promise-chain cycle"));
            } else if (_then = isThenable(ret)) {
              _then.call(ret, chain.resolve, chain.reject);
            } else {
              chain.resolve(ret);
            }
          }
        } catch (err) {
          chain.reject(err);
        }
      }
      function resolve(msg) {
        var _then, self2 = this;
        if (self2.triggered) {
          return;
        }
        self2.triggered = true;
        if (self2.def) {
          self2 = self2.def;
        }
        try {
          if (_then = isThenable(msg)) {
            schedule(function() {
              var def_wrapper = new MakeDefWrapper(self2);
              try {
                _then.call(msg, function $resolve$() {
                  resolve.apply(def_wrapper, arguments);
                }, function $reject$() {
                  reject.apply(def_wrapper, arguments);
                });
              } catch (err) {
                reject.call(def_wrapper, err);
              }
            });
          } else {
            self2.msg = msg;
            self2.state = 1;
            if (self2.chain.length > 0) {
              schedule(notify, self2);
            }
          }
        } catch (err) {
          reject.call(new MakeDefWrapper(self2), err);
        }
      }
      function reject(msg) {
        var self2 = this;
        if (self2.triggered) {
          return;
        }
        self2.triggered = true;
        if (self2.def) {
          self2 = self2.def;
        }
        self2.msg = msg;
        self2.state = 2;
        if (self2.chain.length > 0) {
          schedule(notify, self2);
        }
      }
      function iteratePromises(Constructor, arr, resolver, rejecter) {
        for (var idx = 0; idx < arr.length; idx++) {
          (function IIFE(idx2) {
            Constructor.resolve(arr[idx2]).then(function $resolver$(msg) {
              resolver(idx2, msg);
            }, rejecter);
          })(idx);
        }
      }
      function MakeDefWrapper(self2) {
        this.def = self2;
        this.triggered = false;
      }
      function MakeDef(self2) {
        this.promise = self2;
        this.state = 0;
        this.triggered = false;
        this.chain = [];
        this.msg = void 0;
      }
      function Promise2(executor) {
        if (typeof executor != "function") {
          throw TypeError("Not a function");
        }
        if (this.__NPO__ !== 0) {
          throw TypeError("Not a promise");
        }
        this.__NPO__ = 1;
        var def = new MakeDef(this);
        this["then"] = function then(success, failure) {
          var o = {
            success: typeof success == "function" ? success : true,
            failure: typeof failure == "function" ? failure : false
          };
          o.promise = new this.constructor(function extractChain(resolve2, reject2) {
            if (typeof resolve2 != "function" || typeof reject2 != "function") {
              throw TypeError("Not a function");
            }
            o.resolve = resolve2;
            o.reject = reject2;
          });
          def.chain.push(o);
          if (def.state !== 0) {
            schedule(notify, def);
          }
          return o.promise;
        };
        this["catch"] = function $catch$(failure) {
          return this.then(void 0, failure);
        };
        try {
          executor.call(void 0, function publicResolve(msg) {
            resolve.call(def, msg);
          }, function publicReject(msg) {
            reject.call(def, msg);
          });
        } catch (err) {
          reject.call(def, err);
        }
      }
      var PromisePrototype = builtInProp({}, "constructor", Promise2, false);
      Promise2.prototype = PromisePrototype;
      builtInProp(PromisePrototype, "__NPO__", 0, false);
      builtInProp(Promise2, "resolve", function Promise$resolve(msg) {
        var Constructor = this;
        if (msg && typeof msg == "object" && msg.__NPO__ === 1) {
          return msg;
        }
        return new Constructor(function executor(resolve2, reject2) {
          if (typeof resolve2 != "function" || typeof reject2 != "function") {
            throw TypeError("Not a function");
          }
          resolve2(msg);
        });
      });
      builtInProp(Promise2, "reject", function Promise$reject(msg) {
        return new this(function executor(resolve2, reject2) {
          if (typeof resolve2 != "function" || typeof reject2 != "function") {
            throw TypeError("Not a function");
          }
          reject2(msg);
        });
      });
      builtInProp(Promise2, "all", function Promise$all(arr) {
        var Constructor = this;
        if (ToString.call(arr) != "[object Array]") {
          return Constructor.reject(TypeError("Not an array"));
        }
        if (arr.length === 0) {
          return Constructor.resolve([]);
        }
        return new Constructor(function executor(resolve2, reject2) {
          if (typeof resolve2 != "function" || typeof reject2 != "function") {
            throw TypeError("Not a function");
          }
          var len = arr.length, msgs = Array(len), count = 0;
          iteratePromises(Constructor, arr, function resolver(idx, msg) {
            msgs[idx] = msg;
            if (++count === len) {
              resolve2(msgs);
            }
          }, reject2);
        });
      });
      builtInProp(Promise2, "race", function Promise$race(arr) {
        var Constructor = this;
        if (ToString.call(arr) != "[object Array]") {
          return Constructor.reject(TypeError("Not an array"));
        }
        return new Constructor(function executor(resolve2, reject2) {
          if (typeof resolve2 != "function" || typeof reject2 != "function") {
            throw TypeError("Not a function");
          }
          iteratePromises(Constructor, arr, function resolver(idx, msg) {
            resolve2(msg);
          }, reject2);
        });
      });
      return Promise2;
    });
  });
  var callbackMap = /* @__PURE__ */ new WeakMap();
  function storeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!(name in playerCallbacks)) {
      playerCallbacks[name] = [];
    }
    playerCallbacks[name].push(callback);
    callbackMap.set(player.element, playerCallbacks);
  }
  function getCallbacks(player, name) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    return playerCallbacks[name] || [];
  }
  function removeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!playerCallbacks[name]) {
      return true;
    }
    if (!callback) {
      playerCallbacks[name] = [];
      callbackMap.set(player.element, playerCallbacks);
      return true;
    }
    var index = playerCallbacks[name].indexOf(callback);
    if (index !== -1) {
      playerCallbacks[name].splice(index, 1);
    }
    callbackMap.set(player.element, playerCallbacks);
    return playerCallbacks[name] && playerCallbacks[name].length === 0;
  }
  function shiftCallbacks(player, name) {
    var playerCallbacks = getCallbacks(player, name);
    if (playerCallbacks.length < 1) {
      return false;
    }
    var callback = playerCallbacks.shift();
    removeCallback(player, name, callback);
    return callback;
  }
  function swapCallbacks(oldElement, newElement) {
    var playerCallbacks = callbackMap.get(oldElement);
    callbackMap.set(newElement, playerCallbacks);
    callbackMap.delete(oldElement);
  }
  function parseMessageData(data) {
    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch (error) {
        console.warn(error);
        return {};
      }
    }
    return data;
  }
  function postMessage(player, method, params) {
    if (!player.element.contentWindow || !player.element.contentWindow.postMessage) {
      return;
    }
    var message = {
      method
    };
    if (params !== void 0) {
      message.value = params;
    }
    var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
    if (ieVersion >= 8 && ieVersion < 10) {
      message = JSON.stringify(message);
    }
    player.element.contentWindow.postMessage(message, player.origin);
  }
  function processData(player, data) {
    data = parseMessageData(data);
    var callbacks = [];
    var param;
    if (data.event) {
      if (data.event === "error") {
        var promises = getCallbacks(player, data.data.method);
        promises.forEach(function(promise) {
          var error = new Error(data.data.message);
          error.name = data.data.name;
          promise.reject(error);
          removeCallback(player, data.data.method, promise);
        });
      }
      callbacks = getCallbacks(player, "event:".concat(data.event));
      param = data.data;
    } else if (data.method) {
      var callback = shiftCallbacks(player, data.method);
      if (callback) {
        callbacks.push(callback);
        param = data.value;
      }
    }
    callbacks.forEach(function(callback2) {
      try {
        if (typeof callback2 === "function") {
          callback2.call(player, param);
          return;
        }
        callback2.resolve(param);
      } catch (e) {
      }
    });
  }
  var oEmbedParameters = ["autopause", "autoplay", "background", "byline", "color", "colors", "controls", "dnt", "height", "id", "interactive_params", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];
  function getOEmbedParameters(element) {
    var defaults = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return oEmbedParameters.reduce(function(params, param) {
      var value = element.getAttribute("data-vimeo-".concat(param));
      if (value || value === "") {
        params[param] = value === "" ? 1 : value;
      }
      return params;
    }, defaults);
  }
  function createEmbed(_ref, element) {
    var html = _ref.html;
    if (!element) {
      throw new TypeError("An element must be provided");
    }
    if (element.getAttribute("data-vimeo-initialized") !== null) {
      return element.querySelector("iframe");
    }
    var div = document.createElement("div");
    div.innerHTML = html;
    element.appendChild(div.firstChild);
    element.setAttribute("data-vimeo-initialized", "true");
    return element.querySelector("iframe");
  }
  function getOEmbedData(videoUrl) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var element = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function(resolve, reject) {
      if (!isVimeoUrl(videoUrl)) {
        throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
      }
      var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));
      for (var param in params) {
        if (params.hasOwnProperty(param)) {
          url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
        }
      }
      var xhr = "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function() {
        if (xhr.status === 404) {
          reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
          return;
        }
        if (xhr.status === 403) {
          reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
          return;
        }
        try {
          var json = JSON.parse(xhr.responseText);
          if (json.domain_status_code === 403) {
            createEmbed(json, element);
            reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
            return;
          }
          resolve(json);
        } catch (error) {
          reject(error);
        }
      };
      xhr.onerror = function() {
        var status = xhr.status ? " (".concat(xhr.status, ")") : "";
        reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
      };
      xhr.send();
    });
  }
  function initializeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    var elements = [].slice.call(parent.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"));
    var handleError = function handleError2(error) {
      if ("console" in window && console.error) {
        console.error("There was an error creating an embed: ".concat(error));
      }
    };
    elements.forEach(function(element) {
      try {
        if (element.getAttribute("data-vimeo-defer") !== null) {
          return;
        }
        var params = getOEmbedParameters(element);
        var url = getVimeoUrl(params);
        getOEmbedData(url, params, element).then(function(data) {
          return createEmbed(data, element);
        }).catch(handleError);
      } catch (error) {
        handleError(error);
      }
    });
  }
  function resizeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (window.VimeoPlayerResizeEmbeds_) {
      return;
    }
    window.VimeoPlayerResizeEmbeds_ = true;
    var onMessage = function onMessage2(event) {
      if (!isVimeoUrl(event.origin)) {
        return;
      }
      if (!event.data || event.data.event !== "spacechange") {
        return;
      }
      var iframes = parent.querySelectorAll("iframe");
      for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].contentWindow !== event.source) {
          continue;
        }
        var space = iframes[i].parentElement;
        space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
        break;
      }
    };
    window.addEventListener("message", onMessage);
  }
  function initAppendVideoMetadata() {
    var parent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (window.VimeoSeoMetadataAppended) {
      return;
    }
    window.VimeoSeoMetadataAppended = true;
    var onMessage = function onMessage2(event) {
      if (!isVimeoUrl(event.origin)) {
        return;
      }
      var data = parseMessageData(event.data);
      if (!data || data.event !== "ready") {
        return;
      }
      var iframes = parent.querySelectorAll("iframe");
      for (var i = 0; i < iframes.length; i++) {
        var iframe = iframes[i];
        var isValidMessageSource = iframe.contentWindow === event.source;
        if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
          var player = new Player(iframe);
          player.callMethod("appendVideoMetadata", window.location.href);
        }
      }
    };
    window.addEventListener("message", onMessage);
  }
  function checkUrlTimeParam() {
    var parent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (window.VimeoCheckedUrlTimeParam) {
      return;
    }
    window.VimeoCheckedUrlTimeParam = true;
    var handleError = function handleError2(error) {
      if ("console" in window && console.error) {
        console.error("There was an error getting video Id: ".concat(error));
      }
    };
    var onMessage = function onMessage2(event) {
      if (!isVimeoUrl(event.origin)) {
        return;
      }
      var data = parseMessageData(event.data);
      if (!data || data.event !== "ready") {
        return;
      }
      var iframes = parent.querySelectorAll("iframe");
      var _loop = function _loop2() {
        var iframe = iframes[i];
        var isValidMessageSource = iframe.contentWindow === event.source;
        if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
          var player = new Player(iframe);
          player.getVideoId().then(function(videoId) {
            var matches = new RegExp("[?&]vimeo_t_".concat(videoId, "=([^&#]*)")).exec(window.location.href);
            if (matches && matches[1]) {
              var sec = decodeURI(matches[1]);
              player.setCurrentTime(sec);
            }
            return;
          }).catch(handleError);
        }
      };
      for (var i = 0; i < iframes.length; i++) {
        _loop();
      }
    };
    window.addEventListener("message", onMessage);
  }
  function initializeScreenfull() {
    var fn = function() {
      var val;
      var fnMap = [
        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
      ];
      var i = 0;
      var l = fnMap.length;
      var ret = {};
      for (; i < l; i++) {
        val = fnMap[i];
        if (val && val[1] in document) {
          for (i = 0; i < val.length; i++) {
            ret[fnMap[0][i]] = val[i];
          }
          return ret;
        }
      }
      return false;
    }();
    var eventNameMap = {
      fullscreenchange: fn.fullscreenchange,
      fullscreenerror: fn.fullscreenerror
    };
    var screenfull2 = {
      request: function request(element) {
        return new Promise(function(resolve, reject) {
          var onFullScreenEntered = function onFullScreenEntered2() {
            screenfull2.off("fullscreenchange", onFullScreenEntered2);
            resolve();
          };
          screenfull2.on("fullscreenchange", onFullScreenEntered);
          element = element || document.documentElement;
          var returnPromise = element[fn.requestFullscreen]();
          if (returnPromise instanceof Promise) {
            returnPromise.then(onFullScreenEntered).catch(reject);
          }
        });
      },
      exit: function exit() {
        return new Promise(function(resolve, reject) {
          if (!screenfull2.isFullscreen) {
            resolve();
            return;
          }
          var onFullScreenExit = function onFullScreenExit2() {
            screenfull2.off("fullscreenchange", onFullScreenExit2);
            resolve();
          };
          screenfull2.on("fullscreenchange", onFullScreenExit);
          var returnPromise = document[fn.exitFullscreen]();
          if (returnPromise instanceof Promise) {
            returnPromise.then(onFullScreenExit).catch(reject);
          }
        });
      },
      on: function on(event, callback) {
        var eventName = eventNameMap[event];
        if (eventName) {
          document.addEventListener(eventName, callback);
        }
      },
      off: function off(event, callback) {
        var eventName = eventNameMap[event];
        if (eventName) {
          document.removeEventListener(eventName, callback);
        }
      }
    };
    Object.defineProperties(screenfull2, {
      isFullscreen: {
        get: function get() {
          return Boolean(document[fn.fullscreenElement]);
        }
      },
      element: {
        enumerable: true,
        get: function get() {
          return document[fn.fullscreenElement];
        }
      },
      isEnabled: {
        enumerable: true,
        get: function get() {
          return Boolean(document[fn.fullscreenEnabled]);
        }
      }
    });
    return screenfull2;
  }
  var defaultOptions = {
    role: "viewer",
    autoPlayMuted: true,
    allowedDrift: 0.3,
    maxAllowedDrift: 1,
    minCheckInterval: 0.1,
    maxRateAdjustment: 0.2,
    maxTimeToCatchUp: 1
  };
  var TimingSrcConnector = /* @__PURE__ */ function(_EventTarget) {
    _inherits(TimingSrcConnector2, _EventTarget);
    var _super = _createSuper(TimingSrcConnector2);
    function TimingSrcConnector2(_player, timingObject) {
      var _this;
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var logger = arguments.length > 3 ? arguments[3] : void 0;
      _classCallCheck(this, TimingSrcConnector2);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "logger", void 0);
      _defineProperty(_assertThisInitialized(_this), "speedAdjustment", 0);
      _defineProperty(_assertThisInitialized(_this), "adjustSpeed", /* @__PURE__ */ function() {
        var _ref = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(player, newAdjustment) {
          var newPlaybackRate;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1)
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(_this.speedAdjustment === newAdjustment)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  _context.next = 4;
                  return player.getPlaybackRate();
                case 4:
                  _context.t0 = _context.sent;
                  _context.t1 = _this.speedAdjustment;
                  _context.t2 = _context.t0 - _context.t1;
                  _context.t3 = newAdjustment;
                  newPlaybackRate = _context.t2 + _context.t3;
                  _this.log("New playbackRate:  ".concat(newPlaybackRate));
                  _context.next = 12;
                  return player.setPlaybackRate(newPlaybackRate);
                case 12:
                  _this.speedAdjustment = newAdjustment;
                case 13:
                case "end":
                  return _context.stop();
              }
          }, _callee);
        }));
        return function(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      _this.logger = logger;
      _this.init(timingObject, _player, _objectSpread2(_objectSpread2({}, defaultOptions), options));
      return _this;
    }
    _createClass(TimingSrcConnector2, [{
      key: "disconnect",
      value: function disconnect() {
        this.dispatchEvent(new Event("disconnect"));
      }
    }, {
      key: "init",
      value: function() {
        var _init = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(timingObject, player, options) {
          var _this2 = this;
          var playerUpdater, positionSync, timingObjectUpdater;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1)
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.waitForTOReadyState(timingObject, "open");
                case 2:
                  if (!(options.role === "viewer")) {
                    _context2.next = 10;
                    break;
                  }
                  _context2.next = 5;
                  return this.updatePlayer(timingObject, player, options);
                case 5:
                  playerUpdater = subscribe(timingObject, "change", function() {
                    return _this2.updatePlayer(timingObject, player, options);
                  });
                  positionSync = this.maintainPlaybackPosition(timingObject, player, options);
                  this.addEventListener("disconnect", function() {
                    positionSync.cancel();
                    playerUpdater.cancel();
                  });
                  _context2.next = 14;
                  break;
                case 10:
                  _context2.next = 12;
                  return this.updateTimingObject(timingObject, player);
                case 12:
                  timingObjectUpdater = subscribe(player, ["seeked", "play", "pause", "ratechange"], function() {
                    return _this2.updateTimingObject(timingObject, player);
                  }, "on", "off");
                  this.addEventListener("disconnect", function() {
                    return timingObjectUpdater.cancel();
                  });
                case 14:
                case "end":
                  return _context2.stop();
              }
          }, _callee2, this);
        }));
        function init2(_x3, _x4, _x5) {
          return _init.apply(this, arguments);
        }
        return init2;
      }()
    }, {
      key: "updateTimingObject",
      value: function() {
        var _updateTimingObject = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee3(timingObject, player) {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1)
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = timingObject;
                  _context3.next = 3;
                  return player.getCurrentTime();
                case 3:
                  _context3.t1 = _context3.sent;
                  _context3.next = 6;
                  return player.getPaused();
                case 6:
                  if (!_context3.sent) {
                    _context3.next = 10;
                    break;
                  }
                  _context3.t2 = 0;
                  _context3.next = 13;
                  break;
                case 10:
                  _context3.next = 12;
                  return player.getPlaybackRate();
                case 12:
                  _context3.t2 = _context3.sent;
                case 13:
                  _context3.t3 = _context3.t2;
                  _context3.t4 = {
                    position: _context3.t1,
                    velocity: _context3.t3
                  };
                  _context3.t0.update.call(_context3.t0, _context3.t4);
                case 16:
                case "end":
                  return _context3.stop();
              }
          }, _callee3);
        }));
        function updateTimingObject(_x6, _x7) {
          return _updateTimingObject.apply(this, arguments);
        }
        return updateTimingObject;
      }()
    }, {
      key: "updatePlayer",
      value: function() {
        var _updatePlayer = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee5(timingObject, player, options) {
          var _timingObject$query, position, velocity;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1)
              switch (_context5.prev = _context5.next) {
                case 0:
                  _timingObject$query = timingObject.query(), position = _timingObject$query.position, velocity = _timingObject$query.velocity;
                  if (typeof position === "number") {
                    player.setCurrentTime(position);
                  }
                  if (!(typeof velocity === "number")) {
                    _context5.next = 25;
                    break;
                  }
                  if (!(velocity === 0)) {
                    _context5.next = 11;
                    break;
                  }
                  _context5.next = 6;
                  return player.getPaused();
                case 6:
                  _context5.t0 = _context5.sent;
                  if (!(_context5.t0 === false)) {
                    _context5.next = 9;
                    break;
                  }
                  player.pause();
                case 9:
                  _context5.next = 25;
                  break;
                case 11:
                  if (!(velocity > 0)) {
                    _context5.next = 25;
                    break;
                  }
                  _context5.next = 14;
                  return player.getPaused();
                case 14:
                  _context5.t1 = _context5.sent;
                  if (!(_context5.t1 === true)) {
                    _context5.next = 19;
                    break;
                  }
                  _context5.next = 18;
                  return player.play().catch(/* @__PURE__ */ function() {
                    var _ref2 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee4(err) {
                      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                        while (1)
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              if (!(err.name === "NotAllowedError" && options.autoPlayMuted)) {
                                _context4.next = 5;
                                break;
                              }
                              _context4.next = 3;
                              return player.setMuted(true);
                            case 3:
                              _context4.next = 5;
                              return player.play().catch(function(err2) {
                                return console.error("Couldn't play the video from TimingSrcConnector. Error:", err2);
                              });
                            case 5:
                            case "end":
                              return _context4.stop();
                          }
                      }, _callee4);
                    }));
                    return function(_x11) {
                      return _ref2.apply(this, arguments);
                    };
                  }());
                case 18:
                  this.updatePlayer(timingObject, player, options);
                case 19:
                  _context5.next = 21;
                  return player.getPlaybackRate();
                case 21:
                  _context5.t2 = _context5.sent;
                  _context5.t3 = velocity;
                  if (!(_context5.t2 !== _context5.t3)) {
                    _context5.next = 25;
                    break;
                  }
                  player.setPlaybackRate(velocity);
                case 25:
                case "end":
                  return _context5.stop();
              }
          }, _callee5, this);
        }));
        function updatePlayer(_x8, _x9, _x10) {
          return _updatePlayer.apply(this, arguments);
        }
        return updatePlayer;
      }()
    }, {
      key: "maintainPlaybackPosition",
      value: function maintainPlaybackPosition(timingObject, player, options) {
        var _this3 = this;
        var allowedDrift = options.allowedDrift, maxAllowedDrift = options.maxAllowedDrift, minCheckInterval = options.minCheckInterval, maxRateAdjustment = options.maxRateAdjustment, maxTimeToCatchUp = options.maxTimeToCatchUp;
        var syncInterval = Math.min(maxTimeToCatchUp, Math.max(minCheckInterval, maxAllowedDrift)) * 1e3;
        var check = /* @__PURE__ */ function() {
          var _ref3 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee6() {
            var diff, diffAbs, min, max, adjustment;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1)
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.t0 = timingObject.query().velocity === 0;
                    if (_context6.t0) {
                      _context6.next = 6;
                      break;
                    }
                    _context6.next = 4;
                    return player.getPaused();
                  case 4:
                    _context6.t1 = _context6.sent;
                    _context6.t0 = _context6.t1 === true;
                  case 6:
                    if (!_context6.t0) {
                      _context6.next = 8;
                      break;
                    }
                    return _context6.abrupt("return");
                  case 8:
                    _context6.t2 = timingObject.query().position;
                    _context6.next = 11;
                    return player.getCurrentTime();
                  case 11:
                    _context6.t3 = _context6.sent;
                    diff = _context6.t2 - _context6.t3;
                    diffAbs = Math.abs(diff);
                    _this3.log("Drift: ".concat(diff));
                    if (!(diffAbs > maxAllowedDrift)) {
                      _context6.next = 22;
                      break;
                    }
                    _context6.next = 18;
                    return _this3.adjustSpeed(player, 0);
                  case 18:
                    player.setCurrentTime(timingObject.query().position);
                    _this3.log("Resync by currentTime");
                    _context6.next = 29;
                    break;
                  case 22:
                    if (!(diffAbs > allowedDrift)) {
                      _context6.next = 29;
                      break;
                    }
                    min = diffAbs / maxTimeToCatchUp;
                    max = maxRateAdjustment;
                    adjustment = min < max ? (max - min) / 2 : max;
                    _context6.next = 28;
                    return _this3.adjustSpeed(player, adjustment * Math.sign(diff));
                  case 28:
                    _this3.log("Resync by playbackRate");
                  case 29:
                  case "end":
                    return _context6.stop();
                }
            }, _callee6);
          }));
          return function check2() {
            return _ref3.apply(this, arguments);
          };
        }();
        var interval = setInterval(function() {
          return check();
        }, syncInterval);
        return {
          cancel: function cancel() {
            return clearInterval(interval);
          }
        };
      }
    }, {
      key: "log",
      value: function log(msg) {
        var _this$logger;
        (_this$logger = this.logger) === null || _this$logger === void 0 ? void 0 : _this$logger.call(this, "TimingSrcConnector: ".concat(msg));
      }
    }, {
      key: "waitForTOReadyState",
      value: function waitForTOReadyState(timingObject, state) {
        return new Promise(function(resolve) {
          var check = function check2() {
            if (timingObject.readyState === state) {
              resolve();
            } else {
              timingObject.addEventListener("readystatechange", check2, {
                once: true
              });
            }
          };
          check();
        });
      }
    }]);
    return TimingSrcConnector2;
  }(/* @__PURE__ */ _wrapNativeSuper(EventTarget));
  var playerMap = /* @__PURE__ */ new WeakMap();
  var readyMap = /* @__PURE__ */ new WeakMap();
  var screenfull = {};
  var Player = /* @__PURE__ */ function() {
    function Player2(element) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      _classCallCheck(this, Player2);
      if (window.jQuery && element instanceof jQuery) {
        if (element.length > 1 && window.console && console.warn) {
          console.warn("A jQuery object with multiple elements was passed, using the first element.");
        }
        element = element[0];
      }
      if (typeof document !== "undefined" && typeof element === "string") {
        element = document.getElementById(element);
      }
      if (!isDomElement(element)) {
        throw new TypeError("You must pass either a valid element or a valid id.");
      }
      if (element.nodeName !== "IFRAME") {
        var iframe = element.querySelector("iframe");
        if (iframe) {
          element = iframe;
        }
      }
      if (element.nodeName === "IFRAME" && !isVimeoUrl(element.getAttribute("src") || "")) {
        throw new Error("The player element passed isn\u2019t a Vimeo embed.");
      }
      if (playerMap.has(element)) {
        return playerMap.get(element);
      }
      this._window = element.ownerDocument.defaultView;
      this.element = element;
      this.origin = "*";
      var readyPromise = new npo_src(function(resolve, reject) {
        _this._onMessage = function(event) {
          if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) {
            return;
          }
          if (_this.origin === "*") {
            _this.origin = event.origin;
          }
          var data = parseMessageData(event.data);
          var isError = data && data.event === "error";
          var isReadyError = isError && data.data && data.data.method === "ready";
          if (isReadyError) {
            var error = new Error(data.data.message);
            error.name = data.data.name;
            reject(error);
            return;
          }
          var isReadyEvent = data && data.event === "ready";
          var isPingResponse = data && data.method === "ping";
          if (isReadyEvent || isPingResponse) {
            _this.element.setAttribute("data-ready", "true");
            resolve();
            return;
          }
          processData(_this, data);
        };
        _this._window.addEventListener("message", _this._onMessage);
        if (_this.element.nodeName !== "IFRAME") {
          var params = getOEmbedParameters(element, options);
          var url = getVimeoUrl(params);
          getOEmbedData(url, params, element).then(function(data) {
            var iframe2 = createEmbed(data, element);
            _this.element = iframe2;
            _this._originalElement = element;
            swapCallbacks(element, iframe2);
            playerMap.set(_this.element, _this);
            return data;
          }).catch(reject);
        }
      });
      readyMap.set(this, readyPromise);
      playerMap.set(this.element, this);
      if (this.element.nodeName === "IFRAME") {
        postMessage(this, "ping");
      }
      if (screenfull.isEnabled) {
        var exitFullscreen = function exitFullscreen2() {
          return screenfull.exit();
        };
        this.fullscreenchangeHandler = function() {
          if (screenfull.isFullscreen) {
            storeCallback(_this, "event:exitFullscreen", exitFullscreen);
          } else {
            removeCallback(_this, "event:exitFullscreen", exitFullscreen);
          }
          _this.ready().then(function() {
            postMessage(_this, "fullscreenchange", screenfull.isFullscreen);
          });
        };
        screenfull.on("fullscreenchange", this.fullscreenchangeHandler);
      }
      return this;
    }
    _createClass(Player2, [{
      key: "callMethod",
      value: function callMethod(name) {
        var _this2 = this;
        var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return new npo_src(function(resolve, reject) {
          return _this2.ready().then(function() {
            storeCallback(_this2, name, {
              resolve,
              reject
            });
            postMessage(_this2, name, args);
          }).catch(reject);
        });
      }
    }, {
      key: "get",
      value: function get(name) {
        var _this3 = this;
        return new npo_src(function(resolve, reject) {
          name = getMethodName(name, "get");
          return _this3.ready().then(function() {
            storeCallback(_this3, name, {
              resolve,
              reject
            });
            postMessage(_this3, name);
          }).catch(reject);
        });
      }
    }, {
      key: "set",
      value: function set(name, value) {
        var _this4 = this;
        return new npo_src(function(resolve, reject) {
          name = getMethodName(name, "set");
          if (value === void 0 || value === null) {
            throw new TypeError("There must be a value to set.");
          }
          return _this4.ready().then(function() {
            storeCallback(_this4, name, {
              resolve,
              reject
            });
            postMessage(_this4, name, value);
          }).catch(reject);
        });
      }
    }, {
      key: "on",
      value: function on(eventName, callback) {
        if (!eventName) {
          throw new TypeError("You must pass an event name.");
        }
        if (!callback) {
          throw new TypeError("You must pass a callback function.");
        }
        if (typeof callback !== "function") {
          throw new TypeError("The callback must be a function.");
        }
        var callbacks = getCallbacks(this, "event:".concat(eventName));
        if (callbacks.length === 0) {
          this.callMethod("addEventListener", eventName).catch(function() {
          });
        }
        storeCallback(this, "event:".concat(eventName), callback);
      }
    }, {
      key: "off",
      value: function off(eventName, callback) {
        if (!eventName) {
          throw new TypeError("You must pass an event name.");
        }
        if (callback && typeof callback !== "function") {
          throw new TypeError("The callback must be a function.");
        }
        var lastCallback = removeCallback(this, "event:".concat(eventName), callback);
        if (lastCallback) {
          this.callMethod("removeEventListener", eventName).catch(function(e) {
          });
        }
      }
    }, {
      key: "loadVideo",
      value: function loadVideo(options) {
        return this.callMethod("loadVideo", options);
      }
    }, {
      key: "ready",
      value: function ready() {
        var readyPromise = readyMap.get(this) || new npo_src(function(resolve, reject) {
          reject(new Error("Unknown player. Probably unloaded."));
        });
        return npo_src.resolve(readyPromise);
      }
    }, {
      key: "addCuePoint",
      value: function addCuePoint(time) {
        var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return this.callMethod("addCuePoint", {
          time,
          data
        });
      }
    }, {
      key: "removeCuePoint",
      value: function removeCuePoint(id) {
        return this.callMethod("removeCuePoint", id);
      }
    }, {
      key: "enableTextTrack",
      value: function enableTextTrack(language, kind) {
        if (!language) {
          throw new TypeError("You must pass a language.");
        }
        return this.callMethod("enableTextTrack", {
          language,
          kind
        });
      }
    }, {
      key: "disableTextTrack",
      value: function disableTextTrack() {
        return this.callMethod("disableTextTrack");
      }
    }, {
      key: "pause",
      value: function pause() {
        return this.callMethod("pause");
      }
    }, {
      key: "play",
      value: function play() {
        return this.callMethod("play");
      }
    }, {
      key: "requestFullscreen",
      value: function requestFullscreen() {
        if (screenfull.isEnabled) {
          return screenfull.request(this.element);
        }
        return this.callMethod("requestFullscreen");
      }
    }, {
      key: "exitFullscreen",
      value: function exitFullscreen() {
        if (screenfull.isEnabled) {
          return screenfull.exit();
        }
        return this.callMethod("exitFullscreen");
      }
    }, {
      key: "getFullscreen",
      value: function getFullscreen() {
        if (screenfull.isEnabled) {
          return npo_src.resolve(screenfull.isFullscreen);
        }
        return this.get("fullscreen");
      }
    }, {
      key: "requestPictureInPicture",
      value: function requestPictureInPicture() {
        return this.callMethod("requestPictureInPicture");
      }
    }, {
      key: "exitPictureInPicture",
      value: function exitPictureInPicture() {
        return this.callMethod("exitPictureInPicture");
      }
    }, {
      key: "getPictureInPicture",
      value: function getPictureInPicture() {
        return this.get("pictureInPicture");
      }
    }, {
      key: "remotePlaybackPrompt",
      value: function remotePlaybackPrompt() {
        return this.callMethod("remotePlaybackPrompt");
      }
    }, {
      key: "unload",
      value: function unload() {
        return this.callMethod("unload");
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this5 = this;
        return new npo_src(function(resolve) {
          readyMap.delete(_this5);
          playerMap.delete(_this5.element);
          if (_this5._originalElement) {
            playerMap.delete(_this5._originalElement);
            _this5._originalElement.removeAttribute("data-vimeo-initialized");
          }
          if (_this5.element && _this5.element.nodeName === "IFRAME" && _this5.element.parentNode) {
            if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) {
              _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);
            } else {
              _this5.element.parentNode.removeChild(_this5.element);
            }
          }
          if (_this5.element && _this5.element.nodeName === "DIV" && _this5.element.parentNode) {
            _this5.element.removeAttribute("data-vimeo-initialized");
            var iframe = _this5.element.querySelector("iframe");
            if (iframe && iframe.parentNode) {
              if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) {
                iframe.parentNode.parentNode.removeChild(iframe.parentNode);
              } else {
                iframe.parentNode.removeChild(iframe);
              }
            }
          }
          _this5._window.removeEventListener("message", _this5._onMessage);
          if (screenfull.isEnabled) {
            screenfull.off("fullscreenchange", _this5.fullscreenchangeHandler);
          }
          resolve();
        });
      }
    }, {
      key: "getAutopause",
      value: function getAutopause() {
        return this.get("autopause");
      }
    }, {
      key: "setAutopause",
      value: function setAutopause(autopause) {
        return this.set("autopause", autopause);
      }
    }, {
      key: "getBuffered",
      value: function getBuffered() {
        return this.get("buffered");
      }
    }, {
      key: "getCameraProps",
      value: function getCameraProps() {
        return this.get("cameraProps");
      }
    }, {
      key: "setCameraProps",
      value: function setCameraProps(camera) {
        return this.set("cameraProps", camera);
      }
    }, {
      key: "getChapters",
      value: function getChapters() {
        return this.get("chapters");
      }
    }, {
      key: "getCurrentChapter",
      value: function getCurrentChapter() {
        return this.get("currentChapter");
      }
    }, {
      key: "getColor",
      value: function getColor() {
        return this.get("color");
      }
    }, {
      key: "getColors",
      value: function getColors() {
        return npo_src.all([this.get("colorOne"), this.get("colorTwo"), this.get("colorThree"), this.get("colorFour")]);
      }
    }, {
      key: "setColor",
      value: function setColor(color) {
        return this.set("color", color);
      }
    }, {
      key: "setColors",
      value: function setColors(colors) {
        if (!Array.isArray(colors)) {
          return new npo_src(function(resolve, reject) {
            return reject(new TypeError("Argument must be an array."));
          });
        }
        var nullPromise = new npo_src(function(resolve) {
          return resolve(null);
        });
        var colorPromises = [colors[0] ? this.set("colorOne", colors[0]) : nullPromise, colors[1] ? this.set("colorTwo", colors[1]) : nullPromise, colors[2] ? this.set("colorThree", colors[2]) : nullPromise, colors[3] ? this.set("colorFour", colors[3]) : nullPromise];
        return npo_src.all(colorPromises);
      }
    }, {
      key: "getCuePoints",
      value: function getCuePoints() {
        return this.get("cuePoints");
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.get("currentTime");
      }
    }, {
      key: "setCurrentTime",
      value: function setCurrentTime(currentTime) {
        return this.set("currentTime", currentTime);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.get("duration");
      }
    }, {
      key: "getEnded",
      value: function getEnded() {
        return this.get("ended");
      }
    }, {
      key: "getLoop",
      value: function getLoop() {
        return this.get("loop");
      }
    }, {
      key: "setLoop",
      value: function setLoop(loop) {
        return this.set("loop", loop);
      }
    }, {
      key: "setMuted",
      value: function setMuted(muted) {
        return this.set("muted", muted);
      }
    }, {
      key: "getMuted",
      value: function getMuted() {
        return this.get("muted");
      }
    }, {
      key: "getPaused",
      value: function getPaused() {
        return this.get("paused");
      }
    }, {
      key: "getPlaybackRate",
      value: function getPlaybackRate() {
        return this.get("playbackRate");
      }
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(playbackRate) {
        return this.set("playbackRate", playbackRate);
      }
    }, {
      key: "getPlayed",
      value: function getPlayed() {
        return this.get("played");
      }
    }, {
      key: "getQualities",
      value: function getQualities() {
        return this.get("qualities");
      }
    }, {
      key: "getQuality",
      value: function getQuality() {
        return this.get("quality");
      }
    }, {
      key: "setQuality",
      value: function setQuality(quality) {
        return this.set("quality", quality);
      }
    }, {
      key: "getRemotePlaybackAvailability",
      value: function getRemotePlaybackAvailability() {
        return this.get("remotePlaybackAvailability");
      }
    }, {
      key: "getRemotePlaybackState",
      value: function getRemotePlaybackState() {
        return this.get("remotePlaybackState");
      }
    }, {
      key: "getSeekable",
      value: function getSeekable() {
        return this.get("seekable");
      }
    }, {
      key: "getSeeking",
      value: function getSeeking() {
        return this.get("seeking");
      }
    }, {
      key: "getTextTracks",
      value: function getTextTracks() {
        return this.get("textTracks");
      }
    }, {
      key: "getVideoEmbedCode",
      value: function getVideoEmbedCode() {
        return this.get("videoEmbedCode");
      }
    }, {
      key: "getVideoId",
      value: function getVideoId() {
        return this.get("videoId");
      }
    }, {
      key: "getVideoTitle",
      value: function getVideoTitle() {
        return this.get("videoTitle");
      }
    }, {
      key: "getVideoWidth",
      value: function getVideoWidth() {
        return this.get("videoWidth");
      }
    }, {
      key: "getVideoHeight",
      value: function getVideoHeight() {
        return this.get("videoHeight");
      }
    }, {
      key: "getVideoUrl",
      value: function getVideoUrl() {
        return this.get("videoUrl");
      }
    }, {
      key: "getVolume",
      value: function getVolume() {
        return this.get("volume");
      }
    }, {
      key: "setVolume",
      value: function setVolume(volume) {
        return this.set("volume", volume);
      }
    }, {
      key: "setTimingSrc",
      value: function() {
        var _setTimingSrc = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(timingObject, options) {
          var _this6 = this;
          var connector;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1)
              switch (_context.prev = _context.next) {
                case 0:
                  if (timingObject) {
                    _context.next = 2;
                    break;
                  }
                  throw new TypeError("A Timing Object must be provided.");
                case 2:
                  _context.next = 4;
                  return this.ready();
                case 4:
                  connector = new TimingSrcConnector(this, timingObject, options);
                  postMessage(this, "notifyTimingObjectConnect");
                  connector.addEventListener("disconnect", function() {
                    return postMessage(_this6, "notifyTimingObjectDisconnect");
                  });
                  return _context.abrupt("return", connector);
                case 8:
                case "end":
                  return _context.stop();
              }
          }, _callee, this);
        }));
        function setTimingSrc(_x, _x2) {
          return _setTimingSrc.apply(this, arguments);
        }
        return setTimingSrc;
      }()
    }]);
    return Player2;
  }();
  if (!isNode) {
    screenfull = initializeScreenfull();
    initializeEmbeds();
    resizeEmbeds();
    initAppendVideoMetadata();
    checkUrlTimeParam();
  }
  var player_es_default = Player;

  // src/webflow-video/players/vimeo.ts
  var Sa5VideoPlayerVimeo = class extends Sa5VideoPlayer {
    constructor(element) {
      super(element);
    }
    init() {
      this.player = new player_es_default(this.element);
      this.player.on("timeupdate", (data) => {
        super.onPlayerStateChange(
          "timeupdate" /* TimeUpdate */,
          data.seconds,
          data.duration
        );
      });
    }
  };

  // src/webflow-video/player-factory.ts
  var Sa5VideoPlayerFactory = class {
    constructor() {
    }
    static create(element) {
      if (!element)
        return null;
      if (element.nodeName != "IFRAME") {
        console.error("SA5", "Invalid video element- must be an IFRAME");
        return null;
      }
      if (!element.matches("[src^='https://player.vimeo.com/']")) {
        console.error("SA5", "Does not appear to be a valid Vimeo video element");
        return null;
      }
      return new Sa5VideoPlayerVimeo(element);
    }
  };

  // src/nocode/webflow-video.ts
  var init = () => {
    let core = Sa5Core.startup();
    let debug = new Sa5Debug("sa5-video");
    debug.debug("Initializing");
    let videos = document.querySelectorAll(`[${"wfu-video" /* ATTR_VIDEO */}]`);
    videos.forEach((element) => {
      Sa5VideoPlayerFactory.create(element).init();
    });
    const webflowVideo = new WebflowVideo();
    webflowVideo.processAllYouTubeNorel();
    webflowVideo.processAllDataPosterUrls();
  };
  document.addEventListener("DOMContentLoaded", init);
})();
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
/*! @vimeo/player v2.20.1 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js */
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
//# sourceMappingURL=webflow-video.js.map
