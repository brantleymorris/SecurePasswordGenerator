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
  confirm("Your password cannot be less than 8 character or more than 128 characters.");
  prompt("How many characters would you like the password to include?");
}
// unsure if this needs an else statement

var lowercase = confirm("Would you like your password to include lowercase letter?");
// add if for lowercase=false

var uppercase = confirm("Would you like your password to include uppercase letters?");
// add if for uppercase=false

var numeric = confirm("Would you like your password to include numbers?");
// add if for numberic=false

var specialCharacters = confirm("Would you like your password to include speical characters");
// add if for specialCharacters=false