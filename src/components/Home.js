import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class  extends Component {
    render() {
        return (
            <div className="container">
                <h1>Hello from js</h1>
                <p>Welcome to cody and jbs auction house</p>
                <Link to='/about'>Go to About Page</Link>
            </div>
        )
    }
}
