const express = require('express');
const router = express.Router();

module.exports = function(con) {
    router.get('/biersortiment', (req, res) => {
        con.query(`
            SELECT
                p.produkt_id,
                b.image AS biersorte_image,
                b.bezeichnung AS biersorte,
                l.bezeichnung AS pfand,
                l.image AS pfand_image,
                l.volumen_liter AS volumen,
                pr.preis_pro_liter AS preis
            FROM produktsortiment p
            JOIN biersorten b ON p.biersorte_id = b.biersorte_id
            JOIN lieferform l ON p.lieferform_id = l.lieferform_id
            JOIN preisen pr ON p.preis_id = pr.preis_id
            `,
            (err, results) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(results);
            }
        });
    });
    return router;
};