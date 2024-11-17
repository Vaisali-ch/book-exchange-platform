import './Auth.css'
// src/components/Auth/Login.js
import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [isLogin, setLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            // since backend server is running at localhost:5000 port.
            const response = await axios.post('http://localhost:5000/login', { email, password });
            setSuccess('Login successful!' + response.data.err);
            navigate('/')
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error);
            } else {
                setError('Error connecting to the server');
            }
        }
    };

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost:5000/signup', {
                fullName,
                email,
                password,
            });
            setSuccess('Signup successful! You can now log in.' + response.data.err);
            setLogin(true); // Switch to login view after successful signup
        } catch (err) {
            if (err.response) {
                const data = await err.response.data
                setError('signup failed.' + data.error);
            } else {
                setError('Error connecting to the server');
            }
        }
    };

    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isLogin ? 'active' : ""} onClick={() => setLogin(true)}>Login</button>
                    <button className={!isLogin ? 'active' : ""} onClick={() => setLogin(false)}>SignUp</button>
                </div>
                {isLogin ? <>
                   <div className='form'>
                    <form onSubmit={handleLogin}>
                        <h2>Login</h2>
                        <input type='email' 
                            value = {email} 
                            placeholder='Email' 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input type='password' 
                          placeholder='Password' 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button type='submit'>Login</button>
                    </form>
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <a href='/forgetpwd'>Forgot Password</a>
                    <p>Don't have an account? {' '} <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setLogin(false)}>SignUp Now</span></p>
                    </div>
                </> : <>
                    <div className='form'>
                        <h2>SignUp</h2>
                        <input
                            type='text'
                            placeholder='Full Name'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button type='button' onClick={handleSignup}>
                            SignUp
                        </button>
                        {success && <p style={{ color: 'green' }}>{success}</p>}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <p>
                            Already have an account?{' '}
                            <span
                                style={{ color: 'blue', cursor: 'pointer' }}
                                onClick={() => setLogin(true)}
                            >
                                Login
                            </span>
                        </p>
                    </div>
                </>}
            </div>

        </div>
    )
}

export default Login;
