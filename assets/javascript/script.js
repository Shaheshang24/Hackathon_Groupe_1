// ----- BurgerMenu -----
let burgerMenu = document.getElementById("burger");
let topElement = document.getElementById("spantop");
let centerElement = document.getElementById("spancenter");
let botElement = document.getElementById("spanbot");
let menuElements = document.getElementById("nav");
let homeButton = document.getElementById("homebutton");
let homeMenu = document.getElementById("homemenu");
console.log(homeMenu);

burgerMenu.addEventListener("click", () => {
  topElement.classList.toggle("spantopclose");
  centerElement.classList.toggle("spancenterclose");
  botElement.classList.toggle("spanbotclose");
  topElement.classList.toggle("spantopopen");
  centerElement.classList.toggle("spancenteropen");
  botElement.classList.toggle("spanbotopen");
  menuElements.classList.toggle("menuopen");
});

// ----- End Burger Menu -----

// ----- Slider product -----

var slidesp = document.querySelectorAll(".slide-product");
var btnsp = document.querySelectorAll(".btn-product");
let currentProduct = 1;

// JavaScript for slider manual navigation
var manualNav1 = function (manual1) {
  slidesp.forEach((slidep) => {
    slidep.classList.remove("actives");

    btnsp.forEach((btnp) => {
      btnp.classList.remove("actives");
    });
  });
  slidesp[manual1].classList.add("actives");
  btnsp[manual1].classList.add("actives");
};

btnsp.forEach((btnp, i) => {
  btnp.addEventListener("click", () => {
    manualNav1(i);
    currentProduct = i;
  });
});

// JavaScript for slider automatic navigation
var repeat = function (activeClass) {
  let actives = document.getElementsByClassName("actives");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...actives].forEach((activesProduct) => {
        activesProduct.classList.remove("actives");
      });

      slidesp[i].classList.add("actives");
      btnsp[i].classList.add("actives");
      i++;

      if (slidesp.length == i) {
        i = 0;
      }
      if (i >= slidesp.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();

// Slider recipes
var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

// JavaScript for slider manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });
  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// JavaScript for slider automatic navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();

// ----- End Slider product -----

// ----- Producers -----

const gallery = document.querySelector(".gallery");
const getVal = (elem, style) =>
  parseInt(window.getComputedStyle(elem).getPropertyValue(style));
const getHeight = (item) =>
  item.querySelector(".content").getBoundingClientRect().height;

const resizeAll = () => {
  const altura = getVal(gallery, "grid-auto-rows");
  const separacion = getVal(gallery, "grid-row-gap");
  gallery.querySelectorAll(".gallery-item").forEach((item) => {
    item.style.gridRowEnd = `span ${Math.ceil(
      (getHeight(item) + separacion) / (altura + separacion)
    )}`;
  });
};

window.addEventListener("load", resizeAll);
window.addEventListener("resize", resizeAll);

gallery.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", function () {
    gallery.removeChild(item);
  });
});

// ----- End Producers -----
