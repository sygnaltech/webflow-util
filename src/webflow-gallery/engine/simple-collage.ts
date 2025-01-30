

import { Sa5Core } from '../../webflow-core';
import { Sa5Debug } from '../../webflow-core/debug'; 
import { Sa5Gallery } from '../../webflow-gallery';


/*
 * WfuDateHandler class.
 */


export class Sa5GalleryEngineSimpleCollage {

    debug: Sa5Debug;
    gallery: Sa5Gallery;

    constructor(gallery: Sa5Gallery, config = {}) {

        this.gallery = gallery; 
        // Initialize debugging
        this.debug = new Sa5Debug("sa5-gallery-engine-simple-collage");
        this.debug.debug ("Initializing");

    }
    
    layout() {

        // Get all child elements of the layout
        const layoutElement = this.gallery.elem;
        const children = Array.from(layoutElement.children);

        // Define the number of columns in the grid
        const totalColumns = 12;

        // Function to generate a random column span
        const getRandomSpan = (remainingColumns: number, previousRowSpans: number[]): number => {
        const possibleSpans = [4, 6, 8]; // Allowed spans
        const validSpans = possibleSpans.filter(span => span <= remainingColumns && !previousRowSpans.includes(span));
        return validSpans[Math.floor(Math.random() * validSpans.length)];
        };

        let currentRowColumns = 0;
        let previousRowSpans: number[] = [];
        let currentRowSpans: number[] = [];

        children.forEach((child, index) => {
        let colSpan: number;

        // If we have reached the last item in the row or last child overall, fill the remaining space
        if (index === children.length - 1 || currentRowColumns + 4 > totalColumns) {
            colSpan = totalColumns - currentRowColumns;
        } else {
            colSpan = getRandomSpan(totalColumns - currentRowColumns, previousRowSpans);

            // If no valid spans are left, allow repetition
            if (!colSpan) {
            colSpan = getRandomSpan(totalColumns - currentRowColumns, []);
            }
        }

        // Apply the grid-column span to the child element
        (child as HTMLElement).style.gridColumn = `span ${colSpan}`;

        // Update the current row columns and spans
        currentRowColumns += colSpan;
        currentRowSpans.push(colSpan);

        // Reset row if full
        if (currentRowColumns === totalColumns) {
            currentRowColumns = 0;
            previousRowSpans = [...currentRowSpans]; // Save the current row spans
            currentRowSpans = []; // Reset for the next row
        }
        });

    }

}

