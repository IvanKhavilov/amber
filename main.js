$(document).ready(function () {
  $(".header__slider-inner").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });
  $(".sentence__slider").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    prevArrow: `
      <button type="button" class="slick-prev">
        <img src="../images/arrow-prev.svg" />
      </button>`,
    nextArrow: `
      <button type="button" class="slick-next">
        <img src="../images/arrow-next.svg" />
      </button>`,
    responsive: [
      {
        breakpoint: 805,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".feedback__wrapp").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    prevArrow: `
      <button type="button" class="slick-prev">
        <img src="../images/arrow-prev.svg" />
      </button>`,
    nextArrow: `
      <button type="button" class="slick-next">
        <img src="../images/arrow-next.svg" />
      </button>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".slick-dots").wrap("<div class='slick-dots__wrap'></div>");

  $(".covid-info__close").on("click", function () {
    $(".covid-info").css("display", "none");
  });

  $(".covid-info").show();

  $(".menu-burger").on("click", function () {
    $(".menu-burger").toggleClass("_active");
    $(".menu__list").toggleClass("_active");
  });
});

let headerParalax = document.querySelectorAll(".bg-paralax");

this.addEventListener("scroll", function () {
  for (paralax of headerParalax) {
    paralax.style.top = +this.pageYOffset + "px";
  }
});
