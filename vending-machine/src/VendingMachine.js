import React, { Component } from 'react'
import vendingMachineImg from './images/vendingmachine.png';
import { NavLink } from 'react-router-dom';


export class VendingMachine extends Component {
    render() {
        return (
            <div
                className='VendingMachine'
                style={{ backgroundImage: `url(${vendingMachineImg})` }}
            >
                <h1>Hello, I am a vending machine</h1>
                <NavLink to="/soda">Soda</NavLink>
                <NavLink to="/chips">Chips</NavLink>
                <NavLink to="/snackbar">Snack Bar</NavLink>
                
            </div>
        )
    }
}

export default VendingMachine
