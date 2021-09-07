const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dborders'
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/get', (req, res) =>{
    const sqlSelect = "SELECT * FROM products";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
})

app.post('/api/insert', (req, res) => {
    const order_items = req.body.order_items;
    const promocode = req.body.promocode;
    const amount = req.body.amount;
    const quantity = req.body.quantity;
    const sqlInsert = "INSERT INTO orders (order_items, promocode, amount, quantity) VALUES (?,?,?,?);"
    db.query(sqlInsert, [order_items, promocode, amount, quantity], (err, result) => {
    });
});

app.post('/api/contact', (req, res) => {
    const full_name = req.body.full_name;
    const email = req.body.email;

    console.log(full_name, email)
    const sqlInsert = "INSERT INTO contact (full_name, email) VALUES (?,?);"
    db.query(sqlInsert, [full_name, email], (err, result) => {
        console.log(err)
    });
});

app.listen('3001', ()=> {
    console.log('Running');
});