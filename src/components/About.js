import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div>
              <h1>About us</h1>
              <p>hello from about</p>
              <Link to='/'>Back to Home Page</Link>  
            </div>
        )
    }
}
