const express = require("express");
const app = express ();
const path = require('path');

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/views/home.html')
)})

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname + '/views/login.html')
)})

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname + '/views/register.html')
)})


app.listen(process.env.PORT || 3000, () =>{
    console.log('Esta corriendo por puerto',3000);
})

app.use(express.static('public'));


