// Path: src/components/AddBook.js

import React, { useState } from 'react';
import './AddBook.css';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [condition, setCondition] = useState('');
    const [availability, setAvailability] = useState('available');
    const [message, setMessage] = useState(null);

    const handleAddBook = async (event) => {
        event.preventDefault();
        if (!title || !author || !genre || !condition) {
            setMessage('All fields are required');
            return;
        }

        try {
            // ToDO: implement actual Post API to add book
            // Mock success response
            const response = { data: { success: true } };

            if (response.data.success) {
                setMessage('Book added successfully!');
                setTitle(''); setAuthor(''); setGenre(''); setCondition('');
            } else {
                setMessage('Failed to add book. Try again.');
            }
        } catch (error) {
            console.error(error);
            setMessage('An error occurred while adding the book.');
        }
    };

    return (
        <div className="add-book-form">
            <div className="nav-buttons">
                <a to="/home" className="nav-link">Home</a>
                <a to="/profile" className="nav-link">Profile</a>
            </div>
            <h2>Add a New Book</h2>
            {message && <p>{message}</p>}

            <form onSubmit={handleAddBook}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Genre:</label>
                    <input
                        type="text"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Condition:</label>
                    <select
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                        required
                    >
                        <option value="">Select condition</option>
                        <option value="new">New</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="used">Used</option>
                    </select>
                </div>

                <div>
                    <label>Availability:</label>
                    <select
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                    >
                        <option value="available">Available</option>
                        <option value="not available">Not Available</option>
                    </select>
                </div>

                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
