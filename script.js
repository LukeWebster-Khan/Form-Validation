// onclick for password field, display message
const myInput = document.getElementById("inputname");
const eInput = document.getElementById("eInput");
const validEmail = document.getElementById("validEmail");
const creditInput = document.getElementById("creditInput");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

myInput.onkeyup = function () {
  const validUser = /^([a-zA-Z0-9 _-]+)$/;
  if (myInput.value.match(validUser)) {
    userName.classList.remove("invalid");
    userName.classList.add("valid");
  } else {
    userName.classList.remove("valid");
    userName.classList.add("invalid");
  }
};

eInput.onkeyup = function () {
  const validUser = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
  if (eInput.value.match(validUser)) {
    userEmail.classList.remove("invalidEmail");
    userEmail.classList.add("validEmail");
  } else {
    userEmail.classList.remove("validEmail");
    userEmaile.classList.add("invalidEmail");
  }
};

eInput.onfocus = function () {
  document.getElementById("eMsg").style.display = "block";
};

eInput.onblur = function () {
  document.getElementById("eMsg").style.display = "none";
};

// validate email /[A-Z]/g;       /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
console.log(validEmail);
// eInput.onfocus = function () {
//   let email = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
//   if (eInput.value.match(email)) {
//     console.log(validEmail);
//     validEmail.classList.remove("invalidEmail");
//     validEmail.classList.add("validEmail");
//   } else {
//     validEmail.classList.remove("validEmail");
//     validEmail.classList.add("invalidEmail");
//   }
// };
