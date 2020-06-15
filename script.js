// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    var special = "!$^&*-=+_?";

    var options = [alpha, caps, numeric, special];

    var password = "";
    var passwordArray = Array(length);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
);

for (i = 0; i < length; i++) {
    var currentOption = options[Math.floor(Math.random() * options.length)];
    var randomChar = currentOption.charAt(Math.floor(Math.random() * currentOption.length));
    password += randomChar;
    passwordArray.push(randomChar);
}
return Array


//textbox display
document.getElementById("card-body").value = password;
document.querySelector(".result");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
