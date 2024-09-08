import express from "express";
import bcrypt from "bcrypt";
import db from "../config/database.js";  // Importing the database connection

const registerRouter = express.Router();

// User Registration Route
registerRouter.post("/", async (req, res) => {
  const { name, lname, password, email } = req.body;

  try {
    // Checking if the email already exists, email is UNIQUE
    const checkQuery = `SELECT * FROM users WHERE email = ?`;
    db.query(checkQuery, [email], async (err, results) => {
      if (err) {
        console.error('Error checking email:', err.stack);
        return res.status(500).send('Error checking email');
      }

      if (results.length > 0) {
        // Email already exists
        return res.status(400).send('Email already registered');
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      const insertQuery =
       `INSERT INTO users (name, lname, password, email) 
        VALUES (?, ?, ?, ?)`;

      // Inserting the user into the database with the hashed password
      db.query(insertQuery, [name, lname, hashedPassword, email], (err, results) => {
        if (err) {
          console.error('Error creating user:', err.stack);
          return res.status(500).send('Error creating user');
        }
        res.status(201).send('User created');
      });
    });
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).send('Internal server error');
  }
});




export default registerRouter;
