import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Credits from "./Components/Credits";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Landing
          title="Section 1"
          subtitle={dummyText}
          dark={false}
          id="section1"
        />
        <About
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Credits
          title="Section 3"
          subtitle={dummyText}
          dark={false}
          id="section3"
        />
      </div>
    );
  }
}

export default App;
