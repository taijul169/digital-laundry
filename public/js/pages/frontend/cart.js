// Variable-declaration-----------------
const addTocartBtn = document.getElementById("addTocartBtn");
const cartContentHome = document.getElementById("cart-content-home");
const cartItemNumber = document.getElementById("cartItemNumber");
const cartTotalAmount = document.getElementById("cartTotalAmount");
const cartBoxHome = document.getElementById("cart-box-home-top");
const clearCartBtn = document.getElementById("clearCartBtn");
const singleCartItem = document.querySelector('.single-product-cart');
const cartPageCartWrapper = document.querySelector('.cart-page-cart-wrapper');

//cart-----------
let cart = [];
//buttons
let buttonsDOM = [];
// getting the products
// class Products{
//     async getProducts() {
//       try {
//           let result = await fetch('products.json');
//           let data = await result.json();
//           let products = data.items;
//         //   destructureing json data--------------------
//           products = products.map(item => {
//               const { title, price } = item.fields;
//               const id = item.sys.id;
//               const image = item.fields.image.fields.file.url;
//               return { title, price, id, image };
//           });
//           return products;
//       } catch (error) {
//           console.log(error);
//       }
    
//     }

// }

// custom-products- start ----taijul islam------------------------
class Products{

 getProducts() {
       
        
        const modalTitle = document.querySelector(".modal-title").innerText;
        const itemOnePrice = document.querySelector(".itemOnePrice").innerText;
        const itemTwoPrice = document.querySelector(".itemTwoPrice").innerText;
        const itemThreePrice = document.querySelector(".itemThreePrice").innerText;
        const itemFourPrice = document.querySelector(".itemFourPrice").innerText;
        const id = document.querySelector(".ProId").innerText;
        if(itemThreePrice == ''){
            itemThreePrice.innerText ="0";
        }
        if(itemFourPrice == ''){
            itemFourPrice.innerText ="0";
        }
        console.log(itemFourPrice);
        let products = {id, modalTitle, itemOnePrice,itemTwoPrice, itemThreePrice,itemFourPrice};
        return products;
    }

}
// custom-products- end ----taijul islam------------------------


// display products
class UI {
    

    // addTocart() {
    //     // const buttons = [...document.querySelectorAll(".addTocartBtn")];
    //     // buttonsDOM = buttons;
    //     const addToCartBtn = document.querySelector('.addToCartBtn');
    //     addToCartBtn.addEventListener("click", () => {
    //         alert("working fine!!")
    //             //get product from prducts
    //             let cartItem = {...Storage.getProduct(id), amount: 1 };
    //             // add product to the cart
    //             cart = [...cart, cartItem];
    //             //save cart in local storage
    //             Storage.saveCart(cart);
    //             //set cart values
    //             this.setCartValues(cart);
    //             //display cart item
    //             this.addCartItem(cartItem);
    //             //display cart item in cart page
    //             // this.addCartItemInCartPage(cartItem);
    //             // show the cart
    //         });
    
        
        
    // }

    // setCartValues(cart) {
    //     let tempTotal = 0.00;
    //     let itemsTotal = 0;
    //     cart.map(item => {
    //         tempTotal += item.price * item.amount;
    //         itemsTotal += item.amount;
    //     });
    //     cartTotalAmount.innerHTML =`$${parseFloat(tempTotal.toFixed(2))}`;
    //     cartItemNumber.innerHTML = itemsTotal;  
    // }
    // addCartItem(item) {
    //     const div = document.createElement('div');
    //     div.classList.add('single-product-cart');
    //     div.innerHTML = `
    //             <div class="cart-product-img">
    //                 <img src="${item.image}" alt="1.jpg">
    //             </div>
    //             <div class="cart-product-details-home">
    //                 <p>Ultra Wireless S50 Headphones S50 with Bluetooth</p>
    //                 <div class="cart-midle-home">
    //                  <h6>${item.amount} x $${item.price}</h6>
    //                   <div class="cart-midle-right-home">
    //                    <ul>
    //                       <li><button><i class="fa fa-angle-left" data-id="${item.id}"></i></button></li>
    //                       <li><b>${item.amount}</b></li>
    //                       <li><button><i class="fa fa-angle-right" data-id="${item.id}"></i></button></li>
    //                    </ul>
    //                 </div>
    //                 </div>
                    
