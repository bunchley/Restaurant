import mainLoader from "./pageLoad";
// var menuDisplay = require("./menuTab");
const { menuTab } = require("./menuTab.js");
const { backstory } = require("./backstoryLoad.js");
const { createHnLTable } = require("./hours&LocTab");

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab.classList.contains("menu")) {
      console.log("creating menu ");
      menuTab();
    }
    if (tab.classList.contains("backstory")) {
      backstory();
    }
    if (tab.classList.contains("hnl")) {
      createHnLTable();
      s;
    }
  });
});
