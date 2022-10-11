---
layout: page
title: Webflow Forms to Webhook
# subtitle: DEMO
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-table
---

{% if site.url == "http://localhost:4000" %}
{% assign lib_url = "https://localhost" %}
{% else %}
{% assign lib_url = "https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util" %}
{% endif %}


## DEMO - Webflow Form w/ Webhook

<a class="button is-danger" href="https://webflow-forms-demo.webflow.io/auto/zapier-webhook" target="_blank">View Demonstration in Webflow ( Zapier webhook )</a>

<a class="button is-danger" href="https://webflow-forms-demo.webflow.io/auto/webhook-success" target="_blank">View Demonstration in Webflow ( Other webhook )</a>

Webflow forms can be redirected to a webhook for external processing, by specifying the `action` in Webflow's designer.

This gives you a lot of power, including business logic and immediate processing of your form data, 
however Webflow does not have any in-built way to handle the webhook's response. 

So instead of a "success" message, the user sees JSON. Not an ideal user experience. 

This library bridges that gap;

1. It submits your form directly to the webhook you choose
2. It analyzes the response to determine success or failure 
3. It then displays the form success or failure message, depending on that result.

Each webhook provider handles the webhook response differently, so we have several "handlers" for each situation;

- The Zapier handler looks for "success" in the response- however it's important to note that Zapier's success response
only indicates that the data was received successfully. It does not indicate that the Zap ran successfully. 

- The Success handler always displays the success message. It's most useful for situations where success/failure aren't that important,
you just need to indicate to the user that their work is done. Use it for simple and less essential form submissions, like newsletter enrollments. 

- The Make/Integromat handler can handle specific responses and display error messages. 
It is currently under development, and will be available here soon.  


### Using Zapier Webhooks

Webflow forms can be integrated with Zapier in two primarly ways...

- Setup your Zap to trigger off of a Webflow form post. 
This works fine, but behaves differently;

  - it has a polling delay which means it will be some minutes before your form is processed, and 
  - it will trigger Webflow's form data storage, and form notification email. In some cases these are simply not desired,
and they cannot be selectively turned off for a specific form. 

- Set up your Zap to trigger off of a Webhook, and then give that Webhook URL to your Webflow form as the `Action` URL. Set your form method to POST.

That second option works great however Webflow's forms handler then does not run at all, 
which means that the user sees the webhook's JSON response. 

This library allows you to get the best of both worlds;

- Setup your Zapier Zap to process your form post data any way you want.

- Wire that into your Webflow form using the Webhook URL as the action

- Get your form submission immediately, with no delay 

- Avoid unwanted logging, emails, and waste of Webflow's "form submission" credits

- Make the form behave like a normal webflow form post

- On post, stay on the same page, and display the form's success message 



## Getting Started ( NOCODE )


### STEP 1 - Add the Library


Install this JS in BODY, site-wide or on the specific pages you want the script to affect.

```
<script type="module" src="{{ site.liburl }}/src/nocode/webflow-form.js"></script>
```



### STEP 2 - Setup your Zap, and link your Webflow form 


Unlike most WFU elements, custom attributes are not needed. 

Simply;

- Setup your Zapier webhook

- Copy the webhook URL and in the Webflow designer, paste it into the `Action` setting of the form.

- Design the form however you like

- Make sure to customize your success and fail messages too. 


### STEP 3 - Mark your Form for WFU's handler


Open the left-side Navigator panel in Webflow's and select the `Form Block` element ( not the `Form` element ). 
On the `Form Block` element, add a custom attribute of `wfu-form-handler`, and specify the handler you want;

- Use `zapier` for Zapier webhooks.

- Use `success` for other webhooks.

Each will behave slightly differently in how it processes the response, since each webhook service does responses differently.
For `zapier`, the response is 


