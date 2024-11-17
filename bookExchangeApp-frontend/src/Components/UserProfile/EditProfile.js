
import React, { useState } from 'react';
import './EditProfile.css';

const EditProfile = () => {
    const initialUserData = {
        name: 'Vaishnavi',
        email: 'vaishnavi@gmail.com',
        bio: 'A passionate reader and book lover looking to connect and share books with others.',
        favoriteGenre: 'Science Fiction',
    };

    const [userData, setUserData] = useState(initialUserData);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage('Profile updated successfully!');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="edit-profile-page">
            <header className="header">
                <h2>Edit Profile</h2>
                <a href="/profile" className="back-link">Back to Profile</a>
            </header>

            <div className="edit-profile-container">
                <form className="edit-profile-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="bio">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={userData.bio}
                        onChange={handleChange}
                    />

                    <label htmlFor="favoriteGenre">Favorite Genre</label>
                    <input
                        type="text"
                        id="favoriteGenre"
                        name="favoriteGenre"
                        value={userData.favoriteGenre}
                        onChange={handleChange}
                    />

                    <button type="submit" className="save-button">Save Changes</button>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
