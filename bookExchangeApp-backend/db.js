const sqlite3 = require('sqlite3'); 

// Connect to SQLite3 database
const db = new sqlite3.Database('./bookexchange.db', (err) => {
    if (err) {
      console.error('Error connecting to SQLite database:', err.message);
    } else {
      console.log('Connected to the SQLite database.');
    }
  });


  // Users table
const createUsersTable = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);
`;

// Books table
const createBooksTable = `
    CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    );
`;

db.serialize(() => {
  db.run(createUsersTable, (err) => {
      if (err) {
          console.error('Error creating users table:', err.message);
      } else {
          console.log('Users table created successfully.');
      }
  });

  db.run(createBooksTable, (err) => {
      if (err) {
          console.error('Error creating books table:', err.message);
      } else {
          console.log('Books table created successfully.');
      }
  });
});

  module.exports = db;

