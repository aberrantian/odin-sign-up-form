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
  let errorMessages = [];

  if (INPUTS.password.value.length < 10) {
    errorMessages.push("Password is too short.");
  }

  if (INPUTS.confirmPassword.value != INPUTS.password.value) {
    errorMessages.push("Passwords don't match.");
  }

  if (errorMessages.length > 0) {
    event.preventDefault();
    ERROR.innerText = errorMessages.join("\n");

    ERROR.style =
      "color: red;width: fit-content;padding: 4px;border: red solid 1px;";
  } else {
    ERROR.style = "";
  }
});
