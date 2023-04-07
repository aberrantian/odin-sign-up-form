const INPUTS = {
  firstName: document.getElementById("first_name"),
  lastName: document.getElementById("last_name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone_number"),
  password: document.getElementById("password"),
  confirmPassword: document.getElementById("confirm_password"),
};

INPUTS.firstName.addEventListener("input", (event) => {
  /*
  IF NOT empty AND only letters
    valid = true
  ELSE
    valid = false
  */
});
INPUTS.lastName.addEventListener("input", (event) => {
  /*
  IF NOT empty AND only letters
    valid = true
  ELSE
    valid = false
  */
});
INPUTS.email.addEventListener("input", (event) => {
  /*
  IF NOT empty AND valid email
    valid = true
  ELSE
    valid = false
  */
});
INPUTS.phone.addEventListener("input", (event) => {
  /*
  IF NOT empty AND only numbers AND valid number
    valid = true
  ELSE
    valid = false
  */
});
INPUTS.password.addEventListener("input", (event) => {
  /*
  IF NOT empty AND meets criteria
    valid = true
  ELSE
    valid = false
  */
});
INPUTS.confirmPassword.addEventListener("input", (event) => {
  /*
  IF matches password
    valid = true
  ELSE
    valid = false
  */
});
