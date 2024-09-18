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
  }, 3000 / goal);
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

// ! Function To Make Posts Change Every 8 Seconds
document.addEventListener("DOMContentLoaded", function () {
  const posts = document.querySelectorAll(".latest-post .data");
  let currentIndex = 0;

  function showPost(index) {
    posts.forEach((post, i) => {
      post.classList.remove("active");
      post.style.display = "none";
    });
    posts[index].classList.add("active");
    posts[index].style.display = "block";
  }

  function startPostCycle() {
    showPost(currentIndex);
    currentIndex = (currentIndex + 1) % posts.length;
    setTimeout(startPostCycle, 8000);
  }

  // * Start the cycle
  startPostCycle();
});

// ! I Spent Two Hours In This Block Of Code And Doesn't Work ^_^
document.addEventListener("DOMContentLoaded", () => {
  let deleteBtns = document.querySelectorAll(".contain-delete");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let item = e.target.closest(".item");
      if (item) {
        item.classList.toggle("done");
      }
    });
  });
});

// ! I Spent Two Hours In This Block Of Code And Doesn't Work ^_^
document.addEventListener("DOMContentLoaded", () => {
  // Get the notification bell and container elements
  let bell = document.querySelector(".notifications");
  let notifContainer = document.getElementById("notif-container");

  // Toggle the visibility of the notification container when the bell is clicked
  bell.addEventListener("click", () => {
    // Toggle visibility
    notifContainer.style.display =
      notifContainer.style.display === "block" ? "none" : "block";
  });

  // Get all list items inside the notification container
  let notifItems = notifContainer.querySelectorAll("li");

  // Add click event listener to each notification item
  notifItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Add the "show" class to the clicked item
      item.classList.add("show");
    });
  });
});

// ! Function to toggle theme and update localStorage
function toggleTheme() {
  // * Elements to toggle dark mode classes
  const elements = [
    ".sidebar",
    ".header",
    ".notif-container",
    ".dashboard",
    ".responsive-table",
    "body",
  ];

  // * Toggle dark mode classes for each element in the array
  elements.forEach((selector) => {
    document.querySelector(selector)?.classList.toggle("dark");
  });

  // * Toggle the icon between moon and sun
  const icon = document.querySelector(".toggle-icon");
  if (icon.classList.contains("fa-moon")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark"); // * Save the theme as "dark"
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "light"); // * Save the theme as "light"
  }
}

// ! Event listener for the dark mode button
document
  .getElementById("darkmode-button")
  .addEventListener("click", toggleTheme);

// * Function to load the saved theme on page load
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const elements = [
    ".sidebar",
    ".header",
    ".notif-container",
    ".dashboard",
    ".responsive-table",
    "body",
  ];

  if (savedTheme === "dark") {
    // * Apply dark theme classes for each element in the array
    elements.forEach((selector) => {
      document.querySelector(selector)?.classList.add("dark");
    });

    // * Set the icon to sun
    const icon = document.querySelector(".toggle-icon");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    // * Ensure no dark classes for each element in the array
    elements.forEach((selector) => {
      document.querySelector(selector)?.classList.remove("dark");
    });

    // * Set the icon to moon
    const icon = document.querySelector(".toggle-icon");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// * Load the saved theme on page load
loadTheme();

// * Load the theme when the page loads
window.addEventListener("load", loadTheme);
