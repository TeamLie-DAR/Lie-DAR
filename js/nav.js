// navigation bar javaScript
let burger = document.querySelector(".burger");
let rightnav = document.querySelector(".right-nav");

burger.addEventListener("click", () => {
  rightnav.classList.toggle("right-nav-hidden");
});

