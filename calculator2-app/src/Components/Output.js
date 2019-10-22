import React, { Component } from 'react'

export default class Output extends Component {
    render() {
        return (
            <div>
                {this.props.results}
            </div>
        )
    }
}
