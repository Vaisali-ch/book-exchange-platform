// src/components/PasswordReset.js
import React, { useState } from 'react';
import './ResetPassword.css'; 

const PasswordReset = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        // Check if passwords match
        if (password !== confirmPassword) {
            setError("Passwords don't match. Please try again.");
            return;
        }

        // Password validation or API call here
        try {
            // Example placeholder for actual reset function (replace with API call)
            // await auth.updatePassword(password);
            setMessage('Password has been reset successfully!');
        } catch (err) {
            setError('Failed to reset password. Please try again.');
        }
    };

    return (
        <div className="password-reset-container">
            <h2>Reset Your Password</h2>
            <form onSubmit={handlePasswordReset} className="password-reset-form">
                <label htmlFor="password">New Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    required
                />
                <button type="submit">Reset Password</button>
            </form>

            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default PasswordReset;
