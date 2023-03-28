const tutup = document.querySelector("#tutup");
const sidebar = document.querySelector(".sidebar");

tutup.addEventListener("click", () => {
  sidebar.classList.toggle("tutup");
});