let menu = document.getElementById("menu");
let menuBox = document.getElementById("menu-box");

menu.addEventListener("click", () => {
  menuBox.classList.toggle("omom");
  if (menuBox.classList.contains("omom")) {
    menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menu.innerHTML = `<i class="fa-solid fa-x"></i>`;
  }
});
