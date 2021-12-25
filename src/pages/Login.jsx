import React, { useRef } from 'react';
import logo from '@logos/logo_yard_sale.svg';
import '@styles/Login.scss';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="Login">
            <div className="Login-container">
                <img className="logo" src={logo} alt="Logo" />
                <form action="/" className="form" ref={form}>
                    <label for="email" className="label">Email address</label>
                    <input className="input input-email" type="email"  placeholder="email@example.com" name="email" />
                    <label for="password" className="label">Password</label>
                    <input className="input input-password" type="password" name="password" placeholder="*********" />
                    <button 
                        className="primary-button login-button" 
                        onClick={handleSubmit}>
                        Log in
                    </button>
                    <a href="/">Forgot my password</a>
                </form>
                <button 
                    className="secondary-button sighup-button">
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default Login;