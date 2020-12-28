import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import "../src/styles/main.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
