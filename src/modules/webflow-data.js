
// v2.1
// Sygnal Technology Group
// http://sygnal.com

export var getCsv = function (url) {

    var csv = null;

    $.ajax({
        url: url,
        async: false, // deprecated
        success: function (csvd) {

            csv = csvd;

            //var items = $.csv.toObjects(csvd);

            //json = JSON.stringify(
            //    items,
            //    null,
            //    prettyprint ? 2 : 0 // pretty print
            //);

        },
        dataType: "text",
        complete: function () {
            // call a function on complete
        }
    });

    return csv;

    // Consider Promise approach
    //try {
    //    var csvfile = url; // vars.csvFile;
    //    return new Promise(function (resolve, reject) {
    //        var request = new XMLHttpRequest();
    //        request.open("GET", url, true);
    //        request.onload = function () {
    //            if (request.status == 200) {
    //                resolve(request.response);
    //            } else {
    //                reject(Error(request.statusText));
    //            }
    //        };

    //        request.onerror = function () {
    //            reject(Error('Error fetching data.'));
    //        };
    //        request.send();
    //    });
    //} catch (err) {
    //    console.error(err);
    //}

}

export var csvToJson = function (csvd, prettyprint = false) {

    var items = $.csv.toObjects(csvd);

    var json = JSON.stringify(
        items,
        null,
        prettyprint ? 2 : 0 // pretty print
    );

    return json;
}

export var getCsvAsJson = function (url, prettyprint = false) {

    var json = null;

    $.ajax({
        url: url,
        async: false, // deprecated
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

