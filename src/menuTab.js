function createMenu() {
  const contentBlock = document.getElementById("content");
  let container = document.createElement("div");
  container.className = "container";
  contentBlock.appendChild(container);

  let title = document.createElement("h2");
  title.className = "subHeadText";
  title.innerHTML = "Menu";
}
module.exports = {
  createMenu
};
