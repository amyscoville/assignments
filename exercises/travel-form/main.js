var submitBtn = document.getElementById('submit');

submit.onclick = function(event) {
    event.preventDefault();
    var firstName = document.getElementsByName('f-name')[0].value;
    var lastName = document.getElementsByName('l-name')[0].value;
    var gender = document.querySelector('input[name=gender]:checked').value;
    var destination = document.getElementById('location').value;
    var checkboxes = document.getElementsByName('checkbox');
    var dietaryResArr = [];
    for (var i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked) {
            dietaryResArr.push(" " + checkboxes[i].value);
        }
    }
    alert('First Name: ' + firstName + '\n' + 'Last Name: ' + lastName + '\n' + 'Gender: ' + gender + '\n' + 'Destination: ' + destination + '\n' + 'Dietary Restrictions: ' + dietaryResArr);
}
