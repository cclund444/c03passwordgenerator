// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "123456789"
var symbol = "!@#$%^&*();"

var master = "";
var random = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  // Add event listener to generate button;
  // generateBtn.addEventListener("click", userPrompts);

// Write password to the #password input
function askLength() {
  var length = prompt("How Many Characters?");
  return length
}

function charChoice() {
  
  var wantLower = confirm("Would you like lowercase letters?")
  var wantUpper = confirm("Would you like uppercase letters?")
  var wantNumber = confirm("Would you like numbers used?")
  var wantSymbol = confirm("Would you like symbols used?")
  
  if (wantLower == true) {
    master += lowerCase
  }
  if (wantUpper == true) {
    master += upperCase
  }
  if (wantNumber == true) {
    master += number
  }
  if (wantSymbol == true) {
    master += symbol
  }

}

function userPrompts() {
  var lengthAns = askLength()
  if (lengthAns < 8 || lengthAns > 128) {
    alert("Please enter a number between 8 and 128.")
    lengthAns = askLength()
  }

  charChoice()
  if (master === "") {
    alert("Please select at least one character type.")
    charChoice()
  }

  writePassword(lengthAns)

}

function writePassword(passwordLength) {
  // for loop that takes a random character from the master string and puts it onto a final string repeatedly until password length is met
  var password = ""
  for (let i = 0; i < passwordLength ; i++) {
    var randomPass = master[Math.floor(Math.random() * master.length)]
    random.push(randomPass)
  }
  var randomPassword = random.toString().split(",").join("")
  return randomPassword

  // Put the password on the screen
 randomPassword = "Your Secure Password"

};

// Add event listener to generate button
 generateBtn.addEventListener("click", userPrompts);
