const express = require('express');
const router = express.Router();

module.exports = function(con) {
    router.get('/bierbrauen', (req, res) => {
        con.query(`
            SELECT * 
            FROM bierlager
            WHERE aktuellemenge IS NULL
                AND tanknummer != 1
                AND tanknummer != 2 
                AND tanknummer != 13
                AND tanknummer != 15    
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