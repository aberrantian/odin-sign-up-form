const INPUTS = {
  firstName: document.getElementById("first_name"),
  lastName: document.getElementById("last_name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone_number"),
  password: document.getElementById("password"),
  confirmPassword: document.getElementById("confirm_password"),
};

for (const INPUT in INPUTS) {
  console.log(INPUT);
  console.log(INPUTS[INPUT].validity);
}
