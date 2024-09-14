/** @format */
// ! Yearly Target Progress Bar Fill When Appear
const skills = document.querySelector(".yearly-target .prog");
const allSkills = document.querySelectorAll(".prog .details .progress span");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skills.offsetTop) {
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.prog;
    });
  } else {
    allSkills.forEach((skill) => {
      skill.style.width = "0";
    });
  }
});

// ! start count Of Tickets Statistics
let stats = document.getElementById("statistics");
let number = document.querySelectorAll(".row .box span");
let start = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= stats.offsetTop - 150) {
    if (!start) {
      number.forEach((num) => startCount(num));
    }
    start = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// ! Make a PopUp To A Lastest News Photos.
let img = document.querySelectorAll(".news .data .item img");
img.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    let div = document.createElement("div");
    div.className = "popup-overlay";

    let popUp = document.createElement("div");
    popUp.className = "popUp";

    let popUpImg = document.createElement("img");
    popUpImg.src = ele.src;

    div.addEventListener("click", function () {
      popUp.remove();
      div.remove();
    });

    document.body.appendChild(popUp);
    document.body.appendChild(div);
    popUp.appendChild(popUpImg);
  });
});
