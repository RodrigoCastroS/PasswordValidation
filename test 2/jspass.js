
console.log('hola');

//Definicion de variables para acceder al DOM
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validar minúsculas
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalido");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalido");
  }
  
  // Validar mayúsculas
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalido");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalido");
  }

  // Validar los numeros
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalido");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalido");
  }
  
  // Validar la longitud
  if(myInput.value.length >= 8) {
    length.classList.remove("invalido");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalido");
  }
}