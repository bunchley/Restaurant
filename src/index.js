import mainLoader from "./pageLoad";
// var menuDisplay = require("./menuTab");
const { menuTab } = require("./menuTab.js");
// import createHnLTable from "./hours&LocTab";

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab.classList.contains("menu")) {
      console.log("creating menu ");
      menuTab();
    }
  });
});
