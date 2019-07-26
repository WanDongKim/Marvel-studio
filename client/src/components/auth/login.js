import React, { Component } from 'react';
import BackgroundImg from '../../assets/images/auth_background.jpg';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import decode from "jwt-decode";

class Login extends Component {
    state= {
        username: '',
        password: ''
    };

    _handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    _handleSubmit = (event) =>{
        event.preventDefault();
            fetch ('https://marvel-studio.herokuapp.com/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            }).then(res =>{
                return res.json();
            }).then(res => {
                if(res.success) {
                    this.setToken(res.token)
                    sessionStorage.setItem("user", this.state.username);
                    sessionStorage.setItem("token", res.token);

                    this.props.history.push('/');
                } else {
                    alert(res.msg);
                }

            }).catch(err =>{
                console.log(err);
            })
    }

    setToken = idToken => {
        localStorage.setItem("id_token", idToken);
    };
    
    getToken = () => {
        return localStorage.getItem("id_token");
    };

    render() {
        const authStyle = {
            backgroundImage: `url(${BackgroundImg})`
        };
        return (
            <div className="Auth_Container" style={authStyle}>
            <div>
            
            </div>
            <div className="Auth__Box Login">
                <p className="Auth__Title">Start Here</p>

                <div className="Auth__RegisterForm">
                    <form onSubmit={this._handleSubmit}>
                        <input className="loginFormTextBox" name="username" type="text" placeholder="Username" required  onChange={this._handleChange} />
                        <input className="loginFormTextBox" name="password" type="password" placeholder="password" required  onChange={this._handleChange}/>
                    
                        <button type="submit" className="btnRegister" name="btnRegister">Join Now</button>
                        <p className="message">Already a member? <Link to='/register'>Sign up now</Link></p>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default Login;


// _loggedIn = () => {
//     const token = this.getToken(); 
//     return !!token && !this.isTokenExpired(token); // handwaiving here
// };
// isTokenExpired = token => {
//     try {
//         const decoded = decode(token);
//         console.log(decoded);
//         if (decoded.exp < Date.now() / 1000) {
//             // Checking if token is expired.
//             return true;
//         } else return false;
//         } catch (err) {
//             console.log("expired check failed! Line 42: AuthService.js");
//         return false;
//     }
// };