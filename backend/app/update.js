import express from "express";
import db from "../config/database.js";  // Importing the database connection

const updateTasksRouter = express.Router();

// Middleware to check if user is authenticated
updateTasksRouter.use((req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).send('Unauthorized: Please log in');
    }
    next();
});

// Route handler to update a task
updateTasksRouter.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { title, description, content } = req.body;
    const userId = req.session.userId;

    // Initialize query parts
    const updates = [];
    const queryParams = [];

    // Add fields to update
    if (title) {
        updates.push("title = ?");
        queryParams.push(title);
    }
    if (description) {
        updates.push("description = ?");
        queryParams.push(description);
    }
    if (content) {
        updates.push("content = ?");
        queryParams.push(content);
    }

    if (updates.length === 0) {
        return res.status(400).send('No fields to update');
    }

    // Constructing the query
    const updateQuery = `UPDATE tasks SET ${updates.join(", ")} WHERE id = ? AND user_id = ?`;
    queryParams.push(id, userId);

    // Execute the query
    db.query(updateQuery, queryParams, (err, results) => {
        if (err) {
            console.error('Error updating task:', err.stack);
            return res.status(500).send('Error updating task');
        }
        
        // Checking if any rows were affected
        if (results.affectedRows === 0) {
            return res.status(404).send('Task not found');
        }

        res.send('Task updated');
    });
});

export default updateTasksRouter;
