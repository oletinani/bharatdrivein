let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {

        id: 1,
        name: 'Mirchi Bajji',
        images2: '1.PNG',
        price: 3.99
    },
    {
        id: 2,
        name: 'Peanut Masala',
        images2: '2.PNG',
        price: 6.99
    },
    {
        id: 3,
        name: 'Crispy Corn',
        images2: '3.PNG',
        price: 7.99
    },
    {
        id: 4,
        name: 'Chilli Paneer',
        images2: '4.PNG',
        price: 10.99
    },
    {
        id: 5,
        name: 'Baby Corn Manchurian',
        images2: '5.PNG',
        price: 10.99
    },
      {
        id: 6,
        name: 'Egg Bajji',
        images2: '6.PNG',
        price: 5.99
    },
     {
        id: 7,
        name: 'Chicken Lollipop Dry',
        images2: '7.PNG',
        price: 9.99
    },
     {
        id: 8,
        name: 'Chicken Lollipop Wet',
        images2: '8.PNG',
        price: 10.99
    },
     {
        id: 9,
        name: 'Chicken Manchurian',
        images2: '9.PNG',
        price: 11.99
    },
     {
        id: 10,
        name: 'Chilli Chicken',
        images2: '9.PNG',
        price: 11.99
    },
     {
        id: 11,
        name: 'Peddapuram Fish Pakodi',
        images2: '10.PNG',
        price: 12.99
    },
     {
        id: 12,
        name: 'Rayalaseema Royyala Vepudu',
        images2: '11.PNG',
        price: 12.99
    },
     {
        id: 13,
        name: ' Vulavacharu Kodi Vepudu',
        images2: '12.PNG',
        price: 13.99
    },
     {
        id: 14,
        name: 'Noodles Veg',
        images2: '14.PNG',
        price: 10.99
    },
     {
        id: 15,
        name: 'Noodles Egg',
        images2: '14.PNG',
        price: 11.99
    },
     {
        id: 16,
        name: 'Noodles Chicken',
        images2: '14.PNG',
        price: 12.99
    },
     {
        id: 17,
        name: 'Schezwan Noodles Veg',
        images2: '17.PNG',
        price: 10.99
    },
     {
        id: 18,
        name: 'Schezwan Noodles Egg',
        images2: '17.PNG',
        price: 11.99
    },
     {
        id: 19,
        name: 'Schezwan Noodles Chicken',
        images2: '17.PNG',
        price: 12.99
    },
     {
        id: 20,
        name: 'Fried Rice Veg',
        images2: '20.PNG',
        price: 10.99
    },
     {
        id: 21,
        name: 'Fried Rice Egg',
        images2: '20.PNG',
        price: 11.99
    },
     {
        id: 22,
        name: 'Fried Rice Chicken',
        images2: '20.PNG',
        price: 12.99
    },
     {
        id: 23,
        name: 'Schezwan Friend Rice',
        images2: '23.PNG',
        price: 10.99
    },
     {
        id: 24,
        name: 'Schezwan Friend Rice Egg',
        images2: '23.PNG',
        price: 11.99
    },
     {
        id: 25,
        name: 'Schezwan Friend Rice Chicken',
        images2: '23.PNG',
        price: 12.99
    },
     {
        id: 26,
        name: 'Idly',
        images2: '26.PNG',
        price: 4.99
    },
     {
        id: 27,
        name: 'Ghee Karam Idly',
        images2: '27.PNG',
        price: 6.99
    },
     {
        id: 28,
        name: 'Podikaram Ghee Chitti Idly',
        images2: '28.PNG',
        price: 6.99
    },
     {
        id: 29,
        name: 'Sambar Idly',
        images2: '29.PNG',
        price: 6.99
    },
     {
        id: 30,
        name: 'Kobbari Karam Ghee Idly',
        images2: '30.PNG',
        price: 6.99
    },
     {
        id: 31,
        name: 'Dosa',
        images2: '31.PNG',
        price: 6.99
    },
     {
        id: 32,
        name: 'Masala Dosa',
        images2: '32.PNG',
        price: 8.99
    },
     {
        id: 33,
        name: 'Egg Dosa',
        images2: '33.PNG',
        price: 8.99
    },
     {
        id: 34,
        name: 'Double Egg Dosa',
        images2: '33.PNG',
        price: 10.99
    },
     {
        id: 35,
        name: 'Ghee Karam Dosa',
        images2: '35.PNG',
        price: 8.99
    },
     {
        id: 36,
        name: 'Chicken Shawarma',
        images2: '36.PNG',
        price: 9.99
    },
     {
        id: 37,
        name: 'Butter Milk',
        images2: '37.PNG',
        price: 2.99
    },
     {
        id: 38,
        name: 'Sweet Lassi',
        images2: '38.PNG',
        price: 3.99
    },
     {
        id: 39,
        name: 'Mango Lassi',
        images2: '39.PNG',
        price: 4.99
    },
     {
        id: 40,
        name: 'Indian Soft Drinks',
        images2: '40.PNG',
        price: 2.99
    },
    {
        id: 41,
        name: 'Soft Drinks',
        images2: '41.PNG',
        price: 1.99
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images2/${value.images2}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images2/${value.images2}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}