const express = require('express');
const app = express();
let mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const datenbankName = "brauerei";

app.use(cors());
app.use(bodyParser.json());

app.get('/', (reg, res) => {
    res.send('My first express application');
});

// app.listen(8080, () => {
//     console.log('Server listing on port 8080');
// });

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

app.get('/bierlager', (req, res) => {
  con.query('SELECT * FROM bierlager', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

const PORT = 3001;
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});