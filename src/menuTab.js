"use strict";
const menuTab = function() {
  console.log("well i am here but something is weird");
  var create = function() {
    // const contentBlock = document.getElementById("content");
    // let container = document.createElement("div");
    // container.className = "container";
    // contentBlock.appendChild(container);

    // let title = document.createElement("h2");
    // title.className = "subHeadText";
    // title.innerHTML = "Menu";
    console.log("menu has been created. alegedley");
  };
  return {
    create: create
  };
};
export default menuTab;
