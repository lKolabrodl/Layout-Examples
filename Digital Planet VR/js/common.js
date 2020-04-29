// ПРОКРУТКА ПЛАВНАЯ ЯКОРЯ от #NAME до  id="NAME"
$(".menu__nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

$('.hide_text').hide();

$('.open-close').click(function () {
    $('.open-close').removeClass('rotate');
    $(this).next('.hide_text').slideToggle('medium', function () {
        if($(this).is(':visible')){
            $(this).prev('.open-close').addClass('rotate');
        }
    });
});

// slick
$('#slick-slider').slick({
    arrows: true,

});

$('.nav__burger').click(function () {
    $('.nav__burger').removeClass('active');
    $('.nav__mobile').slideToggle('medium', function () {
        if($(this).is(':visible')){
            $('.nav__burger').addClass('active');
        }
    });
});
