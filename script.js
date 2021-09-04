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

// onclick for password field, dispaly message
let myInput = document.getElementById('inputname')

myInput.onfocus = function() {
    document.getElementById('message').style.display = 'block';
}

myInput.onblur = function() {
    document.getElementById('message').style.display = 'none';
}

// When user types in field

myInput.onkeyup = function() {
// validate lowercase letter
let lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)){
letter.classList.remove('invalid');
letter.classList.add('valid')
} else {
    letter.classList.remove('valid');
    letter.classList.add('invalid')
}

}


