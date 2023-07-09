
/*
 * webflow-format
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Data Formatting Utilities
 */




export class WebflowFormat {

    // Initialize
    constructor() {

    }

    // Simplest-case encoding for HTML5
    formatField  (elem : HTMLElement) {

        // How to assign JSON string to Javascript variable?
        // https://stackoverflow.com/a/31372143
        const fs = new Map([
            ["usd", {
                "locale": 'en-US',
                "style": 'currency',
                "currency": 'USD',
            }],
            ["gbp", {
                "locale": 'en-US',
                "style": 'currency',
                "currency": 'GBP',
            }],
            ["eur", {
                "locale": 'en-US',
                "style": 'currency',
                "currency": 'EUR',
            }],
            ["jpy", {
                "locale": 'ja-JP',
                "style": 'currency',
                "currency": 'JPY'
            }],
            ["percent", {
                "locale": 'en-US',
                "style": 'percent',
            }],
            ["%", {
                "locale": 'en-US',
                "style": 'percent',
            }],
            ["comma", {
                "locale": 'en-US',
    //            "style": 'percent',
            }],
            [",", {
                "locale": 'en-US',
    //            "style": 'percent',
            }],
        ]);
        // Important- this approach handles common scenarios,
        // but does not handle quotes or special accented characters.
        // See https://www.php.net/htmlspecialchars

        elem.innerText
//        const $item = $(elem);
        const txt = elem.innerText; //$item.text();
        const val: number = parseFloat(txt);

        var fn = elem.getAttribute("wfu-format"); // e.g. "usd";

        // Determine the number of decimal places
        // this is set in the Designer, as the formatting of the numeric item
        var decimals = 0;
        if (txt.includes('.'))
            decimals = txt.split('.')[1].length;

        // Get the base formatting rules
        var f = fs.get(fn);

    //    console.log(fn);
    //    console.log(JSON.stringify(f));

        var settings = {};
        settings["style"] = f.style;
        settings["currency"] = f.currency;
        settings["minimumFractionDigits"] = decimals;
        settings["maximumFractionDigits"] = decimals;
        //    settings.roundingIncrement = 1; 
    //    console.log(JSON.stringify(settings));

    // Format the item
        const formatter = new Intl.NumberFormat(f.locale, settings);

        // Apply the formatting
        elem.innerHTML = formatter.format(val);

    }

}



