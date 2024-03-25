
/*
 * SA5 
 * webflow-finsweet | fs-load
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * For extensions to Finsweet's Load Attributes
 */

// Extend the Window interface to include fsAttributes and listInstance
interface FinsweetWindow extends Window {
    fsAttributes: [string, (listInstances: any[]) => void][];
    listInstance?: any; // Assuming listInstance can be any type; specify a more precise type if possible
  }
  
declare let window: FinsweetWindow;

window.fsAttributes = window.fsAttributes || [];

export class Sa5FinsweetLoad {

    config; // Optional config

    constructor(config = {}) {

        this.config = config;

    }

    sortRandom(): void {
        // Ensure listInstance is defined before attempting to access its properties
        if (!window.listInstance) {
            console.log('listInstance is not defined.');
            return;
        }

        const { items } = window.listInstance;

        console.log("items", items);

        // Function to shuffle array items in place
        function shuffleArray(array: any[]): void { // Ideally, replace `any[]` with a more specific type
            for (let i = array.length - 1; i > 0; i--) {
                // Generate random index
                const j = Math.floor(Math.random() * (i + 1));
                // Swap elements array[i] and array[j]
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Shuffle the items array
        shuffleArray(items);

        // Assuming listInstance has a method named renderItems
        // The existence of listInstance is checked at the beginning of the sort function
        window.listInstance.renderItems();
    }

    init(): void {

        window.fsAttributes.push([
            'cmsload',
            (listInstances: any[]) => { // Replace `any[]` with a more specific type if known
              console.log('cmsload Successfully loaded!');
          
              const [listInstance] = listInstances;
          
              // Assign listInstance to the window object
              window.listInstance = listInstance;
          
              // Call sort function
              this.sortRandom();
              
              // Assuming listInstance has an 'on' method; adjust types as necessary
              listInstance.on('renderitems', (renderedItems: any) => { // Replace `any` with a more specific type if known
                console.log("renderedItems", renderedItems);
              });
            },
        ]);

        // On DOM ready 
        document.addEventListener('DOMContentLoaded', () => {
        
            // Get the button element by its ID
            const sortButton = document.getElementById('sort');
        
            // Add a click event listener to the button if it exists
            sortButton?.addEventListener('click', this.sortRandom);
        
        });
  


    }

}
