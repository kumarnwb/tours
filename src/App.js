import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import PopularTours from "./components/PopularTours";
import Stories from "./components/Stories";
import "../src/styles/main.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Features />
        <PopularTours />
        <Stories />
      </div>
    );
  }
}

export default App;
