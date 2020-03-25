console.log("webpacking right meow");
console.log("other stuff");
import mainLoader from "./pageLoad";
// var menuDisplay = require("./menuTab");
import menuTab from "./menuTab";
// import createHnLTable from "./hours&LocTab";

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    if (tab.classList.contains("menu")) {
      console.log("creating menu ");
      menuTab.create();
    }
    console.log("here");
  });
});


