const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost', // Replace with your MySQL server host
    user: 'root', // Replace with your MySQL username
    password: 'arya', // Replace with your MySQL password
    database: 'school' // Replace with your MySQL database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL successfully!');
});
module.exports= connection;