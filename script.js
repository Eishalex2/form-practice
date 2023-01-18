const password1 = document.getElementById('password');
const password2 = document.getElementById('conf-pas');
const errorMes = document.querySelector('.error');

password2.addEventListener("input", () => {
  if (password1.value !== password2.value) {
    errorMes.textContent = "*Passwords do not match";
    errorMes.style = "color: red";
    password1.style = "border: 1px solid red";
    password2.style = "border: 1px solid red"
  }
});