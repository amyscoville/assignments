console.log('1', localStorage);

let shoppingCart = JSON.parse(localStorage.getItem('cart')) || {}; 
shoppingCart.totalPrice = shoppingCart.totalPrice || 0;
shoppingCart.totalQty = shoppingCart.totalQty || 0;

let btn1 = document.getElementById('p1Btn');
let btn2 = document.getElementById('p2Btn');
let btn3 = document.getElementById('p3Btn');
let btn4 = document.getElementById('p4Btn');
let btn5 = document.getElementById('p5Btn');
let btn6 = document.getElementById('p6Btn');
let btn7 = document.getElementById('p7Btn');
let btn8 = document.getElementById('p8Btn');
let btn9 = document.getElementById('p9Btn');

var addToCart = function(item) {
    if(!shoppingCart[item.id]){
        shoppingCart[item.id] = {
            name: item.name,
            price: item.price,
            dispPrice: `\$${item.price}.00`,
            qty: 1,
            total: `\$${item.price}.00`
        };
        shoppingCart.totalPrice += item.price;
        shoppingCart.totalQty++;
    } else {
        shoppingCart[item.id].qty++;
        let total = shoppingCart[item.id].qty * shoppingCart[item.id].price;
        shoppingCart[item.id].total = `\$${total}.00`;
        shoppingCart.totalPrice += shoppingCart[item.id].price;
        shoppingCart.totalQty++;
    } 
    storeCart();   
}

function storeCart() {
    localStorage.setItem("cart", JSON.stringify(shoppingCart));   
}

btn1.onclick = function () {addToCart({ id: 'p1', name: 'Choose Happy', price: 5 });}
btn2.onclick = function() {addToCart({id: 'p2', name: 'Be The Nice Kid', price: 10});}
btn4.onclick = function() {addToCart({id: 'p3', name: 'Heaven Is Cheering You On (short)', price: 35});}
btn3.onclick = function() {addToCart({id: 'p4', name: 'You Are A Son of God', price: 35});}
btn5.onclick = function() {addToCart({id: 'p5', name: 'Heaven Is Cheering You On', price: 18});}
btn6.onclick = function() {addToCart({id: 'p6', name: 'Come Thou Fount', price: 15});}
btn7.onclick = function() {addToCart({id: 'p7', name: 'Merry Christmas', price: 5});}
btn8.onclick = function() {addToCart({id: 'p8', name: 'The Christmas Story - Luke 2', price: 5});}
btn9.onclick = function() {addToCart({id: 'p9', name: 'The Night Before Christmas', price: 5});}








