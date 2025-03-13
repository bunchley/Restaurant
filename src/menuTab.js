import sideMenuImg from "./img/SideMenu.jpg";
import chickenMenuImg from "./img/ChickenMenu.jpg";
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
  // title.innerHTML = "Arrogant Chicken Grub";
  menuBlock.appendChild(title);

  let chickenMenu = document.createElement("img");
  chickenMenu.className = "chicken menu";
  chickenMenu.src = chickenMenuImg;
  menuBlock.appendChild(chickenMenu);

  let sideMenu = document.createElement("img");
  sideMenu.className = "side menu";
  sideMenu.src = sideMenuImg;
  menuBlock.appendChild(sideMenu);
};
export { menuTab };
