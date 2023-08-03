
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
    let data = document.querySelectorAll('*[data="' + name + '"]');

    let items: string[] = [];  // place to store the pairs
    data.forEach((elem) => { //loop over the keys
        items.push(elem.textContent || "");
    })

    let json = '[' + items.join() + ']';

    return JSON.parse(json);
}

