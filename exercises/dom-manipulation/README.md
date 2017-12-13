Instructions:

So you have a webpage with an HTML list of your favorite candies: Necco Wafers, Trolli Sour Brite Crawlers, and Circus Peanuts. Somehow you just know that not all visitors to your site will be satisfied, for whatever reason, with your current list. To solve this you decide to allow them to add their own favorite candies—like premium Lindt chocolates or who-knows-what. It is strange to think that some people would want to modify that candy selection, but this is the internet and people should have that liberty.

You add some input fields and a button. You make the button run a function when it's clicked. But how do you take that chocolate treat from the input field and make it appear on the list on the page. Enter Javacript and the DOM.

It turns out that each of your HTML elements, including your candy-shelled list items and input boxes has its own spot in the Document Object Model or DOM. The DOM is the way the browser keeps track of where all of the elements are and how they relate to each other.

With Javascript you can find specific elements in your HTML and change them. Three of the most common ways to find elements are by tag name, by id, and by class name.

For example, let's say you want to take the candy name the user typed in the input box, and then append a list item with that name to your candy list. You can give the input box an id and it might look like this in your HTML file:

<input type="text" id="candyInput">  
Notice the id="candyInput".

The following Javascript would select that input element by id and store the element in a variable (first line) and store the value of the element in another variable (second line). The value of an input element is the text the user typed in the input element.

var userCandy = document.getElementById("candyInput");  
var candyText = userCandy.value;  
Now that we have safely stored the candy the user freely chose, whether it be Ghirardelli or Tutti Frutti, we are okay with any of it, we can append that candy to our list. Your original and unblemished HTML candy list may look like this:

<ul id="candyList">  
    <li>Necco Wafers</li>
    <li>Trolli Sour Brite Crawlers</li>
    <li>Circus Peanuts</li>
</ul>  
Notice the id in the <ul> tag. We can access that element in the Javascript and append a new <li> to it with the new candy choice.

There are a few intermediate steps involved here. Before we append a new <li> to the <ul> we will need to create that <li>. And we need to add the candy choice text that the user entered to the <li>. But before we do that, we will create something called a text node and put the text in the text node. Then we append that text node to the <li>. Appending means we are putting something into an element as its last child. And finally we can append the <li> to the <ul>.

As a side note, the DOM is organized into parent-child relationships. A parent element contains a child. And an HTML element that has text inside of it actually has a text node as a child and the text node contains the text.

Let's add this code to our other Javascript code with comments to show what's going on. And let's wrap it in a function that can be called when a button is clicked.

function addCandy() {  
    var userCandy = document.getElementById("candyInput");
    var candyText = userCandy.value;

    // create empty <li> tag
    var li = document.createElement("li");
    // create text node with text of the user's candy choice
    var txtNode = document.createTextNode(candyText);
    // append txtNode to the li element
    li.appendChild(txtNode);
    // get the ul and attach li as the last child of the ul
    var ul = document.getElementById("candyList");
    ul.appendChild(li);
}
To really put this into use, you need to add a button with onclick triggering your addCandy function. You also need to include your Javascript file in a script tag. The HTML might look like this:

<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">
    <title>Document</title>
</head>  
<body>  
    <input type="text" id="candyInput">
    <button type="button" onclick="addCandy()">Add Candy</button>
    <ul id="candyList">  
        <li>Necco Wafers</li>
        <li>Trolli Sour Brite Crawlers</li>
        <li>Circus Peanuts</li>
    </ul>
    <script src="candy.js"></script>
</body>  
</html>  
Okay, now we're ready to add whatever candy the user picks, even gourmet licorice.

Now, remember that there are other ways apart from document.getElementById() to get access to HTML elements? Here are examples of accessing elements by class name or by tag name:

var divs = document.getElementsByTagName("div");  
// divs will be an array of all of the div elements in your HTML
var candies = document.getElementsByClassName("candy");  
// candies will be an array of all elements with a class of "candy"
Note that the variables divs and candies will be arrays of element objects. To manipulate one of the elements you would need to access the object inside the array like divs[0].appendChild(textNode) which would append textNode to the first element in the divs array.

There are other things you can do with Javascript DOM manipulation. Try reading up on it. You will find methods you can use with HTML elements like .innerHTML and .className plus other ways to manipulate the DOM.