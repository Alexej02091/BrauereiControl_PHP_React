module.exports = function(con, datenbankName, callback) {

    con.query(`CREATE DATABASE IF NOT EXISTS ${datenbankName}`,
        function (err, result) {
            if (err) return callback(err);
            if (result.warningCount === 0) {
                console.log(`Database  ${datenbankName} created`);
            } else {
                console.log(`Database  ${datenbankName} already exist`);
              }
        callback(null);
        }
    );
};