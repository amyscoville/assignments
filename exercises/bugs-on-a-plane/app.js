var form = document.getElementById("airline-form");
var submit = document.getElementById('submit');
var query = document.querySelector;

function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var dietArr = [];
    if (form.elements['vegan'].checked) {
        dietArr.push('vegan');
    } 
    if (form.elements['gluten-free'].checked) {
        dietArr.push('gluten-free');
    }
    if (form.elements['paleo'].checked) {
        dietArr.push('paleo');
    }

    var diet = dietArr.join(', ');


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.onclick = function() {
    formAlert();
}