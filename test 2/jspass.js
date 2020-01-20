
//Definicion de variables para acceder al DOM
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// Click en el input password, aparece el mensaje
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// Click fuera del input password, se esconde el mensaje
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// Comprobación de campos cuando el usuario empieza a escribir 
myInput.onkeyup = function() {
  // Validar minúsculas
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalido");
    letter.classList.add("valido");
  } else {
    letter.classList.remove("valido");
    letter.classList.add("invalido");
  }
  
  // Validar mayúsculas
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalido");
    capital.classList.add("valido");
  } else {
    capital.classList.remove("valido");
    capital.classList.add("invalido");
  }

  // Validar los numeros
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalido");
    number.classList.add("valido");
  } else {
    number.classList.remove("valido");
    number.classList.add("invalido");
  }
  
  // Validar la longitud
  if(myInput.value.length >= 8) {
    length.classList.remove("invalido");
    length.classList.add("valido");
  } else {
    length.classList.remove("valido");
    length.classList.add("invalido");
  }
}