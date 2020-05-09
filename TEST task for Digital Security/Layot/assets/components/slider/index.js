const tab = () => {
  let tabNav = document.querySelectorAll("#slider__nav ul li");
  let tabContent = document.querySelectorAll(
    "#slider__content .slider__content-item"
  );
  tabNav = Array.prototype.slice.call(tabNav);
  tabContent = Array.prototype.slice.call(tabContent);
  tabNav[0].classList.add("active");
  tabContent[0].classList.add("active");

  tabNav.map((item, index) => {
    item.addEventListener("click", () => {
      tabNav.map((item) => {
        item.classList.remove("active");
      });

      tabContent.map((item) => {
        item.classList.remove("active");
      });

      item.classList.add("active");
      tabContent[index].classList.add("active");
    });
  });
};

tab();
