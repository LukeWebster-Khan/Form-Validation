// onclick for password field, display message
const myInput = document.getElementById("inputname");
const eInput = document.getElementById("eInput");
const eCard = document.getElementById("creditInput");
const validEmail = document.getElementById("validEmail");
const creditInput = document.getElementById("creditInput");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userCard = document.getElementById("userCard");

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

// Luhn algorithm & card validation
function luhnCheck(val) {
  var sum = 0;
  for (var i = 0; i < val.length; i++) {
    var intVal = parseInt(val.substr(i, 1));
    if (i % 2 == 0) {
      intVal *= 2;
      if (intVal > 9) {
        intVal = 1 + (intVal % 10);
      }
    }
    sum += intVal;
  }
  return sum % 10 == 0;
}

creditInput.onkeyup = function validateCardNumber() {
  var regex = new RegExp("^[0-9]{16}$");
  let number = document.querySelector("#creditInput").value;

  if (!regex.test(number)) {
    userCard.classList.remove("validCard");
    userCard.classList.add("invalidCard");
    console.log("false");
  } else {
    userCard.classList.remove("invalidCard");
    userCard.classList.add("validCard");
    console.log("true");
  }
};

eCard.onfocus = function () {
  document.getElementById("eCard").style.display = "block";
};

eCard.onblur = function () {
  document.getElementById("eCard").style.display = "none";
};
