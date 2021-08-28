import React, { Component } from 'react'
import vendingMachineImg from './images/vendingmachine.png';
import { NavLink } from 'react-router-dom';
import Message from './components/Message';


export class VendingMachine extends Component {
    render() {
        return (
            <div
                className='VendingMachine'
                style={{ backgroundImage: `url(https://media2.giphy.com/media/3oKIPaI8ZrQS9wnigM/giphy.gif?cid=ecf05e471gq0ajechjfew54nbft5ai0vkxpbqydroe35jigc&rid=giphy.gif&ct=g)` }}
            >
            <Message/>
            
                <h1>Hello, I am a vending machine</h1>
                <NavLink to="/soda">Soda</NavLink>
                <NavLink to="/chips">Chips</NavLink>
                <NavLink to="/snackbar">Snack Bar</NavLink>
                
            </div>
        )
    }
}

export default VendingMachine
