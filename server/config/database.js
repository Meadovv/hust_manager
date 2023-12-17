const mysql = require('mysql');

const database = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

database.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = database