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
                        alert("The password without special character")
                    }
                } else {
                    //if it contains lowercase, uppercase but no number
                    confirmSpecialCharacter =confirm('Will this contain special characters?')
                    if(confirmSpecialCharacter){
                        //if it contains lowercase, uppercase but no number and special cha
                        alert("This password contains lowercase, uppercase, no number and special character")
                    } else {
                        //if it contains lowercase, uppercase but no number and no special c
                        alert("This password contains lowercase, uppercase, no number and no special character")
                    }
                }
            } else {
                //if it contains lowercase but no uppercase
                confirmNumber = confirm('Will this contain numbers?')
                if(confirmNumber){
                    //if it contains lowercase but no uppercase and number
                    confirmSpecialCharacter =confirm('Will this contain special characters?')
                    if(confirmSpecialCharacter){
                        //if it contains lowercase but no uppercase and number and specialcharacter
                        alert('This password contains lowercase, no uppercase, number and special character')
                    } else {
                         //if it contains lowercase but no uppercase and number and no specialcharacter
                         alert('This password contains lowercase, no uppercase, number and no special character')
                    }
                    
                } else {
                    //if it contains lowercase but no uppercase and no number
                    confirmSpecialCharacter =confirm('Will this contain special characters?')
                    if(confirmSpecialCharacter){
                       //if it contains lowercase but no uppercase and no number and contains special character 
                       alert('This password contains lowercase, no uppercase, no number and special character')
                    } else {
                        //if it contains lowercase but no uppercase and no number and contains no special character
                        alert('This password contains lowercase, no uppercase, no number and no special character')
                    }

                }

            }
        } else {
            //if confirm lowercase is false
            confirmUpperCase = confirm('Will this contain uppercase letters?')
            if(confirmUpperCase){
                //if confirm lowercase is false, uppercase is true
                confirmNumber = confirm('Will this contain numbers?')
                if(confirmNumber){
                     //if confirm lowercase is false, uppercase is true, number is true
                     confirmSpecialCharacter =confirm('Will this contain special characters?')
                     if(confirmSpecialCharacter){
                         //if confirm lowercase is false, uppercase is true, number is true, specialcharacter is true
                         alert('This password has no lowercase, has uppercase, has number, has special character')
                     } else {
                        //if confirm lowercase is false, uppercase is true, number is true, specialcharacter is false
                        alert('This password has no lowercase, has uppercase, has number, has no special character')
                     }
                } else {
                     //if confirm lowercase is false, uppercase is true, number is not true
                     confirmSpecialCharacter =confirm('Will this contain special characters?')
                     if(confirmSpecialCharacter){
                         //if confirm lowercase is false, uppercase is true, number is false and special cha is true
                         alert('This password has no lowercase, uppercase, no number, has special cha')
                     } else {
                         //if confirm lowercase is false, uppercase is true, number is not true and special cha is not true
                         alert('This password has no lowercase, uppercase, no number, has no special cha')
                     }
                }
            } else {
                //if confirm lowercase is false, uppercase is false
                confirmNumber = confirm('Will this contain numbers?')
                if(confirmNumber) {
                    //if confirm lowercase is false, uppercase is false, num is true
                    confirmSpecialCharacter =confirm('Will this contain special characters?')
                    if(confirmSpecialCharacter){
                         //if confirm lowercase is false, uppercase is false, num is true, special ch is true
                         alert('This password has no lowercase, no uppercase, num is true special cha is true')

                    } else {
                        //if confirm lowercase is false, uppercase is false, num is true, special ch is false
                        alert('This password has no lowercase, no uppercase, num is true, special cha is false')
                    }

                } else {
                    //if confirm lowercase is false, uppercase is false, num is false
                    confirmSpecialCharacter =confirm('Will this contain special characters?')
                    if(confirmSpecialCharacter){
                       //if confirm lowercase is false, uppercase is false, num is false, specialchar is true
                       alert('This password has no lowercase, no uppercase, no number and special char is true')
                    } else {
                        //if confirm lowercase is false, uppercase is false, num is false, specialchar is false
                        alert('This password has no lowercase, no uppercase, no number and special char is false')
                    }
                }
            }

            
        }


      

  } else if(promptPassword < 8 || promptPassword > 128) {
      alert('You must choose between 8 and 128')
  } else {
      alert('You must choose between 8 and 128')
  }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
