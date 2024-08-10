const scriptURL =
  "https://script.google.com/macros/s/AKfycbwOluW3qYvHclsp3DORCJa4Ps5LXUKVBZSxz0LjSkGQTa9ny6mpqE_z-0KjccvLSfbWKg/exec";
const form = document.forms["email-form-porfolio"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const successAlert = document.querySelector(".success-alert");
const failAlert = document.querySelector(".fail-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      successAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => {
      failAlert.classList.toggle("d-none");
      console.error("Error!", error.message);
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // reset form
      form.reset();
    });
});
