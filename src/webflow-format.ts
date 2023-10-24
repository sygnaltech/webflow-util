
/*
 * webflow-format
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Data Formatting Utilities
 */


import { Sa5Attribute } from './globals';
import { Sa5Core } from './webflow-core'
import { Sa5Debug } from './webflow-core/debug';
import { WfuDateHandler } from './webflow-format/date-handler/date-handler';
import { WfuDateHandlerFactory } from './webflow-format/date-handler/date-handler-factory';

export class WebflowFormat {

    debug: Sa5Debug;

    // Initialize
    constructor() { 

        this.debug = new Sa5Debug("sa5-format");

    }

    // Simplest-case encoding for HTML5
    formatField(elem: HTMLElement) {

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

//         elem.innerText
//        const $item = $(elem);
        const txt = elem.innerText; //$item.text();
        const val: number = parseFloat(txt);

        var fn = elem.getAttribute(
            Sa5Attribute.ATTR_FORMAT // "wfu-format"
            ); // e.g. "usd";

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

    formatDate(element: HTMLElement) {


        // Get the format string from the 'wfu-format-date' attribute
        const formatString = element.getAttribute(
            Sa5Attribute.ATTR_FORMAT_DATE // "wfu-format-date"
            );
        
        // Check handler
        // Require moment 
        const formatHandler = element.getAttribute(
            Sa5Attribute.ATTR_FORMAT_HANDLER // "wfu-format-handler"
            );
        if (!formatHandler) {
          console.error("SA5 format date is used, but no handler is specified.");
        }

//        handler: WfuDateHandler;
        const handler = WfuDateHandlerFactory.createFromElement(element);

        const date: Date = new Date(element.textContent); 
        const result: string = handler.formatDate(date);

        element.textContent = result; 

        // if (formatHandler == "moment") {

        //     // Get the original content (assumed to be a valid date)
        //     const originalContent = element.textContent;
            
        //     // Use Moment.js to format the date
        //     const formattedDate = moment(originalContent).format(formatString);

        //     this.debug.debug (`formatting date ${originalContent} -> ${formattedDate}`);
            
        //     // Update the element's content
        //     element.textContent = formattedDate;

        // } else {
        //     if (formatHandler)
        //         console.error(`SA5 format date is used, but handler ${formatHandler} is unknown`);
        // }
        
        // Remove the 'wfu-format-date' attribute
        element.removeAttribute(
            Sa5Attribute.ATTR_FORMAT_DATE // "wfu-format-date"
            );

// Luxon & ordinals

/*
        const { DateTime } = require('luxon');

        function getDayWithOrdinal(dateTime) {
          const day = dateTime.toFormat('d');
          const lastDigit = day.slice(-1);
          let suffix = 'th';
        
          if (day !== '11' && day !== '12' && day !== '13') {
            if (lastDigit === '1') {
              suffix = 'st';
            } else if (lastDigit === '2') {
              suffix = 'nd';
            } else if (lastDigit === '3') {
              suffix = 'rd';
            }
          }
        
          return day + suffix;
        }
        
        const dt = DateTime.fromISO('2023-10-18');
        const dayWithOrdinal = getDayWithOrdinal(dt);
        console.log(dayWithOrdinal); // Outputs "18th"
      */  

    }

}


// Register
Sa5Core.startup(WebflowFormat);

