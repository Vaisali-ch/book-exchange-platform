### Book Exchange Platform
The Book Exchange Platform is a full-stack web application that allows users to exchange, lend, and borrow books with others in a community. It offers features like user authentication, book listing, searching, and transaction management. This project is built with a React frontend, a Node.js backend, and an SQLite3 database.

## Features
User Authentication: Secure registration, login, and account management.
Book Listing: Users can list books with details like title, author, genre, condition, and availability.
Book Search: Search books by title, author, genre, and availability.
Book Exchange Requests: Users can send and manage book exchange requests.
Transaction Management: Track the status of book exchanges.
Scalable Architecture: Modular backend and component-based frontend for future extensibility.

## Project Structure

# bookExchangeApp:
  1. bookExchangeApp-backend
     * db.js :  #include db connection and db related operations for apis
     * server.js : # created apis logic to communicate with db. this is small combine file for all      #operations, going forward, operations can be separated as per models.
  2. bookExchangeApp-frontend
     src:
      1. Components: # Having reusable react componenets
          * Auth: # this component having user login, signup and authentication related logic and operations.
          * BookListing: # this component having adding books related business logic and operations.
          * BookSearch: # this is having books search related business logic and operations. Not yet developed.
          * ExchangeRequest: # this will have business logic to book exchange request. Not yet developed.
          * HomePage: # this is having home page for book Exchange Platform.
          * Transaction: # this will have books transaction related operations like tracking books. Not yet developed.
          * UserProfile: # this is having user profile management related logic.
      2. App.js: # main application entry

## Installation

   # Prerequisites
    1. Node.js (>=16.x)
    2. npm (Comes with Node.js)
    3. SQLite3 (npm install sqlite3)

## Setup Instructions

 1. Clone the repository:
    git clone https://github.com/vaisali-ch/book-exchange-platform.git
    cd book-exchange-platform

 2. Backend Setup:
    cd bookExchangeApp-backend
    npm install or npm start (since node_modules already been pushed with repos)

 3. Frontend Setup:
    cd bookExchangeApp-frontend
    npm start

 4. Database:
    Since here sqlite3 is being used, so don't need to install any additional thing. It will create table once we start running backend application.


## Running the Application 

  1.Backend server: 
    cd bookExchangeApp-backend
    node server.js
  
  2. Frontend Server:
    cd bookExchangeApp-frontend
    npm start

  3. Access UI on Browser by opening url:
    http://localhost:3000
  

## API Endpoints

# User Management
 1. POST /login		# To login to application.
 2. POST /signup	# To Register User to Application.
 3. POST /forgetpwd	# To recover password if user forgot it.
 4. POST /logout    # Logout user from application.
 5. GET /profile    # fetch user details from users table.
 6. Patch /profile/:user_id  # update user details by user_id.
 7. DELETE /profile/:user_id # deactivate/delete user account from the application.

# Books Management:
  1. POST /api/books  # Add books on application.
  2. GET /api/books   # List all the books.
  3. GET /api/books/:book_id # Fetch specific book detail
  4. PATCH /api/books/:book_id # Update book details like availability.
  5. DELETE /api/books/:book_id  # delete a book from application.
  6. GET /api/books/:${path_params}  # Find book by given path params (Search book).

# Books Transaction:
  1. PUT /api/bookrecord/:book_id  # Add or Update books track record by book id.

## Development

 # Frontend
   1. React Router: Used for navigation between pages
   2. CSS: Used for page beautification.

 # Backend
   1. Node.js with Express: REST API for communication with the frontend.
   2. SQLite3: Lightweight database for managing book data.

## Future Enhancements
   1. Add user profiles, preferences and all the features that is yet to develop but mentioned here.
   2. Implement a messaging system for users to negotiate book exchanges.
   3. Introduce book recommendations using a recommendation engine.
   4. Expand database support to PostgreSQL for larger datasets.
