
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Core Utilities
 */



/*
 * Webflow Tabs.
 */


/*
<div wfu-tabs="main" data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" class="w-tabs">
  <div class="w-tab-menu" role="tablist"><a data-w-tab="Tab 1" class="tab w-inline-block w-tab-link w--current" id="w-tabs-0-data-w-tab-0" href="#w-tabs-0-data-w-pane-0" role="tab" aria-controls="w-tabs-0-data-w-pane-0" aria-selected="true">
      <div>Tab 1</div>
    </a><a data-w-tab="Tab 2" class="tab w-inline-block w-tab-link" tabindex="-1" id="w-tabs-0-data-w-tab-1" href="#w-tabs-0-data-w-pane-1" role="tab" aria-controls="w-tabs-0-data-w-pane-1" aria-selected="false">
      <div>Tab 2</div>
    </a><a data-w-tab="Tab 3" class="tab w-inline-block w-tab-link" tabindex="-1" id="w-tabs-0-data-w-tab-2" href="#w-tabs-0-data-w-pane-2" role="tab" aria-controls="w-tabs-0-data-w-pane-2" aria-selected="false">
      <div>Tab 3</div>
    </a></div>
  <div class="w-tab-content">
    <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active" id="w-tabs-0-data-w-pane-0" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-0"></div>
    <div data-w-tab="Tab 2" class="w-tab-pane" id="w-tabs-0-data-w-pane-1" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-1"></div>
    <div data-w-tab="Tab 3" class="w-tab-pane" id="w-tabs-0-data-w-pane-2" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-2"></div>
  </div>
</div>
*/

/*
- can we add/remove tabs
- hide/show tabs
- reorder tabs

.w--current
[data-w-tab] weems to be the identifier 
*/

export class WebflowTabs {
    
 //    urlTemplate;
    element: HTMLElement;
    elementTabMenu: HTMLElement;
    elementTabContent: HTMLElement;

    // Initialize
    constructor(element: HTMLElement) {

// Verify it's a tabs element .w-tabs

        
        this.init(element);
    }

    init(element: HTMLElement) {

        this.element = element; 

        console.log("init."); 

        this.elementTabMenu = element.querySelector('.w-tab-menu');
        this.elementTabContent = element.querySelector('.w-tab-content');
//.w-tab-menu

console.log("count", this.tabCount());
console.log("index", this.currentTabIndex()); 
//.w-tab-content

//        this.initCopyGist();
    }

    setTab(index: number) {
        // verify number in range
        if (index < 0) 
            return; 
        if (index >= this.tabCount())
            return;

        let clickEvent = new MouseEvent('click', {
            // Event properties
            bubbles: true,
            cancelable: true,
            view: window,
            // More properties can be added as needed
            }); 

        this.getTab(index).dispatchEvent(clickEvent);

//        this.elementTabMenu.children[index].click
    }

    getTab(index: number): HTMLElement { 

        // verify number in range
        if (index < 0) 
            return; 
        if (index >= this.tabCount())
            return;

        return this.elementTabMenu.children[index] as HTMLElement;
    }

    tabCount(): number {
        return this.elementTabMenu.children.length;
    }

    currentTabIndex(): number | null {
//        let parentElement: HTMLElement; // Assume this is your parent element with class .w-tab-menu

        let currentIndex: number | null = null;
        
        for (let i = 0; i < this.elementTabMenu.children.length; i++) {
          if (this.elementTabMenu.children[i].classList.contains('w--current')) {
            currentIndex = i;
            break;
          }
        }
        
        // if (currentIndex !== null) {
        //   console.log(`The child with class 'w--current' is at index ${currentIndex}`);
        // } else {
        //   console.log("No child with class 'w--current' was found");
        // }
        
        return currentIndex; 
    }

    onClick() {
        // Raise event
    }

// get set
    currentTab() {
//        .w--current

    }

    nextTab() {
        var newTab: number = this.currentTabIndex() + 1;
        if (newTab >= this.tabCount())
            newTab = 0;

        console.log(newTab);
        
        this.setTab(newTab);
    }

    prevTab() {
        var newTab: number = this.currentTabIndex() - 1;
        if (newTab < 0)
            newTab = this.tabCount() - 1;

        console.log(newTab);
        
        this.setTab(newTab);
    }

    firstTab() {
        this.setTab(0);
    }

    lastTab() {
        var newTab: number = this.tabCount() - 1;
        this.setTab(newTab);
    }

/*         
    initCopyGist() {

        document.querySelectorAll('[wfu-gist-copy]').forEach((el: HTMLElement) => {
            el.addEventListener('click', (e: Event) => {
                
//                console.log("clicked"); 
                
                let a: string | null = el.getAttribute('wfu-gist-copy');
//                console.log(a); 
                
                let gist: Element | null = document.querySelector(`[wfu-gist="${a}"]`);
                
                if (gist !== null) {
                    this.copyToClipboard(this.getGistCode(gist));
                }
                
            });
        });

    }

    copyToClipboard(text: string) {

        navigator.clipboard.writeText(text).then(() => {
//            console.log('Copying to clipboard was successful!');
        }, (err: any) => {
            console.error('Could not copy text: ', err);
        });

    }

    getGistCode(el: Element | null): string {
    
        if(!el) return;
        
        // Extract the GIST content
        let code = el.querySelector(".gist-file")?.textContent || '';
        
        // Remove whitespace-only lines
        let cleanString = code.replace(/\n\s*\n/g, '\n');
        
//        console.log(cleanString);
  
        // Trim the last four lines 
        let lines = cleanString.split('\n');
        lines = lines.slice(0, -4);  
        let finalString = lines.join('\n');
    
//        console.log(finalString);
        
        // Trim 10 pre-whitespaces
        let finalLines = finalString.split('\n').map((line: string) => {
            return line.startsWith('          ') ? line.slice(10) : line;
        });
        let trimmedString = finalLines.join('\n');
    
//        console.log(trimmedString);

        return trimmedString;
    }
*/

}

window["WebflowTabs"] = WebflowTabs;


