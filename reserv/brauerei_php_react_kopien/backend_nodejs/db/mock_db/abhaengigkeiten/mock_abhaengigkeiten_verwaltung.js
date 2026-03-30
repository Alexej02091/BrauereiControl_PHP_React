module.exports = function(con) { 
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