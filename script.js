const capital = document.getElementById("capital");
const length = document.getElementById("length");
// onclick for password field, display message
const myInput = document.getElementById("inputname");
const Einput = document.getElementById("eInput");

function isUserNameValid(username) {
  /* 
      Usernames can only have: 
      - Lowercase Letters (a-z) 
      - Numbers (0-9)
      - Dots (.)
      - Underscores (_)
    */
  const res = /^[a-z0-9_\.]+$/.exec(username);
  const valid = !!res;
  return valid;
}

myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// When user types in field
myInput.onkeyup = function () {
  // validate lowercase letter
  let lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // validate capital letter
  let upperCaseLtters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLtters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
