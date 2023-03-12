var preload = document.getElementById("preload");
    window.addEventListener('load',function(){
        preload.style.display = "none";
})

window.onbeforeunload = function(){
  document.documentElement.scrollTop = 0;  //ie下
  document.body.scrollTop = 0;  //非ie
}

let boxes = document.querySelectorAll(".ahhwe");

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  console.log(window.innerHeight);
  let triggerBottom = window.innerHeight * 0.8;
  boxes.forEach((ahhwe) => {
    let boxTop = ahhwe.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      ahhwe.classList.add("ani");
    } else {
      ahhwe.classList.remove("ani");
    }
  });
}