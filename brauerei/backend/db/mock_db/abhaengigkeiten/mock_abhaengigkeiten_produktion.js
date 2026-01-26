module.exports = function(con) {
    con.query(`
        ALTER TABLE bierlager
        ADD CONSTRAINT fk_bierlager_biersorte
        FOREIGN KEY (biersorte_id) REFERENCES biersorten(biersorte_id)
        `,
        function(err) {
            if (err) throw err;
            console.log("bierlager FOREIGN KEY (biersorte_id) REFERENCES biersorten(biersorte_id) gesetzt");
        }
    );

    con.query(`
        ALTER TABLE rohstofflager
        ADD CONSTRAINT fk_rohstofflager_lieferant
        FOREIGN KEY (lieferant_id) REFERENCES lieferanten(lieferant_id)
        `,
        function(err) {
            if (err) throw err;
            console.log("rohstofflager FOREIGN KEY (lieferant_id) REFERENCES lieferanten(lieferant_id) gesetzt");
        }
    );

    con.query(`
        ALTER TABLE rohstofflager
        ADD CONSTRAINT fk_rohstofflager_rohstoff
        FOREIGN KEY (stoff_id) REFERENCES rohstoffe(stoff_id)
        `,
        function(err) {
            if (err) throw err;
            console.log("rohstofflager FOREIGN KEY (stoff_id) REFERENCES rohstoffe(stoff_id) gesetzt");
        }
    );

    con.query(`
        ALTER TABLE hefepropagator
        ADD CONSTRAINT fk_hefepropagator_rohstoff
        FOREIGN KEY (stoff_id) REFERENCES rohstoffe(stoff_id)
        `,
        function(err){
            if (err) throw err;
            console.log("hefepropagator FOREIGN KEY (stoff_id) REFERENCES rohstoffe(stoff_id) gesetzt")
        }
    );

    con.query(`
        ALTER TABLE brauen_plan
        ADD CONSTRAINT fk_brauen_plan_brauer
        FOREIGN KEY (brauer_id) REFERENCES mitarbeiter(mitarbeiter_id)
        `,
        function(err) {
            if (err) throw err;
            console.log("brauen_plan FOREIGN KEY (brauer_id) REFERENCES mitarbeiter(mitarbeiter_id) gesetzt");
        }
    );

    con.query(`
        ALTER TABLE brauen_plan
        ADD CONSTRAINT fk_brauen_plan_helfer
        FOREIGN KEY (helfer_id) REFERENCES mitarbeiter(mitarbeiter_id)
        `,
        function(err) {
            if (err) throw err;
            console.log("brauen_plan FOREIGN KEY (helfer_id) REFERENCES mitarbeiter(mitarbeiter_id) gesetzt");
        }
    );

    con.query(`
        ALTER TABLE nachgaer_plan
        ADD CONSTRAINT fk_nachgaer_plan_helfer
        FOREIGN KEY (helfer_id) REFERENCES mitarbeiter(mitarbeiter_id)
        `,
        function(err) {
            if (err) throw err;
            console.log("nachgaer_plan FOREIGN KEY (helfer_id) REFERENCES mitarbeiter(mitarbeiter_id) gesetzt");
        }
    );

    con.query(`
        ALTER TABLE raeumung_plan
        ADD CONSTRAINT fk_raeumung_plan_helfer
        FOREIGN KEY (helfer_id) REFERENCES mitarbeiter(mitarbeiter_id)
        `,
        function(err) {
            if (err) throw err;
            console.log("raeumung_plan FOREIGN KEY (helfer_id) REFERENCES mitarbeiter(mitarbeiter_id) gesetzt");
        }
    );
};
