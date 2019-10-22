import React, { Component } from "react";

export default class Keypads extends Component {
  render() {
    return (
      <div className="keypads">
        <button onClick={()=> this.props.keyPressed(1)}>1</button>
        <button onClick={()=> this.props.keyPressed(2)}>2</button>
        <button onClick={()=> this.props.keyPressed(3)}>3</button>
        <button onClick={()=> this.props.keyPressed(4)}>4</button>
        <button onClick={()=> this.props.keyPressed(5)}>5</button>
        <button onClick={()=> this.props.keyPressed(6)}>6</button>
        <button onClick={()=> this.props.keyPressed(7)}>7</button>
        <button onClick={()=> this.props.keyPressed(8)}>8</button>
        <button onClick={()=> this.props.keyPressed(9)}>9</button>
        <button onClick={()=> this.props.keyPressed(0)}>0</button>
        <button onClick={()=> this.props.keyPressed("+")}>+</button>
        <button onClick={()=> this.props.keyPressed("-")}>-</button>
        <button onClick={()=> this.props.keyPressed("*")}>*</button>
        <button onClick={()=> this.props.keyPressed("/")}>/</button>
        <button onClick={()=> this.props.keyPressed("=")}>=</button>
        <button onClick={()=> this.props.clear()}>clear</button>
      </div>
    );
  }
}
