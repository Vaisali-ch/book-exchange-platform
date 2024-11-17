const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); 
const JWT_SECRET = 'myjwt_token'; // need to replace Replace with an environment variable

// Login 
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Please provide both email and password' });
}
 // Check user in the database
 db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
  if (err) return res.status(500).json({ error: err.message });
  if (!user) return res.status(401).json({ error: 'Invalid email or password' });

  // Compare password
  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) return res.status(500).json({ error: 'Error checking password' });
    if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  });
});
});

// Register User
app.post('/signup', async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
  }

  try {
      const hashedPassword = await bcrypt.hash(password, 10);
      db.run(
          `INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)`,
          [fullName, email, hashedPassword],
          function (err) {
              if (err) {
                  if (err.code === 'SQLITE_CONSTRAINT') {
                      return res.status(400).json({ message: 'Email already exists' });
                  }
                  return res.status(500).json({ message: err.message });
              }
              res.status(201).json({ message: 'User created successfully' });
          }
      );
  } catch (err) {
      res.status(500).json({ message: 'Server error' });
  }
});

// Get All Books
app.get('/api/books', (req, res) => {
    db.all('SELECT * FROM books', [], (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      } else {
        res.json(rows);
      }
    });
  });

// Add New Book
app.post('/api/books', (req, res) => {
  const { title, author, genre, condition, availability } = req.body;
  const sql = `INSERT INTO books (title, author, genre, condition, availability) VALUES (?, ?, ?, ?, ?)`;
  const params = [title, author, genre, condition, availability];

  db.run(sql, params, function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    } else {
      res.json({ id: this.lastID, title, author, genre, condition, availability });
    }
  });
});

  // Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });