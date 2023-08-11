(() => {
  // src/webflow-data/sa5-data.ts
  var Sa5Data = class {
    constructor(elem) {
      this.elem = elem;
      this.init();
    }
    init() {
      if (this.elem.nodeName != "SCRIPT") {
        console.error("Invalid element for Sa5Data. Must be a SCRIPT element.", this.elem);
        return;
      }
      this.type = this.elem.getAttribute("type");
      if (this.type != "sygnal/sa5-data-proto" /* SCRIPT_TYPE_SA5_DATA_ITEM */) {
        console.error("Invalid element type for Sa5Data.", this.elem);
        return;
      }
      let data = this.elem.innerText;
      this.value = this.parse(data);
    }
    parse(content) {
      const obj = {};
      const lines = content.split("\n");
      let currentKey = null;
      let currentValue = null;
      let currentType = "string";
      let isMultiLineValue = false;
      for (let line of lines) {
        line = line.trim();
        if (!line)
          continue;
        if (isMultiLineValue) {
          if (line.endsWith(">")) {
            currentValue += "\n" + line.slice(0, -1);
            if (currentKey !== null && currentValue !== null) {
              switch (currentType) {
                case "number":
                  obj[currentKey] = parseFloat(currentValue);
                  break;
                case "boolean":
                  obj[currentKey] = currentValue.toLowerCase() === "true";
                  break;
                default:
                  obj[currentKey] = currentValue;
                  break;
              }
            }
            isMultiLineValue = false;
            currentValue = null;
            currentKey = null;
            currentType = "string";
          } else {
            currentValue += "\n" + line;
          }
          continue;
        }
        const delimiterMatch = line.match(/:(\$|#|\?|)/);
        if (!delimiterMatch)
          continue;
        const delimiter = delimiterMatch[1];
        const parts = line.split(delimiterMatch[0]);
        const key = parts[0].trim();
        let value = parts.slice(1).join(":").trim();
        switch (delimiter) {
          case "":
          case "$":
            currentType = "string";
            break;
          case "#":
            currentType = "number";
            break;
          case "?":
            currentType = "boolean";
            break;
        }
        if (value.startsWith("<")) {
          if (value.endsWith(">")) {
            value = value.slice(1, -1);
            switch (currentType) {
              case "number":
                obj[key] = parseFloat(value);
                break;
              case "boolean":
                obj[key] = value.toLowerCase() === "true";
                break;
              default:
                obj[key] = value;
                break;
            }
          } else {
            isMultiLineValue = true;
            currentKey = key;
            currentValue = value.slice(1);
          }
        } else {
          switch (currentType) {
            case "number":
              obj[key] = parseFloat(value);
              break;
            case "boolean":
              obj[key] = value.toLowerCase() === "true";
              break;
            default:
              obj[key] = value;
              break;
          }
        }
      }
      return obj;
    }
    parse2(content) {
      const obj = {};
      const lines = content.split("\n");
      let currentKey = null;
      let currentValue = null;
      let isMultiLineValue = false;
      for (let line of lines) {
        line = line.trim();
        if (!line)
          continue;
        if (isMultiLineValue) {
          if (line.endsWith(">")) {
            currentValue += "\n" + line.slice(0, -1);
            if (currentKey !== null && currentValue !== null) {
              obj[currentKey] = currentValue;
            }
            isMultiLineValue = false;
            currentValue = null;
            currentKey = null;
          } else {
            currentValue += "\n" + line;
          }
          continue;
        }
        const parts = line.split(":");
        const key = parts.shift()?.trim() || "";
        const value = parts.join(":").trim();
        if (value.startsWith("<")) {
          if (value.endsWith(">")) {
            obj[key] = value.slice(1, -1);
          } else {
            isMultiLineValue = true;
            currentKey = key;
            currentValue = value.slice(1);
          }
        } else {
          obj[key] = value;
        }
      }
      return obj;
    }
  };
})();
//# sourceMappingURL=sa5-data.js.map
