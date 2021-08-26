import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class SnackBar extends Component {
    render() {
        return (
            <div>
                <h1>SnackBar.js file</h1>
                <Link to="/">Go Back</Link>
                
            </div>
        )
    }
}

export default SnackBar
