const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');
var cors = require('cors');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'root',
        database: 'postgres'
    }
})

const app = express();
app.use(cors());

let intialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(intialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(intialPath, "index.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(intialPath, "login.html"));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(intialPath, "register.html"));
})

app.post('/register-user', (req, res) => {
    const { name, email, password } = req.body;

    if(!name.length || !email.length || !password.length){
        res.json('fill all the fields');
    } else{
        db("users").insert({
            name: name,
            email: email,
            password: password
        })
        .returning(["name", "email"])
        .then(data => {
            res.json(data[0])
        })
        .catch(err => {
            if(err.detail.includes('already exists')){
                res.json('email already exists');
            }
        })
    }
})

app.post('/post-food', (req, res) => {
    const { category, name, qty, qty_type, zip, phone, comments } = req.body;

    if(!category.length || !name.length || !qty.length || !qty_type.length || !zip.length || !phone.length){
        res.json('fill all required fields');
    } else{
        db("food").insert({
            category: category,
            name: name,
            qty: qty,
            qty_type: qty_type,
            zip: zip,
            phone: phone,
            comments: comments
        })
        .then(data => {
            res.json(data[0])
        })
    }
})
app.post('/login-user', (req, res) => {
    const { email, password } = req.body;

    db.select('name', 'email')
    .from('users')
    .where({
        email: email,
        password: password
    })
    .then(data => {
        if(data.length){
            res.json(data[0]);
        } else{
            res.json('email or password is incorrect');
        }
    })
})

app.listen(3000, (req, res) => {
    console.log('listening on port 3000......')
})