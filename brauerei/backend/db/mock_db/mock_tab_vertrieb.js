module.exports = function(con){

    //----------Vertrieb----------
    con.query(`
        CREATE TABLE IF NOT EXISTS kunden (
            kunde_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            adresse VARCHAR(255),
            email VARCHAR(255),
            telefon VARCHAR(50),
            bank_verbindung VARCHAR(255))
        `,
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'kunde' created");
            } else {
                console.log("Table 'kunde' already exists");
              }
        }
    );

    con.query(`
        CREATE TABLE IF NOT EXISTS bestellung (
            id INT AUTO_INCREMENT PRIMARY KEY,
            biersorte_id INT,
            bestelldatum DATE,
            lieferdatum DATE,
            bestellmenge INT,
            lieferform VARCHAR(100),
            kunde_id INT)
            `,
        function (err, result) { 
            if (err) throw err; 
            if (result.warningCount === 0) { 
                console.log("Table 'bestellung' created");
            } else { 
                console.log("Table 'bestellung' already exists"); 
              }
        }
    );
    
    con.query(`
        CREATE TABLE IF NOT EXISTS lieferanten (
            lieferant_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            adresse VARCHAR(255),
            email VARCHAR(255),
            telefon VARCHAR(50),
            bank_verbindung VARCHAR(255))
        `, 
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'lieferanten' created");
            } else {
                console.log("Table 'lieferanten' already exists");
             }
        }
    );
}