    //             </div>
    //             <div class="cart-item-del-btn-home">
    //                 <b class="fa fa-close" data-id="${item.id}"></b>
    //             </div>`;
    //     cartBoxHome.appendChild(div);
    // }
    // setupAPP() {
    //     cart = Storage.getCart();
    //     this.setCartValues(cart);
    //     this.populateCart(cart);
        
    // }
    // populateCart(cart) {
    //     cart.forEach(item => this.addCartItem(item));
    // }

    // cartLogic() {
    //     //clear cart button
    //     clearCartBtn.addEventListener("click", () => {
    //         this.clearCart();
             
    //     });
    //     //cart functionality-home page
    //     cartBoxHome.addEventListener("click", event => {
    //         if (event.target.classList.contains('fa-close')) {
    //             let removeItem = event.target;
    //             let id = removeItem.dataset.id;
    //             cartBoxHome.removeChild(removeItem.parentElement.parentElement);
    //             this.removeItem(id);
                
    //         }
    //         else if (event.target.classList.contains("fa-angle-right")) {
    //             let addAmount = event.target; 
    //             let id = addAmount.dataset.id;
    //             let tempItem = cart.find(item => item.id === id);
    //             tempItem.amount = tempItem.amount + 1;
    //             Storage.saveCart(cart);
    //             this.setCartValues(cart);
    //             addAmount.parentElement.parentElement.previousSibling.children.innerText = tempItem.amount;
    //         }
    //         else if(event.target.classList.contains("fa-angle-left")) {
    //             let lowerAmount = event.target;
    //             let id = lowerAmount.dataset.id;
    //             let tempItem = cart.find(item => item.id === id);
    //             tempItem.amount = tempItem.amount - 1;
    //             if (tempItem.amount > 0) {
    //             Storage.saveCart(cart);
    //             this.setCartValues(cart);
    //             lowerAmount.parentElement.parentElement.nextSibling.children.innerText = tempItem.amount; 
    //             }
    //             else {
    //                 cartBoxHome.removeChild(lowerAmount.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
    //                 this.removeItem(id);
    //             }
    //         }   
    //     });
    //     }
        
    
    // clearCart(){
    //     let cartItems = cart.map(item => item.id);
    //     cartItems.forEach(id => this.removeItem(id));
    //     while (cartBoxHome.children.length > 0) {
    //         cartBoxHome.removeChild(cartBoxHome.children[0]);
    //     }
        
    //     }
    // removeItem(id) {
    //     cart = cart.filter(item => item.id !== id); 
    //     this.setCartValues(cart);
    //     Storage.saveCart(cart);
    //     let button = this.getSingleButton(id);
    //     button.style.color = "#f4f4f4";
    //     button.style.opacity = "1";
    //     button.disabled = false;

    //     }
    // getSingleButton(id) {
    //     return buttonsDOM.find(button => button.dataset.id === id);
    // }

    
}
// local storage
class Storage{
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }
    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id === id);
    }
    static saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    static getCart() {
      return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
    }


}

document.addEventListener("DOMContentLoaded", ()=> {
   

    const ui = new UI();
    const products = new Products();
    //setup application--------------
    
    // ui.setupAPP();
    
  
    
    // .then(() => {
    //     alert("loaded");
    //     ui.addTocart();
    //     ui.cartLogic();
    // });
    
});
document.querySelector('.addToCartBtn').addEventListener('click',()=>{
    
    alert();
    const ui = new UI();
    const products = new Products();
    // get all products
    Storage.saveProducts(products);
    console.log(products.getProducts())
})