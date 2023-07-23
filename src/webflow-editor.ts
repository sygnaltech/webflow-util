
/*
 * webflow-editor
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Webflow Editor-mode Utilities
 */


import { Sa5Core } from './webflow-core'

export class WebflowEditor {
    
    private _editorMode: boolean | null = null;

    get editorMode(): boolean | null {
        return this._editorMode;
    } 

    constructor() {

        this.init();

    }

    // Initialize
    init(): void {

        // Install a handler for after Webflow.js is ready
        // to detect Editor mode properly 
        var Webflow = Webflow || [];
        Webflow.push(() => {

            if(Webflow.env('editor')) {
                
                this._editorMode = true;
                console.log ("EDITOR mode");
                
            } else {
                
                this._editorMode = false;
                console.log ("not in EDITOR mode");
                
            }

        }); 

    }

}



// Register
Sa5Core.startup(WebflowEditor);

