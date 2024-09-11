import express from 'express';

const logoutRouter = express.Router();

// Route handler for logging out
logoutRouter.post('/', (req, res) => {
    // Destroy the session
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).send('Error logging out');
        }
        // Redirect to login page
        res.redirect('/html/login.html');
    });
});

export default logoutRouter;
