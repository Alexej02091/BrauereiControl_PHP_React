const express = require('express');
const router = express.Router();

module.exports = function(con) {
    router.post('/auftraggeben', (req, res) => {
        const sorte = req.body["sorte"];
        const tank_id = req.body["tank"];
        const datum = req.body["datum"];

        console.log(`sorte = ${sorte}`);
        console.log(`tank_id = ${tank_id}`);
        console.log(`datum = ${datum}`);

        const sql = `INSERT INTO brauen_plan (sorte, tank_id, menge, brauer_id, helfer_id, datum)
            VALUES (?,?, 7000, 1, 1, ?)`
        con.query(sql, [sorte, tank_id, datum], (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send(err);
            } else {
                res.json(results);
            }
        });
    });
    return router;
};