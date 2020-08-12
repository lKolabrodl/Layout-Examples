function headerMoneySeparationSpace() {
  if (document.querySelector("header .header__money span")) {
    let numSpan = document.querySelector("header .header__money span")
      .innerHTML;
    numSpan = Number(numSpan).toLocaleString();
    document.querySelector("header .header__money span").innerHTML = numSpan;
  }
}
headerMoneySeparationSpace();
