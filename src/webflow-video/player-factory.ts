
/*
 * webflow-video-factory
 * Handles player instantiation.
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Video Utilities
 */

import { Sa5Core } from '../webflow-core'
import { WfuVideoPlayer } from './player';
import { WfuVideoPlayerVimeo } from './players/vimeo';






export class WfuVideoPlayerFactory {

    constructor() {
    }

    static create(element: HTMLElement): WfuVideoPlayer {

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
        return new WfuVideoPlayerVimeo(element);
    
    }
    
}