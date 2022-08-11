import React from "react"
import "./Login.css"
const Login = () =>{
    return (
        <div className = "login-container">
            <div className="login-page">
                <div className="form">
                    <div className="login">
                        <div className="login-header">
                            <h3>SignIN</h3>
                            <p>Please enter your credentials to login.</p>
                        </div>
                    </div>
                    <form className="login-form" action="home.html">
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>signIn</button>
                        <p className="message">Not registered? <a href="register.html">Create an account</a></p>
                        <p className="message">Return to home <a href="home.html">Home</a></p>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Login;