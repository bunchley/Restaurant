"use strict";
const contentBlock = document.getElementById("content");
import chickenLogo from "./img/logo.png";
const mainLoader = (() => {
  // document.body.style.backgroundImage = "url(../img/grizzly.png)";

  // let title = document.createElement("div");
  // title.innerHTML = "Chick Fiesta";
  // title.className = "title";
  // contentBlock.appendChild(title);

  let logo = document.createElement("img");
  logo.className = "logo";
  logo.src = chickenLogo;
  contentBlock.appendChild(logo);

  let tabBox = document.createElement("div");
  tabBox.className = "topNav";
  contentBlock.appendChild(tabBox);

  let tabHome = document.createElement("a");
  tabHome.classList = "tablinks home";
  tabHome.href = "#home";
  tabHome.innerHTML = "Home";
  tabBox.appendChild(tabHome);

  let tabAbout = document.createElement("a");
  tabAbout.classList = "tablinks about";
  tabAbout.href = "#about";
  tabAbout.innerHTML = "About";
  tabBox.appendChild(tabAbout);

  let tabMenu = document.createElement("a");
  tabMenu.classList = "tablinks menu";
  tabMenu.href = "#menu";
  tabMenu.innerHTML = "Menu";
  tabBox.appendChild(tabMenu);

  let tabContact = document.createElement("a");
  tabContact.classList = "tablinks contact";
  tabContact.href = "#Contact";
  tabContact.innerHTML = "Contact";
  tabBox.appendChild(tabContact);
})();

export { mainLoader };
