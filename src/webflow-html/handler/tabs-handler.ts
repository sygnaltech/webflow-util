


import { Sa5LayoutHandler } from './layout-handler';
// import { Sa5Form, WebflowFormMode } from '../../webflow-form';



export class Sa5LayoutHandlerTabs extends Sa5LayoutHandler {

    constructor(elem: HTMLElement, config) {
        super(elem, config); // call the super class constructor and pass in the name parameter
    }

    layout() {
    
        // Find all tab components
        const tabContainers = document.querySelectorAll('[wfu-tabs-target]');

        tabContainers.forEach(tabContainer => {
            // Check if the tab container has the 'clear' initialization attribute
            if (tabContainer.getAttribute('wfu-tabs-init') === 'clear') {
                // Clear existing tabs and content
                const tabMenu = tabContainer.querySelector('.w-tab-menu');
                const tabContent = tabContainer.querySelector('.w-tab-content');
                tabMenu.innerHTML = '';
                tabContent.innerHTML = '';
            }

        // Proceed with creating new tabs from movable elements
        const movableElements = document.querySelectorAll('[wfu-tabs-move]');

        movableElements.forEach(element => {
            // Get the target tab container name and tab name
            const targetName = element.getAttribute('wfu-tabs-move');
            const tabName = element.getAttribute('wfu-tabs-name');

            if (tabContainer.getAttribute('wfu-tabs-target') === targetName) {
            // Create the new tab in the tab menu
            const newTab = document.createElement('a');
            newTab.className = 'w-inline-block w-tab-link';
            newTab.dataset.wTab = tabName;
            newTab.innerHTML = `<div>${tabName}</div>`;
            tabContainer.querySelector('.w-tab-menu').appendChild(newTab);

            // Move the element to the tab content area
            const contentPane = document.createElement('div');
            contentPane.className = 'w-tab-pane';
            contentPane.dataset.wTab = tabName;
            contentPane.appendChild(element); // Move the whole element
            tabContainer.querySelector('.w-tab-content').appendChild(contentPane);
            }
        });
        
      
      
              // Select and click the first tab
        const firstTab = tabContainer.querySelector('.w-tab-menu .w-tab-link');
        const firstTabContent = tabContainer.querySelector('.w-tab-content .w-tab-pane');
        if (firstTab && firstTabContent) {
            // const firstTabName = firstTab.dataset.wTab;
            // tabContainer.setAttribute('data-current', firstTabName);
            // firstTab.classList.add('w--current');
            // firstTabContent.classList.add('w--tab-active');
            // firstTab.click(); // Simulate a click on the first tab
        }
        
        tabContainer.removeAttribute('wfu-tabs-target');
      
/*
// https://discourse.webflow.com/t/webflow-js-and-jquery-plugins/907
var Webflow = Webflow || [];
Webflow.push(function () {
  // DOMready has fired
  // May now use jQuery and Webflow api
  loadTabs();
  
  
//  Webflow.destroy();
//  Webflow.ready();
  
//  Webflow.require('tabs').ready();
//  Webflow.require('tabs').redraw();
});
*/


    });
  
}
// });


}



