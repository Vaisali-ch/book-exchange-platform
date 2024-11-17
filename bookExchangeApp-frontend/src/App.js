import React from "react";
import LoginSignup from "./Components/Auth/LoginSignup";
import Signup from "./Components/Auth/LoginSignup"
import ForgotPassword from "./Components/Auth/ForgotPassword";
import { Routes, Route } from 'react-router-dom';
//import ResetPassword from "./Components/Auth/ResetPassword";
import Home from "./Components/HomePage/Home";
//import UserProfile from "./Components/UserProfile/UserProfile";
//import EditProfile from "./Components/UserProfile/EditProfile";
//import BookCard from "./Components/HomePage/BookCard";
//import AddBook from "./Components/BookListing/AddBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/signup" element = {<Signup />} />
      <Route path="/forgetpwd" element={<ForgotPassword />} />
    </Routes>
  );
}


export default App;
