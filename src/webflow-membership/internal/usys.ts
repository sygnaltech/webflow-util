


abstract class WebflowUsysRequest {

    async exec() {

        this.getCSRFToken().then(csrfToken => {
            this.makeApolloRequest(csrfToken);
        });        

    }

    async getCSRFToken(): Promise<string> {
        const response = await fetch('/.wf_graphql/csrf', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });

        const data = await response.json();
        console.log("CSRF Response:", data);

        // Extract the wf-csrv cookie value
        const csrfToken = document.cookie.split('; ')
            .find(row => row.startsWith('wf-csrf='))
            .split('=')[1];

/* CSRF

{
    "ok": 1
}

*/

        return csrfToken;
    }

    async makeApolloRequest(csrfToken: string) {
        const response = await fetch('/.wf_graphql/usys/apollo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Wf-Csrf': csrfToken
            },
            body: JSON.stringify(
                this.requestObj   
            )
        });
    
        const data = await response.json();
        console.log("Apollo Response:", data);
        console.log(JSON.stringify(data));
    }

    abstract get requestGql(): string; 

    abstract get requestObj(): object;

}

