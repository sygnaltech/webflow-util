
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Scripts Utilities
 */

enum PageInstallPosition {
    headStart = "headStart",
    headEnd = "headEnd",
    head = "head", // Webflow
    bodyStart = "bodyStart",
    bodyEnd = "bodyEnd",
    body = "body", // Webflow
}


export class Sa5Scripts {

    // Initialize
    constructor() {


    }

    // Start a console log group
    install(
        src: string, 
        type: string = null, 
        async: boolean = false, 
        defer: boolean = false, 
        installPos: PageInstallPosition = PageInstallPosition.head,
        ) {




        // Check for existing

        // Prevent double-loads

        var script: HTMLScriptElement = document.createElement("script");
        script.src = src;
        script.type = type; // text/javascript // module
        script.async = async;
        script.defer = defer;

console.log("installing script", script); 

        switch(installPos) {
            case PageInstallPosition.headStart:
                document.head.insertBefore(script, document.head.firstChild);
                break;
            case PageInstallPosition.head:
            case PageInstallPosition.headEnd:
                document.head.appendChild(script);
                break;
            case PageInstallPosition.bodyStart:
                document.body.insertBefore(script, document.body.firstChild);
                break;
            case PageInstallPosition.body:
            case PageInstallPosition.bodyEnd:
                document.body.appendChild(script);
                break;
        }

    }

}


