import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Getting __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Importing routes
import registerRouter from '../app/register.js';
import loginRouter from "../app/login.js";
import tasksRouter from "../app/tasks.js";
import deleteTasks from "../app/deleteTasks.js";
import create from "../app/createTasks.js";
import updateTasks from "../app/update.js";
import logoutRouter from "../app/logout.js";

const server = express();
const port = 3000;

// Middleware setup
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Session setup
server.use(session({
    secret: '12345',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

// Using routes
server.use('/register', registerRouter);
server.use('/login', loginRouter);
server.use('/tasks', tasksRouter); 
server.use('/updateTasks', updateTasks);
server.use('/deleteTasks', deleteTasks);
server.use('/create', create);
server.use('/logout', logoutRouter);

// Serve static files from frontend folder
server.use(express.static(path.join(__dirname, '../../frontend')));


server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

export default server;
