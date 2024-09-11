import express from 'express';
import db from '../config/database.js';  // Importing the database connection

const updateTasksRouter = express.Router();

// Middleware to check if the user is authenticated
updateTasksRouter.use((req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ error: 'Unauthorized: Please log in' });
    }
    next();
});

// Route handler to update a task
updateTasksRouter.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { title, description, content } = req.body;
    const userId = req.session.userId;

    // Saving what user wants to change into the array
    const updates = [];
    const queryParams = [];

    // Changing title or description or content or all together, or combinations of each other
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

    const updateQuery = `UPDATE tasks SET ${updates.join(", ")} WHERE id = ? AND user_id = ?`;
    queryParams.push(id, userId);

    db.query(updateQuery, queryParams, (err, results) => {
        if (err) {
            console.error('Error updating task:', err.stack);
            return res.status(500).send('Error updating task');
        }

        if (results.affectedRows === 0) {
            return res.status(404).send('Task not found ');
        }

        res.status(200).json({ message: 'Task updated successfully' });
    });
});
export default updateTasksRouter;
