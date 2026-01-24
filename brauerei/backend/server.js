const express = require('express');
const app = express();
let mysql = require('mysql');

app.get('/', (reg, res) => {
    res.send('My first express application');
});

app.listen(8080, () => {
    console.log('Server listing on port 8080');
});

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"admin"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});