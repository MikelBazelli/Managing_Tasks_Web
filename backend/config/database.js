import mysql from 'mysql2';


// Creating the database connection
const db = mysql.createConnection({
  host:"localhost", 
  user:"root",
  database:"project",
  password:"mikel123",
  port:3306
});


// Connecting to the database
db.connect((err) => {
  if (err) {
    console.error('Connection error:', err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

export default db;