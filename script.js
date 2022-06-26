// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    function generatePassword() {
        var length = prompt("choose the length of your password starting from 8 upto 128");
        if (length < 8) {
            alert('Please use the passsword greator than 8')
        }
        else if (length > 129) {
            alert('Please use the password less than 30')
        }

    //    Creating a dictionary to store password values.
        else {
            var char = {
            charset1: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            charset2: "abcdefghijklmnopqrstuvwxyz0123456789",
            charset3: "abcdefghijklmnopqrstuvwxyz!\"$%&()=?*#",
            charset4: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"$%&()=?*#",
            charset5: "abcdefghijklmnopqrstuvwxyz"
            };
            //  Setting up Uppercase password
            var upperCase = confirm('Do you want Uppercase letters: click ok or cancel');
            if (upperCase == true) {
                var upperCase1 = char.charset1;
                retVal = "";
                for (var i = 0, n = upperCase1.length; i < length; ++i) {
                    retVal += upperCase1.charAt(Math.floor(Math.random() * n));
                }
                return retVal;
            }
            
            //  Setting up numbers in password
            else {
                var numbers = confirm('Do you want Numbers: click ok or cancel');
                if (numbers == true) {
                    var numbers1 = char.charset2;
                    retVal1 = "";
                    for (var i = 0, n = numbers1.length; i < length; ++i) {
                        retVal1 += numbers1.charAt(Math.floor(Math.random() * n));
                    }
                    return retVal1;
                }
                //  Setting up SpecailCharacters in password
                else {
                var specialChar = confirm('Do you want SpecialChr: click ok or cancel');
                if (specialChar == true) {
                    var specialChar1 = char.charset3;
                    retVal2 = "";
                    for (var i = 0, n = specialChar1.length; i < length; ++i) {
                        retVal2 += specialChar1.charAt(Math.floor(Math.random() * n));
                    }
                    return retVal2;
                }
                //  Setting up All the Characters in password
                else {
                var allchr = confirm('Do you want MostSecurePassword: click ok or cancel');
                if (allchr == true) {
                    var allchr1 = char.charset4;
                    retVal3 = "";
                    for (var i = 0, n = allchr1.length; i < length; ++i) {
                        retVal3 += allchr1.charAt(Math.floor(Math.random() * n));
                    }
                    return retVal3;
                }
                // Seting up lowercase Password
                else
                    var lowerLetter = char.charset5;
                    retVal4 = ""
                    for (var i = 0, n = lowerLetter.length; i < length; ++i) {
                        retVal4 += lowerLetter.charAt(Math.floor(Math.random() * n));
                    }
                    return retVal4;
                }
                }
            }
        }

    }
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
