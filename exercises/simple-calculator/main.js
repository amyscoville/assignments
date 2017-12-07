// <!-- You will have one section (<div>) for each math operation (so 3 sections) total
// Each section has two inputs to take the first and second numbers
// Each section will have a button to perform the operation
// You will inject the result into the HTML (not an alert)
// Your website will have 3 colors
// Your website will have proper padding/spacing to lay things out nicely -->

var addSubmit = document.getElementById('add-submit');
var subSubmit = document.getElementById('sub-submit');
var multSubmit = document.getElementById('mult-submit');

var addOutput = document.getElementById('addOutput');
var subOutput = document.getElementById('subOutput');
var multOutput = document.getElementById('multOutput');

function add() {
    var addNum1 = Number(document.getElementById('addNum1').value);
    var addNum2 = Number(document.getElementById('addNum2').value);
    addOutput.innerHTML = addNum1 + addNum2;
}

function subtract() {
    var subNum1 = Number(document.getElementById('subNum1').value);
    var subNum2 = Number(document.getElementById('subNum2').value);
    subOutput.innerHTML = subNum1 - subNum2;
}

function multiply() {
    var multNum1 = Number(document.getElementById('multNum1').value);
    var multNum2 = Number(document.getElementById('multNum2').value);
    multOutput.innerHTML = multNum1 * multNum2;
}

