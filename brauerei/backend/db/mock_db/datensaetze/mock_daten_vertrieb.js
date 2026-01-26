module.exports = function(con) {
    con.query(`
        INSERT IGNORE INTO lieferform (lieferform_id, bezeichnung, volumen_liter)
        VALUES 
            (1, 'Keg', 50.0),
            (2, 'Keg', 30.0),
            (3, 'Einwegflaschen', 1.0),
            (4, 'Einwegflaschen', 5.0)
        `,
        function (err) {
            if (err) throw err;
                console.log("In der Tabelle lieferform Datensätze eingefügt")
        }
    );

    con.query(`
        INSERT IGNORE INTO preisen (preis_id, preis_pro_liter)
        VALUES 
            (1, 10.0),
            (2, 11.2),
            (3, 12.3),
            (4, 13.5)
        `,
        function (err) {
            if (err) throw err;
                console.log("In der Tabelle preisen Datensätze eingefügt")
        }
    );

    con.query(`
        INSERT IGNORE INTO produktsortiment (produkt_id, biersorte_id, lieferform_id, preis_id)
        VALUES 
            (1, 1, 1, 1),
            (2, 2, 2, 2),
            (3, 3, 3, 3),
            (4, 4, 4, 4)
        `,
        function (err) {
            if (err) throw err;
                console.log("In der Tabelle produktsortiment Datensätze eingefügt")
        }
    );
};