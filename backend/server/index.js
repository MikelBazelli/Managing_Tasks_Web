// import express from "express";
// import db from "../config/database.js";


// const router = express.Router();

// router.post("/createUsers", (req, res) => {
//     const { name, lname, password, email } = req.body;
//     const query = `
//       INSERT INTO users (name, lname, password, email) 
//       VALUES (?, ?, ?, ?)
//     `;
  
//     db.query(query, [name, lname, password, email], (err, results) => {
//       if (err) {
//         console.error('Error creating user:', err.stack);
//         return res.status(500).send('Error creating user');
//       }
//       res.status(201).send('User created');
//     });
//   });


//   router.post("/createTasks", (req, res) => {
//     const { user_id, title, description, content } = req.body;
//     const query = `
//       INSERT INTO tasks (user_id, title, description, content) 
//       VALUES (?, ?, ?, ?)
//     `;
  
//     db.query(query, [user_id, title, description, content], (err, results) => {
//       if (err) {
//         console.error('Error creating task:', err.stack);
//         return res.status(500).send('Error creating task');
//       }
//       res.status(201).send('Task created');
//     });
//   });
  

//   router.get("/getTasks", (req, res) => {
//     const query = 'SELECT * FROM tasks';
  
//     db.query(query, (err, results) => {
//       if (err) {
//         console.error('Error retrieving tasks:', err.stack);
//         return res.status(500).send('Error retrieving tasks');
//       }
//       res.json(results);
//     });                         
//   });
  
  
  
// router.get("/getUsers", (req, res) => {
//     const query = 'SELECT * FROM users';
  
//     db.query(query, (err, results) => {
//       if (err) {
//         console.error('Error retrieving users:', err.stack);
//         return res.status(500).send('Error retrieving users');
//       }
//       res.json(results);
//     });                         
//   });
  
  
//   router.put("/updateUsers/:id", (req, res) => {
//     const { id } = req.params;
//     const { name, lname, password, email } = req.body;
//     const query = `
//       UPDATE users 
//       SET name = ?, lname = ?, password = ?, email = ? 
//       WHERE id = ?
//     `;
  
//     db.query(query, [name, lname, password, email, id], (err, results) => {
//       if (err) {
//         console.error('Error updating user:', err.stack);
//         return res.status(500).send('Error updating user');
//       }
//       res.send('User updated');
//     });
//   });
  


//   router.put("/updateTasks/:id", (req, res) => {
//     const { id } = req.params;
//     const { user_id, title, description, content } = req.body;
//     const query = `
//       UPDATE tasks 
//       SET user_id = ?, title = ?, description = ?, content = ? 
//       WHERE id = ?
//     `;
  
//     db.query(query, [user_id, title, description, content, id], (err, results) => {
//       if (err) {
//         console.error('Error updating task:', err.stack);
//         return res.status(500).send('Error updating task');
//       }
//       res.send('Task updated');
//     });
//   });
  


//   router.delete("/deleteUsers/:id", (req, res) => {
//     const { id } = req.params;
//     const query = 'DELETE FROM users WHERE id = ?';
  
//     db.query(query, [id], (err, results) => {
//       if (err) {
//         console.error('Error deleting user:', err.stack);
//         return res.status(500).send('Error deleting user');
//       }
//       res.send('User deleted');
//     });
//   });
  


//   router.delete("/deleteTasks/:id", (req, res) => {
//     const { id } = req.params;
//     const query = 'DELETE FROM tasks WHERE id = ?';
  
//     db.query(query, [id], (err, results) => {
//       if (err) {
//         console.error('Error deleting task:', err.stack);
//         return res.status(500).send('Error deleting task');
//       }
//       res.send('Task deleted');
//     });
//   });
  









// // Exporting the router so it can be used in server.js
// export default router;


