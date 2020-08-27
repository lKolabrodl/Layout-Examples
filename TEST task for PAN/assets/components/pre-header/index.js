(function toggleSelect() {
  const btnSelect = document.querySelector("#select");
  btnSelect.innerHTML = window.hiden__input.value;
  btnSelect.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("_active");
    this.parentNode.querySelector("ul").classList.toggle("_active");
  });

  function selectList() {
    let list = document.querySelectorAll("ul.list__select li");

    list.forEach((item) => {
      item.addEventListener("click", () => {
        btnSelect.click();
        btnSelect.innerHTML = item.innerHTML;
        window.hiden__input.value = item.innerHTML;
      });
    });
  }
  selectList();
})();
