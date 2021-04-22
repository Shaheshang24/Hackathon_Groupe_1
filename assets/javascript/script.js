// ----- BurgerMenu -----
let burgerMenu = document.getElementById("burger");
let topElement = document.getElementById("spantop");
let centerElement = document.getElementById("spancenter");
let botElement = document.getElementById("spanbot");
let menuElements = document.getElementById("menu");
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