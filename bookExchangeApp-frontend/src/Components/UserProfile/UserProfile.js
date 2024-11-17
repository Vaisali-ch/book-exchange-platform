
// src/Components/UserProfile/UserProfile.js
import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
    // Example user data; replace with props or data from an API
    const user = {
        avatar: 'https://thumb.ac-illust.com/be/bee98c70d1cfc02d0f387d2852464bf5_t.jpeg', // Can be Replaced with actual image URL
        name: 'Vaisali',
        email: 'vaisalics0024@gmail.com',
        bio: 'A passionate reader and book lover looking to connect and share books with others.',
        memberSince: 'November 2024',
        favoriteGenre: 'Science Fiction',
    };

    return (
        <div className="user-profile-page">
            <header className="header">
                <h1>Book Exchange Platform</h1>
                <div className="auth-links">
                    <a href="/logout">Logout</a>
                    <a href='/home'>Home</a>
                </div>
            </header>

            <div className="user-profile-container">
                <div className="user-card">
                    {/* Add an error fallback for the avatar */}
                    <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="avatar"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/100'; // Fallback avatar image
                        }}
                    />
                    <h2>{user.name}</h2>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Bio:</strong> {user.bio}</p>
                    <p><strong>Member Since:</strong> {user.memberSince}</p>
                    <p><strong>Favorite Genre:</strong> {user.favoriteGenre}</p>
                    <button className="edit-profile-button">Edit Profile</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
