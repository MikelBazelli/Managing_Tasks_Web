import express from "express";
import bcrypt from "bcrypt"; // Pw hashing
import db from "../config/database.js";  // Importing the database connection

const loginRouter = express.Router();

// User Login Route
loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;

  const query = `SELECT * FROM users WHERE email = ?`;

  db.query(query, [email], async (err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving user');
    }

    if (results.length === 0) {
      return res.status(404).send('User not found');
    }

    const user = results[0];

    // Comparing the provided password with the hashed one in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Incorrect password');
    }

    // Storing the user ID in session
    req.session.userId = user.id;
    req.session.userName = user.name; // Optionally store the user's name

    console.log(`User logged in: ${user.name}`);
    res.send(`Login successful. Hey ${user.name}!`);
  });
});

export default loginRouter;
