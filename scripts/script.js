const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");
const form = document.querySelector(".form-box");

registerBtn.addEventListener("click", () => {
  form.classList.toggle("change-form");
});
loginBtn.addEventListener("click", () => {
  form.classList.toggle("change-form");
});
