let memoirEntries = [];
function addEntry(title, date, location, description) {
  memoirEntries.push({
    title: title,
    date: date,
    location: location,
    description: description
  });
}
function displayEntries() {
  // Select the HTML element where the entries will be displayed
  let entriesContainer = document.querySelector("#memoir-entries");

  // Clear the container before adding the entries
  entriesContainer.innerHTML = "";

  // Loop through each entry in the array and create an HTML element for it
  memoirEntries.forEach(function(entry) {
    // Create a div to hold the entry
    let entryDiv = document.createElement("div");
    entryDiv.classList.add("entry");

    // Create HTML elements for the title, date, location, and description of the entry
    let titleElement = document.createElement("h2");
    titleElement.textContent = entry.title;
    let dateElement = document.createElement("p");
    dateElement.textContent = entry.date;
    let locationElement = document.createElement("p");
    locationElement.textContent = entry.location;
    let descriptionElement = document.createElement("p");
    descriptionElement.textContent = entry.description;

    // Add the HTML elements to the entry div
    entryDiv.appendChild(titleElement);
    entryDiv.appendChild(dateElement);
    entryDiv.appendChild(locationElement);
    entryDiv.appendChild(descriptionElement);

    // Add the entry div to the container
    entriesContainer.appendChild(entryDiv);
  });
}

// Call the displayEntries function to initially display any existing entries
displayEntries();

// Add event listeners to the form to add new entries when submitted
let form = document.querySelector("#memoir-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let title = event.target.elements["title"].value;
  let date = event.target.elements["date"].value;
  let location = event.target.elements["location"].value;
  let description = event.target.elements["description"].value;
  addEntry(title, date, location, description);
  displayEntries();
  form.reset();
});