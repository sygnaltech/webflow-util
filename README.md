# webflow-util

## Webflow Utilities

This library provides a set of helper functions to simplify and streamline 
[Webflow](https://webflow.com/)
development.

It's designed specifically to assist with overcoming certain limitations of Webflow, and add certain functionality.

Current core features;

1. Data-binding form controls ( dropdowns & listboxes ) to Webflow **Collections**.
2. The ability to add dynamic attributes to Webflow-generated elements.


*This library will be expanded as needed, and broken into modules for convenient selection of the parts you need.*


## Using Webflow Data

`webflow-data.js` is a simple **databinding utility** has does two things;

1. It composes a JSON-based data source from a Webflow Collection List.
2. It searches for any **Select** elements which have a `data-source` attribute, and it populates them from the matching JSON data.

Here is a video overview of how to use `webflow-data`;

https://www.youtube.com/watch?v=xc7vx7YdK5I

Important notes;

1. Can work with any Collection, filtered and sorted as you choose, via a Collection List.
2. Currently only works with SELECTS. If you have some kind of non-standard HTML component, you can use the JSON directly.

### STEP 1 - Add the Library

You can embed our library directly from the [JSDelivr](https://en.wikipedia.org/wiki/JSDelivr) CDN.

In your Page *settings* (click the gear icon), add the script reference to the **Before </body> tag** section.

```
<script src="https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util@2.0/dist/webflow-data.min.js"></script>
```


*Note JSDelivr's [versioning](https://www.jsdelivr.com/features) support- if we introduce a breaking change, we'll update the **minor** [version number](https://gitversion.readthedocs.io/en/latest/more-info/version-increments/) so that it does not affect production sites. Therefore for simplicity, specify the major and minor version you want as in the example above.*

### STEP 2 - Setup your Data Source

1. Create a Webflow `Collection List`.

    1. Bind it to the `Collection` you want.
    1. Set sorting and filtering as you want.
    1. In the Item, create an `HTML Embed` element

2. Add an `HTML Embed` element to the Collection

3. Paste the following code into the `HTML Embed`.

```
<script type="application/json" data="mydata">
{
  "id": " (your item goes here) ",
  "text": " ( text item goes here) "
}
</script>
```

4. Configure the `Embed` code as follows;

    1. set the script's `data` attribute to the name you want for your datasource. You can have create several different datasources on the same page if you like.

    1. for the `id`, use whatever **Add Field** item you want, generally `Slug` is the best field to use.

    1. for the `text`, use whatever **Add Field** item you want displayed as the text in the SELECT.

    1. Make the Collection List invisible, if you want it hidden in the designer ( this will not affect displayed output ).  If you do this, you won't see it anymore in the Webflow designer, but you can select it in the left-side Navigator.

### STEP 3 - Setup your Form

1. Add a `Form` and a `Select` element in the Webflow designer.  

1. Apply a `data-source` custom attribute, which has the same name that you've given your datasource.

### STEP 4 - Setup the Databinding

In your Page *settings* (click the gear icon), add the script reference to the **Before </body> tag** section, right after your script.


```
    <script>
        $(function () {

            dataBindAll();

        });
    </script>
```


Done!

