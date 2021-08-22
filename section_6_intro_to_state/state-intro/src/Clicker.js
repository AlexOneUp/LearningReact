import React, { Component } from 'react'

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = ({ num: 1 });
        // Binds this to genRandom so it knows to look at the state
        this.genRandom = this.genRandom.bind(this);
    }
    genRandom() {
        // Picks random # from 1-10
        let rand = Math.floor(Math.random() * 10) + 1;
        // Updates the state of num to the rand value.
        this.setState({ num: rand })
    }

    render() {
        return (
            <div>
                <h1>Your number is: {this.state.num}</h1>
                {/* Conditional statement */}
                {
                    this.state.num === 7
                    ?
                    <h2>You Win!</h2>
                    :
                    <button onClick={this.genRandom}>Random Number</button>
                }
            </div>
        )
    }
}
export default Clicker;