(() => {
  // src/utils.ts
  function identifyElement(element) {
    switch (element.tagName) {
      case "A":
        return "HTMLLinkElement";
      case "INPUT": {
        const inputElement = element;
        switch (inputElement.type) {
          case "checkbox":
            return "HTMLCheckboxElement";
          case "radio":
            return "HTMLRadioElement";
          case "file":
            return "HTMLFileInputElement";
          default:
            return "HTMLInputElement";
        }
      }
      case "SELECT":
        return "HTMLSelectElement";
      case "TEXTAREA":
        return "HTMLTextAreaElement";
      case "BUTTON":
        return "HTMLButtonElement";
      default:
        return "HTMLElement";
    }
  }
  function selectOptionByValue(selectElement, value) {
    for (let i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === value) {
        selectElement.options[i].selected = true;
        break;
      }
    }
  }
  function booleanValue(val) {
    switch (val.toLowerCase()) {
      case "false":
      case "f":
      case "0":
      case "no":
      case "off":
      case void 0:
      case "undefined":
      case null:
      case "null":
        return false;
      default:
        return true;
    }
  }
  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
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
  function jsonMapReplacer(key, value) {
    if (value instanceof Map) {
      return {
        dataType: "Map",
        value: Array.from(value.entries())
      };
    } else {
      return value;
    }
  }
  function jsonMapReviver(key, value) {
    console.log("reviving", key, typeof value, value);
    if (typeof value === "object" && value !== null) {
      if (value.dataType === "Map") {
        return new Map(value.value);
      }
    }
    return value;
  }
  function decodeHTML(text) {
    let parser = new DOMParser();
    let dom = parser.parseFromString(
      `<!doctype html><body>${text}`,
      "text/html"
    );
    return dom.body.textContent || "";
  }
  function encodeHTML(text) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }
  function between(value, a, b, inclusive) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    return inclusive ? value >= min && value <= max : value > min && value < max;
  }
  function outerHTML(element) {
    return element.outerHTML;
  }
  function isMobile() {
    let check = false;
    (function(a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        check = true;
    })(navigator.userAgent || navigator.vendor || window["opera"]);
    return check;
  }
  function executeFunctionByName(functionName, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
  }
  function executeFunctionByName2(functionName, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
  }
  function shuffleElements(elements) {
    const allElems = Array.from(elements);
    const getRandom = (max) => Math.floor(Math.random() * max);
    const shuffled = allElems.map(() => {
      const random = getRandom(allElems.length);
      const randEl = allElems[random].cloneNode(true);
      allElems.splice(random, 1);
      return randEl;
    });
    allElems.forEach((elem, i) => {
      if (elem.parentNode) {
        elem.parentNode.replaceChild(shuffled[i], elem);
      }
    });
    return shuffled;
  }
  function autosizeIFrames() {
    const iframes = Array.from(
      document.querySelectorAll("iframe[wfu='html.iframe.autofit']")
    );
    iframes.forEach((iframe) => {
      iframe.addEventListener("load", () => {
        setInterval(() => {
          if (iframe.contentDocument) {
            iframe.style.height = `${iframe.contentDocument.body.scrollHeight}px`;
          }
        }, 200);
      });
    });
  }
  function applyDynamicAttributes() {
    const dynamicAttributeDatas = Array.from(
      document.querySelectorAll("data[wfu-attr]")
    );
    dynamicAttributeDatas.forEach((data) => {
      const dataContainer = data.parentElement;
      if (dataContainer) {
        dataContainer.style.display = "none";
      }
      let target = null;
      switch (data.getAttribute("wfu-attr-target")) {
        case "prev":
          target = dataContainer?.previousElementSibling;
          break;
        case "next":
          target = dataContainer?.nextElementSibling;
          break;
        case "parent":
          target = dataContainer?.parentElement;
          break;
        default:
          console.warn("Unknown apply setting for param.");
      }
      if (target) {
        target.setAttribute(data.getAttribute("wfu-attr") || "", data.getAttribute("wfu-attr-val") || "");
      }
    });
  }
  var formatJson = (data) => {
    let json;
    if (typeof data !== "string") {
      json = JSON.stringify(data, void 0, 2);
    }
    return json;
  };
  var formatJsonAsHtml = (data) => {
    let json = formatJson(data);
    json = json?.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return json?.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      (match) => {
        let cls = "wfu-json-number";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "wfu-json-key";
          } else {
            cls = "wfu-json-string";
          }
        } else if (/true|false/.test(match)) {
          cls = "wfu-json-boolean";
        } else if (/null/.test(match)) {
          cls = "wfu-json-null";
        }
        return `<span class="${cls}">${match}</span>`;
      }
    ) || "";
  };
  var displayDataAsHtml = (el, data) => {
    const pre = document.createElement("pre");
    pre.className = "wfu-code";
    pre.innerHTML = formatJsonAsHtml(data);
    el.innerHTML = "";
    el.appendChild(pre);
  };
  function expandMacrosInElement(el, dict) {
    let html = el.innerHTML;
    html = expandMacrosInText(html, dict);
    el.innerHTML = html;
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
  function sequence(groupElement) {
    const groupName = groupElement.getAttribute("wfu-seq-group");
    console.log("sequence group", groupName);
    let i = 0;
    const elements = groupElement.querySelectorAll(`[wfu-seq="${groupName}"]`);
    elements.forEach((element) => {
      element.innerHTML = (++i).toString();
    });
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
})();
//# sourceMappingURL=utils.js.map
