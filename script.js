// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//   providing series of prompts for password generation
  var promptFight = window.prompt('Would you like your password to be scalet or unscalet? Enter "SCALET" OR "UNSCALET" to chose');
  promptFight = promptFight.toUpperCase()



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
