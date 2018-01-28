console.log(JSON.parse(localStorage.getItem('cart')));

let cart = JSON.parse(localStorage.getItem('cart')) || {};

document.onload = displayCart();

function displayCart() {
    if(localStorage.getItem('cart')) {
        let table = document.getElementById('myTable');
    for (let key in cart) {
        if (key === 'totalPrice' || key === 'totalQty') {
            continue;
        }
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
    setFinalRow();
    }
}

function setFinalRow() {
    let table = document.getElementById('myTable');
    let lastRow = document.createElement('tr');
    let emptyItem = document.createElement('td');
    let emptyPrice = document.createElement('td');
    let totalQty = document.createElement('td');
    let totalPrice = document.createElement('td');

    totalQty.innerHTML = `Total Qty: ${cart.totalQty}`;
    totalPrice.innerHTML = `Total Price: \$${cart.totalPrice}.00`;

    lastRow.appendChild(emptyItem);
    lastRow.appendChild(emptyPrice);
    lastRow.appendChild(totalQty);
    lastRow.appendChild(totalPrice);
    
    table.appendChild(lastRow);
}

let emptyCartButton = document.getElementById('empty-cart');

//WHY ISN'T THIS EMPTY CART WORKING?

emptyCartButton.onclick = function() {
    localStorage.clear();
    cart = {};
    displayCart();
    alert('Your cart is empty');
}

    

    