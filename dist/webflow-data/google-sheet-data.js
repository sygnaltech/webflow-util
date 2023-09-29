(() => {
  // src/webflow-data/google-sheet-data.ts
  var getGoogleSheetCsvUrl = function(id) {
    return `https://docs.google.com/spreadsheets/d/${id}/export?format=csv`;
  };
  var getGoogleSheetData = function(id) {
    return new Promise((resolve, reject) => {
      var url = getGoogleSheetCsvUrl(id);
      console.log(url);
      var json = getCsvAsData(
        getGoogleSheetCsvUrl(id)
      );
      resolve(json);
    });
  };
  var getGoogleSheetDataUrl = function(url) {
    return new Promise((resolve, reject) => {
      console.log(url);
      var json = getCsvAsData(
        url
      );
      resolve(json);
    });
  };
})();
//# sourceMappingURL=google-sheet-data.js.map
