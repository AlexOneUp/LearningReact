import React, { Component } from 'react'

class BrokenClick extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        // You must bind() this to know what this is being referred to
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(evt) {
        this.setState({ clicked: true });
    }
    render() {
        return (
            <div>
                <h1>{this.state.clicked ? "Has been clicked" : "Not been clicked"}</h1>
                {/* This is passed in as a call back and not calling the function */}
                <button onClick={this.handleClick}>
                    Click me!
                </button>
            </div>
        )
    }
}

export default BrokenClick;