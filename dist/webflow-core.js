(()=>{var l=class{constructor(e){this._enabled=!1;this._label=e}get enabled(){var e=Boolean(localStorage.getItem("wfuDebug"));return e=e||this._enabled,e}set enabled(e){this._enabled=e}group(e){this.enabled&&console.group(e)}groupEnd(){this.enabled&&console.groupEnd()}debug(...e){this.enabled&&console.debug(this._label,...e)}};})();
//# sourceMappingURL=webflow-core.js.map
