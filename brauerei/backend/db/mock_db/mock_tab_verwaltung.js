module.exports = function(con){ 
        //----------Verwaltung----------
    con.query(`
        CREATE TABLE IF NOT EXISTS personal_info (
            person_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50),
            nachname VARCHAR(50),
            adresse VARCHAR(255),
            bank_verbindung VARCHAR(255))
        `, 
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'personal_info' created");
            } else {
                console.log("Table 'personal_info' already exists");
              }
        }
    );

    con.query(`
        CREATE TABLE IF NOT EXISTS berufe(
            beruf_id INT AUTO_INCREMENT PRIMARY KEY,
            bezeichnung VARCHAR(255))
        `,
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'berufe' created");
            } else {
                console.log("Table 'berufe' already exists")
             }
        }
    );

    con.query(`
        CREATE TABLE IF NOT EXISTS abteilungen (
            abteilung_id INT AUTO_INCREMENT PRIMARY KEY,
            bezeichnung VARCHAR(255))
        `, 
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'abteilung' created");
            } else {
                console.log("Table 'abteilung' already exists");
              }
        }
    );

    con.query(`
        CREATE TABLE IF NOT EXISTS mitarbeiter (
            mitarbeiter_id INT AUTO_INCREMENT PRIMARY KEY,
            per_id INT,
            beruf_id INT,
            abteilung_id INT)
        `, 
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'mitarbeiter' created");
            } else {
                console.log("Table 'mitarbeiter' already exists");
              }
        }
    );

    con.query(`
        CREATE TABLE IF NOT EXISTS schichten (
            schicht_id INT AUTO_INCREMENT PRIMARY KEY,
            mitarbeiter_id INT,
            datum DATE)
        `, 
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'schichten' created");
            } else {
                console.log("Table 'schichten' already exists");
              }
        }
    );

    con.query(`
        CREATE TABLE IF NOT EXISTS urlaub (
            urlaub_id INT AUTO_INCREMENT PRIMARY KEY,
            mitarbeiter_id INT,
            datum DATE)
        `, 
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'urlaub' created");
            } else {
                console.log("Table 'urlaub' already exists");
              }
        }
    );

}