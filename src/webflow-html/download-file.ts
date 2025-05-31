

/*
 * webflow-html
 * Download File 
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 */


import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';




interface Sa5DownloadFileConfig {

}

// Define the interface for switch case items
interface SwitchCaseItem {
    element: HTMLElement;
    switchName: string;
    caseName: string;
  }

export class Sa5DownloadFile {

    config: Sa5DownloadFileConfig;
    elem: HTMLElement; 
    filename: string; 

    constructor(elem: HTMLElement, config: Partial<Sa5DownloadFileConfig> = {}) {

        this.elem = elem; 
        this.filename = elem.getAttribute("wfu-download-file"); 

        // Merge configs, with defaults
        this.config = {
        }

        let core: Sa5Core = Sa5Core.startup(); 

    }

    init() {

        // Get as a link 
        const link: HTMLLinkElement = this.elem as HTMLLinkElement; 

        // Override the onclick 
        link.onclick = e => {

            e.preventDefault();

            fetch(link.href)
                .then(r => r.blob())
                .then(blob => {

                    // Create and download a blob 
                    const a = Object.assign(document.createElement('a'), {
                        href: URL.createObjectURL(blob),
                        download: this.filename 
                    });
                    a.click();

                    // Cleanup 
                    URL.revokeObjectURL(a.href);

                });
                
        };

    }

}



Sa5Core.startup(Sa5DownloadFile);