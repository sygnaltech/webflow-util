

/*
 * webflow-html
 * Encoded Email
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */


import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';





interface Sa5EncodedEmailConfig {

//    breakpointChangedCallback?: BreakpointChangedCallback; 

}



export class Sa5EncodedEmail {

    config: Sa5EncodedEmailConfig;
    elem: HTMLAnchorElement; 

    constructor(element: HTMLAnchorElement, config: Partial<Sa5EncodedEmailConfig> = {}) {

        this.elem = element; 

        // Merge configs, with defaults
        this.config = {
        }

        let core: Sa5Core = Sa5Core.startup(); 

    }

    private encodeEmail(email: string): string {
        const shift = 3; // You can choose any number for shifting
        return email.split('').map(char => {
            if (/[a-zA-Z]/.test(char)) {
                // Shift letters
                const base = char <= 'Z' ? 65 : 97;
                return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
            } else if (/[0-9]/.test(char)) {
                // Shift digits
                return String.fromCharCode(((char.charCodeAt(0) - 48 + shift) % 10) + 48);
            } else {
                return char; // Keep non-alphanumeric characters unchanged
            }
        }).join('');
    }
    
    private decodeEmail(encodedEmail: string): string {
        const shift = 3; // Same shift used for encoding
        return encodedEmail.split('').map(char => {
            if (/[a-zA-Z]/.test(char)) {
                // Reverse shift letters
                const base = char <= 'Z' ? 65 : 97;
                return String.fromCharCode(((char.charCodeAt(0) - base - shift + 26) % 26) + base);
            } else if (/[0-9]/.test(char)) {
                // Reverse shift digits
                return String.fromCharCode(((char.charCodeAt(0) - 48 - shift + 10) % 10) + 48);
            } else {
                return char; // Keep non-alphanumeric characters unchanged
            }
        }).join('');
    }

    init() {

        // Initialize debugging
        let debug = new Sa5Debug("sa5-html");
//        debug.debug ("Encoded emails initialized.", this.config);
    

            let mailtoHref = this.elem.getAttribute('href');
            if (mailtoHref && mailtoHref.startsWith('mailto:')) {
                let emailPart = mailtoHref.match(/^mailto:([^?]+)/)![1]; // Extract the email part before the query string
                let queryString = mailtoHref.match(/\?.*$/); // Extract the query string part
                let decodedEmail = this.decodeEmail(emailPart);
                let newHref = 'mailto:' + decodedEmail + (queryString ? queryString[0] : '');
                this.elem.href = newHref;
                if (this.elem.innerText === emailPart) {
                    this.elem.innerText = decodedEmail; // Replace text if it matches the encoded value
                }
                this.elem.removeAttribute('wfu-email-encoded'); // Remove the wfu-email-encoded attribute
            }
        
        // const form = document.getElementById('encodeForm') as HTMLFormElement;
        // const emailInput = document.getElementById('emailInput') as HTMLInputElement;
        // const encodedEmailDisplay = document.getElementById('encodedEmail') as HTMLParagraphElement;
        
        // form.addEventListener('submit', function(event) {
        //     event.preventDefault();
        //     const email = emailInput.value;
        //     const encodedEmail = encodeEmail(email);
        //     encodedEmailDisplay.textContent = `Encoded Email: ${encodedEmail}`;
        // });


    }



}

