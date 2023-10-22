


import { WfuDateHandler } from './date-handler';
import moment = require('moment');



export class WfuDateHandlerMoment extends WfuDateHandler {

    constructor(config) {
        super(config); // call the super class constructor and pass in the name parameter
    }

    formatDate(date: Date): string {

        // Get the original content (assumed to be a valid date)
//        const originalContent = element.textContent;

        // Use Moment.js to format the date
        const formattedDate = moment(date).format(this.formatString);

        this.debug.debug (`formatting date ${date} -> ${formattedDate}`);
        
        // Update the element's content
        return formattedDate;
    }
    
}



