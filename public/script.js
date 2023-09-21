const email = document.getElementById("email");
const mainBtn = document.getElementById("button");
const dismiss = document.getElementById("dismiss");
const dismissDsk = document.getElementById("dismiss-dsk");
const successScr = document.getElementById("success-screen");
const formBox = document.getElementById("form-container");
const span = document.getElementById("incorrect");
const YourEmail = document.getElementById("your-email");

mainBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // if the email is invalid
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    email.classList.add("incorrect");
    span.innerHTML = "valid email required";
    false;
    // if the email is valid
  } else {
    successScr.classList.add("flex");
    successScr.classList.remove("hidden");
    span.innerHTML = "";
    email.classList.remove("incorrect");
    YourEmail.innerHTML = email.value;
    email.value = "";
    true;
  }
});
// dismiss the success screen on the mobile-menu

dismiss.addEventListener("click", () => {
  successScr.classList.add("hidden");
  successScr.classList.remove("flex");
});

// dismiss the success screen on the mobile-menu

dismissDsk.addEventListener("click", () => {
  successScr.classList.add("hidden");
  successScr.classList.remove("flex");
});
