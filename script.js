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


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



var swiperdata = [
    {image:"/images/images/person-1.jpg" , names:"Liza", title:"CEO, Co-Founder, XYZ Inc."},
    {image:"/images/images/person_2.jpg" , names:"Marco", title:"CEO, Co-Founder, XYZ Inc."},
    {image:"/images/images/person_3.jpg" , names:"Jorden", title:"CEO, Co-Founder, XYZ Inc."},
]


function swipercontent(){
    var clutter = '';

    swiperdata.forEach(function(product,idx){
    clutter += `  <div class="swiper-slide">

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint temporibus, laudantium sed consectetur, mollitia explicabo atque quos vero praesentium tempora est, tempore tenetur. A quod eos quasi blanditiis ipsam nesciunt fugiat tempora est dolores nulla, maiores provident, quibusdam explicabo accusamus illo accusantium exercitationem voluptatibus magnam laudantium asperiores? Eligendi, magnam atque.
    </p>

    <div class="user">
        <img src="${product.image}" alt="">
        <h2>${product.names}</h2>
        <h3>${product.title}</h3>

        
    </div>

  </div>`;

})

document.querySelector(".swiper-wrapper").innerHTML = clutter;
}

swipercontent();



var blog = [
    {images:"images/images/post-1.jpg", heading:"First Time Home Owner Ideas", date:"by Robert Fox on Dec 15, 2021"},
    {images:"images/images/post-2.jpg", heading:"How To Keep Your Furniture Clean", date:"by Robert Fox on Dec 15, 2021"},
    {images:"images/images/post-3.jpg", heading:"Small Space Furniture Apartment Ideas", date:"by Robert Fox on Dec 12, 2021"},
];


function blogs(){
    var clutter = '';

    blog.forEach(function(product,idx){
    clutter += `  <div class="blog1">
    <img src="${product.images}" alt="">
    <h1>First Time Home Owner Ideas</h1>
    <h2>by Kristin Watson on Dec 19, 2021</h2>
</div>`;

})

document.querySelector(".blogssss").innerHTML = clutter;
}

blogs();
