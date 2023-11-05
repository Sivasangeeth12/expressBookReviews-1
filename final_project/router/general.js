const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  let username  = req.body.username
  let password = req.body.password
  if (!username || !password) {
    return res.status(400).json({ error: 'Both username and password are required' });
  }

  if (users.some(user => user.username === username)) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  const newUser = { username, password };
  users.push(newUser);
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',async function (req, res) {
  //Write your code here
  try {
    const response = await axios.get('/');
    const books = response.data;
    console.log('List of books:', books);
  } catch (error) {
    console.error('Error:', error);
  }
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',async function (req, res) {
  //Write your code here
   try {
    const response = await axios.get(`/books/${isbn}`);
    const book = response.data;
    console.log('Book details by ISBN:', book);
  } catch (error) {
    console.error('Error:', error);
  }
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',async function (req, res) {
  //Write your code here
  try {
    const response = await axios.get(`/books?author=${author}`);
    const books = response.data;
    console.log('Books by Author:', books);
  } catch (error) {
    console.error('Error:', error);
  }
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',async function (req, res) {
  //Write your code here
  try {
    const response = await axios.get(`/books?title=${title}`);
    const books = response.data;
    console.log('Books by Title:', books);
  } catch (error) {
    console.error('Error:', error);
  }
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  let isbn = req.params.isbn
  res.send(books[isbn].reviews)
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
