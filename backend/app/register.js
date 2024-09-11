import express from "express";
import bcrypt from "bcrypt"; // Hashing pw when registering
import db from "../config/database.js";  // Importing the database connection
import { body, validationResult } from "express-validator";// Info validation

const registerRouter = express.Router();

// Validation middleware
const registerValidation = [
    body('name').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required')
];

// User Registration Route
registerRouter.post("/", registerValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, lastName, password, email } = req.body;

    try {
        // Checking if the email already exists
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

            const insertQuery = `INSERT INTO users (name, lname, password, email) VALUES (?, ?, ?, ?)`;

            // Inserting the user into the database with the hashed password
            db.query(insertQuery, [name, lastName, hashedPassword, email], (err, results) => {
                if (err) {
                    console.error('Error creating user:', err.stack);
                    return res.status(500).send('Error creating user');
                }
                res.status(201).send('User created successfully');
            });
        });
    } catch (error) {
        console.error('Error hashing password:', error);
        res.status(500).send('Internal server error');
    }
});

export default registerRouter;
