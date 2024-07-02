const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app= express();
app.use(cors());
app.use(express.json());



const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port:3307
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

// app.post('/login', (req,res)=> {
//     const sql="select * from login where email = ? and password = ?";
   
//     db.query(sql, [req.body.email,req.body.password],(err,data) =>{
//         if(err){
//             return res.json("Error");
//         }
//         if(data.length >0){
//             return res.json("Success");
//         }else{
//             return res.json("failed");
//         }
//         const user = data[0];
//         const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '1m' });
//         res.json({ token, user: { name: user.name, email: user.email, password: user.password } });
//     })
// })

app.post('/login', (req, res) => {
    const { email } = req.body;
    db.query('SELECT * FROM login WHERE email = ?', [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(400).send('User not found');
        }
         const user = results[0];
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { name: user.name, email: user.email } });
    });
});

app.get('/home', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Unauthorized');
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).send('Forbidden');
        }
        res.send(`Welcome ${user.name}`);
    });
});


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});