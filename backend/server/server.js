import express from "express";
import bodyParser from "body-parser";
import session from "express-session";

// import router from "./index.js";  
import registerRouter from '../app/register.js';
import loginRouter from "../app/login.js";
import tasksRouter from "../app/tasks.js";
import deleteTasks from "../app/deleteTasks.js";
import create from "../app/createTasks.js";
import updateTasks from"../app/update.js";
import logoutRouter from "../app/logout.js";


const server = express();
const port = 3000;


server.use(session({
    secret: '12345',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
  }));


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// server.use("/", router);

server.use('/register', registerRouter);
server.use('/login', loginRouter);
server.use('/tasks', tasksRouter);
server.use('/deleteTasks', deleteTasks);
server.use('/create', create);
server.use('/updateTasks',updateTasks);
server.use('/logout',logoutRouter);




server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

export default server;
