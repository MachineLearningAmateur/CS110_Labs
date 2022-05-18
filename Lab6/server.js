// import dependencies for express
const express = require("express");
const cookieParser = require("cookie-parser");
const hbs = require("express-handlebars");
const path = require("path");
const roomIdGenerator=require('./util/roomIdGenerator.js');
const mongoose = require('mongoose'); //used for mongoDb
const config = require('config'); //used to access the config file
const Room = require("./models/rooms");

// import handlers to handle requests to view the homepage
const homeHandler = require("./controllers/home.js");
const roomHandler = require("./controllers/room.js");

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// If you choose not to use handlebars as template engine, you can safely delete the following part and use your own way to render content
// view engine setup
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

const db = config.get('mongoURI'); //extracts db connection from default.json

mongoose.connect(db, //connect to db
    error => {
        if (error) throw error;
        console.log("Connected to MongoDB."); //log out the connection if connection was made.
    }
)
// set up stylesheets route

// TODO: Add server side code


//getRoom - return json of all rooms in the mongo database 
app.get("/getRoom", (req, res) => {//order of endpoints matter, keep /getRoom before /:roomName
    //controllermvc(model vu controller)
    Room.find().lean().then(item => {
        res.json(item);
    });
})

// Create controller handlers to handle requests at each endpoint
app.get("/", homeHandler.getHome);
app.get("/:roomName", roomHandler.getRoom);

// Create endpoint - to create a new room in the database

// NOTE: This is the sample server.js code we provided, feel free to change the structures

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
