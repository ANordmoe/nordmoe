import React, { Component } from "react";
import "./App.css";

class App extends Component() {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="IMG_0915.JPG" alt="Nordmoe and the Rodeo" />
          <p>
           You're in Nordmoe Country now
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
