Source: https://coursework.vschool.io/parsing-json/

Instructions:

The following exercise should be completed in vanilla JavaScript.

Write a Javascript function called parsePokemon.

Use http://api.vschool.io:6543/pokemon.json as your url for your XHR request to get the big list of pokemon.

The function should parse the JSON and create an array of objects that look like this:

{
    name: 'Charmander',
    resource_uri: 'api/v1/pokemon/8/'
},
{(Another pokemon object)},
{(Another pokemon object)},
{(Another pokemon object)},
...
etc.  
Then make each Pokemon's name show up on a separate line in an HTML document. This means you won't be using node.js to run this JavaScript.

Hints
You'll need to manually create an XML HTTP Request and handle the readyState with onReadyStateChange.
You'll need to use the built-in JavaScript JSON object to change the JSON into a useable JavaScript object. Check out the W3Schools JSON Howto for more information and examples.
The data that comes from the url endpoint above is complex. Notice that the "objects" property is an array, so you'll need to index into it's 1st item in order to get any of the pokemon names (data.objects[0]...);
You'll need to use pure JavaScript to create and add an element to your HTML.