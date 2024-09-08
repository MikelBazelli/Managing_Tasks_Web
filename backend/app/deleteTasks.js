import express from "express";
import db from "../config/database.js";  // Importing the database connection

const deleteTasks = express.Router();

// Middleware to check if user is authenticated
deleteTasks.use((req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).send('Unauthorized: Please log in');
    }
    next();
});

// Route handler to delete a task
deleteTasks.delete("/:id", (req, res) => {
    const { id } = req.params;
    const userId = req.session.userId;

    // Deleting the task
    const deleteQuery = 'DELETE FROM tasks WHERE id = ? AND user_id = ?';

    db.query(deleteQuery, [id, userId], (err, results) => {
        if (err) {
            console.error('Error deleting task:', err.stack);
            return res.status(500).send('Error deleting task');
        }

        // Check if any rows were affected
        if (results.affectedRows === 0) {
            return res.status(404).send('Task not found');
        }

        res.send('Task deleted');
    });
});

export default deleteTasks;
