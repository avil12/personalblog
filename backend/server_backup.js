const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app= express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"signup"
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name, email, password) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json({ error: "Error inserting data" });
        }
        return res.json(data);
    });
});

app.post('/login', (req,res)=> {
    const sql="select * from login where email = ? and password = ?";
   
    db.query(sql, [req.body.email,req.body.password],(err,data) =>{
        if(err){
            return res.json("Error");
        }
        if(data.length >0){
            return res.json("Success");
        }else{
            return res.json("failed");
        }
    })
})

app.get('/home', (req, res) => {
    const sql = "SELECT name FROM login WHERE id = ?"; // Modify the query as per your database schema
    const userId = 1; // Replace with dynamic user ID as needed

    db.query(sql, [userId], (err, result) => {
        if (err) {
            return res.json({ error: "Error fetching user data" });
        }
        if (result.length > 0) {
            return res.json(result[0]); // Assuming the result contains the user data
        } else {
            return res.json({ error: "User not found" });
        }
    });
});

app.listen(8081, ()=>{
    console.log("listening");
})