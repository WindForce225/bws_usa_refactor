$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        inifnite: true,
        autoplay: true,
        autoplaySpeed: 30000,
    });

    $('.slider-review').slick({
        arrows: false,
        dots: true,
        inifnite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    })

    $('.slider-clients').slick({
        arrows: false,
        dots: true,
        inifnite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
                breakpoint: 1080,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    })

    $('.aritcle-slider').slick({
        arrows: true,
        dots: false,
        inifnite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        // responsive: [{
        //         breakpoint: 1080,
        //         settings: {
        //             slidesToShow: 5,
        //             slidesToScroll: 5,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 900,
        //         settings: {
        //             slidesToShow: 4,
        //             slidesToScroll: 4
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3
        //         }
        //     },
        //     {
        //         breakpoint: 414,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 370,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }

        // ]
    })

    // Скрипт для часов в футере -------------------------------------------------------------
    setInterval(function () {
        var hours = new Date().getUTCHours() + 7;
        var mins = new Date().getUTCMinutes();
        var hdegree = hours * 30 + mins / 2;
        var hrotate = "rotate(" + hdegree + "deg)";
        $("#hour").css({
            "-moz-transform": hrotate,
            "-webkit-transform": hrotate,
        });
    }, 1000);

    setInterval(function () {
        var mins = new Date().getUTCMinutes();
        var mdegree = mins * 6;
        var mrotate = "rotate(" + mdegree + "deg)";

        $("#min").css({
            "-moz-transform": mrotate,
            "-webkit-transform": mrotate,
        });
    }, 1000);

    setInterval(function () {
        var hours = new Date().getUTCHours() - 8;
        var mins = new Date().getUTCMinutes();
        var hdegree = hours * 30 + mins / 2;
        var hrotate = "rotate(" + hdegree + "deg)";

        $("#hour2").css({
            "-moz-transform": hrotate,
            "-webkit-transform": hrotate,
        });
    }, 1000);

    setInterval(function () {
        var mins = new Date().getMinutes();
        var mdegree = mins * 6;
        var mrotate = "rotate(" + mdegree + "deg)";

        $("#min2").css({
            "-moz-transform": mrotate,
            "-webkit-transform": mrotate,
        });
    }, 1000);
});



// Аккордеон 
$('.item__trigger').click(function () {
    $(this).next('.item__content').slideToggle()
    $(this).parent('.accordion__item').toggleClass('trigger-active')
});
$('.tabs--item').click(function () {
    $('.tabs--item').removeClass('is-active');
    $(this).toggleClass('is-active');
    let currentClass = $(this).attr("class").slice(15, 16);
    $('.questions--accordion').removeClass('tab-content-active');
    $('.tab-content-' + currentClass).addClass('tab-content-active')
});


$('.portfolio__tab').click(function () {
    $('.portfolio__tab').removeClass('is-active');
    $(this).toggleClass('is-active');
    let currentClassPortfolio = $(this).attr("class").slice(26, 27);
    $('.main__portfolio--block').removeClass('main__portfolio--is-active');
    $('.portfolio__tab-content-' + currentClassPortfolio).addClass('main__portfolio--is-active')
    console.log(currentClassPortfolio)
});

// Модалка на странице команды
$('.popup-open').click(function () {
    $(this).next('.item__popup').fadeIn();
})

//Страница портфолио
$(".portfolio_card").hover(function () {
    $(this).parent().find(".content_portfolio_card").toggleClass("active");
});


// Кнопка управления запуском видео
var controls = {
    video: $("#myvideo"),
    playpause: $("#playpause"),
};
var video = controls.video[0];
controls.playpause.click(function () {
    if (video.paused) {
        video.play();
        document.getElementById("playpause").style.opacity = "0";
    } else {
        video.pause();
        document.getElementById("playpause").style.opacity = "1";
    }

    $(this).toggleClass("paused");
});