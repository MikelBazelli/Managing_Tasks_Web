import express from "express";
import bcrypt from "bcrypt";// Pw hashing 
import db from "../config/database.js";
import { body, validationResult } from "express-validator"; //Validating inputs from the user

const loginRouter = express.Router();

// Validation middleware
const loginValidation = [
    body('email').isEmail().withMessage('Invalid Email Format'),
    body('password').notEmpty().withMessage('Password is Required')
];

// Log in route
loginRouter.post("/", loginValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

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

        // Comparing pw with the hased pw from the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Incorrect password');
        }
       
        // User name and id session
        req.session.userId = user.id;
        req.session.userName = user.name; 

        console.log(`User logged in: ${user.name}`);
        res.send(`Login successful. Hey ${user.name}!`);
    });
});

export default loginRouter;
