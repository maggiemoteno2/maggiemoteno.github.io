import React from 'react';
import { Component } from 'react';
import QuoteGenerator from './components/Button';
class App extends Component {

  render() {
    return (
      <div style={{backgroundColor:"#9cf196",height:"61rem"}}>
<QuoteGenerator/>
      </div>
    );
  }
}


export default App;