
- [Home](/webflow-util)

# Collection List Data Sources

WFU makes your data more programmatically accessible by creating **data sources** and a **database** for your scripts to use.

This feature enables WFU's [data-binding](databinding) capabilities, but you can access this database for other purposes, such as diplaying a CMS collection item count.

*See an example of how to do that below.*

## How to Create a Collection List Data Source

In the Webflow designer;

1. Create a Webflow `Collection List`. Put it somewhere you can find easily, I recommend you make it the very last element in your page.

2. Bind it to the `Collection` you want to access data from.

3. In the Collection List Item, add an `HTML Embed` element.

4. Paste the following code into the `HTML Embed`.

```
<script type="application/json">
{
  "id": " (your item goes here) ",
  "text": " ( text item goes here) "
}
</script>
```

+ Where I have indicated with (notes), you'll need to insert the field you want for the item ID, and the text you want to display. 
+ Typically the ID would be unique, and the `slug` works great for that. You may have another field such as a product SKU that would be more appropriate.
+ The name is whatever field you want visible to the user.
+ In Webflow's Designer, use the **Add Field** widget at the top right of the Embed element to insert these
+ Make certain there are no spaces between your inserted tag, and the double quotes `"`.



5. Name your data source. We do this with a custom attribute on the Collection List itself;

+ Select your outermost Collection List element.
+ Add a custom attribute named `wfu-data`.
+ In the value, give it a unique name. I recommend all lowercase letters, no spaces or special characters. For example `blogposts` and `products` are good names.
+ *Remember this name*, you'll need it later.


6. Once you're all setup, you can make the Collection List invisible. Simply select the outermost Collection List element and mark it as invisible on all devices. If you do this, you won't see it anymore in the Webflow designer, but you can select it in the left-side Navigator.

*You have a data source!*

You can create as many collection data-sources as you need, but make certain they are each named differently.



# Advanced Notes

You can create as many collection data-sources as you want, but make certain they are each named differently. Webflow does have a limit on the number of Collection Lists per page, and these will count towards that.

If you happen to already have a collection list on the page that displays exactly the data you want, you can use that Collection List as your datasource. Simply put your Embed block there, and apply the `wfu-data` attribute to the Collection List. Don't mark the Collection List as invisible, however you can mark the Embed element as invisible to avoid a messy look in your Designer.

If you've hidden your Collection List, or your Embed, remember they're always available in your left-side navigation.

If you use your data-source on multiple pages, you can build your Collection List into a Symbol. Wrap your Collection list in a DIV, and turn the DIV into a Symbol. This will allow you to more easily access that outmost Collection List element if you need to.




## Ways to Use your Data

Besides [data-binding](databinding), you can use this data in other ways. 

### Collection List Item Count

Want to display the number of items in a collection? 

1. Setup that colection as a data source using the instructions above. In this example, we'll give the data source a `wfu-data` id of `blogposts`. Any unique datasource name will work (see above).
2. Create an element on your page where you want to display the count. In this example, we'll give it an ID of `myCounter`
2. Paste the following code into your page's **Before `</body>` tag** section.

    
```
<script type="module">
import { dataBindAll } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util@3.0/src/datasources/webflow-collectionlist-data.js';
$(function () {

    // Create database
    var db = loadAllDataSources();

    // Count items
    $("#myCounter").text(db.data.get("blogposts").length);
});
</script>
```



## How it Works

WFU **data sources** are simple JSON arrays built from Collection Lists that you prepare. These are stored in a Map collection that I refer database, which enables you to retrieve multiple data sources


