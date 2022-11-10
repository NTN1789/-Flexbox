const btn = document.querySelector(".btn");
const flexbox = document.querySelectorAll(".flexbox");


btn.addEventListener("click", () => animation());


const animation = () => {
  flexbox.forEach(el => el.classList.toggle("animation"));
};