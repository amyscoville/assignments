console.log(window);

var input = document.getElementById('input');
var submit = document.getElementById('submit');
var display = document.getElementById('list');

input.onfocus = function() {
    input.style.backgroundColor = 'yellow';
}

submit.onclick = function(event) {
    if(input.value !== ''){
        var inputText = input.value;
        var li = document.createElement('li');
        var txtNode = document.createTextNode(inputText);
        li.appendChild(txtNode);
        display.appendChild(li);
        input.value = '';
    }
}