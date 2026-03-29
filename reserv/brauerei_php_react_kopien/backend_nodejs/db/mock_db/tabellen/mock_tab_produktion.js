module.exports = function(con) {
    //----------Produktion----------
    con.query(`
        CREATE TABLE IF NOT EXISTS biersorten (
        biersorte_id INT AUTO_INCREMENT PRIMARY KEY,
        bezeichnung VARCHAR(255),
        image VARCHAR (255))
        `,
        function (err, result) { 
            if (err) throw err; 
            if (result.warningCount === 0) { 
                console.log("Table 'biersorten' created");
            } else { 
                console.log("Table 'biersorten' already exists"); 
              }
        }
    );    
    
    con.query(`
        CREATE TABLE IF NOT EXISTS bierlager (
            tanknummer INT PRIMARY KEY,
            biersorte_id INT,
            braudatum DATE,
            aktuellemenge INT,
            temperatur FLOAT,
            zustand VARCHAR(50),
            stammwürze FLOAT)
        `, 
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'bierlager' created");
            } else {
                console.log("Table 'bierlager' already exists");
              }
        }
    );

    con.query(`
        CREATE TABLE IF NOT EXISTS rohstoffe (
            stoff_id INT AUTO_INCREMENT PRIMARY KEY,
            art VARCHAR(100),
            eigenschaft VARCHAR(255))
        `, 
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'rohstoffe' created");
            } else {
                console.log("Table 'rohstoffe' already exists");
              }
        }
    );

    con.query(`
        CREATE TABLE IF NOT EXISTS rohstofflager (
            lager_nummer INT AUTO_INCREMENT PRIMARY KEY,
            menge INT,
            temperatur FLOAT,
            geliefert_an DATE,
            lieferant_id INT,
            stoff_id INT)
        `, 
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'rohstofflager' created");
            } else {
                console.log("Table 'rohstofflager' already exists");
              }
        }
    );

    con.query(`
        CREATE TABLE IF NOT EXISTS hefepropagator (
            bestand_id INT AUTO_INCREMENT PRIMARY KEY,
            stoff_id INT,
            menge INT,
            genegation INT,
            temperatur FLOAT,
            datum DATE)
        `,
        function (err, result){
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'hefepropagator' created");
            } else {
                console.log("Table 'hefepropagator' already exists");
            }
        }
    );

    con.query(`
        CREATE TABLE IF NOT EXISTS brauen_plan (
            brau_id INT AUTO_INCREMENT PRIMARY KEY,
            sorte VARCHAR(255),
            tank_id INT,
            menge INT,
            brauer_id INT,
            helfer_id INT,
            datum DATE)
        `, 
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'brauen_plan' created");
            } else {
                console.log("Table 'brauen_plan' already exists");
              }
        }
    );

    con.query(`
        CREATE TABLE IF NOT EXISTS nachgaer_plan (
            umpumpen_id INT AUTO_INCREMENT PRIMARY KEY,
            brauen_id INT,
            helfer_id INT,
            tank_id INT,
            datum DATE)
        `, 
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'nachgaer_plan' created");
            } else {
                console.log("Table 'nachgaer_plan' already exists");
              }
        }
    );

    con.query(`
        CREATE TABLE IF NOT EXISTS raeumung_plan (
            id INT AUTO_INCREMENT PRIMARY KEY,
            tank_id INT,
            helfer_id INT,
            datum DATE)
        `, 
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("Table 'raeumung_plan' created");
            } else {
                console.log("Table 'raeumung_plan' already exists");
              }
        }
    );

}