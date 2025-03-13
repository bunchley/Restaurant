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
    "Arrogant Chicken began as a food truck and a Chick. Now we are a brick and mortar shop in North Denver, not much has changed. <br><br>Arrogant Chicken now has some superstar peers and they continue to focus on ingredients and people. ";
  aboutBlock.appendChild(aboutPara);
};

export { backstory };
