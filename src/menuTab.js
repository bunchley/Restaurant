"use strict";
const menuTab = function () {
  const contentBlock = document.getElementById("content");

  let menuBlock = document.createElement("div");
  menuBlock.className = "menu tabContent";
  contentBlock.appendChild(menuBlock);

  let container = document.createElement("div");
  container.className = "menuContainer";
  menuBlock.appendChild(container);

  let title = document.createElement("h2");
  title.className = "subHeadText";
  title.innerHTML = "Menu";
  menuBlock.appendChild(title);

  let chickenSandwich = document.createElement("");
};
module.exports = { menuTab: menuTab };
