// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//password values
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

let password = ""

//for loop
for(var i = 0; i <= complexity; i++){
  password = passowrd + values.charAt(Math.floor(Math.random() = Math.floor(values.length - 1)));
}

//textbox display
document.getElementById("card-body").value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

