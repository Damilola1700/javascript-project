let cartProduct = document.getElementById("getProduct");
let cartTotal = document.getElementById("cartTotal");
let emptyCart = document.getElementById("emptyCart");



let cart = JSON.parse(localStorage.getItem("mycart")) || [];
if(cart.length === 0){
 emptyCart.classList.remove("hidden")
}else {
  emptyCart.classList.add("hidden")
}
