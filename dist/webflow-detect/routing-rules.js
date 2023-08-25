(() => {
  // src/webflow-detect/routing-rules.ts
  var Sa5RoutingRules = class {
    constructor(detectController) {
      this.detectController = detectController;
    }
    load(rules) {
      this.rules = rules;
      for (const rule of rules) {
        switch (rule.type) {
          case "geo-country": {
            this.detectController.countries = new Map(
              rule.route
            );
            break;
          }
        }
      }
    }
  };
})();
//# sourceMappingURL=routing-rules.js.map
