function addColumn() {
  let display = document.querySelector(".display__content");
  let btnAdd = document.querySelector("#columnAdd");

  btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    let newDiv = document.createElement("div");
    newDiv.className = "column";
    newDiv.innerHTML = document.getElementById("templateColumb").innerHTML;
    display.append(newDiv);
    dragAndDrop();
    removeColumn();
    editColumns();
    let column = document.querySelectorAll(".column");

    if (column.length > 4) {
      display.style.overflowX = "scroll";
    }
  });
}
addColumn();

function removeColumn() {
  let btnRemove = document.querySelectorAll(".column__header-remove");
  btnRemove.forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      let columnName = btn.parentNode.querySelector(".column__header-name")
        .innerHTML;

      let confVar = confirm(`Вы уверены удалить колонку? ${columnName}`);
      confVar ? btn.parentElement.parentElement.remove() : false;
      let column = document.querySelectorAll(".column");
      let display = document.querySelector(".display__content");

      if (column.length <= 4) {
        display.style.overflowX = "hidden";
      }
    };
  });
}
removeColumn();

function dragAndDrop() {
  let cells = document.querySelectorAll(".cell");
  let dropzones = document.querySelectorAll(".column__body");

  cells.forEach((cell) => {
    cell.draggable = true;
    cell.addEventListener("dragstart", dragstart);
    cell.addEventListener("dragend", dragend);
  });

  function dragstart() {
    dropzones.forEach((dropzone) => dropzone.classList.add("scope"));
    this.classList.add("selected");
  }

  function dragend() {
    dropzones.forEach((dropzone) => dropzone.classList.remove("scope"));
    this.classList.remove("selected");
    this.classList.remove("over");
  }

  dropzones.forEach((dropzone) => {
    dropzone.addEventListener("dragenter", dragenter);
    dropzone.addEventListener("dragover", dragover);
    dropzone.addEventListener("dragleave", dragleave);
    dropzone.addEventListener("drop", drop);
  });

  function dragenter() {}

  function dragover() {
    this.classList.add("over");
    const cellBeingDragged = document.querySelector(".selected");

    this.appendChild(cellBeingDragged);
  }

  function dragleave() {
    this.classList.remove("over");
  }

  function drop() {
    this.classList.remove("over");
  }
}
dragAndDrop();

function editColumns() {
  let btnEdit = document.querySelectorAll(".column__header-edit");
  btnEdit.forEach((item) => {
    item.addEventListener("click", () => {
      let name = item.parentNode.querySelector(".column__header-name");
      result = prompt("Редактировать имя стобца", name.innerHTML);
      let resName = result;
      name === resName ? null : (name.innerHTML = resName);
    });
  });
}
editColumns();
