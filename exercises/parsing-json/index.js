let xhr = new XMLHttpRequest();  

xhr.onreadystatechange = function () {  
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        let pokeArr = data.objects[0].pokemon;
        let display = document.getElementById('display');
        for(let i = 0; i < pokeArr.length; i++) {
            let newDiv = document.createElement('div');
            newDiv.innerHTML = pokeArr[i].name;
            display.appendChild(newDiv);
        }
    }
};

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);  
xhr.send();