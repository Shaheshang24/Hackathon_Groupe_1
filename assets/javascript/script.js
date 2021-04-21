document.onload = function(){
  document.getElementById('apple').style.display = 'none';
  document.getElementById('page-content').style.display = 'block';
}

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

// ----- Slider recipes -----
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

// ----- End Slider recipes -----


// Search Bar - PAGE RECETTES
let suggestions = [
"Carpaccio de tomates et burrata", "Quiche Saumon Brocolis", "Muhammara", "Brochettes de Légumes"];

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".dropdown");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup = (e)=>{
  let userData = e.target.value; 
  let emptyArray = [];
  if(userData){
    icon.onclick = ()=>{
      webLink = "https://www.google.com/search?q=" + userData;
      linkTag.setAttribute("href", webLink);
      console.log(webLink);
      linkTag.click();
  }
    emptyArray = suggestions.filter((data) =>{
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data)=>{
      return data = '<li>'+ data +'</li>';
    });
    console.log(emptyArray);
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "select(this)");
    }
  }else{
    searchWrapper.classList.remove("active");
  }
}
function select(element) {
  let selectUserData = element.textContent;
  inputBox.value = selectUserData;
}

function showSuggestions(list){
  let listData;
  if(!list.length){
    userValue = inputBox.value;
    listData = '<li>'+ userValue +'</li>';
  }else{
    listData = list.join('');
  }
  suggBox.innerHTML = listData; 
}

// ----- End Page recipes -----