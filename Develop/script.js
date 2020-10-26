// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// My code is below

var passwordLength = prompt("How many characters would you like the password to include?");
// need to parseInt prompt value

if (passwordLength < 8 || passwordLength > 128) {
  alert("Your password cannot be less than 8 character or more than 128 characters.");
  passwordLength = prompt("How many characters would you like the password to include?");
}
// unsure if this needs an else statement

var lowercase = confirm("Would you like your password to include lowercase letter?");
// add if for lowercase=false
  if (lowercase === true) {
    alert("Your password can include lowercase letter.");
  }
  else  { // unsure why this is error-> else doesn't need selector
    alert("Your password will not include lowercase letters");
  }
  

var uppercase = confirm("Would you like your password to include uppercase letters?");
// add if for uppercase=false
if (uppercase === true) {
  alert("Your password can include uppercase letters.");
}
else {
  alert("Your password will not include uppercase letters.");
}

var numeric = confirm("Would you like your password to include numbers?");
// add if for numberic=false
if (numeric === true) {
  alert("Your password can include numeric values.");
}
else {
  alert("Your password will not include numeric values.");
}

var specialCharacters = confirm("Would you like your password to include speical characters");
// add if for specialCharacters=false
if (specialCharacters === true) {
  alert("Your password can include special characters.");
}
else {
  alert("Your password will not include special characters.");
}

// may need final if statement for having all character types false
if (lowercase === false && uppercase === false && numeric === false && specialCharacters === false) {
  alert("Your password must include at lease one of the following: lowercase letter, uppercase letters, numeric values, or special characters.");
  lowercase = confirm("Would you like your password to include lowercase letters?");
  uppercase = confirm("Would you like your password to include uppercase letters?");
  numeric = confirm("Would you like your password to include numbers?");
  specialCharacters = confirm("Would you like your password to include speical characters");
}