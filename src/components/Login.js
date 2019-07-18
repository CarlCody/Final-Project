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
                <nav classname="navbar navbar-dark bg-dark">
                    <a classname="navbar-brand" href="#">Home</a>
                </nav>
                <div classname="row">
                    <div classname="col-6">
                        <div classname="container">
                            <h1>Login or Create Account</h1>
                            <form>
                                <div classname="form-group">
                                    <span classname="border border-dark">
                                        <label htmlfor="username">Username</label>
                                        <input placeholder="Enter your UserName" classname="form-control border-dark" type="text" name="username" id="username" />
                                    </span></div>
                                <div classname="form-group">
                                    <span classname="border border-warning"> <label htmlfor="password">Password</label>
                                        <input placeholder="Enter your password" type="password" classname="form-control border-warning" id="password" name="password" />
                                    </span>
                                </div>
                                <a classname="btn btn-dark btn-block" href="profile.html">Login</a>
                                <a classname="btn btn-warning btn-block" href="register.html">Register</a>
                            </form>
                        </div>
                        <div classname="col-6">
                            <div classname="container">
                                <h1>Create Account</h1>
                                <form>
                                    <span>
                                        <div classname="form-group">
                                            <label htmlfor="username">Username</label>
                                            <input placeholder="Enter your Name" classname="form-control border-dark" type="text" name="username" id="username" />
                                        </div>
                                    </span>
                                    <div classname="form-group">
                                        <label htmlfor="password">Password</label>
                                        <input placeholder="Enter your password" type="password" classname="form-control border-warning" id="password" name="password" />
                                    </div>
                                    <div classname="form-group">
                                        <label htmlfor="verify password"> Verify Password</label>
                                        <input placeholder="Please verify your password" type="password" classname="form-control border-dark" id="password" name="password" />
                                    </div>
                                    <a classname="btn btn-warning btn-block" href="profile.html">Register</a>
                                    <a classname="btn btn-dark btn-block" href="login.html">Cancel</a>
                                </form>
                            </div>
                        </div>
                        <footer>
                            <div classname="card text-center fixed-bottom">
                                <div classname="card-header border border-dark">
                                    Featured
          </div>
                                <div classname="card-body border border-warning">
                                    <h5 classname="card-title">Please consider subscribing also.</h5>
                                    <p classname="card-text">Click Button Below To Subscribe!</p>
                                    <a href="#" classname="btn btn-dark">To Subscription Page</a>
                                </div>
                                <div classname="card-footer text-muted">
                                    2 days ago
          </div>
                            </div>
                        </footer>
                    </div></div></div>


        )
    }

