console.log("webpacking right meow");
console.log("other stuff");
import headerLoader from "./pageLoad";
import createMenu from "./menuTab";
import createHnLTable from "./hours&LocTab";

let menuTab = document.querySelector(".menu");
let hnLTab = document.querySelector(".HnL");
let backstoryTab = document.querySelector(".backstory");

hnLTab.addEventListener("click", createHnLTable);
menuTab.addEventListener("click", createMenu);
backstoryTab.addEventListener("click", headerLoader);
