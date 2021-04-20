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
var repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            })

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat();


// Search Bar - PAGE RECETTES
let suggestions = [
"Carpaccio de tomates et burrata", "Quiche Saumon Brocolis", "Muhammara", "Brochettes de Légumes"];

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

inputBox.onkeyup = (e)=>{
  let userData = e.target.value; 
  let emptyArray = [];
  if(userData){
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