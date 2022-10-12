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
This gives you a lot of capability, including business logic and immediate processing of your form data, 
however Webflow does not have any in-built way to handle the webhook's response.

By default, instead of a "success" message, the user sees the JSON response itself- which is not an ideal user experience. 
Alternatively, you're forced to create a thank you page, exclude it from search engines, etc- when often all you wanted was a success message.

The WFU forms handler bridges that gap;

1. It submits your form directly to the webhook you choose.
2. It analyzes the response to determine success or failure.
3. It then displays the form success or failure message, depending on that result.

Because each webhook provider responds differently, we have several "handlers" for each situation;

- The **Zapier** handler looks for "success" in the response, and displays the success message if it is present. However it's important to note that Zapier's success response
only indicates that the data was received successfully. It does not indicate that the Zap ran successfully. 

- The **Other** handler always displays the success message. It's most useful for unknown webhookd providers, 
and in situations where success/failure aren't that important, you just need to indicate to the user that their work is done. 
Use it for simple and less essential form submissions, like newsletter enrollments. 

- The **Make** (Integromat) handler can handle specific responses and display error messages. 
It is currently under development, and will be available here soon.  


### Key advantages

- Immediate form processing, with no delays. If you've used e.g. Zapier's polling trigger, it can take 10 minutes for a form submission to be detected.

- No need to use Webflow's built-in forms notification system. 
You can go direct to a Sales Force Automation (SFA) system, or to your own email notification with no unsubscribe link problems. 

- No form submission limits. 

- Make the form behave like a normal webflow form post, where it stays on the same page, and displays the form's success message.

- Handle error scenarios better, including unique server side logic and error messages ( with Make ).


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

- Use `other` for all other webhooks.

Each will behave slightly differently in how it processes the response, since each webhook service does responses differently.
See notes above.


