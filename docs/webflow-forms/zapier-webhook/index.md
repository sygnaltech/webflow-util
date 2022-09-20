---
layout: page
title: Webflow Forms to Zapier Webhook
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


## DEMO - Webflow Form w/ Zapier Webhook

<a class="button is-danger" href="https://webflow-forms-demo.webflow.io/zapier-webhook" target="_blank">View Demonstration in Webflow</a>


Webflow forms can be integrated to Zapier in two ways...

- Setup your Zap to trigger off of a Webflow form post. 
This works fine, but 
(1) is has a polling delay which means it will be some minutes before your form is processed, and 
(2) I will trigger Webflow's form data storage, and form notification email. In some cases these are simply not desired,
and they cannot be selectively turned off for a specific form. 

- Setup your Zzp to trigger off of a Webhook, and then give that Webhook URL to your Webflow form as the `Action` URL.

That second option works great however Webflows forms handler then does not run at all, 
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


There are currently no configuration options for this library, so we'll use a *no-code* integration approach.

Install this JS in BODY, site-wide or on the specific pages you want the script to affect.

```
<script type="module" src="https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util@latest/src/nocode/webflow-form.js"></script>
```

*In place of `@latest` use the current version number in your URLs.*



### STEP 2 - Setup your Zap, and link your Webflow form 


Unlike most WFU elements, custom attributes are not needed. 

Simply;

- Setup your Zapier webhook

- Copy the webhook URL and in the Webflow designer, paste it into the `Action` setting of the form.

- Design the form however you like, including the success and fail messages. 


