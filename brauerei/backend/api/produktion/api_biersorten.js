const express = require('express');
const router = express.Router();

module.exports = function(con) {
    router.get('/biersorten', (req, res) => {
        con.query(`
            SELECT * 
            FROM biersorten
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