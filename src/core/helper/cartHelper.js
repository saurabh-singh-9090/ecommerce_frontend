
//"addItemToCart" pushes a new product into the existing cart array stored in 
//localStorage and store the updated cart array in localStorage of the browser
export const addItemToCart = (item, next) => {
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.push({
        ...item,
        count: 1
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      next();
    }
  };
  
//It returns cart object stored in localStorage
export const loadCart = () => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        return JSON.parse(localStorage.getItem("cart"));
      }
  }
};

//function to remove product from the cart page
export const removeItemFromCart=(productId)=>{
  let cart=[];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart= JSON.parse(localStorage.getItem("cart"));
     }
    }
   cart.map((product, i) => {
        if(product._id===productId){
            cart.splice(i, 1) // "splice" method removes 1 item from the cart
        }
        localStorage.setItem("cart", JSON.stringify(cart));
      });
   return cart;
  
};

//After making payment, we need to make the cart empty
export const cartEmpty = next =>{
  if(typeof window !== undefined){
    localStorage.removeItem("cart");
    //for TypeError:'length' is undefined
    let cart=[];
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
}