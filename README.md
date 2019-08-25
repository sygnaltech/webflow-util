# webflow-util

## Webflow Utilities

This library provides a set of helper functions to simplify and streamline 
[Webflow](https://webflow.com/)
development.

It's designed specifically to assist with overcoming certain limitations of Webflow, and add certain functionality.

Current core features;

1. Data-binding form controls (such as dropdowns and listboxes) to Webflow **Collections**.


*This library will be expanded as needed, and broken into modules for convenient selection of the parts you need.*


## Using Webflow Data

This simple databinding utility has does two things;

1. It composes a JSON-based data source from a Webflow Collection List.
2. It searches for any **Select** elements which have a `data-source` attribute, and it populates them from the matching JSON data.

Important notes;

1. Can work with any Collection, filtered and sorted as you choose, via a Collection List.
1. Currently only works with SELECTS

### How to use

1. In your Page *settings* (click the gear icon), add the script reference to the **Before </body> tag** section.

```
<script src="https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util@1.0/dist/webflow-data.js"></script>
```

*Currently I am using [JSDelivr](https://en.wikipedia.org/wiki/JSDelivr) but you can use any CDN that support GIT.*

*Note JSDelivr's [versioning](https://www.jsdelivr.com/features) support- if we introduce a breaking change, I'll update the major version number so that it does not affect production sites.*

1. Create a Webflow `Collection List`.

    1. Bind it to the `Collection` you want.
    1. Set sorting and filtering as you want.
    1. In the Item, create an `HTML Embed` element

Paste the following code into the `HTML Embed`.

```
<script type="application/json" data="mydata">
{
  "id": " (your item goes here) ",
  "text": " ( text item goes here) "
}
</script>
```

1. Configure the `Embed` code as follows;

    1. set the `data` attribute to the name you want for your datasource. You can have create several different datasources on the same page if you like.

    1. for the `id`, use whatever **Add Field** item you want, generally `Slug` is the best field to use.

    1. for the Text, use whatever **Add Field** item you want displayed as the text in the SELECT.

    1. Make the Collection List invisible, if you want it hidden in the designer (this will not affect displayed output).  If you do this, you won't see it anymore in the Webflow designer, but you can select it in the left-side Navigator.

1. Add a `Form` and a `Select` element in the Webflow designer.  

    1. Apply a `data-source` attribute, specifying your custom source.




Done!

