import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import Landing from "./Components/Landing";
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
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
      </div>
    );
  }
}

export default App;
