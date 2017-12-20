let cart = JSON.parse(localStorage.getItem('cart'));
console.log('Parsed cart:', cart);

console.log(localStorage);

document.onload = displayCart();

function displayCart() {
    let table = document.getElementById('myTable');
    for (let key in cart) {
        let row = document.createElement('tr');
        let item = document.createElement('td');
        item.innerHTML = cart[key].name;
        let price = document.createElement('td');
        price.innerHTML = cart[key].dispPrice;
        let qty = document.createElement('td');
        qty.innerHTML = cart[key].qty;
        let total = document.createElement('td');
        total.innerHTML = cart[key].total;
        row.appendChild(item);
        row.appendChild(price); 
        row.appendChild(qty); 
        row.appendChild(total);
        table.appendChild(row);
    }
    let lastRow = document.createElement('tr');
    let emptyItem = document.createElement('td');
    let emptyPrice = document.createElement('td');
    let totalQty = document.createElement('td');
    let totalPrice = document.createElement('td');

    totalQty.innerHTML = cart.totalQty;
    totalPrice.innerHTML = `\$${cart.totalPrice}.00`;

    lastRow.appendChild(emptyItem);
    lastRow.appendChild(emptyPrice);
    lastRow.appendChild(totalQty);
    lastRow.appendChild(totalPrice);
    
    table.appendChild(lastRow);
}

let emptyCartButton = document.getElementById('empty-cart');

emptyCartButton.onclick = function() {
    localStorage.clear();
    cart = {};
    displayCart();
}

    