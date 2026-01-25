module.exports = function(con) {

//-------------- Produktion ------------------
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

//--------------- Vertrieb -------------------
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

//-------------- Verwaltung ------------------
con.query(`
    ALTER TABLE mitarbeiter
    ADD CONSTRAINT fk_mitarbeiter_person
    FOREIGN KEY (per_id) REFERENCES personal_info(person_id)
    `,
    function(err) {
        if (err) throw err;
        console.log("mitarbeiter FOREIGN KEY (per_id) REFERENCES personal_info(person_id) gesetzt");
    }
);

con.query(`
    ALTER TABLE mitarbeiter
    ADD CONSTRAINT fk_mitarbeiter_beruf
    FOREIGN KEY (beruf_id) REFERENCES berufe(beruf_id)
    `,
    function(err) {
        if (err) throw err;
        console.log("mitarbeiter FOREIGN KEY (beruf_id) REFERENCES berufe(beruf_id) gesetzt");
    }
);

con.query(`
    ALTER TABLE mitarbeiter
    ADD CONSTRAINT fk_mitarbeiter_abteilung
    FOREIGN KEY (abteilung_id) REFERENCES abteilungen(abteilung_id)
    `,
    function(err) {
        if (err) throw err;
        console.log("mitarbeiter FOREIGN KEY (abteilung_id) REFERENCES abteilungen(abteilung_id) gesetzt");
    }
);

con.query(`
    ALTER TABLE schichten
    ADD CONSTRAINT fk_schichten_mitarbeiter
    FOREIGN KEY (mitarbeiter_id) REFERENCES mitarbeiter(mitarbeiter_id)
    `,
    function(err) {
        if (err) throw err;
        console.log("schichten FOREIGN KEY (mitarbeiter_id) REFERENCES mitarbeiter(mitarbeiter_id) gesetzt");
    }
);

con.query(`
    ALTER TABLE urlaub
    ADD CONSTRAINT fk_urlaub_mitarbeiter
    FOREIGN KEY (mitarbeiter_id) REFERENCES mitarbeiter(mitarbeiter_id)
    `,
    function(err) {
        if (err) throw err;
        console.log("urlaub FOREIGN KEY (mitarbeiter_id) REFERENCES mitarbeiter(mitarbeiter_id) gesetzt");
    }
);

};
