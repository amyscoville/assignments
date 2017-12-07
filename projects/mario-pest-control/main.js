//INDIVIDUAL PRICE
//find out how many have been caught
//multiply how many have been caught by its price
//display price in span

function getPrice(type, unitPrice) {
    var input = document.getElementById('num-' + type);
    if(input.value !== '') {
        return unitPrice * Number(input.value);
    } else {
        return 0;
    }
}

function setPrice(type, unitPrice) {
    var span = document.getElementById(type + '-price')
    span.innerHTML = getPrice(type, unitPrice) + ' coins';
}

function setTotal() {
    var totalPrice = getTotalPrice();
    var totalPriceSpan = document.getElementById('total-price');
    totalPriceSpan.innerHTML = '$' + totalPrice + '.00';
}

function getTotalPrice() {
    var goombaSubtotal = getPrice('goombas', 5);
    var bobombSubtotal = getPrice('bob-ombs', 7);
    var cheepCheepSubtotal = getPrice('cheep-cheeps', 11);
    return goombaSubtotal + bobombSubtotal + cheepCheepSubtotal;
}

document.oninput = function(event) {
    console.log(event);
    if(event.srcElement.id === 'num-goombas'){
        setPrice('goombas', 5);
        setTotal();
    } else if (event.srcElement.id === 'num-bob-ombs') {
        setPrice('bob-ombs', 7);
        setTotal();
    } else if (event.srcElement.id === 'num-cheep-cheeps') {
        setPrice('cheep-cheeps', 11);
        setTotal();
    }
}
