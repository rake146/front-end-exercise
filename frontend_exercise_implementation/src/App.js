import React from 'react';
import './App.css';

let inputObject = {
  "title": 'Pets in Cambridge',
  "data": {
    "cat": 55,
    "dog": 14,
    "lizard": 37, // There are a lot of Liz lovers in Cambridge. :D
    "elephant": 3
  }
}

function App() {
  let data = sortObject();

  return (
    <div className="App">
      <header className="App-header">
        <div classStyle="float: right;">
          {createHistogram(data)}
        </div>
      </header>
    </div>
  );
}

function sortObject(){
  let arr = [];

  // generate array from js Obj
  Object.keys(inputObject.data).forEach(function(key){
    arr.push({"key" : key, "value" : inputObject.data[key]});
  });

  // sort values
  arr.sort(function(a, b){ return b.value - a.value;});

  return arr;
}

function createHistogram(arr){
  let histogram = [];

  // calculate widths;
  let longestWidth = 200;
  let highestValue = arr[0].value;
  let widthArr = [];

  for(let i = 0; i < arr.length; i++){
    widthArr.push((arr[i].value / highestValue));
  }

  for (let i = 0; i < arr.length; i++){
    let divStyle = {
      width: widthArr[i] * longestWidth + 'px'
    };
    histogram.push(
      <span>
        {arr[i].key} {arr[i].value}
        <div className="bar" style={divStyle}></div><br></br>
      </span>
    );
  }

  return histogram;
}

export default App;
