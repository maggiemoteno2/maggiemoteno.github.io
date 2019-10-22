import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Keypads from "./Components/Keypads";
import Output from "./Components/Output";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: ""
    };
  }
  clear = () => {
    this.setState({
      results: ""
    });
  };
  KeypadPressed = value => {
    if (value === "=") {
      return this.calculate();
    }

    this.setState({
      results: this.state.results + value
    });
  };

  calculate = () => {
    try {
      var total = eval(this.state.results);
      this.setState({
        results: total
      });
    } catch (error) {
      this.setState({
        results: "error"
      })
    }
  };
  render() {
    return (
      <div className="container">
        <Output results={this.state.results} />
        <Keypads clear={this.clear} keyPressed={this.KeypadPressed} />
      </div>
    );
  }
}
