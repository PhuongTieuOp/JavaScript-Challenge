//-- ============================================================================= 
//-- Home Work, Module14-Javascript, d3 
//-- Section:   UFO level 1 
//-- Date:      8-8-2022 
//-- ============================================================================= 

// 1. Setup/get data =======================================================
// Load data source from data.js into a constant
const tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// Loop Through `data` and console.log each UFO sighting 
data.forEach(function(ufoSighting) {
  console.log(ufoSighting);
});

// 2. Define functions ==================================================
// Populate/display table body using the given parameters
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
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  var filteredData = tableData;

  // If no input value, display all 
  if (inputValue != "") {
     filteredData = tableData.filter(ufoObject => ufoObject.datetime === inputValue);
  }
  
  console.log('input date: ' + inputValue);
  console.log(filteredData);  

  // Clear tbody display before populating  
  tbody.html("");
  populateTbody(filteredData);
}

// 3. Event handlers and logic flows =========================================
//
// Select the button using its id
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filter-frm");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// When js script first time called, display all UFO sightings by default
populateTbody(tableData);