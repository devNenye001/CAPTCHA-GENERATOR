//CAPTCHA PROGRAM

const captchaText = document.getElementById("captcha");
const refreshBtn = document.getElementById("refresh");
const submitBtn = document.getElementById("submit");
const input = document.getElementById("userInput");
const result = document.getElementById("validation-result");


//To generate the captcha
function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  captchaText.textContent = captcha;
}

generateCaptcha();

// Refresh button
refreshBtn.addEventListener("click", generateCaptcha);

// Submit button
submitBtn.addEventListener("click", () => {
  if (input.value.toUpperCase().trim() === captchaText.textContent) {
    result.textContent = "Entered captcha is correct ✅";
    result.style.color = "green";
  } else {
    result.textContent = "Entered captcha is incorrect ❌";
    result.style.color = "rgb(235, 29, 29)";
  }
});
