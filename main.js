const INPUTS = {
  firstName: document.getElementById("first_name"),
  lastName: document.getElementById("last_name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone_number"),
  password: document.getElementById("password"),
  confirmPassword: document.getElementById("confirm_password"),
};

const ERROR = document.getElementById("error");

// ERROR.style =
//   "color: red;width: fit-content;padding: 4px;border: red solid 1px;";

const FORM = document.getElementById("sign-up-form");
FORM.addEventListener("submit", (event) => {
  event.preventDefault();
});

INPUTS.firstName.addEventListener("input", (event) => {
  const self = INPUTS.firstName;
  /*
  IF NOT empty AND only letters
    valid = true
  ELSE
    valid = false
  */
});
INPUTS.lastName.addEventListener("input", (event) => {
  const self = INPUTS.lastName;
  /*
  IF NOT empty AND only letters
    valid = true
  ELSE
    valid = false
  */
});
INPUTS.email.addEventListener("input", (event) => {
  const self = INPUTS.email;
  /*
  IF NOT empty AND valid email
    valid = true
  ELSE
    valid = false
  */
});
INPUTS.phone.addEventListener("input", (event) => {
  const self = INPUTS.phone;
  /*
  IF NOT empty AND only numbers AND valid number
    valid = true
  ELSE
    valid = false
  */
});
INPUTS.password.addEventListener("input", (event) => {
  const self = INPUTS.password;
  /*
  IF NOT empty AND meets criteria
    valid = true
  ELSE
    valid = false
  */
});
INPUTS.confirmPassword.addEventListener("input", (event) => {
  const self = INPUTS.confirmPassword;
  /*
  IF matches password
    valid = true
  ELSE
    valid = false
  */
});
