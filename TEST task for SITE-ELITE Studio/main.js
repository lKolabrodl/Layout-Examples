function modalOpen() {
  try {
    let btnModal = document.querySelector("a.popap");
    let modalWindow = document.querySelector("#modal");
    let closeModal = document.querySelector("#close-button");
    let modalOverlay = document.querySelector(".modal-overlay");

    btnModal.addEventListener("click", (e) => {
      e.preventDefault();
      modalWindow.classList.add("active");
    });

    closeModal.addEventListener("click", (e) => {
      e.preventDefault();
      modalWindow.classList.remove("active");
    });

    window.onclick = function (e) {
      if (e.target == modalOverlay) {
        modalWindow.classList.remove("active");
      }
    };

    window.addEventListener(
      "keydown",
      function (e) {
        if (e.keyCode == 27) {
          modalWindow.classList.remove("active");
        }
      },
      true
    );
  } catch (err) {
    console.log(`ошибка в фу-ии modalOpen, ${err}`);
  }
}
modalOpen();

function mobileMenu() {
  let btn = document.querySelector(".aside__toggle.mobile");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.classList.toggle("active");
  });
}
mobileMenu();

function formSumbit() {
  let form = document.querySelector("form.modal-form");
  var data = $(".modal-form").serialize();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    $.ajax({
      url: "./mail/phpmailer/send.php",
      type: "POST",
      data: data,
      success: function (msg) {
        if (msg == "ok") {
          alert("Отправлено");
        } else {
          alert("Ошибка");
        }
      },
      error: function (data) {
        console.log("An error occurred.");
      },
    });
  });
}
formSumbit();

//jquery

$("#my-menu").mmenu({
  navbar: {
    title: "основное меню сайта",
  },
});

let API = $("#my-menu").data("mmenu");

$("#burger").click(function () {
  API.open();
});
$("#burger").click(function () {
  API.close();
});

$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  startPosition: 1,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    568: {
      items: 1,
      dots: true,
    },
    992: {
      items: 1,
      dots: true,
    },
    1440: {
      items: 1,
      dots: true,
    },
  },
});
