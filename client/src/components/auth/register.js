import React, { Component } from 'react';
import BackgroundImg from '../../assets/images/auth_background.jpg';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

class Register extends Component {
    state= {
        username: '',
        email: '',
        lastName: '',
        firstName: '',
        password: '',
        confirmPassword:''
    }
    
    _handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});

    }
    _handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.password !== this.state.confirmPassword){
            alert('Passwords do not match');
        }else{
            fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password
                })
            }).then(res =>{
                this.props.history.push('/login');

            }).catch(err =>{
                console.log(err);
            })
        }
    }
    render() {
        const authStyle = {
            backgroundImage: `url(${BackgroundImg})`
        };
        return (
            <div className="Auth_Container" style={authStyle}>
                <div className="Auth__Box">
                    <p className="Auth__Title">Start Here</p>
                    <div className="Auth__RegisterForm">
                    <form onSubmit={this._handleSubmit}>
                        <input className="signUpFormTextBox" name="username" type="text" placeholder="Username" required  onChange={this._handleChange}/>
                        <input className="signUpFormTextBox" name="lastName" type="text" placeholder="Last Name" required  onChange={this._handleChange}/>
                        <input className="signUpFormTextBox" name="firstName" type="text" placeholder="First Name" required  onChange={this._handleChange}/>
                        <input className="signUpFormTextBox" name="email" type="email" placeholder="email" required onChange={this._handleChange}/>
                        <input className="signUpFormTextBox" name="password" type="password" placeholder="Password" required onChange={this._handleChange}/>
                        <input className="signUpFormTextBox" name="confirmPassword" type="password"  placeholder="Confirm Password" required onChange={this._handleChange}/>

                        <button type="submit" className="btnRegister" name="btnRegister">Join Now</button>
                        <p className="message">Already a member? <Link to='/login'>Sign in</Link></p>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;