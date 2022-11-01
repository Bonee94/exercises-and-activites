var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submissio
var userObject = {
  firstName: firstNameInput.value,
  lastName: lastNameInput.value,
  email: emailInput.value.trim(),
  password: passwordInput.value.trim(),
}
  // TODO: Set new submission to local storage 
  localStorage.setItem("userInfo", JSON.stringify(userObject))
});
