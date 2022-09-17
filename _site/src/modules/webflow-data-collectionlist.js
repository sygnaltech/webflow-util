
/*
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Designed to aggregate JSON excerpts produced by a Webflow Collection List
 * into a single JSON datasource, for use in other places, such as Form Select data-binding.
 */

// Amalgamates from internally tagged DIVs
export var getDataSource = function (name) {

    // Aggregate JSON Data
    var data = $('*[data="' + name + '"]');

    var items = []  // place to store the pairs
    data.each(function (index, elem) { //loop over the keys
        items.push(elem.textContent);
    })

    var json = '[' + items.join() + ']';

    return JSON.parse(json);
}

