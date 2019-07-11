import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default class Login extends React.Component {

    state = {
        username: "",
        password: "",
        showAlert: false
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            showAlert: false
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        const user = {
            username,
            password,

        }
        this.login(user);
    }

    login = async user => {
        try {
            const res = await axios.post('/api/login', user);
            this.props.history.push(`/user/${res.data._id}`)
        } catch {
            this.setState({
                showAlert: true
            })
        }
        //connecting to user.server.js in (serverside)
        //Pass in username and password as parameter to serverside.`
        // const res = await axios.post('/api/login', user);
        // if(res.data){
        //     this.props.history.push(`/user/${res.data._id}`)
        // }else {
        //     // alert("Your username and password doesn't match our records");
        //     this.setState({
        //         showAlert: true
        //     })
        // }
    }



    render() {
        return (
          <div>
            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Home</a>
        </nav>
        
        <div className="row">
            <div className="col-6">
                <div className="container">
                    <h1>Login or Create Account</h1>
                    <form>
                        <div className="form-group">
                         <span className="border border-dark">
                                <label htmlFor="username">Username</label>
                                <input placeholder="Enter your UserName" className="form-control border-dark" type="text" name="username"
                                    id="username"/>
                        </div>
                        <div className="form-group">
                             <span className="border border-warning"> <label htmlFor="password">Password</label>
                                <input placeholder="Enter your password" type="password" className="form-control border-warning" id="password"
                                    name="password"/>
                            </span>
                        </div>
                        <a className="btn btn-dark btn-block" href="profile.html">Login</a>
                        <a className="btn btn-warning btn-block" href="register.html">Register</a>
                    </form>
            </div>
            <div className="col-6">
                <div className="container">
                    <h1>Create Account</h1>
                    <form>
                        <span>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input placeholder="Enter your Name" className="form-control border-dark" type="text" name="username"
                                id="username"/>
                        </div>
                    </span>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input placeholder="Enter your password" type="password" className="form-control border-warning" id="password"
                                name="password"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="verify password"> Verify Password</label>
                            <input placeholder="Please verify your password" type="password" className="form-control border-dark"
                                id="password" name="password"/>
                        </div>
                        <a className="btn btn-warning btn-block" href="profile.html">Register</a>
                        <a className="btn btn-dark btn-block" href="login.html">Cancel</a>
                    </form>
                </div>
            </div>
            <footer>
                <div className="card text-center fixed-bottom">
                    <div className="card-header border border-dark">
                        Featured
                    </div>
                    <div className="card-body border border-warning">
                        <h5 className="card-title">Please consider subscribing also.</h5>
                        <p className="card-text">Click Button Below To Subscribe!</p>
                        <a href="#" className="btn btn-dark">To Subscription Page</a>
                    </div>
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </footer> 
        
                    )
                    }
            </div>
