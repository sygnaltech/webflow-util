

/*
 * webflow-html
 * Lazy Load 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */


import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';




interface Sa5LazyLoadConfig {

//    breakpointChangedCallback?: BreakpointChangedCallback; 

}



export class Sa5LazyLoad {

    config: Sa5LazyLoadConfig;
    elem: HTMLTemplateElement; 

    constructor(element: HTMLTemplateElement, config: Partial<Sa5LazyLoadConfig> = {}) {

        this.elem = element; 
// console.log(this.elem)
        // Merge configs, with defaults
        this.config = {
        }

        let core: Sa5Core = Sa5Core.startup(); 

    }

    setupTemplateRendering(): void {

        // Define the IntersectionObserver
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const wrapper = entry.target as HTMLElement;
                    const template = wrapper.querySelector('template');
            
                    if (template) {
                    // Clone the template content and insert it into the wrapper
                    const content = template.content.cloneNode(true);
                    wrapper.appendChild(content);
            
                    // Remove the template after rendering its content
                    template.remove();
                    }
            
                    // Stop observing the wrapper
                    observer.unobserve(wrapper);
                }
            });
        });
        
        // // Select all <template> elements with the 'wfu-lazyload' attribute
        // const templates = document.querySelectorAll<HTMLTemplateElement>('template[wfu-lazyload]');
        
        // // Wrap each template in a div and observe the div
        const wrapper = document.createElement('div');
//            wrapper.classList.add('lazy-wrapper');
        this.elem.parentNode?.insertBefore(wrapper, this.elem);
//        console.log(this.elem);
        wrapper.appendChild(this.elem);

        console.log(wrapper);

        // Observe the wrapper div instead of the template
        observer.observe(wrapper);

    }

    init() {

        // Initialize the lazy-loading functionality
        this.setupTemplateRendering();

    }

}

