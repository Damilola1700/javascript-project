let userName = document.getElementById("name");
let userMail = document.getElementById("mail");
let userPassword = document.getElementById("password");
let messageDisplay = document.getElementById("message");


function createAccount() {
  const lettersOnly = /^[A-Za-z\s]+$/;

  if (
    userName.value.trim() === "" &&
    userMail.value.trim() === "" &&
    userPassword.value.trim() === ""
  ) {
    messageDisplay.textContent = "Kindly fill in all fields";

  } else if (userName.value.trim() === "") {
    messageDisplay.textContent = "Full Name is required";

  } else if (!lettersOnly.test(userName.value.trim())) {
    messageDisplay.textContent = "Name should contain only letters";

  } else if (userMail.value.trim() === "") {
    messageDisplay.textContent = "Email is required";

  } else if (userPassword.value.trim() === "") {
    messageDisplay.textContent = "Password is required";

  } else {
    messageDisplay.textContent = "Account created successfully!";
  }

  messageDisplay.classList.remove("hidden");
}


// let form = document.querySelector('#myForm');

// form.addEventListener("submit", function(e){
//     let userName = form["name"].value;
//     let userMail = form["mail"].value;
//     let userPassword = form["password"].value;

//     let messageDisplay = document.getElementById("message");

//     if (userName.value.trim() === "") {
//     messageDisplay.textContent = "Kindly fill in your details";
//     messageDisplay.classList.remove("hidden");
//   }
// })



