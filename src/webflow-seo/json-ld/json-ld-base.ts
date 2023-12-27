
import { DateTime, Duration } from 'luxon';


export abstract class LdJsonBase {
  
    constructor() { 
    }

    formatDate(dateString: string) {
        if (!(dateString || undefined))
            return undefined;
      
        return new Date(dateString); //.toISOString().split('T')[0]
    }

    convertSecToISO8601Duration(sec: number): string {

        const d: Duration = Duration.fromMillis(sec * 1000);
        return d.toISO();
    }
      
    // Accepts a date string, assumes it's GMT+0
    convertWebflowDateToISO8601Date(dateString: string): string {
        //  const dateString = "Apr 01, 2023";
        const format = "MMM dd, yyyy"; // Webflow's date format 
        
        try {
            const dt = DateTime.fromFormat(dateString, format);
            const isoString = dt.toISO();
            return isoString; 
        }
        catch {
            return '';
        } 
    
    }

    toJSON(): any {

    }

  
    generate() {
        
        //      var jsonLD = { ...this };
            
        //    console.log(JSON.stringify(jsonLD, null, 2));
            
//            console.log(JSON.stringify(this, null, 2));
            
    //         // <script type="application/ld+json">
    //         const template = document.createElement('script');
    //         template.setAttribute("type", "application/ld+json"); 
    //         template.innerHTML = JSON.stringify(this, null, 2);
    //         document.body.appendChild(template);
            
    //     }

    // appendToBody(): void {
        var script = document.createElement('script');
        script.type = "application/ld+json";
        script.text = JSON.stringify(this.toJSON(),null,2);
//        document.querySelector('body').appendChild(script);
        document.body.appendChild(script);

        console.log('APPENDED'); 
    }

}