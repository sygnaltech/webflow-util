---
layout: page
title: Payment Providers
# subtitle: DEMO
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-commerce
---

{% if site.url == "http://localhost:4000" %}
{% assign lib_url = "https://localhost" %}
{% else %}
{% assign lib_url = "https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util" %}
{% endif %}


## DEMO - Payment Providers

Webflow has an in-build e-commerce solution, however it adds a substantial monthly cost and lacks some capabilities.
Sometimes you just need something simple, and crude, and cheap.

Fortunately, there are some payment providers who can be easily integrated using a simple payment URL format.

This library allows you to easily construct those URLs.

Currently we support two providers-

- Windcave
- Paypal

Important- this is not a no-code solution.
It simply encapsulates the URL construction. 

## Getting Started ( NOCODE )



### STEP 1 - Write your Code

e.g.;

```
<script type="module">

using { WindcavePayment, PaypalPayment } from "{{ site.liburl }}/src/modules/webflow-commerce.min.js";

$(function() {
  
    var payPaypal = new PaypalPayment();
    payPaypal.business = "pay@sygnal.com"; // your Paypal email
    payPaypal.amount = totalWithFees; // the numeric total amount
    payPaypal.currency_code = "NZD"; // currency you want
    payPaypal.item_name = orderDescription; // what was ordered
    
    // Set this URL on your payment link 
    $("#btn-pay-paypal").attr("href", payPaypal.generateUrl());

});
</script>
```


