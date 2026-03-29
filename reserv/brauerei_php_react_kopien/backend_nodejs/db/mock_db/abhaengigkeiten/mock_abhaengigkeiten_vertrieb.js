module.exports = function(con) {

    con.query(`
        ALTER TABLE bestellung
        ADD CONSTRAINT fk_bestellung_biersorte
        FOREIGN KEY (biersorte_id) REFERENCES biersorten(biersorte_id)
        `,
        function(err) {
            if (err) throw err;
            console.log("bestellung FOREIGN KEY (biersorte_id) REFERENCES biersorten(biersorte_id) gesetzt");
        }
    );

    con.query(`
        ALTER TABLE bestellung
        ADD CONSTRAINT fk_bestellung_kunde
        FOREIGN KEY (kunde_id) REFERENCES kunden(kunde_id)
        `,
        function(err) {
            if (err) throw err;
            console.log("bestellung FOREIGN KEY (kunde_id) REFERENCES kunden(kunde_id) gesetzt");
        }
    );

    con.query(`
        ALTER TABLE produktsortiment
        ADD CONSTRAINT fk_produktsortiment_biersorte_id
        FOREIGN KEY (biersorte_id) REFERENCES biersorten(biersorte_id)
        `,
        function(err) {
            if (err) throw err;
            console.log("produktsortiment FOREIGN KEY (biersorte_id) REFERENCES biersorten(biersorte_id) gesetzt");
        }
    );

    con.query(`
        ALTER TABLE produktsortiment
        ADD CONSTRAINT fk_produktsortiment_lieferform_id
        FOREIGN KEY (lieferform_id) REFERENCES lieferform(lieferform_id)
        `,
        function(err) {
            if (err) throw err;
            console.log("produktsortiment FOREIGN KEY (lieferform_id) REFERENCES lieferform(lieferform_id) gesetzt");
        }
    );

    con.query(`
        ALTER TABLE produktsortiment
        ADD CONSTRAINT fk_produktsortiment_preis_id
        FOREIGN KEY (preis_id) REFERENCES preisen(preis_id)
        `,
        function(err) {
            if (err) throw err;
            console.log("produktsortiment FOREIGN KEY (preis_id) REFERENCES preisen(preis_id) gesetzt");
        }
    );

};