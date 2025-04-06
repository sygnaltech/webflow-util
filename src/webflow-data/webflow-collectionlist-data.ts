
/*
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Creates a data source from a Webflow Collection list.
 */

// import { Database } from '../modules/webflow-data.js';


export const prepareCollectionListDataSource = (dataSource: Element) => {
    // Aggregate JSON Data
    let data = dataSource.querySelectorAll('script');
    console.log(`items = ${data.length}`);

    let items: string[] = []; // place to store the pairs
    data.forEach((elem) => { //loop over the keys
        items.push(elem.textContent || "");
    })

    let json = '[' + items.join() + ']';

    return JSON.parse(json);
}


