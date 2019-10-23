import React, { Component } from 'react';
import './histogram.css';

export default class Histogram extends Component {

    constructor(props){
        super(props);
        this.inputObject = props.obj;
        this.color = props.color;
        this.maxBarWidth = props.maxBarWidth;
    }

    sortObject(){
        let arr = [];
      
        // generate array from js Obj
        Object.keys(this.inputObject.data).forEach((key) => {
          arr.push({"key" : key, "value" : this.inputObject.data[key]});
        });
      
        // sort values
        arr.sort(function(a, b){ return b.value - a.value;});
      
        return arr;
    }
      
    createHistogram(arr){
        let histogram = [];
        
        for (let i = 0; i < arr.length; i++){
            histogram.push(
                <div key={i}>
                    <span>
                        <div className="key">{arr[i].key}</div>
                        <div className="val">{arr[i].value}</div><br></br>
                    </span>
                </div>
            );
        }
        
        return histogram;
    }
    
    createBars(arr){
        let histogram = [];
        
        // calculate widths;
        let longestWidth = this.maxBarWidth;
        let highestValue = arr[0].value;

        for (let i = 0; i < arr.length; i++){
            let length = (arr[i].value / highestValue);

            let colorIndex = i < 4 ? i : 4;

            let divStyle = {
                width: length * longestWidth + 'px',
                backgroundColor: LightenColor(this.color, colorIndex * 40)
            };
            histogram.push(
                <span key={i}><div className="bar" style={divStyle}></div><br></br></span>
            );
        }
        
        return histogram;
    }

    render() { 
        let data = this.sortObject();
        return (
            <div className="complete-histogram">
                <div className="key-values">
                    <h3>{this.inputObject.title}</h3>
                    {this.createHistogram(data)}
                </div>
                <div className="bars">
                    {this.createBars(data)}
                </div>
            </div>
        );
    }
}

function LightenColor(col, amt) {
    var usePound = false;
  
    if (col[0] === "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255; else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt; 
    if (b > 255) b = 255; else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255; else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}



