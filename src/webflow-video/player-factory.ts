
/*
 * webflow-video-factory
 * Handles player instantiation.
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Video Utilities
 */

import { Sa5Core } from '../webflow-core'
import { Sa5VideoPlayer } from './player';
import { Sa5VideoPlayerVimeo } from './players/vimeo';






export class Sa5VideoPlayerFactory {

    constructor() {
    }

    static create(element: HTMLElement): Sa5VideoPlayer {

        // Verify not null
        if (!element)
            return null; 

        // Verify it's an IFRAME
        if (element.nodeName != "IFRAME") {
            console.error ("SA5", "Invalid video element- must be an IFRAME"); 
            return null;
        }

        // VIMEO 

        // Verify src looks legit as VIMEO
        if (!element.matches("[src^='https://player.vimeo.com/']")) {
            console.error ("SA5", "Does not appear to be a valid Vimeo video element"); 
            return null;
        }

        // It's Vimeo!
        return new Sa5VideoPlayerVimeo(element);
    
    }
    
}