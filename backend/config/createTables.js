import db from './database.js'; // Importing the db connection

db.query(`
 CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  lname VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`, (err) => {
  if (err) {
    console.error('Error creating users table:', err.stack);
    return;
  }
  console.log('Users table created successfully.');


  db.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      content TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`, (err) => {
    if (err) {
      console.error('Error creating tasks table:', err.stack);
      return;
    }
    console.log('Tasks table created successfully.');

    // Close the database connection
    db.end();
  });
});
