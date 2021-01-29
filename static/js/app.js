// from data.js
var tableData = data;

// select tbody from html
var tbody = d3.select("tbody");
tbody.html("");
// iterate info from data
console.log(tableData)

// Loop through array of objects then each object
tableData.forEach((ufo) => {

// add a row for each object inside tbody
var trow = tbody.append("tr");

 // Get the entries for each object in the array
 Object.entries(ufo).forEach(([key, value]) => {
    // Log the key and value
    var tdata = trow.append("td");
    tdata.text(value);


// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputElement = d3.select("#datetime");
// var inputField = d3.select("#input-field");

// // Select the button
// var button = d3.select("#filter-btn");

// // Select the form
var form = d3.select("#form-groups");

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

// // Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

  

  });
});




  

// YOUR CODE HERE!
