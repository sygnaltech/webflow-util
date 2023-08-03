(() => {
  // src/webflow-data-collectionlist.ts
  var getDataSource = function(name) {
    let data = document.querySelectorAll('*[data="' + name + '"]');
    let items = [];
    data.forEach((elem) => {
      items.push(elem.textContent || "");
    });
    let json = "[" + items.join() + "]";
    return JSON.parse(json);
  };
})();
//# sourceMappingURL=webflow-data-collectionlist.js.map
