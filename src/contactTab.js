const contentBlock = document.getElementById("content");

const createHnLTable = function () {
  let contactContainer = document.createElement("div");
  contactContainer.className = "contact tabContent";
  contentBlock.appendChild(contactContainer);

  let title = document.createElement("h2");
  title.className = "subHeadText";
  title.innerHTML = "Location";
  contactContainer.appendChild(title);

  let address = document.createElement("h3");
  address.className = "body";
  address.innerHTML = "Denver, CO";
  contactContainer.appendChild(address);

  let hoursTitle = document.createElement("h2");
  hoursTitle.className = "subHeadText";
  hoursTitle.innerHTML = "Hours";
  contactContainer.appendChild(hoursTitle);

  let storeDays = document.createElement("h3");
  storeDays.className = "body";
  storeDays.innerHTML = "Monday - Saturday";
  contactContainer.appendChild(storeDays);

  let storeHours = document.createElement("h3");
  storeHours.className = "body";
  storeHours.innerHTML = "9am - 10pm";
  contactContainer.appendChild(storeHours);
};

module.exports = {
  createHnLTable: createHnLTable,
};
