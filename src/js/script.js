@@include('webp.js')

$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        inifnite: true,
        autoplay: true,
        autoplaySpeed: 30000,
    });

    $('.slider-review').slick({
    	arrows:false,
    	dots:true,
    	inifnite:true,
    	autoplay:true,
    	autoplaySpeed:3000,
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