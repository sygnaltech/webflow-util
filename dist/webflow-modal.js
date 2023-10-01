(() => {
  // node_modules/typescript-cookie/dist/typescript-cookie.mjs
  var encodeName = (name) => encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
  var encodeValue = (value) => {
    return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  };
  var decodeName = decodeURIComponent;
  var decodeValue = (value) => {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  };
  function stringifyAttributes(attributes) {
    attributes = Object.assign({}, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires != null) {
      attributes.expires = attributes.expires.toUTCString();
    }
    return Object.entries(attributes).filter(([key, value]) => value != null && value !== false).map(([key, value]) => value === true ? `; ${key}` : `; ${key}=${value.split(";")[0]}`).join("");
  }
  function get(name, decodeValue2, decodeName2) {
    const scan = /(?:^|; )([^=]*)=([^;]*)/g;
    const jar = {};
    let match;
    while ((match = scan.exec(document.cookie)) != null) {
      try {
        const found = decodeName2(match[1]);
        jar[found] = decodeValue2(match[2], found);
        if (name === found) {
          break;
        }
      } catch (e) {
      }
    }
    return name != null ? jar[name] : jar;
  }
  var DEFAULT_CODEC = Object.freeze({
    decodeName,
    decodeValue,
    encodeName,
    encodeValue
  });
  var DEFAULT_ATTRIBUTES = Object.freeze({
    path: "/"
  });
  function setCookie(name, value, attributes = DEFAULT_ATTRIBUTES, { encodeValue: encodeValue$1 = encodeValue, encodeName: encodeName$1 = encodeName } = {}) {
    return document.cookie = `${encodeName$1(name)}=${encodeValue$1(value, name)}${stringifyAttributes(attributes)}`;
  }
  function getCookie(name, { decodeValue: decodeValue$1 = decodeValue, decodeName: decodeName$1 = decodeName } = {}) {
    return get(name, decodeValue$1, decodeName$1);
  }
  function getCookies({ decodeValue: decodeValue$1 = decodeValue, decodeName: decodeName$1 = decodeName } = {}) {
    return get(void 0, decodeValue$1, decodeName$1);
  }
  function removeCookie(name, attributes = DEFAULT_ATTRIBUTES) {
    setCookie(name, "", Object.assign({}, attributes, {
      expires: -1
    }));
  }
  function init(converter, defaultAttributes) {
    const api = {
      set: function(name, value, attributes) {
        return setCookie(name, value, Object.assign({}, this.attributes, attributes), {
          encodeValue: this.converter.write
        });
      },
      get: function(name) {
        if (arguments.length === 0) {
          return getCookies(this.converter.read);
        }
        if (name == null) {
          return;
        }
        return getCookie(name, this.converter.read);
      },
      remove: function(name, attributes) {
        removeCookie(name, Object.assign({}, this.attributes, attributes));
      },
      withAttributes: function(attributes) {
        return init(this.converter, Object.assign({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(Object.assign({}, this.converter, converter2), this.attributes);
      }
    };
    const config = {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    };
    return Object.create(api, config);
  }
  var compat = init({ read: DEFAULT_CODEC.decodeValue, write: DEFAULT_CODEC.encodeValue }, DEFAULT_ATTRIBUTES);

  // src/webflow-modal.ts
  var Sa5Modal = class {
    constructor(element) {
      this._element = element;
    }
    getModalKeyName() {
      return `wfu-modal_${this._name}`;
    }
    isSuppressed() {
      const suppressed = getCookie(
        this.getModalKeyName()
      );
      return suppressed;
    }
    suppress(val, duration) {
      setCookie(
        this.getModalKeyName(),
        val,
        {
          expires: duration
        }
      );
    }
    unSuppress() {
      removeCookie(
        this.getModalKeyName()
      );
    }
    init() {
      this._name = this._element.getAttribute("wfu-modal") || "default";
      if (this.isSuppressed()) {
        this._element.remove();
        return;
      }
      this._element.removeAttribute("wfu-modal-trigger");
      document.querySelectorAll("[wfu-modal-close]").forEach((element) => {
        element.addEventListener("click", () => {
          const modalClose = element;
          const modal = modalClose.closest("[wfu-modal]");
          const modalCloseVal = modalClose.getAttribute("wfu-modal-close") || "true";
          const modalCloseType = modal.getAttribute("wfu-modal-close-type") || "auto";
          const modalSuppressDuration = parseFloat(modal.getAttribute("wfu-modal-suppress-days")) || 9999;
          this.suppress(
            modalCloseVal,
            modalSuppressDuration
          );
          switch (modalCloseType) {
            case "interaction":
              break;
            case "auto":
            default:
              modal.remove();
              break;
          }
        });
      });
    }
  };
})();
/*! typescript-cookie v1.0.6 | MIT */
//# sourceMappingURL=webflow-modal.js.map
