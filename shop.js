let products = [];

async function myProducts() {
  try {
    const fetchData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer hchcjdjcjc",
      },
    };

    let url = "https://dummyjson.com/products?limit=16";

    let response = await fetch(url, fetchData);
    let data = await response.json();
    console.log(data);
    myProduct = data.products;
    console.log(myProduct);

    let productArray = myProduct.map(function (value) {
      return `
        <div class="shadow-md p-4 rounded-lg bg-[#fdf9f4] ">
            <div class="bg-[#F6EFE7] rounded-md mb-2">
             <img src="${value.images[0]}" class="object-cover">
            </div>
             <p class=" pb-1 font-semibold  text-[10px] text-[#969696]"> ${value.brand}</p>
             <p class=" pb-2 truncate text-[14px]"> ${value.title}</p>
             <div class="flex justify-between items-center  pb-2">
             <p class=" text-[14px] font-semibold"> $${value.price}</p>
             <button  onclick="addToCart(${value.id})"  class="text-[10px] font-semibold    bg-[#271C19] hover:bg-[#60463B] font-medium  text-center text-[#fdf9f4] hover:text-[#fdf9f4] rounded-full p-2 ">Add To Cart</button>
            </div>
        </div>
        `;
    });

    document.getElementById("productSection").innerHTML = productArray.join("");

    // products = data.products;
    // console.log("Fetched Products Array:", products);
  } catch (error) {
    console.error(error);
  }
}

myProducts();

function filterProducts() {
  let search = document.querySelector("#searchProduct").value;

  let productFilters = myProduct.filter(function (value) {
    return (value.title || value.brand)
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  if (productFilters.length === 0) {
    document.getElementById("productSection").innerHTML = "";
    document.querySelector("#noProductFound").classList.remove("hidden");
  } else {
    document.querySelector("#noProductFound").classList.add("hidden");
    let filterMap = productFilters.map(function (value) {
      return `
        <div class="shadow-md p-4 rounded-lg bg-[#fdf9f4] ">
            <div class="bg-[#F6EFE7] rounded-md mb-2">
             <img src="${value.images[0]}" class="object-cover">
            </div>
             <p class=" pb-1 font-semibold  text-[10px] text-[#969696]"> ${value.brand}</p>
             <p class=" pb-2 truncate text-[14px]"> ${value.title}</p>
             <div class="flex justify-between items-center  pb-2">
             <p class=" text-[14px] font-semibold"> $${value.price}</p>
             <button   class="text-[10px] font-semibold    bg-[#271C19] hover:bg-[#60463B] font-medium  text-center text-[#fdf9f4] hover:text-[#fdf9f4] rounded-full p-2 ">Add To Cart</button>
            </div>
        </div>
        `;
    });

    document.getElementById("productSection").innerHTML = filterMap.join("");
  }
}

function addToCart(id) {
  // alert("Added to cart" + id);

  let addToCart = myProduct.find((value) => value.id === id);
  let cart = JSON.parse(localStorage.getItem("mycart")) || [];

  if (!addToCart) {
    // alert("Not found");
    Toastify({
      text: "Not Found",
      className: "info",
      style: {
        background: "linear-gradient(to right, #271C19, #60463B)",
      },
    }).showToast();
  } else if (cart.find((value) => value.id === addToCart.id)) {
    // alert("Product already in cart");
    Toastify({
      text: "Already in Cart",
      className: "info",
      style: {
        background: "linear-gradient(to right, #271C19, #60463B)",
      },
    }).showToast();
  } else {
    addToCart.quantity = 1;
    cart.push(addToCart);

    localStorage.setItem("mycart", JSON.stringify(cart));

    let cartBadge = document.querySelector("#cartNumber");
    console.log(cartBadge);

    if (cartBadge) {
      cartBadge.innerHTML = cart.length;
      cartBadge.classList.remove("hidden");
    }

    // alert("In Cart");
   Toastify({
      text: "Added to Cart",
      className: "info",
      style: {
        background: "linear-gradient(to right, #271C19, #60463B)",
      },
    }).showToast();
  }
}

// document.querySelector('#cartNumber').innerHTML = cartLength.length;
