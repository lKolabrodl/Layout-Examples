(function toggleMenu() {
  const menuBtn = document.querySelectorAll(
    "li.header__nav__list-link.has-children"
  );
  menuBtn.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("_active");
      this.querySelector(".child-menu").classList.toggle("_active");
    });
  });
})();
