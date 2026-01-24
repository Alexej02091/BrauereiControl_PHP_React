module.exports = function(con) {
    con.query("CREATE DATABASE IF NOT EXISTS brauerei", function (err, result) {
        if (err) throw err;

        if (result.warningCount === 0) {
            console.log("Database brauerei created");
        } else {
            console.log("Database already exist");
        }
    });
}