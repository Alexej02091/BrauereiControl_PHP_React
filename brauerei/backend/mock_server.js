const express = require('express');
const app = express();
let mysql = require('mysql');

const datenbankName = "brauerei";

const mockDatenbankDrop = require('./db/mock_db/mock_datenbank_drop.js');
const mockDatenbank = require('./db/mock_db/mock_datenbank.js');
const mockTabVerwaltung = require('./db/mock_db/tabellen/mock_tab_verwaltung.js');
const mockTabProduktion = require('./db/mock_db/tabellen/mock_tab_produktion.js');
const mockTabVertrieb = require('./db/mock_db/tabellen/mock_tab_vertrieb.js');

const mockAbhaengigkeitenVertrieb = require('./db/mock_db/abhaengigkeiten/mock_abhaengigkeiten_vertrieb.js');
const mockAnhaengigkeitenVerwaltung = require('./db/mock_db/abhaengigkeiten/mock_abhaengigkeiten_verwaltung.js');
const mockAbhaengigkeitenProduktion = require('./db/mock_db/abhaengigkeiten/mock_abhaengigkeiten_produktion.js');

const mockDatensaetzeVerwaltung = require('./db/mock_db/datensaetze/mock_daten_verwaltung.js');
const mockDatensaetzeProduktion = require('./db/mock_db/datensaetze/mock_daten_produktion.js');


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
    console.log("Server Conencted!");
    console.log(`Start Drop ${datenbankName}`);
    mockDatenbankDrop(conCreatDatebase, datenbankName, function(){
        
        console.log("Start Creat Database");  
        mockDatenbank(conCreatDatebase, datenbankName, function() {
            
            let conMockTabellen = mysql.createConnection({
            host: "localhost",
            user: "root",
            password:"admin",
            database: datenbankName
            });

            conMockTabellen.connect(function(err) {
                if (err) throw err;
                console.log(`Database ${datenbankName} Connected!`);

                mockTabVerwaltung(conMockTabellen);
                mockTabVertrieb(conMockTabellen);
                mockTabProduktion(conMockTabellen);

                mockAbhaengigkeitenVertrieb(conMockTabellen);
                mockAnhaengigkeitenVerwaltung(conMockTabellen);
                mockAbhaengigkeitenProduktion(conMockTabellen);
                
                mockDatensaetzeVerwaltung(conMockTabellen);
                mockDatensaetzeProduktion(conMockTabellen);

                conMockTabellen.end (function (err) {
                    if (err) throw err;
                    else  console.log('Connector "conMockTabellen" geschlossen')
                });
            });
        });
    });           
});


