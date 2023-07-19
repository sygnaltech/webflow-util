
/*
 * webflow-hotkeys
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Hotkeys Utilities
 * 
 * Based on and extends-
 * https://github.com/jaywcjlove/hotkeys-js
 */
        





import { Sa5Debug } from './webflow-core/debug'
import { Sa5Scripts } from './webflow-core/scripts'
import hotkeys, { KeyHandler } from 'hotkeys-js';


export class Sa5Hotkeys {

    init() {

        // ⌘+s, ctrl+s 

        // https://github.com/jaywcjlove/hotkeys-js
// <script src="https://unpkg.com/hotkeys-js/dist/hotkeys.min.js"></script>

//        this.initDebugMode();

        // Not needed, integrated via TS 
        // var scripts: Sa5Scripts = new Sa5Scripts();
        // scripts.install(
        //     "https://unpkg.com/hotkeys-js/dist/hotkeys.min.js"
        // );

        window['sa5'] = window['sa5'] || {};
        const sa5: any = window['sa5'];

        // Get any global handler
        const hotkeysHandler = sa5['hotkeys'];
        if(hotkeysHandler) 
            hotkeysHandler(this);

    }

    // Register a hotkey combination + callback 
    register(combination: string,
        callback: (arg:any) => void
        ){ // ,  function(event, handler){

        // TODO: prevent certain keys 
        // TODO: reserve some for SA5? 

//        console.debug(`registered ${key}.`); 

        // Register key with hotkeys
        hotkeys(combination, function(event, handler){
            // Prevent the default event
            event.preventDefault();

            // Call the callback function
            if (callback)
                callback(handler);

//            alert(`-- you pressed ${handler.key}!`); 
        });


    }


}




// Register
window["sa5"] = window["sa5"] || {};
window["sa5"]["Sa5Hotkeys"] = Sa5Hotkeys;
