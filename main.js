const INPUTS = {
  firstName: document.getElementById("first_name"),
  lastName: document.getElementById("last_name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone_number"),
  password: document.getElementById("password"),
  confirmPassword: document.getElementById("confirm_password"),
};

const ERROR = document.getElementById("error");

const letters = /[A-Za-z]/g;
const numbers = /[0-9]/g;

const FORM = document.getElementById("sign-up-form");

FORM.addEventListener("submit", (event) => {
  let errorMessages = [];

  if (INPUTS.password.value.length < 10) {
    errorMessages.push("Password is too short.");
  } else if (!letters.test(INPUTS.password.value)) {
    errorMessages.push("Password requires at least 1 letter.");
  } else if (!numbers.test(INPUTS.password.value)) {
    errorMessages.push("Password requires at least 1 number.");
  }

  if (INPUTS.confirmPassword.value != INPUTS.password.value) {
    errorMessages.push("Passwords don't match.");
  }

  if (errorMessages.length > 0) {
    event.preventDefault();
    ERROR.innerText = errorMessages.join("\n");

    ERROR.style =
      "color: white;background-color: red;width: fit-content;padding: 8px;border: red solid 1px;border-radius: 12px;";
  } else {
    ERROR.style = "";
  }
});
