import express from "express";

const logoutRouter = express.Router();

// Route handler for logging out
logoutRouter.post("/", (req, res) => {
    // Destroying the session
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err.stack);
            return res.status(500).send('Error logging out');
        }

        // Sending a response showing the successful logout
        res.send('Logout successful');
    });
});

export default logoutRouter;
