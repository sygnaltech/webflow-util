
// import { hello } from './lib/jquery.csv.js';

// v2.1
// Sygnal Technology Group
// http://sygnal.com

import { WebflowDataUtil } from './webflow-data.js';

export var WebflowTableUtil = function (options) {

    const version = 'v2.1';

    this.getVersion = function () {
        return version;
    }

    // Option variables
    var vars = {
        logging: true,
        csvFile: null,
    };

    var root = this;

    // Constructor
    this.construct = function (options) {
        $.extend(vars, options);

        console.log("test1");

        if (vars.logging)
            console.log("Started Sygnal Util " + version);

    };

    //// Constructor method
    //this.CsvToTable = function () {
    //    this.csvFile = null;

    //    // Create options by extending defaults with the passed in arugments
    //    if (arguments[0] && typeof arguments[0] === "object") {
    //        this.options = arguments[0];
    //    }

    //}

    //CsvToTable.prototype.run = function () {
    //    return buildTable.call(this);
    //}


    function isNotEmpty(row) {
        return row !== "";
    }

    // polyfill `.filter()` for ECMAScript <5.1
    // `f` must be pure (not modify original array).
    if (!Array.prototype.filter) {
        Array.prototype.filter = function (f) {
            "use strict";
            var p = arguments[1];
            var o = Object(this);
            var len = o.length;
            for (var i = 0; i < len; i++) {
                if (i in o) {
                    var v = o[i];
                    f.call(p, v, i, o);
                }
            }

            return this;
        };
    }

    //function getCSV(url) {

    //    if (vars.logging)
    //        console.log("Loading CSV file " + url);

    //    try {
    //        var csvfile = url; // vars.csvFile;
    //        return new Promise(function (resolve, reject) {
    //            var request = new XMLHttpRequest();
    //            request.open("GET", url, true);
    //            request.onload = function () {
    //                if (request.status == 200) {
    //                    resolve(request.response);
    //                } else {
    //                    reject(Error(request.statusText));
    //                }
    //            };

    //            request.onerror = function () {
    //                reject(Error('Error fetching data.'));
    //            };
    //            request.send();
    //        });
    //    } catch (err) {
    //        console.error(err);
    //    }
    //}

    this.BuildTable = function (elem, url) {

        if (vars.logging)
            console.log("GuildTable");

        var webflowDataUtil = new WebflowDataUtil({
            logging: true, // enable logging to console
        });

        webflowDataUtil.getCSV(url).then(function (response) {

            root.BuildTableFromArray(elem, response);

        }, function (error) {
            console.error(error);
        });

    }

    this.BuildTableFromArray = function (elem, dataArray) {

        var allRows = dataArray.split(/\r?\n|\r/).filter(isNotEmpty);

        var table = '<table>';
        for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
            if (singleRow === 0) {
                table += '<thead>';
                table += '<tr>';
            } else {
                table += '<tr>';
            }
            var rowCells = allRows[singleRow].split(',');
            for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
                if (singleRow === 0) {
                    table += '<th>';
                    table += rowCells[rowCell];
                    table += '</th>';
                } else {
                    table += '<td>';
                    table += rowCells[rowCell];
                    table += '</td>';
                }
            }
            if (singleRow === 0) {
                table += '</tr>';
                table += '</thead>';
                table += '<tbody>';
            } else {
                table += '</tr>';
            }
        }
        table += '</tbody>';
        table += '</table>';

        elem.html(table);

    }

    //this.dataBind = function (elem) {

    //   // Determine element type
    //    var elemType = root.getElemType(elem);

    //   // Get the data-source name
    //   var dataSource = elem.getAttribute('data-source');

    //   // Handle missing source specification
    //   if (!dataSource) {
    //      console.warn ('dataBound element found with no datasource specified.');
    //      return;
    //   }

    //   // Get data (build data source)
    //    var data = root.getDataSource(dataSource);

    //   // Do data binding
    //   switch (elemType) {
    //   case 'select': 
    //      $.each(data, function (key, entry) {
         
    //         // create new option element
    //         var opt = document.createElement('option');

    //         // create text node to add to option element (opt)
    //          console.log(entry.text);

    //          // HTML Decode JSON for Select Option element
    //          var decodedText = $("<textarea/>").html(entry.text).val();
    //          console.log(decodedText);

    //          opt.appendChild(document.createTextNode(decodedText));

    //         // set value property of opt
    //         opt.value = entry.id; 

    //         // add opt to end of select box (sel)
    //         elem.appendChild(opt);         
         
    //      })
   
    //      break;
    //   default: 

    //    if (vars.logging)
    //         console.warn ('Unable to databind unknown element type.');
      
    //      break;
    //   }

    //}

    //// Amalgamates from internally tagged DIVs
    //this.getDataSource = function (name) {

    //   // Aggregate JSON Data
    //   var data = $('*[data="' + name + '"]'); 

    //   var items = []  // place to store the pairs
    //   data.each(function(index, elem){ //loop over the keys
    //      items.push(elem.textContent);
    //   })

    //   var json = '[' + items.join() + ']';

    //   return JSON.parse(json); 
    //}

    //this.getElemType = function (elem) {

    //    // <select> element
    //    // listbox or drop-down list
    //    if (elem instanceof HTMLSelectElement) {
    //        return 'select';
    //    }

    //    // This is an unknown and unsupported element type
    //    // for databinding
    //    return 'unknown';
    //}

    //this.applyDynamicAttributes = function() {

    //    if (vars.logging)
    //        console.log("Sygnal Dynamic Attributes");

    //    // Find all <data> elements which specify a data-source
    //    // for data binding
    //    var dynamicAttributeDatas = $('data[type="apply-attr"]');

    //    // Iterate and bind each individually
    //    $.each(dynamicAttributeDatas, function (i, elem) {

    //        var data = this;

    //        // Webflow wraps EMBEDS in a DIV, so we work from that parent as a reference
    //        var dataContainer = $(data).parent();

    //        // hide this node
    //        $(dataContainer).attr("style", "display: none;");

    ////        console.log("Found Data " + $(data).html());

    //        // if "prior"

    //        var target = null;

    //        // Webflow wraps EMBEDS in a DIV, so we work from that parent as a reference
    //        switch ($(data).attr("apply")) {
    //            case "prev":
    //                target = $(dataContainer).prev();
    //                break;
    //            case "next":
    //                target = $(dataContainer).next();
    //                break;
    //            case "parent":
    //                target = $(dataContainer).parent();
    //                break;
    //            default:

    //                if (vars.logging)
    //                    console.warn("Unknown apply setting for param.");
    //        }

    ////        var target = $(dataContainer).prev();

    //        // Iterate through attributes, and apply them
    //        $(this).children().each(function (cindex) {
    //            var dataItem = this;

    ////            console.log("Adding attr: " + $(dataItem).attr("attr") + " = " + $(dataItem).attr("value"));

    //            $(target).attr($(dataItem).attr("attr"), $(dataItem).attr("value"));
    //        });

    //    });

    //}

}
