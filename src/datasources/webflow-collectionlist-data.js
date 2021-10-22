
/*
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Creates a data source from a Webflow Collection list.
 */

export class Database {
    data = new Map();
}

export var loadAllDataSources = function () {

    // Find all elements which specify a data-source
    // for data binding
    var dataSources = $('div[wfu-data]');

    console.log(`sources found = ${dataSources.length}`);

    var db = new Database();

    // Iterate and bind each individually
    $.each(dataSources, function (i, elem) {

        console.log(`processing source ${elem.getAttribute("wfu-data")}`);

        var data = prepareDataSource(elem.getAttribute("wfu-data"));

        // add to database
        db.data.set(
            elem.getAttribute("wfu-data"),
            data
        );
    })

    return db;
}

export var prepareDataSource = function (name) {

    // Find all elements which specify a data-source
    // for data binding
    var dataSource = $(`div[wfu-data='${name}']`);
    if (!dataSource) {
        console.warn(`Datasource: '${name}' does not exist`);
        return;
    }

    // Aggregate JSON Data
    // var data = $('script');
    var data = $(dataSource).find('script');
    console.log(`items = ${data.length}`);

    var items = []; // place to store the pairs
    data.each(function (index, elem) { //loop over the keys
        items.push(elem.textContent);
    })

    var json = '[' + items.join() + ']';

//    console.log(json);

    return JSON.parse(json);
}

