import express from "express";
import db from "../config/database.js";  // Importing the database connection

const create = express.Router();

// Middleware for authentication, using id from the session
create.use((req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).send('Unauthorized: Please log in');
    }
    next();
});

// Route handler
create.post("/", (req, res) => {
    const { title, description, content } = req.body;
    const userId = req.session.userId;

    const query = 
    `INSERT INTO tasks (user_id, title, description, content) 
      VALUES (?, ?, ?, ?)
    `;
  
    db.query(query, [userId, title, description, content], (err, results) => {
      if (err) {
        console.error('Error creating task:', err.stack);
        return res.status(500).send('Error creating task');
      }
      res.status(201).send('Task created');
    });
});

export default create;
