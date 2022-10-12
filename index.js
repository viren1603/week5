require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;
// const path = require("path")
const database = require('./config/db')
app.use(express.json())
app.use(express.urlencoded());
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/index'))

app.listen(port, function (error) {
    if (error) {
        console.log("db error");
        return false
    }
    console.log(`http://localhost:${port}`);
})

