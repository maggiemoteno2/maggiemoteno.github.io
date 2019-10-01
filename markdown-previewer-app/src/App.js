import React, { Component } from "react";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";

let marked = require("marked");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:"",
    };
  }
      updateMarkdown= function(markdown){
        this.setState({
          markdown
        })
      }

  render() {
    return (
      <div className="markdownPreviewer container">
        <div class="w3-container w3-blue">
          <FormGroup controlId="formControlsTextarea">
             <h1 >Editor</h1>
            <FormControl
              componentClass="textarea"
              placeholder="Enter text"
              value={this.state.markdown}
              onChange={(event)=>this.updateMarkdown(event.target.value)}
            ></FormControl>
          </FormGroup>
        </div>
        <div>

          <h1>Previewer</h1>
          <div className="markdown" dangerouslySetInnerHTML={{__html:marked(this.state.markdown)}}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
