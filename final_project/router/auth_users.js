const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  if (!username || !password) {
    return res.status(400).json({ error: 'Both username and password are required' });
  }

  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Create a JWT token
  const token = jwt.sign({ username }, secretKey);

  return res.status(300).json({message: "Yet to be implemented"});
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  const { isbn, reviewText } = req.body;
  const username = req.user.username; // Extract username from JWT token

  const existingReview = reviews.find(review => review.isbn === isbn && review.username === username);

  if (existingReview) {
    // Modify the existing review
    existingReview.reviewText = reviewText;
    res.json({ message: 'Review updated successfully' });
  } else {
    res.status(404).json({ error: 'Review not found' });
  }
  return res.status(300).json({message: "Yet to be implemented"});
});
regd_users.delete("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const username = req.user.username; // Extract username from JWT token

  const reviewIndex = reviews.findIndex(review => review.isbn === isbn && review.username === username);

  if (reviewIndex !== -1) {
    reviews.splice(reviewIndex, 1);
    res.json({ message: 'Review deleted successfully' });
  } else {
    res.status(404).json({ error: 'Review not found' });
  }
});
module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
