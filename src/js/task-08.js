const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.elements.email;
  const password = form.elements.password;
  if (!email.value.trim() || !password.value.trim()) {
    alert("Заповніть всі поля");
  } else {
    const formSubmit = {
      email: email.value,
      password: password.value,
    };
    console.log(formSubmit);

    form.reset();
  }
 
});