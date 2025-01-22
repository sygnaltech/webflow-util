

/*
 * webflow-html
 * Switch 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */


import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';




interface Sa5SwitchConfig {

//    breakpointChangedCallback?: BreakpointChangedCallback; 

}

// Define the interface for switch case items
interface SwitchCaseItem {
    element: HTMLElement;
    switchName: string;
    caseName: string;
  }

export class Sa5Switch {

    config: Sa5SwitchConfig;
    elem: HTMLElement; 
    switchCaseItems: SwitchCaseItem[] = []; 

    constructor(config: Partial<Sa5SwitchConfig> = {}) {

//        this.elem = element; 

        // Merge configs, with defaults
        this.config = {
        }

        let core: Sa5Core = Sa5Core.startup(); 

    }

    init() {

// Find all elements with the custom attribute `wfu-switch-case`
const switchCaseElements: HTMLElement[] = Array.from(
    document.querySelectorAll('[wfu-switch-case]')
  );



// Populate the array with switch case items
switchCaseElements.forEach((element) => {
  const caseName = element.getAttribute('wfu-switch-case');
  let switchName = element.getAttribute('wfu-switch');

  // If `wfu-switch` is not found on the element, search the nearest parent
  if (!switchName) {
    let parent = element.parentElement;
    while (parent && !switchName) {
      switchName = parent.getAttribute('wfu-switch');
      parent = parent.parentElement;
    }
  }

  // Only add to the array if both `switchName` and `caseName` are found
  if (switchName && caseName) {
    this.switchCaseItems.push({
      element,
      switchName,
      caseName,
    });
  }
});


    }


    switchCase(switchName: string, caseName: string): void {
        this.switchCaseItems.forEach((item) => {
          if (item.switchName === switchName) {
            if (item.caseName === caseName) {
              item.element.style.display = '';
            } else {
              item.element.style.display = 'none';
            }
          }
        });
      }

}

console.log("INSTALLING SA5SWITCH")

Sa5Core.startup(Sa5Switch);