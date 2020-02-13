"use strict";
const contentBlock = document.getElementById("content");
const body = document.getElementsByName("body");
const headerLoader = (() => {
  //   var img = document.createElement("img");
  //   img.src = "../img/grizzly.png";

  //   img.setAttribute("class", "header img");
  //   img.innerHTMl = "Image Element Added.";
  //   body.appendChild(img);

  document.body.style.backgroundImage = "url(../img/grizzly.png)";

  let title = document.createElement("div");
  title.innerHTML = "Grizzly's Bar & Grill";
  title.className = "title";
  contentBlock.appendChild(title);

  let tabBox = document.createElement("div");
  tabBox.className = "tabBox";
  contentBlock.appendChild(tabBox);

  let tabButton1 = document.createElement("button");
  tabButton1.className = "backstory tab 1";
  tabButton1.innerHTML = "Backstory";
  tabBox.appendChild(tabButton1);

  let tabButton2 = document.createElement("button");
  tabButton2.className = "menu tab 2";
  tabButton2.innerHTML = "Menu";
  tabBox.appendChild(tabButton2);

  let tabButton3 = document.createElement("button");
  tabButton3.className = "HnL tab 3";
  tabButton3.innerHTML = "Hours & Location";
  tabBox.appendChild(tabButton3);

  let description = document.createElement("div");
  description.className = "subHeadText";
  description.innerHTML =
    "Do you have a Rauring hunger? Have you stepped out of hybernation? If so, this place if for you.";
  contentBlock.appendChild(description);
})();

module.exports = {
  headerLoader
};
