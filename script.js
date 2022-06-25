// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    function generatePassword() {
        var length = prompt("choose the length of your password from starting from 8 upto 30");
            if (length < 8) {
                alert('Please use the passsword greator than 8')
            }  
            else if ( length > 31) {
                alert('Please use the password less than 30')
            }
            else {
                charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"$%&()=?*#";
            retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
            }
            
    }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
