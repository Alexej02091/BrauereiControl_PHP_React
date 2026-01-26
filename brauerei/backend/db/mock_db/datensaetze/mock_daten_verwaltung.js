module.exports = function(con) {
    con.query(`
        INSERT IGNORE INTO abteilungen (abteilung_id, bezeichnung)
        VALUES 
            (1, 'verwaltung'),
            (2, 'produktion'),
            (3, 'vertrieb')
        `,
        function (err) {
            if (err) throw err;
                console.log("In der Tabelle abteilungen Datensätze eingefügt")
        }
    );
    
    con.query(`
        INSERT IGNORE INTO berufe (beruf_id, bezeichnung)
        VALUES
            (1, 'brauermeister'),
            (2, 'brauer'),
            (3, 'brauerhelfer')
        `,
        function(err) {
            if (err) throw err;
                console.log("In der Tabelle berufe Datensätze eingefügt")
        }
    );
    
    con.query(`
        INSERT IGNORE INTO personal_info (person_id, name, nachname, adresse, bank_verbindung)
        VALUES
            (1, 'Vadim', 'Sadovikov', 'Hamburg', 123951),
            (2, 'Max', 'Sikorskiy', 'Hamburg', 753951),
            (3, 'Roma', 'Maurer', 'Hamburg', 741369),
            (4, 'Dima', 'Berg', 'Hamburg', 153759),
            (5, 'Sam', 'Busch', 'Hamburg', 359751),
            (6, 'Bob', 'Heinz', 'Hamburg', 654789),
            (7, 'Anton', 'Merz', 'Hamburg', 573198)
        `,
        function(err) {
            if (err) throw err;
                console.log("In der Tabelle personal_info Datensätze eingefügt")
        }
    );
    
    con.query(`
        INSERT IGNORE INTO mitarbeiter (mitarbeiter_id, per_id, beruf_id, abteilung_id)
        VALUES
            (1, 1, 1, 2),
            (2, 2, 2, 2),
            (3, 3, 2, 2),
            (4, 4, 2, 2),
            (5, 5, 2, 2),
            (6, 6, 3, 2),
            (7, 7, 3, 2)
        `,
        function(err) {
            if (err) throw err;
                console.log("In der Tabelle mitarbeiter Datensätze eingefügt")
        }
    );

    con.query(`
        INSERT IGNORE INTO schichten (schicht_id, mitarbeiter_id, datum)
        VALUES
            (1, 1, '2026-01-26'),
            (2, 1, '2026-01-27'),
            (3, 1, '2026-01-28'),
            (4, 1, '2026-01-29'),
            (5, 1, '2026-01-30'),
            (6, 2, '2026-01-26'),
            (7, 3, '2026-01-27'),
            (8, 4, '2026-01-28'),
            (9, 5, '2026-01-29'),
            (10, 2, '2026-01-30'),
            (11, 3, '2026-01-31'),
            (12, 6, '2026-01-26'),
            (13, 7, '2026-01-27'),
            (14, 6, '2026-01-28'),
            (15, 7, '2026-01-29'),
            (16, 6, '2026-01-30'),
            (17, 7, '2026-01-31')
        `,
        function(err) {
            if (err) throw err;
                console.log("In der Tabelle schichten Datensätze eingefügt")
        }
    );
}