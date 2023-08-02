


import { WfuFormHandler } from './form-handler';
import { Sa5Form, WebflowFormMode } from '../../webflow-form';



export class WfuFormHandlerBasin extends WfuFormHandler {

    constructor(form: Sa5Form, config = {}) {

console.log("BASIN HANDLER."); 

        super(form, config); // call the super class constructor and pass in the name parameter
    }
    
}



