import React, { Component } from 'react'

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = { color: 'cyan' }
    }
    render() {
        return <h1>{this.props.animal}</h1>
    }
}

export default Demo;