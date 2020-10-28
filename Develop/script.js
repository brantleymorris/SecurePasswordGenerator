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

// My code is below //////////////////////////////////////////////////////////////////////////////////////////////

var passwordLength = prompt("How many characters would you like the password to include?");
// need to parseInt prompt value

// may need to be a while loop, it did
while (passwordLength < 8 || passwordLength > 128) {
  alert("Your password cannot be less than 8 character or more than 128 characters.");
  passwordLength = prompt("How many characters would you like the password to include?");
}

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
// this might need to be a while loop
while (lowercase === false && uppercase === false && numeric === false && specialCharacters === false) {
  alert("Your password must include at lease one of the following: lowercase letter, uppercase letters, numeric values, or special characters.");
  lowercase = confirm("Would you like your password to include lowercase letters?");
  uppercase = confirm("Would you like your password to include uppercase letters?");
  numeric = confirm("Would you like your password to include numbers?");
  specialCharacters = confirm("Would you like your password to include speical characters");
}

// create arrays for each combination of password character types
// may be able to write a loop to create array based on user input, that way I only have to create 4 arrays and not a bunch, with push?

// just lowercase characters
var type1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// just uppercase characters
var type2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// just numeric characters
var type3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// just special characters, need to make sure that unicode works for ', ", \
var type4 = [" ", "!", "U+0020", "#", "$", "%", "&", "U+0027", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "U+005C", "^", "_", "`", "{", "}", "|", "~"];

// create var that will be array of stings for password, will concat later
var passwordElements = [];

// need to start creating Math(), also make this a fucntion so that it can be called later
function generatePassword() { // may need to rename funciton, generatePassword is used earlier by base code
  for (i = 0; i < passwordLength; i++) {
    var ranNum = Math.floor(Math.random() * this.length); // select random number between 0 and array.length (index)
    var char = this.ranNum; // pulls index from array
    //need to figure out how to add values together into a string
    passwordElements.push(char);
  }

}

// call function
 var password = generatePassword(type3);

// use join() function to combine array into single string
console.log(passwordElements.length); // prints passworLength
console.log(passwordElements[0]); // prints undefined
console.log(12); // prints 12, test