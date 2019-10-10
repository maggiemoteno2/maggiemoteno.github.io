import React, { Component } from "react";
import { keys } from "../Audio";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      power: false
    };
  }
  powerControl = () => {
    console.log("Matla", this.state.power);
    this.setState({
      power: !this.state.power
    });
  };
  playAudio = url => {
    if (this.state.power !== true) {

      return alert("turn on the power");
    }
        let sound = new Audio(url);
        return sound.play();
  };

  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <div className="button">
            {keys.map(audio => (
              <button onClick={() => this.playAudio(audio.url)}>
                {audio.name} {this.description}{" "}
              </button>
            ))}
          </div>
        </div>
        <div className="power">
          <i
            class="fa fa-power-off fa-3x"
            onClick={() => this.powerControl()}
            aria-hidden="true"
          ></i>
        </div>
      </div>
    );
  }
}
export default Buttons;
