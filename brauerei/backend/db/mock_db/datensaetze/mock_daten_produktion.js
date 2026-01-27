module.exports = function(con) {
    con.query(`
        INSERT IGNORE INTO biersorten (biersorte_id, bezeichnung, image)
        VALUES 
            (1, 'Jantarnoe', './public/vertrieb/label/Jantarnoe.png'),
            (2, 'Pivnoff', './public/vertrieb/label/Pivnoff.png'),
            (3, 'Chmelnoff', './public/vertrieb/label/Chmelnoff.png')
        `,
        function (err) {
            if (err) throw err;
                console.log("In der Tabelle biersorten Datensätze eingefügt")
        }
    );

     con.query(`
        INSERT IGNORE INTO rohstoffe (stoff_id, art, eigenschaft)
        VALUES 
            (1, 'Malz', 'hell'),
            (2, 'Hefe', 'fruchtig'),
            (3, 'Hopfen', 'Bitterhopfen')
        `,
        function (err) {
            if (err) throw err;
                console.log("In der Tabelle rohstoffe Datensätze eingefügt")
        }
    );

     con.query(`
        INSERT IGNORE INTO bierlager (tanknummer, biersorte_id, braudatum, aktuellemenge, temperatur, zustand, stammwürze)
        VALUES 
        (1, NULL, NULL, NULL, NULL, NULL, NULL),    
        (2, NULL, NULL, NULL, NULL, NULL, NULL),
        (3, 1, '2026-01-25', 3500, 12.1, 'gut', 12.1),
        (4,  NULL, NULL, NULL, NULL, NULL, NULL),
        (5, 1, '2026-01-23', 7000, 12.7, 'gut', 10.1),
        (6, 1, '2026-01-22', 7000, 12.9, 'gut', 9.8),
        (7,  NULL, NULL, NULL, NULL, NULL, NULL),
        (8, 2, '2026-01-20', 7000, 9.2, 'gut', 8.8),
        (9, 3, '2026-01-19', 7000, 8.5, 'gut', 6.5),
        (10, 1, '2026-01-18', 7000, 2.1, 'gut', 4.0),
        (11, 1, '2026-01-17', 7000, 2.3, 'gut', 3.9),
        (12, 1, '2026-01-16', 7000, 1.5, 'gut', 3.8),
        (13, 1, '2026-01-01', 5850, 1.9, 'gut', 2.5),
        (14, 2, '2026-01-15', 7000, 2.3, 'gut', 3.7),
        (15, NULL, NULL, NULL, NULL, NULL, NULL),
        (16, 1, '2026-01-15', 7000, 1.7, 'gut', 3.6),
        (17, 1, '2026-01-14', 7000, 2.1, 'gut', 3.5),
        (18, 1, '2026-01-13', 7000, 1.5, 'gut', 3.4),
        (19,  NULL, NULL, NULL, NULL, NULL, NULL),
        (20, 2, '2026-01-11', 7000, 2.6, 'gut', 3.3),
        (21, 2, '2026-01-10', 7000, 2.7, 'gut', 3.3),
        (22,  NULL, NULL, NULL, NULL, NULL, NULL),
        (23, 3, '2026-01-08', 7000, 2.9, 'gut', 3.2)
        `,
        function (err) {
            if (err) throw err;
                console.log("In der Tabelle bierlager Datensätze eingefügt")
        }
    );

     con.query(`
        INSERT IGNORE INTO rohstofflager (lager_nummer, menge, geliefert_an, lieferant_id, stoff_id)
        VALUES 
            (1, 20000, '2025-01-05', 1, 1),
            (2, 50, '2025-03-07', 1, 3),
            (1, 5, '2025-07-09', 1, 2)
        `,
        function (err) {
            if (err) throw err;
                console.log("In der Tabelle rohstofflager Datensätze eingefügt")
        }
    );

    con.query(`
        INSERT IGNORE INTO hefepropagator (bestand_id, stoff_id, menge, genegation, temperatur, datum)
        VALUES 
            (1, 2, 50, 3, 1.5, '2026-01-25')
        `,
        function (err) {
            if (err) throw err;
                console.log("In der Tabelle hefepropagator Datensätze eingefügt")
        }
    );


}