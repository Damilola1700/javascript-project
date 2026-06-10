let cartContainer = document.getElementById("cartItemsHTML");
let cartTotal = document.getElementById("cartTotal");
let emptyCart = document.getElementById("emptyCart");
let cartSection = document.getElementById("cartSection");

let cart = JSON.parse(localStorage.getItem("mycart")) || [];

// Display cart
function renderCart() {
  if (cart.length === 0) {
    emptyCart.classList.remove("hidden");
    cartSection.classList.add("hidden");
    cartContainer.innerHTML = "";
    cartTotal.textContent = "$0.00";
    return;
  }

  emptyCart.classList.add("hidden");

  cartSection.classList.remove("hidden");

  let total = 0;

  let cartItemsHTML = cart.map((value, i) => {
    total += value.price * value.quantity;

    return `
      <div class="m-[40px] m-auto flex-col items-center mb-6">
        <div class="relative p-4 rounded-lg bg-[#fdf9f4] flex justify-between items-center">

          <div class="bg-[#F6EFE7]">
            <img src="${value.images[0]}" class="object-cover lg:w-20 lg:h-20 sm:w-[30px]  sm:h-[30px] md:w-[20px]  md:h-[20px] rounded-md">
          </div>

          <div class="flex flex-col">
            <p class="pb-2 truncate text-[14px] font-medium">
              ${value.title}
            </p>

            <p class="text-[14px] font-semibold">
              $${value.price}
            </p>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="decrease(${i})"
              class="bg-blue-200 w-10 h-10 rounded">
              -
            </button>

            <span>${value.quantity}</span>

            <button onclick="increase(${i})"
              class="bg-blue-200 w-10 h-10 rounded">
              +
            </button>
          </div>

          <div
            onclick="removeItem(${i})"
            class="absolute top-2 right-2 border border-[#271C19] h-[20px] w-[20px] flex justify-center items-center rounded-full cursor-pointer"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>

        </div>
      </div>
    `;
  });

  cartContainer.innerHTML = cartItemsHTML.join("");
  cartTotal.textContent = "$" + total.toFixed(2);
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);

  localStorage.setItem("mycart", JSON.stringify(cart));

  renderCart();
}

// Increase quantity
function increase(index) {
  cart[index].quantity++;

  localStorage.setItem("mycart", JSON.stringify(cart));

  renderCart();
}

// Decrease quantity
function decrease(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }

  localStorage.setItem("mycart", JSON.stringify(cart));

  renderCart();
}

// Initial render
renderCart();

