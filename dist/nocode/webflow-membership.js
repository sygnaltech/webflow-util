(() => {
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };

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

  // src/webflow-core.ts
  var Sa5Core = class {
    constructor() {
      this.handlers = [];
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

  // src/utils.ts
  function getCookie(name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match)
      return match[2];
  }
  function toTitleCase(str) {
    return str.toLowerCase().split(" ").map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }
  var expandMacrosInText = (text, dict) => {
    const replacer = (match, p1, p2, p3, offset, string) => {
      return dict.get(p2) || "";
    };
    text = text.replace(
      /{\s*(?<cmd>\w*)\s*\{\s*(?<params>\w*)\s*\}\s*(?<options>\w*)\s*\}/g,
      replacer
    );
    return text;
  };

  // src/webflow-crypto.ts
  var PRIME64_1 = 11400714785074694791n;
  var PRIME64_2 = 14029467366897019727n;
  var PRIME64_3 = 1609587929392839161n;
  var PRIME64_4 = 9650029242287828579n;
  var PRIME64_5 = 2870177450012600261n;
  var BITS = 64n;
  var BITMASK = 2n ** BITS - 1n;
  var encoder = new TextEncoder();
  function bitsToBigInt(a00, a16, a32, a48) {
    return BigInt(a00) | BigInt(a16) << 16n | BigInt(a32) << 32n | BigInt(a48) << 48n;
  }
  function memoryToBigInt(memory, offset) {
    return BigInt(memory[offset]) | BigInt(memory[offset + 1]) << 8n | BigInt(memory[offset + 2]) << 16n | BigInt(memory[offset + 3]) << 24n | BigInt(memory[offset + 4]) << 32n | BigInt(memory[offset + 5]) << 40n | BigInt(memory[offset + 6]) << 48n | BigInt(memory[offset + 7]) << 56n;
  }
  function rotl(value, rotation) {
    return value << rotation & BITMASK | value >> BITS - rotation;
  }
  function trunc(value) {
    return BigInt.asUintN(64, value);
  }
  var _seed, _v1, _v2, _v3, _v4, _memory, _len, _memsize;
  var _XXH64 = class {
    constructor(seed = 0) {
      __privateAdd(this, _seed, void 0);
      __privateAdd(this, _v1, void 0);
      __privateAdd(this, _v2, void 0);
      __privateAdd(this, _v3, void 0);
      __privateAdd(this, _v4, void 0);
      __privateAdd(this, _memory, void 0);
      __privateAdd(this, _len, void 0);
      __privateAdd(this, _memsize, void 0);
      this.reset(seed);
    }
    reset(seed = __privateGet(this, _seed)) {
      __privateSet(this, _seed, BigInt.asUintN(32, BigInt(seed)));
      __privateSet(this, _v1, trunc(__privateGet(this, _seed) + PRIME64_1 + PRIME64_2));
      __privateSet(this, _v2, trunc(__privateGet(this, _seed) + PRIME64_2));
      __privateSet(this, _v3, __privateGet(this, _seed));
      __privateSet(this, _v4, trunc(__privateGet(this, _seed) - PRIME64_1));
      __privateSet(this, _memory, null);
      __privateSet(this, _len, 0);
      __privateSet(this, _memsize, 0);
      return this;
    }
    update(input) {
      if (typeof input === "string") {
        input = encoder.encode(input);
      }
      let p = 0;
      let len = input.length;
      let bEnd = p + len;
      if (len === 0) {
        return this;
      }
      __privateSet(this, _len, __privateGet(this, _len) + len);
      if (__privateGet(this, _memsize) === 0) {
        __privateSet(this, _memory, new Uint8Array(32));
      }
      if (__privateGet(this, _memsize) + len < 32) {
        __privateGet(this, _memory).set(input.subarray(0, len), __privateGet(this, _memsize));
        __privateSet(this, _memsize, __privateGet(this, _memsize) + len);
        return this;
      }
      if (__privateGet(this, _memsize) > 0) {
        __privateGet(this, _memory).set(input.subarray(0, 32 - __privateGet(this, _memsize)), __privateGet(this, _memsize));
        let p64 = 0;
        let other;
        other = memoryToBigInt(__privateGet(this, _memory), p64);
        __privateSet(this, _v1, trunc(rotl(trunc(__privateGet(this, _v1) + other * PRIME64_2), 31n) * PRIME64_1));
        p64 += 8;
        other = memoryToBigInt(this.memory, p64);
        __privateSet(this, _v2, trunc(rotl(trunc(__privateGet(this, _v2) + other * PRIME64_2), 31n) * PRIME64_1));
        p64 += 8;
        other = memoryToBigInt(this.memory, p64);
        __privateSet(this, _v3, trunc(rotl(trunc(__privateGet(this, _v3) + other * PRIME64_2), 31n) * PRIME64_1));
        p64 += 8;
        other = memoryToBigInt(this.memory, p64);
        __privateSet(this, _v4, trunc(rotl(trunc(__privateGet(this, _v4) + other * PRIME64_2), 31n) * PRIME64_1));
        p += 32 - __privateGet(this, _memsize);
        __privateSet(this, _memsize, 0);
      }
      if (p <= bEnd - 32) {
        const limit = bEnd - 32;
        do {
          let other;
          other = memoryToBigInt(input, p);
          __privateSet(this, _v1, trunc(rotl(trunc(__privateGet(this, _v1) + other * PRIME64_2), 31n) * PRIME64_1));
          p += 8;
          other = memoryToBigInt(input, p);
          __privateSet(this, _v2, trunc(rotl(trunc(__privateGet(this, _v2) + other * PRIME64_2), 31n) * PRIME64_1));
          p += 8;
          other = memoryToBigInt(input, p);
          __privateSet(this, _v3, trunc(rotl(trunc(__privateGet(this, _v3) + other * PRIME64_2), 31n) * PRIME64_1));
          p += 8;
          other = memoryToBigInt(input, p);
          __privateSet(this, _v4, trunc(rotl(trunc(__privateGet(this, _v4) + other * PRIME64_2), 31n) * PRIME64_1));
          p += 8;
        } while (p <= limit);
      }
      if (p < bEnd) {
        __privateGet(this, _memory).set(input.subarray(p, bEnd), __privateGet(this, _memsize));
        __privateSet(this, _memsize, bEnd - p);
      }
      return this;
    }
    digest() {
      let input = __privateGet(this, _memory);
      let bEnd = __privateGet(this, _memsize);
      let p = 0;
      let h64 = 0n;
      let h = 0n;
      let u = 0n;
      if (__privateGet(this, _len) >= 32) {
        h64 = rotl(__privateGet(this, _v1), 1n) + rotl(__privateGet(this, _v2), 7n) + rotl(__privateGet(this, _v3), 12n) + rotl(__privateGet(this, _v4), 18n);
        h64 = trunc(h64 ^ rotl(trunc(__privateGet(this, _v1) * PRIME64_2), 31n) * PRIME64_1);
        h64 = trunc(h64 * PRIME64_1 + PRIME64_4);
        h64 = trunc(h64 ^ rotl(trunc(__privateGet(this, _v2) * PRIME64_2), 31n) * PRIME64_1);
        h64 = trunc(h64 * PRIME64_1 + PRIME64_4);
        h64 = trunc(h64 ^ rotl(trunc(__privateGet(this, _v3) * PRIME64_2), 31n) * PRIME64_1);
        h64 = trunc(h64 * PRIME64_1 + PRIME64_4);
        h64 = trunc(h64 ^ rotl(trunc(__privateGet(this, _v4) * PRIME64_2), 31n) * PRIME64_1);
        h64 = trunc(h64 * PRIME64_1 + PRIME64_4);
      } else {
        h64 = trunc(__privateGet(this, _seed) + PRIME64_5);
      }
      h64 += BigInt(__privateGet(this, _len));
      while (p <= bEnd - 8) {
        u = memoryToBigInt(input, p);
        u = trunc(rotl(trunc(u * PRIME64_2), 31n) * PRIME64_1);
        h64 = trunc(rotl(h64 ^ u, 27n) * PRIME64_1 + PRIME64_4);
        p += 8;
      }
      if (p + 4 <= bEnd) {
        u = bitsToBigInt(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], 0, 0);
        h64 = trunc(rotl(h64 ^ trunc(u * PRIME64_1), 23n) * PRIME64_2 + PRIME64_3);
        p += 4;
      }
      while (p < bEnd) {
        u = bitsToBigInt(input[p++], 0, 0, 0);
        h64 = trunc(rotl(h64 ^ trunc(u * PRIME64_5), 11n) * PRIME64_1);
      }
      h = trunc(h64 >> 33n);
      h64 = trunc((h64 ^ h) * PRIME64_2);
      h = trunc(h64 >> 29n);
      h64 = trunc((h64 ^ h) * PRIME64_3);
      h = trunc(h64 >> 32n);
      h64 = trunc(h64 ^ h);
      return h64;
    }
    static hash(input, seed = 0) {
      return new _XXH64(seed).update(input).digest().toString(16);
    }
  };
  var XXH64 = _XXH64;
  _seed = new WeakMap();
  _v1 = new WeakMap();
  _v2 = new WeakMap();
  _v3 = new WeakMap();
  _v4 = new WeakMap();
  _memory = new WeakMap();
  _len = new WeakMap();
  _memsize = new WeakMap();

  // src/webflow-membership/user.ts
  var Sa5User = class {
    constructor() {
      this.user_data_loaded = {
        email: false,
        account_info: false,
        custom_fields: false,
        access_groups: false
      };
      this.access_groups = [];
      this.data = {};
      this.meta = {};
      this.isLoggedIn = function() {
        return getCookie("wf_loggedin") || false;
      };
    }
    get user_id_alt() {
      if (!this.email)
        return void 0;
      return XXH64.hash(this.email);
    }
    get name_short_clean() {
      if (!this.email)
        return void 0;
      return this.email.split("@")[0];
    }
    get name_short() {
      if (!this.email)
        return void 0;
      return this.name_short_clean + "@";
    }
    get name_short_tcase() {
      if (!this.email)
        return void 0;
      return toTitleCase(this.name_short_clean);
    }
    fromJSON(json) {
      if (!json)
        return;
      this.user_id = json.user_id;
      this.name = json.name;
      this.email = json.email;
      this.accept_communications = json.accept_communications;
      this.access_groups = json.access_groups;
      this.data = json.data;
      this.user_data_loaded.email = json.user_data_loaded.email;
      this.user_data_loaded.account_info = json.user_data_loaded.account_info;
      this.user_data_loaded.custom_fields = json.user_data_loaded.custom_fields;
      this.user_data_loaded.access_groups = json.user_data_loaded.access_groups;
    }
  };

  // src/modules/webflow-data-csv.js
  RegExp.escape = function(s) {
    return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  };

  // src/modules/webflow-html.js
  (function($2) {
    $2.fn.shuffle = function() {
      var allElems = this.get(), getRandom = function(max) {
        return Math.floor(Math.random() * max);
      }, shuffled = $2.map(allElems, function() {
        var random = getRandom(allElems.length), randEl = $2(allElems[random]).clone(true)[0];
        allElems.splice(random, 1);
        return randEl;
      });
      this.each(function(i) {
        $2(this).replaceWith($2(shuffled[i]));
      });
      return $2(shuffled);
    };
  })(jQuery);

  // src/webflow-data.ts
  var getDictionaryFromDataRow2 = function(data, rowIndex) {
    var dict = /* @__PURE__ */ new Map();
    for (const v in data[rowIndex]) {
      dict.set(
        v,
        data[rowIndex][v]
      );
    }
    return dict;
  };

  // src/webflow-html-builder.ts
  var HtmlBuilder2 = class {
    constructor() {
      this.html = [];
      this.render = function() {
        return this.html.join("");
      };
    }
    add(html) {
      this.html.push(html);
    }
    addTemplate(templateEl, data) {
      let template = templateEl.innerHTML;
      console.log(`addTemplate`);
      console.log(template);
      console.log(data);
      for (let row = 0; row < data.length; row++) {
        let dict = getDictionaryFromDataRow2(data, row);
        let item = expandMacrosInText(
          template,
          dict
        );
        console.log(item);
        this.add(item);
      }
    }
  };

  // src/webflow-databind.ts
  var DataSourceType = Object.freeze({
    db: "db",
    user: "user",
    query: "query"
  });
  var dataBinderConfig = {
    db: void 0,
    user: void 0,
    handlers: []
  };
  var WfuDataBinder = class {
    constructor(config = {}) {
      this.config = { ...dataBinderConfig, ...config };
    }
    getDataSourceType(dsn) {
      var dsnTypeIndicator = void 0;
      if ("!@#%^&*-+=?".includes(dsn[0])) {
        dsnTypeIndicator = dsn[0];
      } else if (dsn[0] == "$") {
        dsnTypeIndicator = dsn.split(".")[0];
      } else {
        dsnTypeIndicator = "$db";
      }
      var dsnType = void 0;
      switch (dsnTypeIndicator) {
        case "$user":
        case "@":
          dsnType = DataSourceType.user;
          break;
        case "$query":
        case "?":
          dsnType = DataSourceType.query;
          break;
        default:
        case "$db":
        case "+":
          dsnType = DataSourceType.db;
          break;
      }
      return dsnType;
    }
    getDataSourceName(dsn) {
      var dsnName = void 0;
      if ("!@#%^&*-+=?".includes(dsn[0])) {
        dsnName = dsn.substring(1);
      } else if (dsn[0] == "$") {
        const dsnZone = dsn.split(".")[0];
        dsnName = dsn.substring(dsnZone.length + 1);
      } else {
        dsnName = dsn;
      }
      return dsnName;
    }
    bind() {
      let dataBind = document.querySelectorAll("[wfu-bind]");
      if (!this.config.user)
        this.config.user = new Sa5Membership().loadUserInfoCache();
      dataBind.forEach((elem) => {
        let dsn = elem.getAttribute("wfu-bind");
        let dsnType = this.getDataSourceType(dsn);
        switch (dsnType) {
          case DataSourceType.user:
            this.bindData_user(
              elem,
              this.config.user
            );
            break;
          case DataSourceType.db:
            this.bindData_db(
              elem,
              this.config.db
            );
            break;
        }
      });
    }
    bindData_user(el, user) {
      if (!user || !user.email)
        return;
      let dsn = el.getAttribute("wfu-bind");
      let elemType = el.tagName.toLowerCase();
      let dsnName = this.getDataSourceName(dsn);
      let dsnNameParts = dsnName.split(".");
      let val;
      switch (dsnNameParts[0]) {
        case "data":
          val = user.data[dsnNameParts[1]];
          break;
        default:
          val = user[dsnName];
          break;
      }
      switch (elemType) {
        case "input":
          el.value = val;
          break;
        default:
          el.textContent = val;
          break;
      }
    }
    bindData_db(el, db) {
      let dsn = el.getAttribute("wfu-bind");
      let data = db.getData(dsn);
      if (!db) {
        console.warn(`Data binding requested for elem '${data}', but no db defined.`);
        return;
      }
      let templateId = el.getAttribute("wfu-bind-template");
      let template = document.querySelector("#" + templateId);
      let hb = new HtmlBuilder2();
      hb.addTemplate(
        template,
        data
      );
      el.innerHTML = hb.render();
    }
  };

  // src/webflow-membership.ts
  var StorageKeys = Object.freeze({
    user: "wfuUser",
    userKey: "wfuUserKey"
  });
  var Sa5Membership = class {
    constructor(config = {}) {
      this.userInfoUpdatedCallback = (user) => {
        if (this.config.userInfoUpdatedCallback)
          this.config.userInfoUpdatedCallback(
            user
          );
      };
      this.config = {
        userInfoUpdatedCallback: config.userInfoUpdatedCallback,
        debug: config.debug ?? false,
        dataBind: config.dataBind ?? true,
        advanced: {
          accountInfoLoadDelay: config.advanced?.accountInfoLoadDelay ?? 300,
          accountInfoSaveDelay: config.advanced?.accountInfoSaveDelay ?? 500
        }
      };
      let core = Sa5Core.startup();
      this.debug = new Sa5Debug("sa5-membership");
      this.debug.debug("Initializing");
      const userInfoChanged = core.getHandler("userInfoChanged");
      if (this.isUserInfoChangedCallback(userInfoChanged)) {
        this.config.userInfoUpdatedCallback = userInfoChanged;
      }
    }
    isUserInfoChangedCallback(func) {
      if (!func)
        return false;
      return func.length === 1;
    }
    init() {
      this.debug.group(`WfuUserInfo init - ${Date.now()}.`);
      let forms = document.querySelectorAll("form[data-wf-user-form-type='login']");
      forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
          let emailInput = form.querySelector("#wf-log-in-email");
          let userEmail = emailInput.value;
          let userKey = btoa(userEmail);
          localStorage.setItem("StorageKeys.userKey", userKey);
        });
      });
      forms = document.querySelectorAll("form[data-wf-user-form-type='userAccount']");
      forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
          setTimeout(async () => {
            await this.loadUserInfoAsync();
          }, this.config.advanced.accountInfoSaveDelay);
        });
      });
      this.readyUserInfo();
      this.debug.groupEnd();
    }
    isLoggedIn() {
      return getCookie("wf_loggedin") || false;
    }
    clearUserInfo() {
      this.debug.group("clearUserInfo");
      this.debug.debug("logged out, cleaning info.");
      sessionStorage.removeItem(StorageKeys.user);
      localStorage.removeItem(StorageKeys.userKey);
      this.debug.groupEnd();
    }
    async readyUserInfo() {
      this.debug.group("readyUserInfo");
      if (!this.isLoggedIn()) {
        this.clearUserInfo();
        this.debug.groupEnd();
        return;
      }
      var user = this.loadUserInfoCache();
      if (user) {
        if (this.config.dataBind) {
          this.debug.debug("databinding", user);
          new WfuDataBinder({
            user
          }).bind();
        }
        if (this.config.userInfoUpdatedCallback) {
          this.debug.debug("userCallback", user);
          this.config.userInfoUpdatedCallback(user);
        }
      }
      if (!user)
        await this.loadUserInfoAsync();
      this.debug.groupEnd();
    }
    async getUserKey() {
      var userKey;
      const userKeyEncoded = localStorage.getItem(StorageKeys.userKey);
      if (userKeyEncoded) {
        return atob(userKeyEncoded);
      }
    }
    async loadUserInfoAsync() {
      this.debug.group("loadUserInfoAsync");
      this.debug.debug(`isLoggedIn = ${this.isLoggedIn()}`);
      if (!this.isLoggedIn()) {
        this.clearUserInfo();
        this.debug.groupEnd();
        return;
      }
      sessionStorage.removeItem(StorageKeys.user);
      this.loadUserInfoAsync_loginInfo();
      this.loadUserInfoAsync_accountInfo();
      this.loadUserInfoAsync_accessGroups();
      this.debug.groupEnd();
    }
    async loadUserInfoAsync_loginInfo() {
      this.debug.group("loadUserInfoAsync_loginInfo");
      var user = new Sa5User();
      user.user_data_loaded.email = true;
      const userKey = await this.getUserKey();
      if (!userKey) {
        this.debug.debug("No user key for loading.");
        this.debug.groupEnd();
        return;
      }
      user.email = userKey;
      this.debug.debug("Caching user object [login].", user);
      this.saveUserInfoCache(user);
      this.debug.groupEnd();
    }
    async loadUserInfoAsync_accountInfo() {
      this.debug.group("loadUserInfoAsync_accountInfo");
      if (window.self != window.top) {
        return;
      }
      let userInfoPixel = document.createElement("iframe");
      userInfoPixel.src = "/user-account";
      userInfoPixel.id = "userInfoPixel";
      userInfoPixel.style.display = "none";
      document.body.append(userInfoPixel);
      userInfoPixel.addEventListener("load", async () => {
        this.debug.debug("Loading user account info.");
        this.debug.debug(`%c here`, "color: #ff0000; background-color: yellow;");
        var user = new Sa5User();
        user.user_data_loaded.email = true;
        user.user_data_loaded.account_info = true;
        user.user_data_loaded.custom_fields = true;
        let userAccountEmailInput = null;
        if (userInfoPixel.contentDocument) {
          userAccountEmailInput = userInfoPixel.contentDocument.querySelector("input#wf-user-account-email");
        } else if (userInfoPixel.contentWindow) {
          userAccountEmailInput = userInfoPixel.contentWindow.document.querySelector("input#wf-user-account-email");
        }
        if (!userAccountEmailInput) {
          return;
        }
        const input = userAccountEmailInput;
        const desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
        Object.defineProperty(input, "value", {
          get: desc.get,
          set: function(v) {
            desc.set.call(this, v);
            if ("createEvent" in document) {
              var evt = document.createEvent("HTMLEvents");
              evt.initEvent("change", false, true);
              input.dispatchEvent(evt);
            } else {
              if (userAccountEmailInput) {
                let event = new Event("change", {
                  bubbles: true,
                  cancelable: true
                });
                userAccountEmailInput.dispatchEvent(event);
              }
            }
          }
        });
        userAccountEmailInput.addEventListener("change", async () => {
          this.debug.debug("email field load detected.");
          this.debug.debug(`waiting ${this.config.advanced.accountInfoLoadDelay}ms`);
          setTimeout(
            async () => {
              this.debug.debug(`%c USER-ACCOUNT LOADED`, "color: #ff0000; background-color: yellow;");
              const userKey = userAccountEmailInput.value;
              user.email = userKey;
              let doc = userInfoPixel.contentDocument || userInfoPixel.contentWindow?.document;
              if (doc) {
                let userNameElement = doc.querySelector("[data-wf-user-field='wf-user-field-name']");
                if (userNameElement) {
                  user.name = userNameElement.value;
                }
                let acceptCommunicationsCheckbox = doc.querySelector("#wf-user-account-accept-communications");
                if (acceptCommunicationsCheckbox) {
                  user.accept_communications = acceptCommunicationsCheckbox.checked;
                }
                let userDataFields = doc.querySelectorAll("[data-wf-user-field]");
                userDataFields.forEach((element) => {
                  const id = element.id;
                  const fieldType = element.getAttribute("data-wf-user-field-type");
                  let val = element.value;
                  if (!id)
                    return;
                  if (id.startsWith("wf-user-account-"))
                    return;
                  switch (fieldType) {
                    case "PlainText":
                    case "Email":
                    case "Link":
                    case "Option":
                      user.data[id] = val;
                      return;
                    case "Number":
                      user.data[id] = val;
                      return;
                    case "Bool":
                      let checkbox = element;
                      user.data[id] = checkbox.checked;
                      return;
                    case "FileRef":
                      break;
                  }
                });
              }
              this.debug.debug("Final version", user);
              this.debug.debug("Caching user object [account_info].", user);
              this.saveUserInfoCache(user);
            },
            this.config.advanced.accountInfoLoadDelay
          );
        });
        this.debug.groupEnd();
      });
    }
    async loadUserInfoAsync_accessGroups() {
      this.debug.group("loadUserInfoAsync_accessGroups");
      this.debug.debug("Not yet implemented.");
      this.debug.groupEnd();
    }
    saveUserInfoCache(newUserData) {
      this.debug.group("saveUserInfoCache");
      if (!this.isLoggedIn) {
        this.debug.debug("no user logged in.");
        this.debug.groupEnd();
        return null;
      }
      var userData = this.loadUserInfoCache();
      if (!userData)
        userData = new Sa5User();
      if (newUserData.user_data_loaded.email) {
        this.debug.debug("Merging user email.");
        userData.email = newUserData.email;
      }
      if (newUserData.user_data_loaded.account_info) {
        this.debug.debug("Merging user account_info.");
        userData.email = newUserData.email;
        userData.name = newUserData.name;
        userData.accept_communications = newUserData.accept_communications;
      }
      if (newUserData.user_data_loaded.custom_fields) {
        this.debug.debug("Merging user custom_fields.");
        userData.data = newUserData.data;
      }
      if (newUserData.user_data_loaded.access_groups) {
        this.debug.debug("Merging user access_groups.");
      }
      userData.user_data_loaded.email = userData.user_data_loaded.email || newUserData.user_data_loaded.email;
      userData.user_data_loaded.account_info = userData.user_data_loaded.account_info || newUserData.user_data_loaded.account_info;
      userData.user_data_loaded.custom_fields = userData.user_data_loaded.custom_fields || newUserData.user_data_loaded.custom_fields;
      userData.user_data_loaded.access_groups = userData.user_data_loaded.access_groups || newUserData.user_data_loaded.access_groups;
      this.debug.debug("new user", newUserData);
      this.debug.debug("merged", userData);
      sessionStorage.setItem(
        StorageKeys.user,
        btoa(JSON.stringify(userData))
      );
      if (this.config.dataBind) {
        this.debug.debug("databinding", userData);
        new WfuDataBinder({
          user: userData
        }).bind();
      }
      if (this.config.userInfoUpdatedCallback) {
        this.debug.debug("Notify listeners", userData);
        this.userInfoUpdatedCallback(userData);
      }
      this.debug.groupEnd();
    }
    loadUserInfoCache() {
      this.debug.group("loadUserInfoCache");
      if (!this.isLoggedIn) {
        this.debug.debug("No user logged in.");
        this.debug.groupEnd();
        return null;
      }
      const userInfo = sessionStorage.getItem(StorageKeys.user);
      if (!userInfo) {
        this.debug.debug("No user info to load.");
        this.debug.groupEnd();
        return null;
      }
      this.debug.debug(userInfo);
      this.debug.debug("getting user.");
      const user = new Sa5User();
      user.fromJSON(
        JSON.parse(atob(userInfo))
      );
      this.debug.groupEnd();
      return user;
    }
    expandLoginButton($elem) {
      const $wfLoginButton = $elem.find("[data-wf-user-logout]");
      $elem.click(function() {
        $wfLoginButton.trigger("click");
      });
      $wfLoginButton.click(function(e) {
        e.stopPropagation();
      });
    }
  };

  // src/webflow-membership-routing.ts
  var Sa5MembershipRouting = class {
    constructor(config = {}) {
      this.config = {
        getConfigCallback: config.getConfigCallback,
        routeAfterFirstLogin: config.routeAfterFirstLogin ?? "/",
        routeAfterLogin: config.routeAfterLogin ?? "/"
      };
      this.debug = new Sa5Debug("sa5-membership-routing");
      this.debug.debug("Initializing");
    }
    init() {
      let core = Sa5Core.startup();
      if (!core.getHandler("getMembershipRoutingConfig"))
        return;
      this.config.getConfigCallback = core.getHandler("getMembershipRoutingConfig");
      if (this.config.getConfigCallback) {
        this.config = this.config.getConfigCallback(
          this.config
        );
        console.log("config handler", this.config);
        this.routeUser();
      }
    }
    routeUser() {
      if (this.routeAfterFirstLogin())
        return;
      this.routeAfterLogin();
    }
    routeAfterFirstLogin() {
      if (window.location.pathname != "/" && window.location.pathname != "/log-in")
        return false;
      if (!this.config.routeAfterFirstLogin)
        return false;
      if (!document.referrer)
        return false;
      var urlReferrer = new URL(document.referrer);
      if (urlReferrer.pathname != "/sign-up")
        return false;
      switch (window.location.pathname) {
        case "/":
          window.location.replace(this.config.routeAfterFirstLogin);
          break;
        case "/log-in":
          this.setLoginPageRedirect(this.config.routeAfterFirstLogin);
          break;
      }
      return true;
    }
    routeAfterLogin() {
      console.group(`wfu routeAfterLogin`);
      if (!this.config.routeAfterLogin) {
        console.debug("no routeafterlogin config set.");
        console.groupEnd();
        return false;
      }
      if (!document.querySelectorAll("form[data-wf-user-form-type='login']").length) {
        console.debug("no login forms found.");
        console.groupEnd();
        return false;
      }
      var url = new URL(window.location.href);
      console.debug(`url: ${url.href}`);
      console.debug(`referrer: ${document.referrer}`);
      var urlReferrer = void 0;
      var urlReferrerPath = "";
      if (document.referrer) {
        urlReferrer = new URL(document.referrer);
        urlReferrerPath = urlReferrer.pathname;
      }
      if (url.searchParams.has("usredir")) {
        console.debug("specific redirection specified.");
        console.groupEnd();
        return false;
      }
      var routePath = this.config.routeAfterLogin;
      console.debug(`default routePath: ${routePath}`);
      if (routePath == ".") {
        if (url.pathname == "/log-in") {
          switch (urlReferrerPath) {
            case "":
            case "/log-in":
            case "/sign-up":
              routePath = "/";
            default:
              routePath = urlReferrerPath;
          }
        } else {
          var routePath = url.pathname;
        }
      }
      console.debug(`routePath: ${routePath}`);
      this.setLoginPageRedirect(routePath);
      console.groupEnd();
      return true;
    }
    setLoginPageRedirect(url) {
      document.querySelectorAll("form[data-wf-user-form-type='login']").forEach(function(form) {
        form.setAttribute("data-wf-user-form-redirect", url);
      });
    }
  };

  // src/nocode/webflow-membership.ts
  var init = () => {
    let membership = new Sa5Membership();
    let core = Sa5Core.startup();
    let debug = new Sa5Debug("sa5-membership");
    debug.debug("Initializing");
    console.debug(`isLoggedIn = %c${membership.isLoggedIn()}`, "color: #ff0000;");
    document.querySelectorAll("[wfu-show-logged-in]").forEach((element) => {
      if (membership.isLoggedIn())
        element.removeAttribute("wfu-show-logged-in");
    });
    document.querySelectorAll("[wfu-hide-logged-in]").forEach((element) => {
      if (!membership.isLoggedIn())
        element.removeAttribute("wfu-hide-logged-in");
    });
    document.querySelectorAll("[wfu-login-button]").forEach((element) => {
      membership.expandLoginButton(element);
    });
    membership.init();
    console.log("pre routing");
    new Sa5MembershipRouting().init();
    console.log("post routing");
  };
  document.addEventListener("DOMContentLoaded", init);
})();
//# sourceMappingURL=webflow-membership.js.map
