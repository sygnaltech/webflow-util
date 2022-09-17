
/*
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Creates a data source from a Webflow Collection list.
 */

// import { Database } from '../modules/webflow-data.js';


export var prepareCollectionListDataSource = function (dataSource) {

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

