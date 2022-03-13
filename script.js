// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
//   providing series of prompts for password generation
  var promptPassword = window.prompt('How many characters would you like your password? Choose between 8 and 128');
  if(promptPassword >= 8 && promptPassword <= 128) {
      var confirmLowerCase = confirm('Will this contain lowercase letters?')
        if(confirmLowerCase){
            //if confirmlowercase is true, check if confirmUpperCase is true
            var confirmUpperCase = confirm('Will this contain uppercase letters?')
            if(confirmUpperCase){
                //if it contains lowercase and uppercase
                var confirmNumber = confirm('Will this contain numbers?')
                if(confirmNumber){
                    //if it contains lowercase, uppercase and number
                    var confirmSpecialCharacter =confirm('Will this contain special characters?')
                    if(confirmSpecialCharacter){
                        //if it contains lowercase, uppercase, number and special character
                        alert("The password")
                    } else {
                        //if it contains lowercase, uppercase, number but no special character
                    }
                } else {
                    //if it contains lowercase, uppercase but no number
                }
            } else {
                //if it contains lowercase but no uppercase
            }
        } else {
            //if confirm lowercase is false, check if confirmUpperCaseb is true
        }


      

  } else if(promptPassword < 8 || promptPassword > 128) {
      alert('You must choose between 8 and 128')
  } 



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
