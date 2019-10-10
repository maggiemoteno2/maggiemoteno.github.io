import React, { Component } from 'react';
import Buttons from './Components/Buttons';
class App extends Component {
  render() {
    return (
      <div className="container">
       <h1 className="heading">Drum Machine</h1>
        <Buttons/>
      </div>
    );
  }
}

export default App;
