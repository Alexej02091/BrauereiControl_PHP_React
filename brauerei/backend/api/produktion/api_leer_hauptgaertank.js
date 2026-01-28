const express = require('express');
const router = express.Router();

module.exports = function(con) {
    router.get('/leerhauptgaertank', (req, res) => {
        con.query(`
            SELECT * 
            FROM bierlager
            WHERE aktuellemenge IS NULL
                AND tanknummer >= 3 AND tanknummer <=10
            `, (err, results) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(results);
            }
        });
    });
    return router;
};