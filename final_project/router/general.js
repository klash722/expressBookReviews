const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
        const username = req.body.username;
        const password = req.body.password;
      
        if (username && password) {
          if (!doesExist(username)) {
            users.push({"username":username,"password":password});
            return res.status(200).json({message: "User successfully registred. Now you can login"});
          } else {
            return res.status(404).json({message: "User already exists!"});
          }
        }
        return res.status(404).json({message: "Unable to register user."});
      });

// Get the book list available in the shop
public_users.get('/',function (req, res) {
    res.send(JSON.stringify(books,null,4));
    
    let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})
    console.log("Before calling promise");
    myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
    })
    console.log("After calling promise");
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
        const isbn = req.params.isbn;
        res.send(books[isbn])

        let myPromise = new Promise((resolve,reject) => {
            setTimeout(() => {
              resolve("Promise resolved")
            },6000)})
            console.log("Before calling promise");
            myPromise.then((successMessage) => {
            console.log("From Callback " + successMessage)
            })
            console.log("After calling promise");
        });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const author = req.params.author;
    res.send(books[author])

    let myPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve("Promise resolved")
        },6000)})
        console.log("Before calling promise");
        myPromise.then((successMessage) => {
        console.log("From Callback " + successMessage)
        })
        console.log("After calling promise");
    });

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const title = req.params.title;
    res.send(books[title])

    let myPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve("Promise resolved")
        },6000)})
        console.log("Before calling promise");
        myPromise.then((successMessage) => {
        console.log("From Callback " + successMessage)
        })
        console.log("After calling promise");
    });

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    const review = req.params.review;
    res.send(books[review])
    });

module.exports.general = public_users;


