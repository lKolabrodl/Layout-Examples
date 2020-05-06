$(document).ready(function() {

  $('.popup_begin').magnificPopup({
    items: {
      src: '#popup_begin'
    },
    type: 'inline',
    // callbacks: {
    //   beforeOpen: function() {
    //     this.st.mainClass = 'animated bounceIn';
    //   }
    // },
  });

  // Маска для Телефона
  $(".mask_phone").inputmask({
    mask: "+\\9\\92 (999) 999-99-99",
    placeholder: "_",
    showMaskOnFocus: true, // Включаем маску номера при фокусе
    showMaskOnHover: false, // Выключаем маску номера при наведении
  });

  // $('#reviews-carousel').carousel({
  //   interval: 2000
  // })
  // let slider = $('.reviews-carousel');
  // slider.owlCarousel({
  //   loop: true,
  //   animateOut: 'fadeOut',
  //   slideSpeed: 5000,
  //   autoplayTimeout: 5000,
  //   dots: true,
  //   nav: false,
  //   autoplay: false,
  //   items: 2,
  //   margin:20,
  //   responsive:{
  //     0:{
  //       items:1
  //     },
  //     1000:{
  //       items:2
  //     }
  //   }
  // });

});

// var menuButton = document.querySelector(".menu__button");
// var mobileMenu =document.querySelector(".mobile__header");
// menuButton.addEventListener('click',function(){
// if(mobileMenu.style.display=="block"){mobileMenu.style.display="none";}
// else {mobileMenu.style.display="block";}
// })


// изменения 19.09.2019

$('#mobile__header').hide();

$('#menu__button').click(function () {
  $('#mobile__header').slideToggle();
});

// ПРОКРУТКА ПЛАВНАЯ ЯКОРЯ от #NAME до  id="NAME"
$(".menu__nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

$("#slick-slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
$("#slick-slider-two").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
$(".ministry-container-slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
});
$("section.ministry .wrapper .ministry-container-slider .ministry-item").css('display','flex');
$(".benefits-container").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    variableWidth: true,
});
$("section.benefits .wrapper .benefits-container .benefits-item").css('display','flex');
$("section.benefits .wrapper .benefits-container .benefits-item").css('width','320px');

$(".news-slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,

});

//fancybox

// $('.memo_big').fancybox();
// $('.memo_big_slider').fancybox({
//     'padding': '20'
// });

