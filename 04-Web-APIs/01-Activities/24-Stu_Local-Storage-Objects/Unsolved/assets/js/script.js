var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  let userObject = { 
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };


  // TODO: Set new submission to local storage 
  localStorage.setItem('userObject', JSON.stringify(userObject));
  console.log(userObject)
  localStorage.getItem('userObject');
  console.log(JSON.parse(userObject));
});
