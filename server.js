const express = require("express");
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const app = express();
const path = require('path');
const exp = require("constants");
const { rmSync } = require("fs");

dotenv.config({ path: 'config.env' });
const port = process.env.PORT || 3000;

app.use(morgan('tiny')); //log request. 
app.use(bodyparser.urlencoded({ extended: true })); //parse request to body-parser

app.set("view engine", "ejs");
// app.set('views', path.resolve(__dirname, "views"))

//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));


app.get("/", (req, res) => {
  console.log("Application started!");
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
