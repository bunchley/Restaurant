const backstory = function () {
  console.log("backstory");
  const contentBlock = document.getElementById("content");

  let aboutBlock = document.createElement("div");
  aboutBlock.classList = "about tabContent";
  contentBlock.appendChild(aboutBlock);

  let title = document.createElement("h2");
  title.className = "about title";
  title.innerHTML = "Backstory - Tulum Inspired Fry Truck";
  aboutBlock.appendChild(title);

  let aboutPara = document.createElement("div");
  aboutPara.className = "about paragraph body";
  aboutPara.innerHTML =
    "Chick Fiesta began as a truck and a Chic. Although we are now a brick and mortar shop in North Denver, not much has changed. Chic now has some superstar peers and they continue to focus on ingredients and people. ";
  aboutBlock.appendChild(aboutPara);
};

module.exports = { backstory: backstory };
