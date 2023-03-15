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
        const mouseY = e.clientY;
        const mouseX = e.clientX;
        cursor.style.transform = `translate3d(${mouseX-50}px, ${mouseY-50}px, 0)`;
    }

window.addEventListener('mousemove', positionElement)
