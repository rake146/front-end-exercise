var jsf = require('json-schema-faker');
var mockDataSchema = require('./mockDataSchema');
var fs = require('fs');

var json = JSON.stringify(jsf(mockDataSchema));

fs.writeFile("./src/db.json", json, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.");
  }
});