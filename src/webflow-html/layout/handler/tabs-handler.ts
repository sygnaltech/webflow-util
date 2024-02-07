


import { Sa5Attribute } from '../../../globals';
import { Sa5LayoutHandler } from './layout-handler';
// import { Sa5Form, WebflowFormMode } from '../../webflow-form';



export class Sa5LayoutHandlerTabs extends Sa5LayoutHandler {

    tabMenu: HTMLElement;
    tabContent: HTMLElement;
    tabMenuClasses: string;
    tabContentClasses: string;

    constructor(elem: HTMLElement, config) {
        super(elem, config); 

        // Get the tabs structure eleemnts
        this.tabMenu = this.container.querySelector('.w-tab-menu');
        this.tabContent = this.container.querySelector('.w-tab-content');

        // Get the classes
        const firstTabMenuItem = this.tabMenu.children[0];
        this.tabMenuClasses = firstTabMenuItem ? firstTabMenuItem.className : '';
        const firstTabContentItem = this.tabContent.children[0];
        this.tabContentClasses = firstTabContentItem ? firstTabContentItem.className : '';

    }

    layout() {

        /**
         * Init container
         */

        if (this.container.getAttribute('wfu-layout-init') === 'clear') {
            // Clear existing tabs and content
            const tabMenu = this.container.querySelector('.w-tab-menu');
            const tabContent = this.container.querySelector('.w-tab-content');
            tabMenu.innerHTML = '';
            tabContent.innerHTML = '';
        }

        /**
         * Layout elements
         */

        // Find all elements with 'wfu-layout-target' attribute
        const targetedElements = document.querySelectorAll(
            `[${Sa5Attribute.ATTR_LAYOUT_TARGET}='${this.name}']` // '[wfu-layout-target]'
            );

        targetedElements.forEach(element => {

            // Get the target tab container name and tab name
//            const targetName = element.getAttribute('wfu-tabs-move');
            const tabName = element.getAttribute('wfu-layout-item-name');

            // Create the new tab in the tab menu
            const newTab = document.createElement('a');
            newTab.className = `w-inline-block w-tab-link ${this.tabMenuClasses}`;
            newTab.dataset.wTab = tabName;
            newTab.innerHTML = `<div>${tabName}</div>`;
            this.container.querySelector('.w-tab-menu').appendChild(newTab);

            // Move the element to the tab content area
            const contentPane = document.createElement('div');
            contentPane.className = `w-tab-pane ${this.tabContentClasses}`;
            contentPane.dataset.wTab = tabName;
            contentPane.appendChild(element); // Move the whole element
            this.container.querySelector('.w-tab-content').appendChild(contentPane);
      
            // Select and click the first tab
            const firstTab = this.container.querySelector('.w-tab-menu .w-tab-link');
            const firstTabContent = this.container.querySelector('.w-tab-content .w-tab-pane');
            if (firstTab && firstTabContent) {
                // const firstTabName = firstTab.dataset.wTab;
                // tabContainer.setAttribute('data-current', firstTabName);
                // firstTab.classList.add('w--current');
                // firstTabContent.classList.add('w--tab-active');
                // firstTab.click(); // Simulate a click on the first tab
            }
            
            element.removeAttribute('wfu-tabs-target');
        
        });
    
    }

}



