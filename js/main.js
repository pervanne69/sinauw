"use strict";

var body = document.body,
    animationItems = document.querySelectorAll("._animation-items"),
    animationItemsSecond = document.querySelectorAll("._animation-items-second"),
    videoIframes = ['<iframe width="560" height="315" src="https://www.youtube.com/embed/tRpoI6vkqLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="560" height="315" src="https://www.youtube.com/embed/5sffVBeaOeY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="560" height="315" src="https://www.youtube.com/embed/qz0aGYrrlhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: !0,
  centeredSlides: !0,
  slidesPerView: "auto",
  initialSlide: 1,
  speed: 500,
  roundLengths: !0,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: !0
  },
  pagination: {
    el: ".swiper-pagination"
  }
});

if ($(document).ready(function () {
  var e = $(".courses__main-button");
  $(".courses__item").each(function () {
    $(this).hover(function () {
      e.css({
        "margin-top": "80px"
      });
    }, function () {
      e.css({
        "margin-top": "137px"
      });
    });
  });
}), animationItems.length > 0) {
  var _animationOnScroll = function _animationOnScroll() {
    for (var e = 0; e < animationItems.length; e++) {
      var r = animationItems[e],
          t = r.offsetHeight,
          o = offset(r).top,
          i = 1.5;
      var a = window.innerHeight - t / i;
      t > window.innerHeight && (a = window.innerHeight - window.innerHeight / i), scrollY > o - a && scrollY < o + t ? (r.classList.add("_active"), r.classList.add("stop-counting")) : r.classList.remove("_active");
    }

    if (animationItemsSecond.length > 0) for (var _e = 0; _e < animationItemsSecond.length; _e++) {
      var _r = animationItemsSecond[_e],
          _t = _r.offsetHeight,
          _o = offset(_r).top,
          _i = 2;

      var _a = window.innerHeight - _t / _i;

      _t > window.innerHeight && (_a = window.innerHeight - window.innerHeight / _i), scrollY > _o - _a && scrollY < _o + _t ? (_r.classList.add("_active-second"), _r.classList.add("stop-counting")) : _r.classList.remove("_active-second");
    }
  };

  var offset = function offset(e) {
    var r = e.getBoundingClientRect(),
        t = window.scrollY || document.documentElement.scrollLeft,
        o = window.scrollX || document.documentElement.scrollTop;
    return {
      top: r.top + o,
      left: r.left + t
    };
  };

  window.addEventListener("wheel", _animationOnScroll), window.addEventListener("scroll", _animationOnScroll);
}

var headerLang = body.querySelector(".header__lang"),
    burgerLogo = body.querySelector(".burger__logo"),
    headerBurger = body.querySelector(".header__burger"),
    burgerItems = body.querySelector(".burger__items"),
    burgerCloseBtn = body.querySelector(".burger__label img");
headerLang.addEventListener("click", function () {
  headerLang.classList.toggle("header__lang-passive"), headerLang.classList.toggle("header__lang-active");
}), burgerLogo.addEventListener("click", function () {
  headerBurger.classList.toggle("header__burger-passive"), headerBurger.classList.toggle("header__burger-active"), headerBurger.classList.contains("header__burger-active") ? body.classList.add("overflow-hidden") : body.classList.remove("overflow-hidden");
}), burgerItems.querySelectorAll("a").forEach(function (e) {
  e.addEventListener("click", function () {
    headerBurger.classList.toggle("header__burger-passive"), headerBurger.classList.toggle("header__burger-active"), headerBurger.classList.contains("header__burger-active") ? body.classList.add("overflow-hidden") : body.classList.remove("overflow-hidden");
  });
}), burgerCloseBtn.addEventListener("click", function () {
  headerBurger.classList.toggle("header__burger-passive"), headerBurger.classList.toggle("header__burger-active"), headerBurger.classList.contains("header__burger-active") ? body.classList.add("overflow-hidden") : body.classList.remove("overflow-hidden");
}), setTimeout(animationOnScroll, 500);