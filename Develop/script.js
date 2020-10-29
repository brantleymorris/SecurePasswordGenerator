/* Assignment Code, delete later
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */

// My code is below //////////////////////////////////////////////////////////////////////////////////////////////
function generatePassword() {

var passwordLength = prompt("How many characters would you like the password to include?");
// need to parseInt prompt value

// while loop to insure passwordLength in within parameters
while (passwordLength < 8 || passwordLength > 128) {
  alert("Your password cannot be less than 8 character or more than 128 characters.");
  passwordLength = prompt("How many characters would you like the password to include?");
}

var lowercase = confirm("Would you like your password to include lowercase letter?");
  if (lowercase === true) {
    alert("Your password can include lowercase letter.");
  }
  else  {
    alert("Your password will not include lowercase letters");
  }
  
// could create objects, for each and then a method to run confirm 
var uppercase = confirm("Would you like your password to include uppercase letters?");
if (uppercase === true) {
  alert("Your password can include uppercase letters.");
}
else {
  alert("Your password will not include uppercase letters.");
}

var numeric = confirm("Would you like your password to include numbers?");
if (numeric === true) {
  alert("Your password can include numeric values.");
}
else {
  alert("Your password will not include numeric values.");
}

var specialCharacters = confirm("Would you like your password to include speical characters");
if (specialCharacters === true) {
  alert("Your password can include special characters.");
}
else {
  alert("Your password will not include special characters.");
}

// while loop to insure that at least one character type is selected
while (lowercase === false && uppercase === false && numeric === false && specialCharacters === false) {
  alert("Your password must include at lease one of the following: lowercase letter, uppercase letters, numeric values, or special characters.");
  lowercase = confirm("Would you like your password to include lowercase letters?");
  uppercase = confirm("Would you like your password to include uppercase letters?");
  numeric = confirm("Would you like your password to include numbers?");
  specialCharacters = confirm("Would you like your password to include speical characters");
}

// create arrays for each combination of password character types
// may be able to write a loop to create array based on user input, that way I only have to create 4 arrays and not a bunch, with push or concat

// just lowercase characters
var type1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// just uppercase characters
var type2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// just numeric characters
var type3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// just special characters
var type4 = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

// array to be called by generatePassword fucntion, will have charaters added using logic and type arrays
var characters = [];


// need logic to push/concat type arrays into characters array, add numeric and specialCharacters
if (lowercase === true) {
  for (let i=0; i < type1.length; i++) {
    characters.push(type1[i]);
  }
}

if (uppercase === true) {
  for (let i=0; i < type2.length; i++) {
    characters.push(type2[i]);
  }
}

if (numeric === true) {
  for (let i=0; i < type3.length; i++) {
    characters.push(type3[i]);
  }
}

if (specialCharacters === true) {
  for (let i=0; i < type4.length; i++) {
    characters.push(type4[i]);
  }
}


// create var that will be array of stings for password
var passwordElements = [];

// function generates password based off of passed in array = x
//function generatePassword(x) {  may need to rename funciton, generatePassword is used earlier by base code
  for (i = 0; i < passwordLength; i++) {
    var ranNum = Math.floor(Math.random() * characters.length); // select random number between 0 and x.length (index)
    var char = characters[ranNum]; // pulls index from array
    passwordElements.push(char);
  };
console.log(passwordElements.join("")); // combine array into single string and print, need to figure out how to pass out
return passwordElements.join("");
};

// call function, need to figure out how to call, returns undefined
// var passwordHope= generatePassword(characters);

//console.log(passwordHope);

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