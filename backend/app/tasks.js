import express from "express";
import db from "../config/database.js";  // Importing the database connection

const tasksRouter = express.Router();

// Middleware to check if user is authenticated
tasksRouter.use((req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).send('Unauthorized: Please log in');
    }
    next();
});

// Getting tasks for the logged-in user
tasksRouter.get("/", (req, res) => {
    
    // Retrieving user ID from session
    const userId = req.session.userId;

    // Query to get tasks for the logged-in user
    const query = 'SELECT * FROM tasks WHERE user_id = ?';

    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error retrieving tasks:', err.stack);
            return res.status(500).send('Error retrieving tasks');
        }
        res.json(results);
    });                         
});

export default tasksRouter;
