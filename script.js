// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowercase = 'abcdefghijklmnopqrstuvwxyz'
function lowerCaseF(length) {
    let result = ' ';
    const charactersLength = lowercase.length;
    for ( let i = 0; i < length; i++ ) {
        result += lowercase.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

let allPasswordMix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&%!~'
function allPasswordMixF(length) {
    let result = ' ';
    const charactersLength = allPasswordMix.length;
    for ( let i = 0; i < length; i++ ) {
        result += allPasswordMix.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

let uppercaseNumberSpecialcharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&%!~'
function uppercaseNumberSpecialcharacterF(length) {
    let result = ' ';
    const charactersLength = uppercaseNumberSpecialcharacter.length;
    for ( let i = 0; i < length; i++ ) {
        result += uppercaseNumberSpecialcharacter.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

let lowercaseSpecialcharacter = 'abcdefghijklmnopqrstuvwxyz@#$&%!~'
function lowercaseSpecialcharacterF(length) {
    let result = ' ';
    const charactersLength = lowercaseSpecialcharacter.length;
    for ( let i = 0; i < length; i++ ) {
        result += lowercaseSpecialcharacter.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

let specialcharacter = '@#$&%!~'
function specialcharacterF(length){
    let result = ' ';
    const charactersLength = specialcharacter.length;
    for ( let i = 0; i < length; i++ ) {
        result += specialcharacter.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

let numSpecialChar = '0123456789@#$&%!~'
function numSpecialCharF(length){
    let result = ' ';
    const charactersLength = numSpecialChar.length;
    for ( let i = 0; i < length; i++ ) {
        result += numSpecialChar.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

var numbers = '0123456789'
function numbersF(length){
    let result = ' ';
    const charactersLength = numbers.length;
    for ( let i = 0; i < length; i++ ) {
        result += numbers.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function uppercaseF(length){
    let result = ' ';
    const charactersLength = uppercase.length;
    for ( let i = 0; i < length; i++ ) {
        result += uppercase.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

var uppercaseSpecialchar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&%!~'
function uppercaseSpecialcharF(length){
    let result = ' ';
    const charactersLength = uppercaseSpecialchar.length;
    for ( let i = 0; i < length; i++ ) {
        result += uppercaseSpecialchar.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

var uppercaseNumber =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
function uppercaseNumberF(length){
    let result = ' ';
    const charactersLength = uppercaseNumber.length;
    for ( let i = 0; i < length; i++ ) {
        result += uppercaseNumber.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

var lowercaseNumber = 'abcdefghijklmnopqrstuvwxyz0123456789'
function lowercaseNumberF(length){
    let result = ' ';
    const charactersLength = lowercaseNumber.length;
    for ( let i = 0; i < length; i++ ) {
        result += lowercaseNumber.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

var lowercaseNumberSpecialchar = 'abcdefghijklmnopqrstuvwxyz0123456789@#$&%!~'
function lowercaseNumberSpecialcharF(length){
    let result = ' ';
    const charactersLength = lowercaseNumberSpecialchar.length;
    for ( let i = 0; i < length; i++ ) {
        result += lowercaseNumberSpecialchar.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

var lowercaseUppercase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
function lowercaseUppercaseF(length){
    let result = ' ';
    const charactersLength = lowercaseUppercase.length;
    for ( let i = 0; i < length; i++ ) {
        result += lowercaseUppercase.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

var lowercaseUppercaseSpecialcharacter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&%!~"
function lowercaseUppercaseSpecialcharacterF(length){
    let result = ' ';
    const charactersLength = lowercaseUppercaseSpecialcharacter.length;
    for ( let i = 0; i < length; i++ ) {
        result += lowercaseUppercaseSpecialcharacter.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

let lowercaseUppercaseNumber = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
function lowercaseUppercaseNumberF(length) {
    let result = ' ';
    const charactersLength = lowercaseUppercaseNumber.length;
    for ( let i = 0; i < length; i++ ) {
        result += lowercaseUppercaseNumber.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}



// Write password to the #password input
function writePassword() {
//   providing series of prompts for password generation
  var promptPassword = window.prompt('How many characters would you like your password? Choose between 8 and 128');
  password_length = promptPassword

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
                        alert(allPasswordMixF(password_length))
                    } else {
                        //if it contains lowercase, uppercase, number but no special character
                        alert(lowercaseUppercaseNumberF(password_length))
                    }
                } else {
                    //if it contains lowercase, uppercase but no number
                    confirmSpecialCharacter =confirm('Will this contain special characters?')
                    if(confirmSpecialCharacter){
                        //if it contains lowercase, uppercase but no number and special cha
                        alert(lowercaseUppercaseSpecialcharacterF(password_length))
                    } else {
                        //if it contains lowercase, uppercase but no number and no special c
                        alert(lowercaseUppercaseF(password_length))
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
                        alert(lowercaseNumberSpecialcharF(password_length))
                    } else {
                         //if it contains lowercase but no uppercase and number and no specialcharacter
                         alert(lowercaseNumberF(password_length))
                    }
                    
                } else {
                    //if it contains lowercase but no uppercase and no number
                    confirmSpecialCharacter =confirm('Will this contain special characters?')
                    if(confirmSpecialCharacter){
                       //if it contains lowercase but no uppercase and no number and contains special character 
                       alert(lowercaseSpecialcharacterF(password_length))
                    } else {
                        //if it contains lowercase but no uppercase and no number and contains no special character
                        alert(lowerCaseF(password_length))
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
                         alert(uppercaseNumberSpecialcharacterF(password_length))
                     } else {
                        //if confirm lowercase is false, uppercase is true, number is true, specialcharacter is false
                        alert(uppercaseNumberF(password_length))
                     }
                } else {
                     //if confirm lowercase is false, uppercase is true, number is not true
                     confirmSpecialCharacter =confirm('Will this contain special characters?')
                     if(confirmSpecialCharacter){
                         //if confirm lowercase is false, uppercase is true, number is false and special cha is true
                         alert(uppercaseSpecialcharF(password_length))
                     } else {
                         //if confirm lowercase is false, uppercase is true, number is not true and special cha is not true
                         alert(uppercaseF(password_length))
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
                         alert(numSpecialCharF(password_length))

                    } else {
                        //if confirm lowercase is false, uppercase is false, num is true, special ch is false
                        alert(numbersF(password_length))
                    }

                } else {
                    //if confirm lowercase is false, uppercase is false, num is false
                    confirmSpecialCharacter =confirm('Will this contain special characters?')
                    if(confirmSpecialCharacter){
                       //if confirm lowercase is false, uppercase is false, num is false, specialchar is true
                       alert(specialcharacterF(password_length))
                    } else {
                        //if confirm lowercase is false, uppercase is false, num is false, specialchar is false
                        alert('You must choose a criteria')
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
