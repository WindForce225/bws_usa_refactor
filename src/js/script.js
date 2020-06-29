@ @include('webp.js')

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

// анимация кнопки отправки формы
let button = document.querySelector('.button');
let buttonText = document.querySelector('.tick');

const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Submit";

button.addEventListener('click', function () {

  if (buttonText.innerHTML !== "Submit") {
    buttonText.innerHTML = "Submit";
  } else if (buttonText.innerHTML === "Submit") {
    buttonText.innerHTML = tickMark;
  }
  this.classList.toggle('button__circle');
});