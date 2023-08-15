
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

        // It's Vimeo!
            // Verify it's a recognized player
            // Vimeo ( on iframe? )
            return new WfuVideoPlayerVimeo(element);
    
            /*
        if (element) {
            let videoValue = element.getAttribute('wfu-video');
            if (videoValue) {
                console.log(videoValue);
            } else {
                console.log('Attribute not found or has no value');
            }
        }
        */
    
    }
    
}