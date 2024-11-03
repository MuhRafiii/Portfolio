const scriptURL =
  "https://script.google.com/macros/s/AKfycbxAI0AvEqH5F2xU42eXNUCJbAY0-Ggbpcht1OHGVEiZL397TUEZy0aM4ZLRpF2D4yyC/exec";
const form = document.forms["portfolio-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // reset form
      form.reset();
      alert("Terima kasih, pesan anda telah terkirim.");
      console.log("Success!", response);
    })
    .catch((error) => {
      console.error("Error!", error.message);
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // reset form
      form.reset();
      alert(
        "Mohon maaf, pesan anda tidak dapat terkirim. Pastikan anda memiliki jaringan internet atau coba beberapa saat lagi."
      );
    });
});
