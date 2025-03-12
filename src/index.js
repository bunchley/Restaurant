import mainLoader from "./pageLoad";
// var menuDisplay = require("./menuTab");
const { menuTab } = require("./menuTab.js");
const { backstory } = require("./aboutTab.js");
const { createHnLTable } = require("./contactTab");
const { home } = require("./home.js");

home();
document.querySelectorAll(".tablinks").forEach((tab) => {
  tab.addEventListener("click", () => {
    //get all elements with class and hide them
    let tabContent = document.getElementsByClassName("tabContent");
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    //get all elements with "active" and remove
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    //show current tab and add "active" class
    tab.classList.add("active");
    if (tab.classList.contains("menu")) {
      menuTab();
    }
    if (tab.classList.contains("about")) {
      backstory();
    }
    if (tab.classList.contains("contact")) {
      createHnLTable();
    }
    if (tab.classList.contains("home")) {
      home();
    }
  });
});
