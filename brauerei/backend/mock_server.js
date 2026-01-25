const express = require('express');
const app = express();
let mysql = require('mysql');

const datenbankName = "brauerei";

const mockDatenbank = require('./db/mock_datenbank.js');
const mockTabVerwaltung = require('./db/mock_tab_verwaltung.js');
const mockTabProduktion = require('./db/mock_tab_produktion.js');
const mockTabVertrieb = require('./db/mock_tab_vertrieb.js');
const mockAbhaengigkeiten = require('./db/mock_tab_abhaengigkeit.js')



app.get('/', (reg, res) => {
    res.send('My first express application');
});

app.listen(8080, () => {
    console.log('Server listing on port 8080');
});

let conCreatDatebase = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"admin"
});

conCreatDatebase.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    mockDatenbank(conCreatDatebase, datenbankName);

        let conMockTabellen = mysql.createConnection({
        host: "localhost",
        user: "root",
        password:"admin",
        database: datenbankName
        });
            
        conMockTabellen.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");

            mockTabVerwaltung(conMockTabellen);
            mockTabVertrieb(conMockTabellen);
            mockTabProduktion(conMockTabellen);
            mockAbhaengigkeiten(conMockTabellen);

            conMockTabellen.end (function (err) {
                if (err) throw err;
                else  console.log('Connector "conMockTabellen" geschlossen')
            });
        });
    
});
