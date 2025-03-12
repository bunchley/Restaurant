import foodTruckImage from "./img/foodTruck.jpg";
const home = function () {
  console.log("home");
  const contentBlock = document.getElementById("content");

  let aboutBlock = document.createElement("div");
  aboutBlock.classList = "home tabContent";
  contentBlock.appendChild(aboutBlock);

  let title = document.createElement("h2");
  title.className = "about title";
  title.innerHTML = "Chicken is Home";
  aboutBlock.appendChild(title);

  //   let aboutPara = document.createElement("div");
  //   aboutPara.className = "about paragraph body";
  //   aboutPara.innerHTML = "";
  //   aboutBlock.appendChild(aboutPara);

  let logo = document.createElement("img");
  logo.className = "logo";
  logo.src = foodTruckImage;
  aboutBlock.appendChild(logo);
};

module.exports = { home: home };
