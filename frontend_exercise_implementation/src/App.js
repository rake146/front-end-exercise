import React, { Component } from 'react';
import './App.css';
import Histogram from './components/histogram'

export default class App extends Component {
  state = {
    histograms: []
  }

  histogramData = [{
    "title": 'Pets in Cambridge',
    "data": {
      "cat": 55,
      "dog": 14,
      "lizard": 37, // There are a lot of Liz lovers in Cambridge. :D
      "elephant": 3,
      "geese": 14,
      "chimps": 2,
      "crocs": 5, // There aren't many crocodile lovers D:
    }
  },
  {
    "title": 'Pets in Africa',
    "data": {
      "lions": 10,
      "tigers": 2,
      "bears": 15,
      "giraffe": 11,
      "toucans": 2,
      "elephant": 9
    }
  }]

  componentDidMount() {
    // fetch histograms from API
    fetch('/histogram-data')
    .then(res => res.json())
    .then((data) => {
      this.setState({ histograms: data })
      console.log("DATA", data);
    })
    .catch(console.log)

    console.log(this.state);
  }

  render(){
    // would typically use state.histograms[0] here instead of histogramData if endpoint was live
    return (
      <div className="App">
        <header className="App-header"> 
          <Histogram obj={this.histogramData[0]} color='#F06D06' maxBarWidth={200}/>
          <Histogram obj={this.histogramData[1]} color='#F065FA' maxBarWidth={200}/>
        </header>
      </div>
    );
  }
}

/*
 API interface specification:

 array of histograms e.g.
 
 "histogram-data": [{
  "title": "Pets in Cambridge",
  "data": {
    "cat": 55,
    "dog": 14
  },
  {
  "title": "Pets in Africa",
  "data": {
    "Lions": 2,
    "Tigers": 3
  }]
*/