//-- ============================================================================= 
//-- Home Work, Module14-Javascript, d3 
//-- Section:   UFO level 2
//-- Date:      8-8-2022 
//-- ============================================================================= 

// 1. Setup/get data =======================================================
// Load data source from data.js into a constant
const tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// Loop Through `data` and log each UFO sighting 
data.forEach(function(ufoSighting) {
  console.log(ufoSighting);
});

// 2. Define functions ==================================================
// Populate/display table body using the parameter data
function populateTbody(paramData){
    paramData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });      
}

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input elements and get the raw HTML nodes
  var inputElement = d3.select("#datetime");
  var inputDate = inputElement.property("value");
  
  inputElement = d3.select("#citycode");
  var inputCity = inputElement.property("value");
  inputCity = inputCity.toLowerCase();
  
  inputElement = d3.select("#statecode");
  var inputState = inputElement.property("value");
  inputState = inputState.toLowerCase();
  
  inputElement = d3.select("#countrycode");
  var inputCountry = inputElement.property("value");
  inputCountry = inputCountry.toLowerCase();
  
  inputElement = d3.select("#shape");
  var inputShape = inputElement.property("value");
  inputShape = inputShape.toLowerCase();

  // Check and filter inputdata
  var filteredData = tableData;   // If no input entered, all UFO sightings will display  
  if (inputDate != "") {
      filteredData = filteredData.filter(ufoObject => ufoObject.datetime === inputDate);
      }

  if (inputCity != "") {
      filteredData = filteredData.filter(ufoObject => ufoObject.city === inputCity);
      } 
  
  if (inputState != "") {
      filteredData = filteredData.filter(ufoObject => ufoObject.state === inputState);
      } 
  
  if (inputCountry != "") {
      filteredData = filteredData.filter(ufoObject => ufoObject.country === inputCountry);
      } 

  if (inputShape != "") {
      filteredData = filteredData.filter(ufoObject => ufoObject.shape === inputShape);
      } 
        
  console.log('input date: ' + inputDate);  
  console.log('input city: ' + inputCity);       
  console.log('input state: ' + inputState);  
  console.log('input country: ' + inputCountry);         
  console.log('input shape: ' + inputShape);  
  console.log(filteredData);  

  // Clear tbody display before populating  
  tbody.html("");
  populateTbody(filteredData);
}

// 3. Event handlers and logic flows =========================================
//
// Select the button using its id
var button = d3.select("#filter-btn");

// Create event handler 
button.on("click", runEnter);

// When js script first time called, display all UFO sightings by default
populateTbody(tableData);