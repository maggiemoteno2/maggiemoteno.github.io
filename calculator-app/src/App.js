import React, { Component } from 'react';
import Keypad from './Components/Keypad'
import Output from './Components/Output';


class App extends Component {
constructor(props){
  super(props)
  this.state={
    results:'',
  }
}

buttonPressed=(buttonName)=>{
  if(buttonName=== '='){
    this.calculate()
  }else

if(buttonName==="clear"){
  this.reset()
}else
  this.setState({
    results:this.state.results+buttonName,
  })
};

reset=()=>{
  this.setState({
    results: "",
  })
}
calculate=()=>{
  try{this.setState({
    results: (eval(this.state.results) || "") + ""
  })} catch(e){
    this.setState({
      results:"error",
    })
  }
}
  render() {
    return (
      <div>
        <div className="body">
        <Output results={this.state.results}/>
        <Keypad buttonPressed={this.buttonPressed}/>
        </div>
      </div>
    );
  }
}

export default App;
