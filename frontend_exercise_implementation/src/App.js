import React from 'react';
import logo from './logo.svg';
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
        <p>
          {createHistogram(data)}
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
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

  for (let i = 0; i < arr.length; i++){
    histogram.push(<span>{arr[i].key} {arr[i].value}<br></br></span>);
  }

  return histogram;
}

export default App;
