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
  });
});


  

// YOUR CODE HERE!
