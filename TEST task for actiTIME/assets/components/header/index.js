const activeClass = "active";

if (document.querySelector(".header-burger-menu")) {
  let burger = document.querySelector(".header-burger-menu");
  burger.addEventListener("click", () => {
    burger.classList.toggle(activeClass);
    document.querySelector(".header__main").classList.toggle(activeClass);
  });
}
if (document.querySelector(".header-nav-item.has__child")) {
  let childItem = document.querySelectorAll(".header-nav-item.has__child");

  childItem.forEach((item) => {
    item.addEventListener("click", () => {
      item.lastElementChild.classList.toggle(activeClass);
    });
  });
}
