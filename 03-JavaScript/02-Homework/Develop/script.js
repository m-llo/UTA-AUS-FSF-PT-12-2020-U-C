//Prompt How many characters would you like your passoword to be? (Please input a number from 8-128)
//var to Confirm each upperCase, lower case, numbers, special characters
//Alert click generate button to begin
//Take the value entered and generate a password using math.random() from the options, use conditions if each option chosen
//need object with 4 properties for each password options

// Assignment Code
var generateBtn = document.querySelector("#generate");

// password options object
var characterOps = {
  upperCase:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  numbers : ["0","1","2","3","4","5","6","7","8","9"],
  specialCase: ["~","!","@","#","$","%","^","&","*","(",")","_","+"],
  

  upper : true,
  lower : true,
  number : true,
  special : true,

  noUpper: function() {
    alert("Your password will contain lowercase letters, numbers, and special characters");
  },
  noLower: function (){ alert("Your password will contain uppercase letters, numbers, and special characters")
  },
  noNumber: function (){ alert("Your password will contain uppercase letters, lowercase letters, and special characters")
  },
  noSpecial: function (){ alert("Your password will contain uppercase letters, lowercase letters, and numbers")
  },
  noUpperNoLower: function(){ alert("Your password will contain numbers, and special characters")
  },
  noUpperNoNumber: function (){ alert("Your password will contain lowercase letters, and special characters")
  },
  noUpperNoSpecial: function (){ alert("Your password will contain lowercase letters, and numbers")
  },
  noLowerNoNumber: function (){ alert("Your password will contain uppercase letters and special characters")
  },
  noLowerNoSpecial: function () { alert("Your password will contain uppercase letters, and numbers")
  },
 noNumberNoSpecial : function (){ alert("Your password will contain uppercase letters, and lowercase letters")
  },
  
  // userSel : function (){ prompt("How many characters would you like your password to be? (Please enter a number from 8-128)")
// },

// var userSel; ask how to reference this variable for the loop

// while (userSel()  !== null) {
  passwordLength : function() {
    var userSel = prompt("How many characters would you like your password to be? (Please enter a number from 8-128)")
    if (userSel <=7 || userSel >=129){ 
      alert("Password length must be between 8-128 characters, try again!")
    }
    else {
      alert("Please choose the character types to be included in your password (minimum two types)")
      var confirmUpper = confirm("Will your password contain uppercase letters?")
      if (confirmUpper === false) {
        this.upper = false
      }
      var confirmlower = confirm("Will your password contain lowercase letters?")
      if (confirmlower === false) {
        this.lower = false
      }
      var confirmNum = confirm("Will your password contain numbers?")
      if (confirmNum === false) {
        this.number = false
      }
      var confirmSpec = confirm("Will your password contain special characters?")
      if (confirmSpec === false) {
        this.special = false
      }
    
    if (this.upper === true && this.lower === true && this.number === true && this.special === true) {
      alert("Your password will contain uppercase letters, lowercase letters, numbers, and special characters")
    }
    else if (this.upper !== true && this.lower === true && this.number === true && this.special === true) {
      this.noUpper();
    }
    else if (this.upper !== true && this.lower !== true && this.number === true && this.special === true) {
      this.noUpperNoLower();
    }
    else if (this.upper !== true && this.lower === true && this.number !== true && this.special === true) {
      this.noUpperNoNumber();
    }
    else if (this.upper !== true && this.lower === true && this.number === true && this.special !== true) {
      this.noUpperNoSpecial();
    }
    else if (this.upper === true && this.lower !== true && this.number === true && this.special === true) {
      this.noLower();
    }
    else if (this.upper === true && this.lower !== true && this.number !== true && this.special === true) {
      this.noLowerNoNumber();
    }
    else if (this.upper === true && this.lower !== true && this.number === true && this.special !== true) {
      this.noLowerNoSpecial();
    }
    else if (this.upper === true && this.lower === true && this.number !== true && this.special !== true) {
      this.noNumber();
    }
    else if (this.upper === true && this.lower === true && this.number !== true && this.special !== true) {
      this.noNumberNoSpecial();
    }
    else if (this.upper === true && this.lower === true && this.number === true && this.special !== true) {
      this.noSpecial();
    }
      
  }

  }
}

}
console.log(characterOps.upperCase)
console.log(characterOps.lowerCase)
console.log(characterOps.upper)
console.log(characterOps.lower)
console.log(characterOps.number)
console.log(characterOps.special)

characterOps.passwordLength ();
console.log(characterOps.upper)
console.log(characterOps.lower)
console.log(characterOps.number)
console.log(characterOps.special)








// Write password to the #password input - last thing to do
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
