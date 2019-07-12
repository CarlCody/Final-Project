import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

export default class Register extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" to="#">Home</a>
                </nav>
                                    <br>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="container">
                                                    <h1>Already Register User</h1>
                                                    <form>
                                                        <div className="form-group">
                                                            <span className="border border-dark">
                                                                <label htmlFor="username">Email or Username</label>
                                                                <input placeholder="Enter your UserName" className="form-control border-dark" type="text"
                                                                    name="username" id="username" />
                    </div>
                                                            <div className="form-group">
                                                                <span className="border border-warning"> <label htmlFor="password">Password</label>
                                                                    <input placeholder="Enter your password" type="password" className="form-control border-warning"
                                                                        id="password" name="password" />
                                                                </span>
                                                            </div>
                                                            <a className="btn btn-dark btn-block" to="profile.html">Login</a>
                                                            <a className="btn btn-warning btn-block" to="register.html">Register</a> -->
                </form>
            </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="container mt-5">
                                                        <a className="btn btn-dark btn-block" to="profile.html">Sign In with FaceBook</a>
                                                        <a className="btn btn-warning btn-block" to="register.html">Sign in With Google</a>
                                                        <h1>Create Account</h1>
                                                        <form>
                                                            <span>
                                                                <div className="form-group">
                                                                    <label htmlFor="username">Username</label>
                                                                    <input placeholder="Enter your Name" className="form-control border-dark" type="text" name="username"
                                                                        id="username" />
                                                                </div>
                                                            </span>
                                                            <div className="form-group">
                                                                <label htmlFor="password">Password</label>
                                                                <input placeholder="Enter your password" type="password" className="form-control border-warning" id="password"
                                                                    name="password" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="verify password"> Verify Password</label>
                                                                <input placeholder="Please verify your password" type="password" className="form-control border-dark"
                                                                    id="password" name="password" />
                                                            </div>
                                                            <a className="btn btn-warning btn-block" to="profile.html">Register</a>
                                                            <a className="btn btn-dark btn-block" to="login.html">Cancel</a>
                                                        </form>
                                                    </div>
                                                </div>
                                                <footer>
                                                    <nav className="navbar navbar-light bg-dark fixed-bottom ">
                                                        <Link className="navbar-brand" to="#">
                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFORBMjRWsANlKg1uy7FhMl9QCKgaZCwz3kfEwlrmpMvagaRC7EA" width="30" height="30" alt="">
                        </Link>
                    </nav>
                </footer>
            </div>
                                                )
                                            }
                                        }
                                        
                                        
{/* import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from"axios";
//  import uuid from "uuid";

 export default class Register extends Component {

    state = {
        username: "",
        password: "",
        password2: "",
        showUsernameAlert: false,
        showPasswordAlert: false 
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            showUsernameAlert: false,
            showPasswordAlert: false,
            showUsernameLengthAlert: false,
            showPasswordLengthAlert: false
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {username,password,password2,} = this.state
        this.register(username,password,password2);
    }
    //async is same as arrow function =,=>
    async register(username,password,password2)  {
        //check username length
            if(username.length < 5) {
                this.setState({
                    showUsernameLengthAlert: true
                })
                return;
            }
        //check password length
        if(password.length < 5) {
            this.setState({
                showPasswordLengthAlert: true
            })
        }
        //check is password matches
     if(password !== password2) {
        //  alert("The passwords are not matched");
         this.setState({
           showPasswordAlert: true
         })
         return;
     }

      //check if username is available in server side

      const res = await axios.get(`/api/user?username=${username}`);

      if(res.data){
        //   alert("Username is taken, please try another one");
        this.setState({
            showUsernameAlert: true
        })
          return;
      } else {
        const newUser = {
                 username,
                 password,
                email: "",
                firstName: "",
                lastName: ""
              };
          const res2 = await axios.post("/api/register", newUser);
          this.props.history.push(`/user/${res2.data._id}`);
      }
    }
    //  // check if username is available
    //  for(let user of this.props.users){
    //      if(user.username === username) {
    //          alert("Username is taken, please try another one");
    //          return;
    //      }
    //  }
    //  const newUser = {
    //      _id: uuid(),
    //      username,
    //      password,
    //      email: "",
    //      firstName: "",
    //      lastName: ""
    //  };
    //  this.props.addUser(newUser);
    //  this.props.history.push("/user/" + newUser._id)
    // }
   
 
    render() {
        const {username,password,password2} = this.state
        return (
<div className="container">
        <h1>Register</h1>
         {this.state.showPasswordAlert && (<div className="alert alert-danger">The password you entered doesn't match</div>)} 
         {this.state.showUsernameAlert && (<div className="alert alert-danger"  >The username is taken,please try another one</div>)} 
         {this.state.showUsernameLengthAlert && (<div className="alert alert-danger"  >The username is to short, please make it at least six characters</div>)} 
         {this.state.showPasswordLengthAlert && (<div className="alert alert-danger"  >The password is too short,please make it at least 8 characters</div>)} 
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlhtmlFor="username">Username</label>
                <input placeholder="Enter your Name"
                 className="form-control"
                  type="text"
                   name="username"
                    id="username"
                     onChange={this.onChange}
                     value={username}/>
            </div>
            <div className="form-group">
                <label  htmlhtmlFor="password">Password</label>
                <input placeholder="Enter your password"
                 type="password"
                  className="form-control"
                   id="password"
                    name="password"
                    value ={password}
                    onChange={this.onChange} />
            </div>
            <div className="form-group">
                <label  htmlhtmlFor="verify password"> Verify Password</label>
                <input placeholder="Please verify your password"
                 type="password2"
                  className="form-control"
                   id="password2"
                    name="password2"
                    value ={password2}
                    onChange={this.onChange}/>
            </div>
            <button className="btn btn-warning btn-block">Register</button>
            <Link className = "btn btn-success btn-block" to="/login">Cancel</Link>
        </form>
    </div>
        )
    }
 } */}
