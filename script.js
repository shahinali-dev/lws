const productPrice = 500;
let totalPrice = 0;


const total = document.getElementById('total');
total.innerText = `$ ${totalPrice}`;
const price = document.getElementById('price');
price.innerText = `$ ${productPrice}`;

const addToCart = document.getElementById('button');


addToCart.addEventListener('click', () => {
    total.innerText = totalPrice += productPrice;
})