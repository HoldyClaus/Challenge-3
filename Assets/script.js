var generateBtn = document.querySelector("#generate");
var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arraySpecial = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ">", ",", ".", "?"];
var num = Math.floor(Math.random() * 10);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
function generatePassword(){
  var passLength = prompt("Set password length from 8 to 128 characters.");
  var passArray = [];
  if (passLength < 8 || passLength > 128 || isNaN(passLength) === true) {
    alert("Please try again")
    generatePassword();
  }

  var passUpper = confirm("Please include upper case characters?");
  var passLower = confirm("Please include lower case characters?");
  var passNum = confirm("Please include numbers?");
  var passSpecial = confirm("Please include special characters?");
  if (passUpper === false && passLower === false && passNum === false && passSpecial === false) {
    alert("Error");
    return;
    }

  for (var i = 1; i <= passLength;) {
    if (passUpper === true && i <= passLength) {
    var randomUpper = arrayUpper[Math.floor(Math.random() * arrayUpper.length)];
    passArray.push(randomUpper);
    console.log(passArray);
    i++;
    }
  
    if (passLower === true && i <= passLength) {
    var randomLower = arrayLower[Math.floor(Math.random() * arrayLower.length)];
    passArray.push(randomLower);
    console.log(passArray);
    i++;
    }
  
    if (passNum === true && i <= passLength) {
    var num = Math.floor(Math.random() * 10);
    passArray.push(num);
    console.log(passArray);
    i++;
    }

    if (passSpecial === true && i <= passLength) {
    var randomSpecial = arraySpecial[Math.floor(Math.random() * arraySpecial.length)];
    console.log(randomSpecial);
    passArray.push(randomSpecial);
    console.log(passArray);
    i++;
    }
    var passArray2 = passArray.join("");
  }
  return passwordString = passArray2;
}