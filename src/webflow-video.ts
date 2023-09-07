
/*
 * webflow-video
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Webflow Video
 */

import { Sa5Attribute } from './globals';
import { Sa5Core } from './webflow-core'

export class WebflowVideo {

    // Initialize
    constructor() {
    }

    // Fix all data poster urls
    processAllDataPosterUrls (): void {

        // Find poster video overrides and apply them
        const elements = document.querySelectorAll(`div[${Sa5Attribute.ATTR_VIDEO_DATA_POSTER_URL}]`);
        elements.forEach((element) => {

            element.setAttribute(
                "data-poster-url",
                element.getAttribute(Sa5Attribute.ATTR_VIDEO_DATA_POSTER_URL) 
            );

        });

    }

    // https://www.maxlaumeister.com/articles/hide-related-videos-in-youtube-embeds/ 
    processAllYouTubeNorel(): void {

        console.log("setup lib");

        // Install lib if needed
        if (typeof YT === 'undefined') {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    


        // Assuming onYouTubeIframeAPIReadyCallbacks is declared elsewhere in the code like:
        let onYouTubeIframeAPIReadyCallbacks: Array<Function> = [];
//        let onYouTubeIframeAPIReadyCallbacks = [];

        for (let playerWrap of document.querySelectorAll<HTMLElement>("[wfu-youtube-norel]")) {
            let playerFrame = playerWrap.querySelector<HTMLIFrameElement>("iframe");

            if (!playerFrame) continue;


    
            // Append &enablejsapi=1 to the iframe src 
            const iframeURL = new URL(playerFrame.src);
            iframeURL.searchParams.append('enablejsapi', '1');
            playerFrame.src = iframeURL.toString();

            // Extrace VideoID
            const pathSegments = iframeURL.pathname.split('/');
            
            let videoID: string | null = null;
            if (pathSegments.length > 2 && pathSegments[1] === 'embed') {
                videoID = pathSegments[2];
            }
            
            console.log(videoID); // Should output "8U9o5aZ2y5w" for the provided example URL
            
// TODO: warn if none 

            // Handle state changes and overlay screen 
            // ? Is this needed for pause? 
            let onPlayerStateChange = function(event: any) {
                if (event.data == YT.PlayerState.ENDED) {
                    playerWrap.classList.add("ended");
                } else if (event.data == YT.PlayerState.PAUSED) {
                    playerWrap.classList.add("paused");
                } else if (event.data == YT.PlayerState.PLAYING) {
                    playerWrap.classList.remove("ended");
                    playerWrap.classList.remove("paused");
                }
            };

            let player: any;

            // Register for callbacks 
            onYouTubeIframeAPIReadyCallbacks.push(() => {
                player = new YT.Player(playerFrame, {
                    events: {
                        'onStateChange': onPlayerStateChange
                    }
                });
            });

            // Use wrap as a video control
            playerWrap.addEventListener("click", function() {
                if (!player || typeof player.getPlayerState !== 'function') return;

                let playerState = player.getPlayerState();

                if (playerState == YT.PlayerState.ENDED) {
                    player.seekTo(0);
                } else if (playerState == YT.PlayerState.PAUSED) {
                    player.playVideo();
                }
            });

        }

        // Callback handler 
        (window as any).onYouTubeIframeAPIReady = function() {
            for (let callback of onYouTubeIframeAPIReadyCallbacks) {
                callback();
            }
        };





//         const iframes = document.querySelectorAll("[wfu-youtube-norel] > iframe");
//         iframes.forEach((iframe: HTMLIFrameElement) => {
//             const playerWrap = iframe.parentElement;
    
//             // Append &enablejsapi=1 to the iframe src 
//             const iframeURL = new URL(iframe.src);
//             iframeURL.searchParams.append('enablejsapi', '1');
//             iframe.src = iframeURL.toString();

//             // Extrace VideoID
//             const pathSegments = iframeURL.pathname.split('/');
            
//             let videoID: string | null = null;
//             if (pathSegments.length > 2 && pathSegments[1] === 'embed') {
//                 videoID = pathSegments[2];
//             }
            
//             console.log(videoID); // Should output "8U9o5aZ2y5w" for the provided example URL
            
// // TODO: warn if none 


// //            iframe.src += `&enablejsapi=1`;
    
//             let player: any;
//             onYouTubeIframeAPIReady.push(function() {
//                 player = new YT.Player(iframe, {
//                     videoId: videoID, //   'M7lc1UVf-VE',
//                     events: {
//                         'onStateChange': onPlayerStateChange
//                     }
//                 });
//             });
    
//             function onPlayerStateChange(event: any) {
//                 if (event.data == YT.PlayerState.ENDED) {
//                     playerWrap.classList.add("shown");
//                 }
//             }
    
//             playerWrap.addEventListener("click", function() {
//                 player.seekTo(0);
//                 playerWrap.classList.remove("shown");
//             });
//         });
    
//         window['onYouTubeIframeAPIReady'] = function () {
//             for (let callback of onYouTubeIframeAPIReadyCallbacks) {
//                 callback();
//             }
//         };


        // const jsonElements = document.querySelectorAll(".w-lightbox .w-json");
        // jsonElements.forEach(element => {
        //     const config = JSON.parse(element.innerHTML);
    
        //     console.log(JSON.stringify(config, null, 2));
    
        //     for (let i = 0; i < config.items.length; i++) {
        //         console.log(i);
    
        //         config.items[i].url += `&enablejsapi=1`;
        //         config.items[i].originalUrl += `&enablejsapi=1`;
        //         config.items[i].html = `<iframe class="embedly-embed" src="...long url here..." width="940" height="528" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>`;
        //     }
    
        //     console.log(JSON.stringify(config, null, 2));
    
        //     element.innerHTML = JSON.stringify(config);
        // }); 
    }

}

// Register
Sa5Core.startup(WebflowVideo);
// window["sa5"] = window["sa5"] || []; //{};
// window["sa5"]["Sa5Video"] = WebflowVideo;




