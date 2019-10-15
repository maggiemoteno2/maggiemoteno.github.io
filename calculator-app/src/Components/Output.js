import React, { Component } from 'react';

class Output extends Component {
    render() {
        return (
            <div className="result">
                <p>{this.props.results}</p>
            </div>
        );
    }
}

export default Output;