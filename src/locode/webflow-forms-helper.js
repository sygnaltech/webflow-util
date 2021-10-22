
/*
 * webflow-forms-helper
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * LO-CODE Helper class to simplify form functions.
 */

import { dataBindAllFormSelects, dataBindAllFormInputs } from '../modules/webflow-form.js';

export var dataBindAllForms = function () {

    dataBindAllFormSelects();
    dataBindAllFormInputs();

}


