const express = require('express'); //imports express to help build web applications and APIs
const bodyParser = require('body-parser'); //imports body-parser to decode body of a HTTP request
const cors = require('cors'); //imports cors for receiving and making requests from same computer

const app = express()
const port = 3000;

//stores books
let books = [];

app.use(cors());

//configure body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    //we code here
    const book = req.body; //looks at the body of the request
    //console.log(book);
    books.push(book);
    //res.send('Book has been added to the database');
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        if (book.isbn === isbn) {
            res.json(book)
        }
    }   
});

app.delete('/book/:isbn', (req, res) => {
    console.log(`delete ${req.params.isbn}`);
    const isbn = req.params.isbn; //retrieves the passed in value of isbn
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        if (book.isbn === isbn) {
            books.splice(i, 1); //removes char at i of length 1
            break;
        }
    }  
    window.location.reload();
});

app.post('/book/:isbn', (req, res) => {
    //reading isbn from the URL
    // console.log("post works")
    const isbn = req.params.isbn
    const newBook = req.body;

    for (let i = 0; i < books.length; i++) {
        let book = books[i] 
        console.log(book);
        if (book.isbn === isbn) {
            books[i] = newBook;
            console.log(books[i]);
            break;
        }
    }
    //res.send('Book has been edited!');
});

app.listen(port, ()=> console.log('Hello world app listening on port'));
