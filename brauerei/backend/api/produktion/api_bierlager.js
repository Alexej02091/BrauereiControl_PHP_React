const express = require('express');
const router = express.Router();

module.exports = function(con) {
    router.get('/bierlager', (req, res) => {
        con.query(`
            SELECT
            bl.tanknummer, 
            s.bezeichnung AS biersorte,
            bl.braudatum,
            bl.aktuellemenge,
            bl.temperatur,
            bl.zustand,
            bl.stammwürze
            FROM bierlager bl 
            JOIN biersorten s ON bl.biersorte_id = s.biersorte_id 
            WHERE tanknummer != 1
            AND tanknummer !=2
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