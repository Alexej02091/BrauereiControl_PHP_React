const express = require('express');
let mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const datenbankName = "brauerei";

//----API PRODUKTION----
const apiBierlager = require('./api/produktion/api_bierlager.js');
const apiBierbrauen = require('./api/produktion/api_bierbrauen.js');
const apiBiersorten = require('./api/produktion/api_biersorten.js');

//----API GAST----
const apiBiersortiment = require('./api/gast/api_biersortiment.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (reg, res) => {
    res.send('My first express application');
});

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"admin",
    database: datenbankName
});

con.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

//----Gast----
app.use('/', apiBiersortiment(con));

//----Produktion----
app.use('/', apiBierlager(con));
app.use('/', apiBierbrauen(con));
app.use('/', apiBiersorten(con));

const PORT = 3001;
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});