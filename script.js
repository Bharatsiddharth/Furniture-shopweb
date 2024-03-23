const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


var product = [
    {names: "wooden", price:"10,000", image:"https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {names: "custon chair", price:"15,000", image:"https://images.unsplash.com/photo-1429087969512-1e85aab2683d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {names: "whitechair", price:"12,000", image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {names: "wooden", price:"10,000", image:"https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {names: "custon chair", price:"15,000", image:"https://images.unsplash.com/photo-1429087969512-1e85aab2683d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {names: "whitechair", price:"12,000", image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}, 

]

function addproduct(){
    var clutter = '';

product.forEach(function(product,idx){
    clutter += `<div class="card1">
    <img src="${product.image}" alt="">
    <h3>${product.names}</h3>
    <h4>${product.price}</h4>
</div>`;

})

document.querySelector(".cards").innerHTML = clutter;
}
addproduct();


// Data for card-1 elements
const cardData = [
    {
        iconClass: 'ri-truck-line',
        title: 'Fast & Free Shopping',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, inventore.'
    },
    {
        iconClass: 'ri-shopping-bag-2-line',
        title: 'Easy to Shop',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, inventore.'
    },
    {
        iconClass: 'ri-stack-line',
        title: '24/7 support',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, inventore.'
    },
    {
        iconClass: 'ri-infinity-fill',
        title: 'Hassels free return',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, inventore.'
    }
];


var page5_cards = [
    {image:"images/images/product-1.png", heading:"Nordic Chair", data:"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio", btn:"Read more"},
    {image:"/images/images/product-2.png" , heading:"Kruze Aero Chair", data:"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio", btn:"Read more"},
    {image:"/images/images/product-3.png", heading:"Ergonomic Chair", data:"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio", btn:"Read more"}
]


function card(){
    var clutter = '';

    page5_cards.forEach(function(product,idx){
    clutter += ` <div class="first">
    <img src="${product.image}">
    <div class="data">
        <h2>Nordic Chair</h2>
        <h4>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</h4>
        <button>Read more</button>
    </div>
</div>`;

})

document.querySelector(".page5-cards").innerHTML = clutter;
}

card();
