
$(document).ready(function() {

   dataBindAll();

});

function dataBindAll()
{

   // Find all elements with attr data-source="..."
//  var dataBoundElements = $('*').filter(function() {
//     return $(this).data("source") != undefined; 
//  });

   // Find all elements which specify a data-source
   // for data binding
   var dataBoundElements = $('[data-source]');

   // Iterate and bind each individually
   $.each(dataBoundElements, function (i, elem) {
      dataBind(elem);   
   })

}

function dataBind(elem)
{

   // Determine element type
   var elemType = getElemType(elem);

   // Get the data-source name
   var dataSource = elem.getAttribute('data-source');

   // Handle missing source specification
   if (!dataSource) {
      console.warn ('dataBound element found with no datasource specified.');
      return;
   }

   // Get data (build data source)
   var data = getDataSource(dataSource);

   // Do data binding
   switch (elemType) {
   case 'select': 
      $.each(data, function (key, entry) {
         
         // create new option element
         var opt = document.createElement('option');

         // create text node to add to option element (opt)
         opt.appendChild( document.createTextNode(entry.text) );

         // set value property of opt
         opt.value = entry.id; 

         // add opt to end of select box (sel)
         elem.appendChild(opt);         
         
      })
   
      break;
   default: 
         console.warn ('Unable to databind unknown element type.');
      
      break;
   }

}

// Amalgamates from internally tagged DIVs
function getDataSource(name)
{

   // Aggregate JSON Data
   var data = $('*[data="' + name + '"]'); 

   var items = []  // place to store the pairs
   data.each(function(index, elem){ //loop over the keys
      items.push(elem.textContent);
   })

   var json = '[' + items.join() + ']';

   return JSON.parse(json); 
}

function getElemType(elem)
{

   // <select>
   if (elem instanceof HTMLSelectElement) {
      return 'select';
   }

   // Unknown and unsupported element type
   return 'unknown';
}

