// used in london.html

var london = {
  name: "London",
  population: 8308369,
  tallestBuilding: {
     name:  "Shard",
     height: "310m"
  },
  numberOfUniversities: 43,
  averageRent: 1106,
  dailyTubePassengerJourney: 3500000,
  olympics: [ 1908, 1948, 2012]
}

function displayPopulation() {
  var population = document.createElement("p");
  var content = document.createTextNode("Population: " + london.population);
  population.appendChild(content);
  document.body.appendChild(population);
}

function displayAverageRent() {
  var averageRentElement = document.createElement("p");
  var averageRentContent = document.createTextNode("Average Rent: " + london.averageRent);
  averageRentElement.appendChild(averageRentContent);
  document.body.appendChild(averageRentElement);
}

function displayTallestBuilding() {
  var tallestBuildingElement = document.createElement("p");
  var tallestBuildingContent = document.createTextNode("Tallest Building: " + london.tallestBuilding.name + "(" + london.tallestBuilding.height + ")" );
  tallestBuildingElement.appendChild(tallestBuildingContent);
  document.body.appendChild(tallestBuildingElement);
}

function displayAllInformation() {
  displayPopulation();
  displayAverageRent();
  displayTallestBuilding();
}


function listDomElements() {
  var children = document.body.childNodes;
  for(var i=0; i <  children.length; i++) {
    console.log(children[i]);
  }
}

