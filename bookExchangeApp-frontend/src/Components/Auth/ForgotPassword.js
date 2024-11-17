//src/components/ForgotPassword.js
import React, { useState } from 'react';
import './ForgotPassword.css';
import {sendPasswordResetEmail, confirmPasswordReset} from 'firebase/auth';


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Handle form submit
    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            await sendPasswordResetEmail(email); 
            await confirmPasswordReset(email);
            setMessage('Password reset email sent! Please check your inbox.');
        } catch (err) {
            setError('Failed to send reset email. Check if the email is correct.');
        }
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <form onSubmit={handlePasswordReset}>
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Send Reset Email</button>
            </form>

            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default ForgotPassword;
