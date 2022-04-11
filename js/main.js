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
        <img src="images/arrow-prev.svg" />
      </button>`,
    nextArrow: `
      <button type="button" class="slick-next">
        <img src="images/arrow-next.svg" />
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
  $(".reviews__wrapp").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    prevArrow: `
      <button type="button" class="slick-prev">
        <img src="images/arrow-prev.svg" />
      </button>`,
    nextArrow: `
      <button type="button" class="slick-next">
        <img src="images/arrow-next.svg" />
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

  $(".menu-burger").on("click", function () {
    $(".menu-burger").toggleClass("_active");
    $(".menu__list").toggleClass("_active");
  });

  $(".notification__form").delay(5000).hide(300);
});

let headerParalax = document.querySelectorAll(".bg-paralax");

this.addEventListener("scroll", function () {
  for (paralax of headerParalax) {
    paralax.style.top = +this.pageYOffset + "px";
  }
});

const sityBtn = document.querySelectorAll(".sity");
const sityMap = document.querySelectorAll(".map");
const sityInfo = document.querySelectorAll(".location__info-item ");

sityBtn.forEach(function (elem) {
  elem.addEventListener("click", activeBtn);
});

function activeBtn() {
  sityBtn.forEach(function (elem) {
    elem.classList.remove("_active");
  });
  this.classList.add("_active");

  let activeSityMap = this.getAttribute("data-map");
  let activeSityInfo = this.getAttribute("data-info");

  activeInfo(activeSityInfo);
}

function activeInfo(activeSityInfo) {
  sityInfo.forEach(function (item) {
    if (item.classList.contains(activeSityInfo)) {
      item.classList.add("_active");
    } else {
      item.classList.remove("_active");
    }
  });
  sityMap.forEach(function (item) {
    if (item.classList.contains(activeSityInfo)) {
      item.classList.add("_active");
    } else {
      item.classList.remove("_active");
    }
  });
}
