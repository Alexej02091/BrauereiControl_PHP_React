const express = require('express');
const router = express.Router();

module.exports = function(con) {
    router.get('/brauenplan', (req, res) => {
        con.query(`
            SELECT 
                bp.brau_id,
                bp.sorte,
                bp.tank_id,
                bp.menge,
                brauer.name AS brauer,
                helfer.name AS helfer,
                bp.datum
            FROM brauen_plan bp
            JOIN personal_info brauer ON bp.brauer_id = brauer.person_id
            JOIN personal_info helfer ON bp.helfer_id = helfer.person_id
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