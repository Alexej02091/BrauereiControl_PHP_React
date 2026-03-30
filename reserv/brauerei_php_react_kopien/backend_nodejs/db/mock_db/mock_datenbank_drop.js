// module.exports = function(con, datenbankName, callback) {
//     con.query(`DROP DATABASE ${datenbankName}`, 
//         function (err_drop) {
//             if (err_drop) return callback(err_drop);
//                 console.log(`Database ${datenbankName} was dropped`);
//                 callback(null);
//         }
//     );
// }
