(()=>{var r=class{constructor(o){this.config=o}Process(){console.debug("Dynamic attributes processed.",this.config);var o=document.querySelectorAll("*");o.forEach(function(e){for(var s=0;s<e.attributes.length;s++){var t=e.attributes[s];if(t.name.startsWith("x-")){var c=t.name.slice(2);e.setAttribute(c,t.value)}}})}};})();
//# sourceMappingURL=dynamic-attributes.js.map
