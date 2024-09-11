import express from "express";
import db from "../config/database.js";  // Importing the database connection

const tasksRouter = express.Router();

// Middleware to check if user is authenticated, if user is not logged in and tries to enter to the viewTasks.html through the url there will be error,
tasksRouter.use((req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ error: 'Unauthorized: Please log in' });
    }
    next();
});

// Getting tasks for the logged-in user
tasksRouter.get("/", (req, res) => {
    const userId = req.session.userId;

    const query = 'SELECT * FROM tasks WHERE user_id = ?';

    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('You have no Tasks');
            return res.status(500).json({ error: 'Error retrieving tasks' });
        }

        if (results.length === 0) {
            // Return an empty array if no tasks are found
            return res.json([]);
        }

        res.json(results); // Return tasks
    });
});

export default tasksRouter;
