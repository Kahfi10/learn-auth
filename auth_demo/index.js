const express = require('express');
const app = express();
const User = require('./models/user');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/admin', (req, res) => {
    res.send('Admin page');
})

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
})