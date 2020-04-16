const createHnLTable = function () {
  console.log("hnl  tab selected");
  const contentBlock = document.getElementById("content");
  let container = document.createElement("div");
  container.className = "container";
  contentBlock.appendChild(container);

  let title = document.createElement("h2");
  title.className = "subHeadText";
  title.innerHTML = "Hours & Location";
};

module.exports = {
  createHnLTable: createHnLTable,
};
