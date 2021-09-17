
// v2.1
// Sygnal Technology Group
// http://sygnal.com

var WebflowDataUtil = function (options) {

    const version = 'v2.1';

    this.getVersion = function () {
        return version;
    }

    // Option variables
    var vars = {
        logging: false,
    };

    var root = this;

    // Constructor
    this.construct = function (options) {
        $.extend(vars, options);

        if (vars.logging)
            console.log("Started Sygnal Util " + version);

    };

    this.dataBindAll = function () {

        if (vars.logging)
            console.log("Sygnal Databinding");

        // Find all elements which specify a data-source
        // for data binding
        var dataBoundElements = $('[data-source]');

        // Iterate and bind each individually
        $.each(dataBoundElements, function (i, elem) {
            root.dataBind(elem);
        })

    }

    this.dataBind = function (elem) {

       // Determine element type
        var elemType = root.getElemType(elem);

       // Get the data-source name
       var dataSource = elem.getAttribute('data-source');

       // Handle missing source specification
       if (!dataSource) {
          console.warn ('dataBound element found with no datasource specified.');
          return;
       }

       // Get data (build data source)
        var data = root.getDataSource(dataSource);

       // Do data binding
       switch (elemType) {
       case 'select': 
          $.each(data, function (key, entry) {
         
             // create new option element
             var opt = document.createElement('option');

             // create text node to add to option element (opt)
              console.log(entry.text);

              // HTML Decode JSON for Select Option element
              var decodedText = $("<textarea/>").html(entry.text).val();
              console.log(decodedText);

              opt.appendChild(document.createTextNode(decodedText));

             // set value property of opt
             opt.value = entry.id; 

             // add opt to end of select box (sel)
             elem.appendChild(opt);         
         
          })
   
          break;
       default: 

        if (vars.logging)
             console.warn ('Unable to databind unknown element type.');
      
          break;
       }

    }

    // Amalgamates from internally tagged DIVs
    this.getDataSource = function (name) {

       // Aggregate JSON Data
       var data = $('*[data="' + name + '"]'); 

       var items = []  // place to store the pairs
       data.each(function(index, elem){ //loop over the keys
          items.push(elem.textContent);
       })

       var json = '[' + items.join() + ']';

       return JSON.parse(json); 
    }

    this.getElemType = function (elem) {

        // <select> element
        // listbox or drop-down list
        if (elem instanceof HTMLSelectElement) {
            return 'select';
        }

        // This is an unknown and unsupported element type
        // for databinding
        return 'unknown';
    }

    this.applyDynamicAttributes = function() {

        if (vars.logging)
            console.log("Sygnal Dynamic Attributes");

        // Find all <data> elements which specify a data-source
        // for data binding
        var dynamicAttributeDatas = $('data[type="apply-attr"]');

        // Iterate and bind each individually
        $.each(dynamicAttributeDatas, function (i, elem) {

            var data = this;

            // Webflow wraps EMBEDS in a DIV, so we work from that parent as a reference
            var dataContainer = $(data).parent();

            // hide this node
            $(dataContainer).attr("style", "display: none;");

    //        console.log("Found Data " + $(data).html());

            // if "prior"

            var target = null;

            // Webflow wraps EMBEDS in a DIV, so we work from that parent as a reference
            switch ($(data).attr("apply")) {
                case "prev":
                    target = $(dataContainer).prev();
                    break;
                case "next":
                    target = $(dataContainer).next();
                    break;
                case "parent":
                    target = $(dataContainer).parent();
                    break;
                default:

                    if (vars.logging)
                        console.warn("Unknown apply setting for param.");
            }

    //        var target = $(dataContainer).prev();

            // Iterate through attributes, and apply them
            $(this).children().each(function (cindex) {
                var dataItem = this;

    //            console.log("Adding attr: " + $(dataItem).attr("attr") + " = " + $(dataItem).attr("value"));

                $(target).attr($(dataItem).attr("attr"), $(dataItem).attr("value"));
            });

        });

    }



    this.getCSV = function getCSV(url) {

        if (vars.logging)
            console.log("Loading CSV file " + url); // vars.csvFile);

        try {
            var csvfile = url; // vars.csvFile;
            return new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.open("GET", url, true);
                request.onload = function () {
                    if (request.status == 200) {
                        resolve(request.response);
                    } else {
                        reject(Error(request.statusText));
                    }
                };

                request.onerror = function () {
                    reject(Error('Error fetching data.'));
                };
                request.send();
            });
        } catch (err) {
            console.error(err);
        }
    }

    this.getCSVasJSON = function(url, prettyprint = false) {

        console.log('getCSVasJSON()');
        console.log(url);

        var json = null;

        $.ajax({
            url: url,
            async: false,
            success: function (csvd) {
                
                var items = $.csv.toObjects(csvd);

                json = JSON.stringify(
                    items,
                    null,
                    prettyprint ? 2 : 0 // pretty print
                ); 

            },
            dataType: "text",
            complete: function () {
                // call a function on complete
            }
        });

        return json;
    }

}
