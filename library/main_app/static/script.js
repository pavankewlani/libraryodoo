Shery.mouseFollower();

Shery.makeMagnet(".nav-1 h1, button" , {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.hoverWithMediaCircle(".page1 h1", {
  images: [""]
  
});

const scroll = new LocomotiveScroll({
  el: document.querySelector('main'),
  smooth: true
});

function circularText(){
     const text = "Modern • awesome • animated • website • ";
    const circularText = document.getElementById('circularText');
    
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.transform = `rotate(${i * 360 / text.length}deg)`;
      circularText.appendChild(span);
    }


}

circularText();

function catogary(){
    const products = [
        { name: "Self Help",image: "https://img.freepik.com/premium-vector/stack-books-various-colors-sizes-titles-arranged-neatly-one-top-other_1112614-3292.jpg?ga=GA1.1.874350228.1720606149&semt=ais_user",link:"selfhelp.html" },
        { name: "History",image: "https://img.freepik.com/free-photo/blanket-near-books-leaves_23-2147868639.jpg?ga=GA1.1.874350228.1720606149&semt=ais_user",link:"product preview1.html" },
        { name: "Philosophical", image: "https://img.freepik.com/free-photo/creative-composition-with-books-flower_23-2148851061.jpg?ga=GA1.1.874350228.1720606149&semt=ais_user",link:"product preview.html" },
        { name: "Fiction",image: "https://img.freepik.com/premium-photo/open-book-concept-fairy-tale-fiction-storytelling_649024-26883.jpg?ga=GA1.1.874350228.1720606149&semt=ais_user",link:"product preview.html" },
       
    ];
  
      const carousel = document.getElementById('carousel');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      let currentIndex = 0;
      
      function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img onclick="window.location='product preview.html'" src="${product.image}" alt="${product.name}" class="product-image">
          <div class="product-info">
            <div class="product-name">${product.name}</div>
          </div>
        `;

        card.querySelector('.product-image').addEventListener('click', () => {
          window.location.href = product.link;
        });

        return card;
      }
  
      function populateCarousel() {
        products.forEach(product => {
          carousel.appendChild(createProductCard(product));
        });
      }
  
      function moveCarousel(direction) {
        const cardWidth = 320; 
        const maxIndex = products.length - 2.5; 
  
        if (direction === 'next' && currentIndex < maxIndex) {
          currentIndex++;
        } else if (direction === 'prev' && currentIndex > 0) {
          currentIndex--;
        }
  
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      }
  
      populateCarousel();
  
      prevBtn.addEventListener('click', () => moveCarousel('prev'));
      nextBtn.addEventListener('click', () => moveCarousel('next'));
      
}

catogary();


    var cursor = document.querySelector(".cursor")
    var page = document.querySelector(".page4")
   
    page.addEventListener("mousemove",(dets)=>{
        
      cursor.style.left = dets.x + "px"
      cursor.style.top = dets.y + "px"
    })

    page.addEventListener("mouseenter",()=>{
        cursor.style.opacity = 1;
        cursor.style.scale = 1;
    })

    page.addEventListener("mouseleave",()=>{
        cursor.style.opacity = 0;
        cursor.style.scale = 0;
    })

    const avatars = document.querySelectorAll('.avatar');
    avatars.forEach(avatar => {
      const img = new Image();
      img.src = avatar.src;
    });

    function review(){
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(stat => {
      let start = 0;
      const end = parseFloat(stat.textContent);
      const duration = 2000; 
      const startTime = new Date().getTime();

      const animateStat = () => {
        const currentTime = new Date().getTime();
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        if (stat.textContent.includes('+')) {
          stat.textContent = Math.floor(end * progress).toLocaleString() + '+';
        } else if (stat.textContent.includes('%')) {
          stat.textContent = (end * progress).toFixed(0) + '%';
        } else {
          stat.textContent = (end * progress).toFixed(1);
        }

        if (progress < 1) {
          requestAnimationFrame(animateStat);
        }
      };

      animateStat();
    });

    }


  function mostsold() {
    const slider = document.querySelector('.product-slider');
    const leftArrow = document.querySelector('.slider-arrow.left');
    const rightArrow = document.querySelector('.slider-arrow.right');
    const productCards = document.querySelectorAll('.product-card');
    let currentIndex = 0;

    function updateSliderPosition() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextSlide() {
      if (currentIndex < productCards.length - 1) {
        currentIndex++;
        updateSliderPosition();
      } else {
        currentIndex = 0;
        updateSliderPosition();
      }
    }

    function showPrevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      } else {
        currentIndex = productCards.length - 50;
        updateSliderPosition();
      }
    }

    leftArrow.addEventListener('click', showPrevSlide);
    rightArrow.addEventListener('click', showNextSlide);

    // setInterval(showNextSlide, 5000);

    productCards.forEach(card => {
      const img = card.querySelector('.product-image');
      const image = new Image();
      image.src = img.src;
    });
  }

  mostsold();

  function search(){
    
    const products = [
      { name: "Smartphone", price: 599.99, image: "https://source.unsplash.com/random/250x200?smartphone" },
      { name: "Laptop", price: 999.99, image: "https://img.freepik.com/premium-photo/photo-anime-girl-with-short-hair-wearing-white-dress-generative-ai_1286285-1209.jpg?ga=GA1.2.874350228.1720606149&semt=ais_hybrid" },
      { name: "Headphones", price: 149.99, image: "https://source.unsplash.com/random/250x200?headphones" },
      { name: "Smart Watch", price: 249.99, image: "https://source.unsplash.com/random/250x200?smartwatch" },
      { name: "4K TV", price: 799.99, image: "https://source.unsplash.com/random/250x200?tv" },
      { name: "Gaming Console", price: 499.99, image: "https://source.unsplash.com/random/250x200?gaming" },
      { name: "Digital Camera", price: 699.99, image: "https://source.unsplash.com/random/250x200?camera" },
      { name: "Bluetooth Speaker", price: 79.99, image: "https://source.unsplash.com/random/250x200?speaker" },
      { name: "Tablet", price: 349.99, image: "https://source.unsplash.com/random/250x200?tablet" },
      { name: "Wireless Earbuds", price: 129.99, image: "https://source.unsplash.com/random/250x200?earbuds" }
    ];

    const searchInput = document.getElementById('searchInput');
    const productsContainer = document.getElementById('products');
    const searchContainer = document.querySelector('.search .container')
    console.log(searchContainer);
   
    function displayProducts(productsToShow) {
      productsContainer.innerHTML = '';
      if (productsToShow.length === 0) {
        productsContainer.innerHTML = '<p id="noResults">No products found.</p>';
        return;
      }
      productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <div class="product-name">${product.name}</div>
          <div class="product-price">$${product.price.toFixed(2)}</div>
          <button class="add-to-cart">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
      });
    }

    function searchAndFilterProducts() {
 
      const searchTerm = searchInput.value.toLowerCase().trim();
      console.log(searchTerm);

      let filteredProducts = products.filter(product =>
        product.name.toLowerCase().trim().includes(searchTerm)
      );

      
  if (searchTerm === '') {
    productsContainer.style.display = "none";
    searchContainer.style.display = "none";
  } else {
    productsContainer.style.display = "flex";
    searchContainer.style.display = "flex";
  }


      displayProducts(filteredProducts);
    }

    searchInput.addEventListener('input', searchAndFilterProducts);


    displayProducts(products);

    productsContainer.addEventListener('click', function(e) {
      if (e.target.classList.contains('add-to-cart')) {
        const productName = e.target.parentElement.querySelector('.product-name').textContent;
        alert(`Added ${productName} to cart!`);
        // Here you would typically update a cart object or send data to a server
      }
    });

    products.forEach(product => {
      const img = new Image();
      img.src = product.image;
    });
  }

  function tilt(){
    (function() {
      var container = document.getElementById("container"),
        inner = document.getElementById("inner");
    
      var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(event) {
          var e = event || window.event;
          this.x = e.clientX - this._x;
          this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
          this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
          this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
          return "(" + this.x + ", " + this.y + ")";
        }
      };
    
      mouse.setOrigin(container);
    
    
      var counter = 0;
      var updateRate = 10;
      var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
      };
    
    
      var onMouseEnterHandler = function(event) {
        update(event);
      };
    
      var onMouseLeaveHandler = function() {
        inner.style = "";
      };
    
      var onMouseMoveHandler = function(event) {
        if (isTimeToUpdate()) {
          update(event);
        }
      };
    
    
      var update = function(event) {
        mouse.updatePosition(event);
        updateTransformStyle(
          (mouse.y / inner.offsetHeight / 2).toFixed(2),
          (mouse.x / inner.offsetWidth / 2).toFixed(2)
        );
      };
    
      var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTransform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
      };
    
    
      container.onmouseenter = onMouseEnterHandler;
      container.onmouseleave = onMouseLeaveHandler;
      container.onmousemove = onMouseMoveHandler;
    })();
  }

  tilt();

  function menu(){
    var menu = document.querySelector('.nav-1 i')
    var menuoption = document.querySelectorAll('.nav-1 h1')
    var flag = 0;
    console.log(menuoption);
   menuoption.forEach((menuoption)=>{
    
    menu.addEventListener("click",(menuoption)=>{
    
     if(flag === 0){
      menuoption.style.display = "flex"
      console.log("click");
      flag++;
     }
     else{
      menuoption.style.display = "none"
     }
   })
  })
}

  menu();