
import { Sa5Core } from '../../webflow-core';
import { Sa5Debug } from '../../webflow-core/debug'; 
import dayjs from 'dayjs';
// import { Sa5Form, WebflowFormMode } from '../../webflow-form';


/*
 * WfuDateHandler class.
 */

var defaultDateHandlerConfig = {

    debug: false, // Debugging mode

}

export enum RelativeDate {
    past,
    present,
    future
}

// https://day.js.org/docs/en/display/difference
export enum TimeframeScale {
    day,
    week,
    quarter,
    month,
    year,
    hour,
    minute
}


export class WfuDateHandler {

    debug: Sa5Debug;
    config; // Optional config
    handler;
    formatString: string;
    mode: string = "date";
    suffix: boolean = true;

    constructor(config = {}) {

        // Initialize debugging
        this.debug = new Sa5Debug("sa5-date-handler");
        this.debug.debug ("Initializing");

        // this.form = form; 

        // let action = this.form.formElement.getAttribute("action");
        // this.debug.debug("action", action);

        // // Get the Webflow wait message
        // let waitMessage = this.form.formElement.querySelector("input[type=submit]")
        //     .getAttribute("data-wait");
        // this.debug.debug(`waitMessage: ${waitMessage}`);

    }
    
    // exec() {

    compareToday(date: Date, timeframeScale: TimeframeScale): RelativeDate {
        return this.compare (date, new Date(), timeframeScale); 
    }

    compare(date1: Date, date2: Date, timeframeScale: TimeframeScale): RelativeDate {

        const h = dayjs(date1);

        if(!date1) return null;
        if(!date2) return null;

        switch(timeframeScale) {
            case TimeframeScale.year:
                if (date1.getFullYear() < date2.getFullYear()) return RelativeDate.past;
                if (date1.getFullYear() > date2.getFullYear()) return RelativeDate.future;
                return RelativeDate.present;
            case TimeframeScale.quarter:
                if (date1.getFullYear() < date2.getFullYear()) return RelativeDate.past;
                if (date1.getFullYear() > date2.getFullYear()) return RelativeDate.future;

                // Determine quarters for both dates
                let quarter1 = Math.floor(date1.getMonth() / 3);
                let quarter2 = Math.floor(date2.getMonth() / 3);
                
                if (quarter1 < quarter2) return RelativeDate.past;
                if (quarter1 > quarter2) return RelativeDate.future;                

                return RelativeDate.present;
            case TimeframeScale.month:
                if (date1.getFullYear() < date2.getFullYear()) return RelativeDate.past;
                if (date1.getFullYear() > date2.getFullYear()) return RelativeDate.future;
                if (date1.getMonth() < date2.getMonth()) return RelativeDate.past;
                if (date1.getMonth() > date2.getMonth()) return RelativeDate.future;
                return RelativeDate.present;
            case TimeframeScale.week: // Sun to sat
                // Get the day of the week for both dates
                const dayOfWeek1 = date1.getUTCDay();
                const dayOfWeek2 = date2.getUTCDay();
                
                // Clone the dates to avoid mutating the original ones
                const adjustedDate1 = new Date(date1.getTime());
                const adjustedDate2 = new Date(date2.getTime());
                
                // Adjust each date to the previous Sunday
                adjustedDate1.setUTCDate(date1.getUTCDate() - dayOfWeek1);
                adjustedDate2.setUTCDate(date2.getUTCDate() - dayOfWeek2);
                
                // Zero out hours, minutes, seconds, and milliseconds to only compare dates
                adjustedDate1.setUTCHours(0, 0, 0, 0);
                adjustedDate2.setUTCHours(0, 0, 0, 0);
                
                if (+adjustedDate1 < +adjustedDate2) return RelativeDate.past;
                if (+adjustedDate1 > +adjustedDate2) return RelativeDate.future;
                return RelativeDate.present;            
            case TimeframeScale.day:
                if (date1.getFullYear() < date2.getFullYear()) return RelativeDate.past;
                if (date1.getFullYear() > date2.getFullYear()) return RelativeDate.future;
                if (date1.getMonth() < date2.getMonth()) return RelativeDate.past;
                if (date1.getMonth() > date2.getMonth()) return RelativeDate.future;
                if (date1.getDate() < date2.getDate()) return RelativeDate.past;
                if (date1.getDate() > date2.getDate()) return RelativeDate.future;
                return RelativeDate.present;
            case TimeframeScale.hour:
                if (date1.getFullYear() < date2.getFullYear()) return RelativeDate.past;
                if (date1.getFullYear() > date2.getFullYear()) return RelativeDate.future;
                if (date1.getMonth() < date2.getMonth()) return RelativeDate.past;
                if (date1.getMonth() > date2.getMonth()) return RelativeDate.future;
                if (date1.getDate() < date2.getDate()) return RelativeDate.past;
                if (date1.getDate() > date2.getDate()) return RelativeDate.future;
                if (date1.getHours() < date2.getHours()) return RelativeDate.past;
                if (date1.getHours() > date2.getHours()) return RelativeDate.future; 
                return RelativeDate.present;
            case TimeframeScale.minute:
                if (date1.getFullYear() < date2.getFullYear()) return RelativeDate.past;
                if (date1.getFullYear() > date2.getFullYear()) return RelativeDate.future;
                if (date1.getMonth() < date2.getMonth()) return RelativeDate.past;
                if (date1.getMonth() > date2.getMonth()) return RelativeDate.future;
                if (date1.getDate() < date2.getDate()) return RelativeDate.past;
                if (date1.getDate() > date2.getDate()) return RelativeDate.future;
                if (date1.getHours() < date2.getHours()) return RelativeDate.past;
                if (date1.getHours() > date2.getHours()) return RelativeDate.future;                 
                if (date1.getMinutes() < date2.getMinutes()) return RelativeDate.past;
                if (date1.getMinutes() > date2.getMinutes()) return RelativeDate.future;                 
                return RelativeDate.present;
        }

    }

    formatDate(date: Date): string {

        return null;
    }

}

/* 
// https://dev.to/sanderdebr/js-es6-design-patterns-factory-3a3g 
export const WfuFormHandlerFactory = {
    create: function (type, elem, config) {
    }
}
*/