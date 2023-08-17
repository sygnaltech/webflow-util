


class WebflowUsysLogout extends WebflowUsysRequest {

    constructor() {
        super(); 
    }

//    mutation UserLogoutRequest {\n  usysDestroySession {\n    ok\n    __typename\n  }\n}\n
    override get requestGql(): string {
        return `
            mutation UserLogoutRequest {
                usysDestroySession {
                    ok
                    __typename
                }
            }
        `;
    }

    override get requestObj(): object {
        return [
            {
                operationName: "GetFieldValidations",
                variables: {
                },
                query: this.requestGql
            }
        ];
    }

}


/* 
      function logout() {
        
        // Sa5.usys.logout() 
// Must inject into the page
// This code cannot be run from a CDN due to same-site restrictions 

        fetch('/.wf_graphql/csrf', {
          method: 'POST',
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log("CSRF Response:", data);
      
          // Extract the wf-csrv cookie value
          let csrfToken = document.cookie.split('; ')
            .find(row => row.startsWith('wf-csrf='))
            .split('=')[1];
      
          // After the first request, make the second POST request to `/.wf_graphql/usys/apollo`:
          return fetch('/.wf_graphql/usys/apollo', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'X-Wf-Csrf': csrfToken
              },
              body: JSON.stringify([{
                  "operationName": "UserLogoutRequest",
                  "variables": {},
                  "query": "mutation UserLogoutRequest {\n  usysDestroySession {\n    ok\n    __typename\n  }\n}\n"
              }])
          });
        })
        .then(response => response.json())
        .then(data => {
          console.log("Apollo Response:", data);
          console.log(JSON.stringify(data))
//            window.location.href = '/';

          // Successful logout response:
//          [{"data":{"usysDestroySession":{"ok":true,"__typename":"usys_destroy_session_response"}}}]
          
          /*
          [
    {
        "data": {
            "usysDestroySession": {
                "ok": true,
                "__typename": "usys_destroy_session_response"
            }
        }
    }
]
*/ 
          
          
          /*
        })
        .catch(error => {
          console.error("Error:", error);
        });
  
  
 //         alert('logout.'); 
      }
      
      */  