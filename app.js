/* Created by Tivotal */

const btn = document.querySelector(".button");
btn.addEventListener("click", () => {
  btn.classList.add("active");
  setTimeout(() => {
    btn.classList.remove("active");
    btn
      .querySelector("i")
      .classList.replace("bx-cloud-download", "bx-check-circle");
    btn.querySelector(".text").textContent = "Completed";
  }, 6000);
});
