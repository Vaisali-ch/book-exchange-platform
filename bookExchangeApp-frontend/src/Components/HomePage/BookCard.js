
// src/Components/HomePage/BookCard.js
import React from 'react';
import './BookCard.css';

const BookCard = ({ image, title, author, genre, condition, availability }) => {
    return (
        <div className="book-card">
            <img src={image} alt={`${title} cover`} className="book-image" />
            <h3>{title}</h3>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Genre:</strong> {genre}</p>
            <p><strong>Condition:</strong> {condition}</p>
            <p><strong>Availability:</strong> {availability}</p>
            <button className="exchange-button">Request Exchange</button>
        </div>
    );
};

export default BookCard;
