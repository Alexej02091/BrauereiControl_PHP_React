const express = require('express');
const router = express.Router();

module.exports = function(con) {
    router.get('/biersortiment', (req, res) => {
        con.query('SELECT * FROM produktsortiment', (err, results) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(results);
            }
        });
    });
    return router;
};