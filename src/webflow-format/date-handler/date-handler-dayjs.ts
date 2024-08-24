


import { RelativeDate, TimeframeScale, WfuDateHandler } from './date-handler';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';
import advancedFormat from 'dayjs/plugin/advancedFormat' // load on demand
import relativeTime from 'dayjs/plugin/relativeTime' // load on demand

dayjs.extend(advancedFormat) // use plugin
dayjs.extend(relativeTime) // use plugin
dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(localeData); 

export class WfuDateHandler_DayJs extends WfuDateHandler {

    constructor(config: any) {
        super(config); // call the super class constructor and pass in the name parameter
    }

    calculateAge(date: Date): number {
        const diff: number = new Date().getTime() - date.getTime();
        return Math.floor(diff / 31557600000); // 31557600000 ms/year
    }

    async formatDate(jsDate: Date): Promise<string> {

        const date = dayjs(jsDate);
        const past: boolean = jsDate < new Date();
        let relative: number;
        let abs: number;

        var formattedDate: string;
        switch(this.mode) {

// #region

            // case "diff-days":
            //     relative = h.diff(new Date(), "days");
            //     abs = Math.abs(relative);
            //     if(this.suffix) {
            //         switch (this.compareToday(date, TimeframeScale.day)) {
            //             case RelativeDate.present:
            //                 formatted = `${abs} days`;
            //                 break;                        
            //             case RelativeDate.past:
            //                 if (abs == 1)
            //                     formatted = `${abs} day ago`;
            //                 else
            //                     formatted = `${abs} dayss ago`;
            //                 break;                        
            //             case RelativeDate.future:
            //                 if (abs == 1)
            //                     formatted = `in ${abs} day`;
            //                 else
            //                     formatted = `in ${abs} days`;
            //                 break;                        
            //         }
            //     }
            //     break;                
            // case "diff-months":
            //     relative = h.diff(new Date(), "months");
            //     abs = Math.abs(relative);
            //     if(this.suffix) {
            //         switch (this.compareToday(date, TimeframeScale.month)) {
            //             case RelativeDate.present:
            //                 formatted = `${abs} months`;
            //                 break;                        
            //             case RelativeDate.past:
            //                 if (abs == 1)
            //                     formatted = `${abs} month ago`;
            //                 else
            //                     formatted = `${abs} months ago`;
            //                 break;                        
            //             case RelativeDate.future:
            //                 if (abs == 1)
            //                     formatted = `in ${abs} month`;
            //                 else
            //                     formatted = `in ${abs} months`;
            //                 break;                        
            //         }
            //     }
            //     break;
            // case "diff-years":
            //     relative = h.diff(new Date(), "years");
            //     abs = Math.abs(relative);
            //     if(this.suffix) {
            //         switch (this.compareToday(date, TimeframeScale.year)) {
            //             case RelativeDate.present:
            //                 formatted = `${abs} years`;
            //                 break;                        
            //             case RelativeDate.past:
            //                 if (abs == 1)
            //                     formatted = `${abs} year ago`;
            //                 else
            //                     formatted = `${abs} years ago`;
            //                 break;                        
            //             case RelativeDate.future:
            //                 if (abs == 1)
            //                     formatted = `in ${abs} year`;
            //                 else
            //                     formatted = `in ${abs} years`;
            //                 break;                        
            //         }
            //     }
            //     break; 

// #endregion

            case "age": 
                // console.log("age 2023-10-21", this.calculateAge(new Date("2023-10-21"))); 
                // console.log("age 2023-10-22", this.calculateAge(new Date("2023-10-22"))); 
                // console.log("age 2023-10-23", this.calculateAge(new Date("2023-10-23"))); 
                relative = this.calculateAge(jsDate);
                abs = Math.abs(relative);
                formattedDate = relative.toString(); 
                if (this.suffix) {
                    if (abs == 1)
                        formattedDate = `${relative} year`;
                    else
                        formattedDate = `${relative} years`;
                }
                break;
            case "from":
                formattedDate = date.fromNow(!this.suffix);
                break;
            case "to":
                formattedDate = date.toNow(!this.suffix);
                break;
            case "relative":
                formattedDate = "rel";
                break;
            case "date":
            default:

                // Pre-load locale context, if necessary 
                if(this.locale) {

                    console.log(`Current locale: ${dayjs.locale()}`);
                    console.log("Loading locale for", this.locale, "with format", this.formatString);
            
                        // Get the locale from the <html> element's lang attribute
//                    const locale = document.documentElement.lang || 'en'; // Default to 'en' if no lang attribute
                    console.log("date1", this.locale, this.formatString)
                    // Load and set the locale dynamically
                     await this.loadLocale(this.locale);
                    console.log("current locale", dayjs.locale())

                            // Check if locale is set correctly
                    console.log(`Locale after loading: ${dayjs.locale()}`);
                }
                
                formattedDate = date.format(this.formatString);

                console.log("Using format string:", this.formatString);
                console.log("Final formatted date:", formattedDate);

                // Test with various locale-sensitive formats
                // console.log("Formatted with 'LL':", date.format('LL'));
                // console.log("Formatted with 'LLL':", date.format('LLL'));
                // console.log("Formatted with 'LLLL':", date.format('LLLL'));
                // console.log("Formatted with custom format:", date.format(this.formatString));
    
                formattedDate = date.format(this.formatString);

                console.log(this.formatString, formattedDate);  

                break;
        }

        return formattedDate;
    }


//     async processLocaleFormattedDates(date: Date): Promise<string> {
//         // Get the locale from the <html> element's lang attribute
//         const locale = document.documentElement.lang || 'en'; // Default to 'en' if no lang attribute
    
//         // Load and set the locale dynamically
//         await this.loadLocale(locale);
    
    
    
//         // Set the locale in Day.js
//     //    dayjs.locale(locale);
//         console.log("locale-switched", locale) 
    
//         // Get all elements with the custom attribute `wfu-format-locale`
// //        const elements = document.querySelectorAll<HTMLElement>('[wfu-format-locale]');



// //        elements.forEach(element => {
//             // // Get the date string from the element's text content or any other attribute if required
//             // const dateString = element.textContent?.trim();
//             // if (!dateString) return; // Skip if there's no date string
    
//             // // Parse the date assuming ISO 8601 format
//             // const date = dayjs(dateString);
//             // if (!date.isValid()) return; // Skip if the date is invalid
    
//             // console.log(date, dateString); 
    
//     //        dayjs.extend(localizedFormat); 
//     // dayjs().format('L LT');
    
//             // Get the format string from a custom attribute (e.g., `data-format`)
//             const formatString = element.getAttribute('wfu-format') || 'LL';

            
            
//             // Format the date according to the specified format and locale
//             const formattedDate = date.format(this.formatString);
    
//             // Update the element's content with the formatted date
// //            element.textContent = formattedDate;
// //        });

//         return formattedDate; 
//     }

    /**
     * Dynamically loads the specified locale for dayjs 
     * @param locale Locale code, e.g. en
     */

    async loadLocale(locale: string): Promise<void> {
        try {
            
            const response = await fetch(`https://unpkg.com/dayjs/locale/${locale}.js`);
            const scriptText = await response.text();
    console.log(scriptText)
            // Manually execute the script, ensuring 'dayjs' is available globally
            const scriptWrapper = new Function('require', 'module', 'exports', 'define', 'globalThis', scriptText);
            scriptWrapper(
              (mod: string) => mod === "dayjs" ? dayjs : {}, // Mock `require`
              { exports: {} },                               // Mock `module`
              {},                                            // Mock `exports`
              undefined,                                     // Mock `define` (not needed here)
              globalThis                                     // Provide the global object
            );
    
            // Set the locale in Day.js
            dayjs.locale(locale); 
            console.log("locale SET AS", locale)
        } catch (error) {
            console.error(`Locale ${locale} could not be loaded, falling back to default.`);
            dayjs.locale('en');
        }
      }

}



