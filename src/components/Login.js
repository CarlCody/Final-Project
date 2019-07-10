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
            <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Home</a>
        </nav>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="row">
            <div class="col-6">
                <div class="container">
                    <h1>Login or Create Account</h1>
                    <form>
                        <div class="form-group">
                         <span class="border border-dark">
                                <label for="username">Username</label>
                                <input placeholder="Enter your UserName" class="form-control border-dark" type="text" name="username"
                                    id="username"/>
                        </div>
                        <div class="form-group">
                             <span class="border border-warning"> <label for="password">Password</label>
                                <input placeholder="Enter your password" type="password" class="form-control border-warning" id="password"
                                    name="password"/>
                            </span>
                        </div>
                        <a class="btn btn-dark btn-block" href="profile.html">Login</a>
                        <a class="btn btn-warning btn-block" href="register.html">Register</a>
                    </form>
                </div>
            </div>
            <div class="col-6">
                <div class="container">
                    <h1>Create Account</h1>
                    <form>
                        <span>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input placeholder="Enter your Name" class="form-control border-dark" type="text" name="username"
                                id="username"/>
                        </div>
                    </span>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input placeholder="Enter your password" type="password" class="form-control border-warning" id="password"
                                name="password"/>
                        </div>
                        <div class="form-group">
                            <label for="verify password"> Verify Password</label>
                            <input placeholder="Please verify your password" type="password" class="form-control border-dark"
                                id="password" name="password"/>
                        </div>
                        <a class="btn btn-warning btn-block" href="profile.html">Register</a>
                        <a class="btn btn-dark btn-block" href="login.html">Cancel</a>
                    </form>
                </div>
            </div>
            <footer>
                <div class="card text-center fixed-bottom">
                    <div class="card-header border border-dark">
                        Featured
                    </div>
                    <div class="card-body border border-warning">
                        <h5 class="card-title">Please consider subscribing also.</h5>
                        <p class="card-text">Click Button Below To Subscribe!</p>
                        <a href="#" class="btn btn-dark">To Subscription Page</a>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </footer> 
            </div>
                    )
                }