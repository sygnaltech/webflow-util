
/*
 * webflow-form
 * Form Select 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Forms  
 */



/*
 * Webflow Select. 
 * Represents a single FORM select element. 
 */


/*
<select id="field" name="field" data-name="Field" multiple="" wfu-form-select-mode="toggle" wfu-form-select="form1" class="w-select">
   <option value="First">First choice</option>
   <option value="Second">Second choice</option>
   <option value="Third">Third choice</option>
</select>
*/


import { Sa5Attribute } from '../globals';
import { Sa5Core } from '../webflow-core'
import { Sa5Debug } from '../webflow-core/debug'


enum Sa5FormSelectMode {
    Default = "default", // Webflow
    Toggle = "toggle" // Click-toggle mode 
}


export class Sa5FormSelect {
    
    private _element: HTMLSelectElement;

    private _mode: Sa5FormSelectMode = Sa5FormSelectMode.Default; 
    private valid: boolean = false;

    //#region PROPERTYS

    // .w-dropdown
    get element(): HTMLSelectElement {
        return this._element;
    }

    //#endregion

    //#region CONSTRUCTORS

    constructor(element: HTMLSelectElement) {

        // Initialize
        this._element = element;

    }

    //#endregion

    //#region METHODS

    init() {

        // Verify it's a select element .w-select
        if(!this._element.classList.contains("w-select")) {
            console.error ("sa5-core", "atteibute is not on a select element");
            this.valid = false;
            return;
        }

        // Determine mode
        const modeAttribute = this._element.getAttribute(Sa5Attribute.ATTR_FORM_SELECT_MODE)?.toLowerCase(); 

        if (!modeAttribute) {
            this._mode = Sa5FormSelectMode.Default;
        } else if (Object.values(Sa5FormSelectMode).includes(modeAttribute as Sa5FormSelectMode)) {
            this._mode = modeAttribute as Sa5FormSelectMode;
        } else {
            this.valid = false; 
            throw new Error("Invalid select mode");
        }

        this.valid = true;

        switch(this._mode) {
            case Sa5FormSelectMode.Toggle:

                // Install click event handler 
                this._element.addEventListener('mousedown', (event: MouseEvent) => {
                    event.preventDefault(); // Prevent the default behavior of the select element
        
                    const option = event.target as HTMLOptionElement;
                    if (option.tagName === 'OPTION') {
                        option.selected = !option.selected;
                    }
                });                

                break;
            case Sa5FormSelectMode.Default:
            default:
                break;
        }

    }

    //#endregion

}

Sa5Core.startup(Sa5FormSelect);






