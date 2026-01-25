const express = require('express');
const app = express();
let mysql = require('mysql');

const datenbankName = "brauerei";

app.get('/', (reg, res) => {
    res.send('My first express application');
});

app.listen(8080, () => {
    console.log('Server listing on port 8080');
});

let conCreatDatebase = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"admin",
    database: datenbankName
});

