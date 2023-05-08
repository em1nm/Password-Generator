// Assignment Code
var generateBtn = document.querySelector("#generate");
// Password to the #password input:
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);

var specialCharac = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";

var confirmSpecial; 
var confirmNum;
var confirmLowerCase;
var confirmUpperCase;

var userSelection;


function generatePassword () {
  var charactersLength = prompt("How many characters would you like your password to contain?");
  if (charactersLength < 8) {
    
    alert("Password length must be a minimum of 8 characters. Please try again")
    // characters();
  } else if (charactersLength > 128) {
    
    alert("Password length must be a maximum of 128 characters. Please try again")
    // characters();
  } else if (!charactersLength) {
    alert("Invalid input. Must be between 8-128 characters")
  } else {
    
    confirmSpecial = confirm("Click OK to confirm to use special characters");
    confirmNum = confirm("Click OK to confirm to use numberic characters");
    confirmLowerCase = confirm("Click OK to confirm to use lowercase characters");
    confirmUpperCase = confirm("Click OK to confirm to use uppercase characters");
  }
  populateUserSelection ()


  var randomPassword = ""

  for(var count = 0; count < charactersLength; count ++){
    var index = Math.floor(Math.random() * userSelection.length)
    randomPassword += userSelection [index]
  }
  return randomPassword;
}

//Select arrays: 
function populateUserSelection() {
    if (confirmSpecial && confirmNum && confirmLowerCase && confirmUpperCase) {
    userSelection = specialCharac.concat(numbers, lowerCase, upperCase);
  }

  //Select three arrays: 
  else if (!confirmSpecial && confirmNum && confirmLowerCase && confirmUpperCase) {
    userSelection = numbers.concat(lowerCase, upperCase);
  } else if (confirmSpecial && !confirmNum && confirmLowerCase && confirmUpperCase) {
    userSelection = specialCharac.concat(lowerCase, upperCase);}
    else if (confirmSpecial && confirmNum && !confirmLowerCase && confirmUpperCase) {
    userSelection = specialCharac.concat(numbers, upperCase);
    }else if (confirmSpecial && confirmNum && confirmLowerCase && !confirmUpper) {
    userSelection = specialCharac.concat(numbers, lowerCase);
    }


  //Select two arrays:
  else if (confirmSpecial && confirmNum)
    {userSelection = specialCharac.concat(numbers);
    }
  else if (confirmSpecial && confirmLowerCase) {
    userSelection = specialCharac.concat(lowerCase); 
    }
  else if (confirmSpecial && confirmUpperCase){
    userSelection = specialCharac.concat(upperCase);
    }
  else if (confirmNum && confirmLowerCase){
    userSelection = numbers.concat(lowerCase);
  }
  else if (confirmNum && confirmUpperCase){
    userSelection = numbers.concat(upperCase);
  }
  else if (confirmLowerCase && confirmUpperCase){
    userSelection = lowerCase.concat(upperCase);
  }

  // Slect 1 array: 
  else if (confirmSpecial) {
    userSelection = specialCharac;
  } else if (confirmNum){
    userSelection = numbers;
  } else if (confirmLowerCase) {
    userSelection = lowerCase;
  } else if (confirmUpperCase) {
    userSelection = upperCase;
  }

  //Select 0 array:
  else {
    alert("You must choose from at least one criteria. Please try again.")
  }
}


