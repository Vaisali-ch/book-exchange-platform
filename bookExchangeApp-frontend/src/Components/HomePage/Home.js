

// src/Components/HomePage/Home.js
import React from 'react';
import BookCard from './BookCard';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const books = [
        {
            title: 'Harry Potter',
            author: 'J.K. Rowling',
            genre: 'Fantasy',
            condition: 'New',
            availability: 'Available',
            image: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855652.jpg'  // Replace with the actual image URL
        },
        {
            title: 'Dune',
            author: 'Frank Herbert',
            genre: 'Si-Fi',
            condition: 'Good',
            availability: 'Not Available',
            image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg'  // Replace with the actual image URL
        },
        {
            title: 'Sherlock Holmes',
            author: 'Arthur Conan Doyle',
            genre: 'Mystery',
            condition: 'Fair',
            availability: 'Available',
            image: 'https://cdn.penguin.co.in/wp-content/uploads/2023/01/9780143455264.jpg'  // Replace with the actual image URL
        },
        {
            title: 'Arthashastra ',
            author: 'Chanakya',
            genre: 'Treatise,Religious Text',
            condition: 'Fair',
            availability: 'Available',
            image: 'https://m.media-amazon.com/images/I/81XEDDvPbiL._AC_UF1000,1000_QL80_.jpg'  // Replace with the actual image URL
        },
        {
            title: 'Ramcharitmanas ',
            author: 'Tulsida',
            genre: 'Religious',
            condition: 'Good',
            availability: 'Available',
            image: 'https://www.asthabooks.com/cdn/shop/files/1617.jpg?v=1682931116'  // Replace with the actual image URL
        },
        {
            title: 'Srimad Bhagavad Gita',
            author: 'Maharishi Veda Vyasa',
            genre: 'Hindu religious text.',
            condition: 'Fair',
            availability: 'Available',
            image: 'https://5.imimg.com/data5/PK/QG/MY-58269874/srimad-bhagavad-gita-as-it-is-28english-29-500x500.jpg'  // Replace with the actual image URL
        },
        {
            title: 'Game of Thrones',
            author: 'George R.R. Martin',
            genre: 'Fantasy Fiction,Novel,High Fantasy',
            condition: 'Fair',
            availability: 'Available',
            image: 'https://assets-prd.ignimgs.com/2022/11/01/world-1667334141452.jpg'  // Replace with the actual image URL
        },
        {
            title: 'The Lord of the Rings',
            author: 'John Ronald Reuel Tolkien',
            genre: 'Adventure,High Fantasy',
            condition: 'Fair',
            availability: 'Available',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwQlC_nnSh0zNkGozrUNxEhpHmiEJPQRTUQ&s'  // Replace with the actual image URL
        },
    ];

    return (
        <div className="home-container">
            <header className="header">
                <h1>Book Exchange Platform</h1>
                <div className="auth-links">
                    <nav>
                    <a href="/"></a>
                    <Link to="/login">Login</Link>
                    <a href="/signup">SignUp</a>
                    <a href="/profile">Profile</a>
                    </nav>
                </div>
            </header>

            <div className="search-bar">
                <input type="text" placeholder="Search by title, author, or genre" />
                <button>Search</button>
            </div>

            <div className="book-grid">
                {books.map((book, index) => (
                    <BookCard key={index} {...book} />
                ))}
            </div>
        </div>
    );
};

export default Home;
