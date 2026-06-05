let cartProduct = document.getElementById("getProduct");
let cartTotal = document.getElementById("cartTotal");
let emptyCart = document.getElementById("emptyCart");

let cart = JSON.parse(localStorage.getItem("mycart")) || [];
if (cart.length === 0) {
  emptyCart.classList.remove("hidden");
} else {
  emptyCart.classList.add("hidden");

  let cartItemsHTML = cart.map(
    (value, i) => `
    <div class="shadow-md p-4 rounded-lg bg-[#fdf9f4] ">
            <div class="bg-[#F6EFE7] rounded-md mb-2">
             <img src="${value.images[0]}" class="object-cover h-[30px] w-[30px]">
            </div>
             <p class="pb-2 truncate text-[14px]"> ${value.title}</p>
             <div class="flex justify-between items-center  pb-2">
             <p class=" text-[14px] font-semibold"> $${value.price}</p>
            </div>
        </div>

  `,
  );
}
