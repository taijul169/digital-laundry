// cart-dropdown-------------------------------
        /* When the user clicks on the button, 
          toggle between hiding and showing the dropdown content */
          function myFunction() {
            document.getElementById("cart-box-home").classList.toggle("show");
          }
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }




// //cart-----------
// let cart = [];
// //buttons
// let buttonsDOM = [];

// const addToCartBtn = document.querySelector('.addToCartBtn');

// addToCartBtn.addEventListener("click", ()=>{
//   const product = products.getProducts();
//   storage.saveProducts(product);
//   const id = document.querySelector(".ProId").innerText;
//   console.log("this is from click",id) 

//   //get product from prducts
//   let cartItem = {...Storage.getProduct(id), amount: 1 };
//   // add product to the cart
//   cart = [...cart, cartItem];
//   //save cart in local storage
//   Storage.saveCart(cart);
//   //set cart values
//   this.setCartValues(cart);
//   //display cart item
//   this.addCartItem(cartItem);
//   // display cart item in cart page
//   this.addCartItemInCartPage(cartItem);
//   // show the cart
// })
// // custom-products- start ----taijul islam------------------------
// class Products{
//   getProducts() {
     
//       const modalTitle = document.querySelector(".modal-title").innerText;
//       const itemOnePrice = document.querySelector(".itemOnePrice").innerText;
//       const itemTwoPrice = document.querySelector(".itemTwoPrice").innerText;
//       const itemThreePrice = document.querySelector(".itemThreePrice").innerText;
//       const itemFourPrice = document.querySelector(".itemFourPrice").innerText;
//       const id = document.querySelector(".ProId").innerText;
//       // console.log(id);
//       let prodouts = {id, modalTitle, itemOnePrice,itemTwoPrice, itemThreePrice,itemFourPrice}
//       return prodouts;
//   }

// }
// const products = new Products();

// // local storage
// class Storage{
//   static saveProducts(products) {
//       localStorage.setItem("products", JSON.stringify(products));
//   }
//   static getProduct(id) {
//       let products = JSON.parse(localStorage.getItem('products'));
//       return products.find(product => product.id === id);
//   }
//   static saveCart(cart) {
//       localStorage.setItem("cart", JSON.stringify(cart));
//   }
//   static getCart() {
//     return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
//   }


// }
// const storage  = new Storage();
// // console.log(prodouts.getProducts);


// custom-products- end ----taijul islam------------------------          