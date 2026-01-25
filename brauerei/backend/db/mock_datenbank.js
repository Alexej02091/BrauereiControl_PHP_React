module.exports = function(con, datenbankName) {
    con.query(`CREATE DATABASE IF NOT EXISTS ${datenbankName}`,
        function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log(`Database  ${datenbankName} created`);
            } else {
                console.log(`Database  ${datenbankName} already exist`);
              }
        }
    );
};