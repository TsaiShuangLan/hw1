/*preload page*/
var preload = document.getElementById("preload");
    window.addEventListener('load',function(){
        preload.style.display = "none";
})

window.onbeforeunload = function(){
  document.documentElement.scrollTop = 0;  //ie下
  document.body.scrollTop = 0;  //非ie
}

/* ahwe animation*/
let boxes = document.querySelectorAll(".ahhwe");

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  console.log(window.innerHeight);
  let triggerBottom = window.innerHeight * 0.7;
  boxes.forEach((ahhwe) => {
    let boxTop = ahhwe.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      ahhwe.classList.add("ani");
    } else {
      ahhwe.classList.remove("ani");
    }
  });
}

/*number animation */
let boxes1 = document.querySelectorAll(".number");

window.addEventListener("scroll", shownumber);
shownumber();

function shownumber() {
  console.log(window.innerHeight);
  let triggerBottom1 = window.innerHeight * 0.6;
  boxes1.forEach((number) => {
    let boxTop1 = number.getBoundingClientRect().top;
    if (boxTop1 < triggerBottom1) {
      number.classList.add("ani");
    } else {
      number.classList.remove("ani");
    }
  });
}

/* cursor*/
const cursor = document.getElementById("cursor");
    const positionElement = (e)=> {
        const mouseY = e.clientY+window.scrollY;
        const mouseX = e.clientX+window.scrollX;
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }

window.addEventListener('mousemove', positionElement)

/*word animation */
let boxes2 = document.querySelectorAll(".text");

window.addEventListener("scroll", showword);
showword();

function showword() {
  console.log(window.innerHeight);
  let triggerBottom2 = window.innerHeight * 0.8;
  boxes2.forEach((text) => {
    let boxTop2 = text.getBoundingClientRect().top;
    if (boxTop2 < triggerBottom2) {
      text.classList.add("ani");
    } else {
      text.classList.remove("ani");
    }
  });
}

/*left animation */
let boxes3 = document.querySelectorAll(".leftline");

window.addEventListener("scroll", showleft);
showleft();

function showleft() {
  console.log(window.innerHeight);
  let triggerBottom3 = window.innerHeight * 0.8;
  boxes3.forEach((leftline) => {
    let boxTop3 = leftline.getBoundingClientRect().top;
    if (boxTop3 < triggerBottom3) {
      leftline.classList.add("ani");
    } else {
      leftline.classList.remove("ani");
    }
  });
}

/*right animation */
let boxes4 = document.querySelectorAll(".rightline");

window.addEventListener("scroll", showright);
showright();

function showright() {
  console.log(window.innerHeight);
  let triggerBottom4 = window.innerHeight * 1.2;
  boxes4.forEach((rightline) => {
    let boxTop4 = rightline.getBoundingClientRect().top;
    if (boxTop4 < triggerBottom4) {
      rightline.classList.add("ani");
    } else {
      rightline.classList.remove("ani");
    }
  });
}
